/**
 * Cloudflare Pages Function — Holdings Sync API
 * POST /api/holdings — add/remove/full_sync holdings
 * GET  /api/holdings — retrieve current holdings queue
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Api-Key',
};

const API_KEY = 'macro-dash-sync-2026';

export async function onRequestOptions() {
  return new Response(null, { status: 200, headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  const apiKey = context.request.headers.get('X-Api-Key') || '';
  if (apiKey !== API_KEY) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }

  try {
    const data = await context.request.json();
    const action = data.action;
    const holdings = data.holdings || [];

    // Read existing from KV
    const existing = JSON.parse(await context.env.HOLDINGS_KV.get('holdings') || '[]');
    const existingMap = new Map(existing.map(h => [h.ticker, h]));

    if (action === 'add') {
      for (const h of holdings) {
        existingMap.set(h.ticker, h);
      }
    } else if (action === 'remove') {
      for (const h of holdings) {
        existingMap.delete(h.ticker);
      }
    } else if (action === 'full_sync') {
      existingMap.clear();
      for (const h of holdings) {
        existingMap.set(h.ticker, h);
      }
    }

    const updated = Array.from(existingMap.values());
    await context.env.HOLDINGS_KV.put('holdings', JSON.stringify(updated));

    // Also store a "pending changes" flag with timestamp for the VPS to poll
    await context.env.HOLDINGS_KV.put('last_updated', new Date().toISOString());

    return new Response(JSON.stringify({ ok: true, holdings_count: updated.length }), {
      status: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }
}

export async function onRequestGet(context) {
  const apiKey = context.request.headers.get('X-Api-Key') || new URL(context.request.url).searchParams.get('key') || '';
  if (apiKey !== API_KEY) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }

  try {
    const holdings = JSON.parse(await context.env.HOLDINGS_KV.get('holdings') || '[]');
    const lastUpdated = await context.env.HOLDINGS_KV.get('last_updated') || null;
    return new Response(JSON.stringify({ holdings, last_updated: lastUpdated }), {
      status: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }
}
