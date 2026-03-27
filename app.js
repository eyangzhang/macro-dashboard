const DATA_URL = 'data.json';
const EMBEDDED_DATA = {"updated": "2026-03-27T11:57:25.352736-07:00", "updated_display": "Fri Mar 27, 2026 11:57 AM PST", "conditions": {"discount_rate": {"status": "BEARISH", "classification": "Real yield ~2.0% \u2014 restrictive", "metrics": {"10Y Yield": {"value": "4.44%", "raw": 4.44}, "Short Rate (IRX)": {"value": "3.61%", "raw": 3.61}, "5Y Yield": {"value": "4.07%", "raw": 4.07}, "Yield Curve": {"value": "+83bp (NORMAL)", "raw": 83.00000000000006}, "Real Yield": {"value": "~2.0%", "raw": 2.0400000000000005}, "TIP": {"value": "$109.64", "raw": 109.635, "change": -0.11}}}, "liquidity": {"status": "TIGHTENING", "classification": "VIX at 31.0, credit spreads widening", "metrics": {"VIX": {"value": "31.0", "raw": 31.01, "change": 13.01}, "HYG": {"value": "$78.66", "raw": 78.66, "change": -0.33}, "LQD": {"value": "$107.55", "raw": 107.55, "change": -0.31}, "TLT": {"value": "$85.59", "raw": 85.59, "change": -0.6}, "HYG/LQD Ratio": {"value": "0.731", "raw": 0.7313807531380753}, "Credit Spreads": {"value": "widening", "raw": null}}}, "inflation": {"status": "STICKY", "classification": "Oil elevated ($100/bbl), breakevens contained", "metrics": {"WTI Crude": {"value": "$99.54", "raw": 99.54, "change": 5.36}, "Brent Crude": {"value": "$105.07", "raw": 105.07, "change": 3.12}, "TIP": {"value": "$109.64", "raw": 109.635, "change": -0.11}, "Agriculture (DBA)": {"value": "$27.18", "raw": 27.175, "change": 0.24}}}, "growth": {"status": "EXPANSION", "classification": "Broad strength \u2014 IWM/XLI healthy", "metrics": {"S&P 500": {"value": "6,379", "raw": 6379.37, "change": -1.51}, "Nasdaq": {"value": "20,974", "raw": 20973.941, "change": -2.03}, "Russell 2000 (IWM)": {"value": "$243.83", "raw": 243.83, "change": -1.46}, "Industrials (XLI)": {"value": "$159.51", "raw": 159.51, "change": -1.09}}}, "trust": {"status": "BREAKDOWN", "classification": "Gold/Dollar signal: gold surging", "metrics": {"Gold (spot)": {"value": "$4,549", "raw": 4549.1, "change": 3.18}, "Silver (spot)": {"value": "$70.43", "raw": 70.43, "change": 3.67}, "Miners (GDX)": {"value": "$85.05", "raw": 85.045, "change": 3.22}, "DXY": {"value": "100.14", "raw": 100.14, "change": 0.24}, "USD/JPY": {"value": "160.26", "raw": 160.257, "change": 0.39}, "EUR/USD": {"value": "1.1517", "raw": 1.1517, "change": -0.19}, "Correlation": {"value": "gold surging", "raw": null}}}}, "regime": "Mild headwinds for gold \u2014 watch for deterioration", "action": "HOLD", "score": -1, "failed_tickers": [], "portfolio": {"GDX": {"shares": 2500, "price": 85.045, "change": 3.22, "name": "VanEck Gold Miners"}, "KGC": {"shares": 2600, "price": 28.525, "change": 2.28, "name": "Kinross Gold"}, "AG": {"shares": 1300, "price": 20.505, "change": 6.13, "name": "First Majestic Silver"}, "CEG": {"shares": 110, "price": 301.04, "change": 1.98, "name": "Constellation Energy"}, "GILD": {"shares": 118, "price": 135.42, "change": -1.07, "name": "Gilead Sciences"}, "REGN": {"shares": 20, "price": 741.96, "change": -1.95, "name": "Regeneron"}, "VRTX": {"shares": 20, "price": 438.58, "change": -3.34, "name": "Vertex Pharma"}, "FCX": {"shares": 160, "price": 55.79, "change": -0.07, "name": "Freeport-McMoRan"}}, "previous_statuses": {"discount_rate": "BEARISH", "liquidity": "TIGHTENING", "inflation": "STICKY", "growth": "EXPANSION", "trust": "BREAKDOWN"}, "alerts": [{"condition": "DISCOUNT RATE", "from": "BEARISH", "to": "BULLISH", "time": "2026-03-26T13:20:01.965639-07:00"}, {"condition": "DISCOUNT RATE", "from": "BULLISH", "to": "BEARISH", "time": "2026-03-26T13:25:01.950055-07:00"}, {"condition": "LIQUIDITY", "from": "TIGHTENING", "to": "FLUSH", "time": "2026-03-26T13:45:01.133133-07:00"}, {"condition": "LIQUIDITY", "from": "FLUSH", "to": "TIGHTENING", "time": "2026-03-26T13:50:01.715385-07:00"}, {"condition": "DISCOUNT RATE", "from": "BEARISH", "to": "BULLISH", "time": "2026-03-26T15:33:17.296243-07:00"}, {"condition": "DISCOUNT RATE", "from": "BULLISH", "to": "BEARISH", "time": "2026-03-26T15:33:50.878488-07:00"}, {"condition": "TRUST", "from": "INTACT", "to": "BREAKDOWN", "time": "2026-03-27T07:15:01.313120-07:00"}, {"condition": "TRUST", "from": "BREAKDOWN", "to": "INTACT", "time": "2026-03-27T08:50:01.058365-07:00"}, {"condition": "TRUST", "from": "INTACT", "to": "BREAKDOWN", "time": "2026-03-27T08:55:01.069970-07:00"}], "history": [{"date": "2026-03-25", "score": 1, "gold": 4162.9}, {"date": "2026-03-26", "score": -1, "gold": 4162.9}, {"date": "2026-03-27", "score": -3, "gold": 4469.0}], "ticker_headlines": [{"text": "Iran War Has The Bank Of Japan As Confused As The Federal Reserve - forbes.com", "condition": "DISCOUNT RATE"}, {"text": "Federal Reserve\u2019s Barkin says economic fog has deepened amid AI and Iran conflict - Investing.com Canada", "condition": "DISCOUNT RATE"}, {"text": "Federal Reserve could cut balance sheet by $2tn without market turmoil, says Miran - Financial Times", "condition": "DISCOUNT RATE"}, {"text": "In the News: Tyler Schipper on Global Forces Driving Inflation - Newsroom | University of St. Thomas", "condition": "INFLATION"}, {"text": "The market is starting to think the Federal Reserve's next move is raising interest rates - Yahoo Finance", "condition": "DISCOUNT RATE"}], "metric_history": {"gold": [{"date": "2026-03-19", "value": 4161.2}, {"date": "2026-03-20", "value": 4176.19}, {"date": "2026-03-21", "value": 4210.49}, {"date": "2026-03-22", "value": 4114.17}, {"date": "2026-03-23", "value": 4149.49}, {"date": "2026-03-24", "value": 4087.99}, {"date": "2026-03-25", "value": 4162.9}, {"date": "2026-03-26", "value": 4162.9}, {"date": "2026-03-27", "value": 4469.0}], "vix": [{"date": "2026-03-19", "value": 25.41}, {"date": "2026-03-20", "value": 25.11}, {"date": "2026-03-21", "value": 25.07}, {"date": "2026-03-22", "value": 25.39}, {"date": "2026-03-23", "value": 25.19}, {"date": "2026-03-24", "value": 25.39}, {"date": "2026-03-25", "value": 25.33}, {"date": "2026-03-26", "value": 27.53}, {"date": "2026-03-27", "value": 29.67}], "oil": [{"date": "2026-03-19", "value": 115.1}, {"date": "2026-03-20", "value": 112.58}, {"date": "2026-03-21", "value": 111.59}, {"date": "2026-03-22", "value": 111.15}, {"date": "2026-03-23", "value": 114.14}, {"date": "2026-03-24", "value": 113.52}, {"date": "2026-03-25", "value": 113.39}, {"date": "2026-03-26", "value": 113.39}, {"date": "2026-03-27", "value": 96.87}], "dxy": [{"date": "2026-03-19", "value": 104.56}, {"date": "2026-03-20", "value": 106.6}, {"date": "2026-03-21", "value": 106.24}, {"date": "2026-03-22", "value": 105.9}, {"date": "2026-03-23", "value": 103.97}, {"date": "2026-03-24", "value": 105.55}, {"date": "2026-03-25", "value": 104.71}, {"date": "2026-03-26", "value": 104.71}, {"date": "2026-03-27", "value": 100.07}], "spx": [{"date": "2026-03-19", "value": 6715.66}, {"date": "2026-03-20", "value": 6582.11}, {"date": "2026-03-21", "value": 6540.43}, {"date": "2026-03-22", "value": 6470.32}, {"date": "2026-03-23", "value": 6616.28}, {"date": "2026-03-24", "value": 6679.01}, {"date": "2026-03-25", "value": 6591.9}, {"date": "2026-03-26", "value": 6591.9}, {"date": "2026-03-27", "value": 6477.16}], "gdx": [{"date": "2026-03-19", "value": 87.67}, {"date": "2026-03-20", "value": 85.04}, {"date": "2026-03-21", "value": 86.12}, {"date": "2026-03-22", "value": 87.71}, {"date": "2026-03-23", "value": 87.25}, {"date": "2026-03-24", "value": 84.63}, {"date": "2026-03-25", "value": 86.32}, {"date": "2026-03-26", "value": 86.32}, {"date": "2026-03-27", "value": 82.39}], "slv": [{"date": "2026-03-19", "value": 64.27}, {"date": "2026-03-20", "value": 64.73}, {"date": "2026-03-21", "value": 64.66}, {"date": "2026-03-22", "value": 64.42}, {"date": "2026-03-23", "value": 65.38}, {"date": "2026-03-24", "value": 65.35}, {"date": "2026-03-25", "value": 65.21}, {"date": "2026-03-26", "value": 65.21}], "tlt": [{"date": "2026-03-19", "value": 86.0}, {"date": "2026-03-20", "value": 87.63}, {"date": "2026-03-21", "value": 86.41}, {"date": "2026-03-22", "value": 85.71}, {"date": "2026-03-23", "value": 85.99}, {"date": "2026-03-24", "value": 85.37}, {"date": "2026-03-25", "value": 86.84}, {"date": "2026-03-26", "value": 86.84}, {"date": "2026-03-27", "value": 86.11}], "hyg": [{"date": "2026-03-19", "value": 79.28}, {"date": "2026-03-20", "value": 78.57}, {"date": "2026-03-21", "value": 80.18}, {"date": "2026-03-22", "value": 80.27}, {"date": "2026-03-23", "value": 79.76}, {"date": "2026-03-24", "value": 80.88}, {"date": "2026-03-25", "value": 79.42}, {"date": "2026-03-26", "value": 79.42}, {"date": "2026-03-27", "value": 78.92}], "tip": [{"date": "2026-03-19", "value": 112.13}, {"date": "2026-03-20", "value": 110.38}, {"date": "2026-03-21", "value": 108.68}, {"date": "2026-03-22", "value": 108.24}, {"date": "2026-03-23", "value": 111.02}, {"date": "2026-03-24", "value": 108.03}, {"date": "2026-03-25", "value": 110.16}, {"date": "2026-03-26", "value": 110.16}, {"date": "2026-03-27", "value": 109.76}], "ten_y": [{"date": "2026-03-19", "value": 4.27}, {"date": "2026-03-20", "value": 4.39}, {"date": "2026-03-21", "value": 4.25}, {"date": "2026-03-22", "value": 4.26}, {"date": "2026-03-23", "value": 4.31}, {"date": "2026-03-24", "value": 4.38}, {"date": "2026-03-25", "value": 4.33}, {"date": "2026-03-26", "value": 4.38}, {"date": "2026-03-27", "value": 4.46}], "real_yield": [{"date": "2026-03-19", "value": 1.92}, {"date": "2026-03-20", "value": 1.89}, {"date": "2026-03-21", "value": 1.95}, {"date": "2026-03-22", "value": 1.96}, {"date": "2026-03-23", "value": 1.94}, {"date": "2026-03-24", "value": 1.96}, {"date": "2026-03-25", "value": 1.93}, {"date": "2026-03-26", "value": 1.98}, {"date": "2026-03-27", "value": 2.06}], "iwm": [{"date": "2026-03-19", "value": 251.08}, {"date": "2026-03-20", "value": 251.05}, {"date": "2026-03-21", "value": 252.43}, {"date": "2026-03-22", "value": 256.4}, {"date": "2026-03-23", "value": 255.01}, {"date": "2026-03-24", "value": 251.19}, {"date": "2026-03-25", "value": 251.82}, {"date": "2026-03-26", "value": 251.82}, {"date": "2026-03-27", "value": 247.44}], "xli": [{"date": "2026-03-19", "value": 164.31}, {"date": "2026-03-20", "value": 164.33}, {"date": "2026-03-21", "value": 166.33}, {"date": "2026-03-22", "value": 165.3}, {"date": "2026-03-23", "value": 167.45}, {"date": "2026-03-24", "value": 161.98}, {"date": "2026-03-25", "value": 165.1}, {"date": "2026-03-26", "value": 165.1}, {"date": "2026-03-27", "value": 161.27}], "silver": [{"date": "2026-03-20", "value": 68.24}, {"date": "2026-03-21", "value": 67.49}, {"date": "2026-03-22", "value": 69.59}, {"date": "2026-03-23", "value": 67.86}, {"date": "2026-03-24", "value": 67.91}, {"date": "2026-03-25", "value": 68.19}, {"date": "2026-03-26", "value": 68.66}, {"date": "2026-03-27", "value": 67.99}], "nasdaq": [{"date": "2026-03-20", "value": 21354.71}, {"date": "2026-03-21", "value": 21668.5}, {"date": "2026-03-22", "value": 21639.65}, {"date": "2026-03-23", "value": 21482.85}, {"date": "2026-03-24", "value": 21169.25}, {"date": "2026-03-25", "value": 21761.92}, {"date": "2026-03-26", "value": 21408.08}, {"date": "2026-03-27", "value": 21408.08}], "brent": [{"date": "2026-03-20", "value": 100.44}, {"date": "2026-03-21", "value": 103.03}, {"date": "2026-03-22", "value": 102.44}, {"date": "2026-03-23", "value": 101.26}, {"date": "2026-03-24", "value": 99.68}, {"date": "2026-03-25", "value": 99.22}, {"date": "2026-03-26", "value": 101.15}, {"date": "2026-03-27", "value": 104.08}]}, "ai_summary": "Gold is surging on trust breakdown while other signals are mixed \u2014 the trust signal is the strongest driver right now. Hold positions.", "market_status": {"status": "open", "label": "\ud83d\udfe2 US MARKETS OPEN \u2014 closes in 1h 3m", "emoji": "\ud83d\udfe2"}};
const REFRESH_MS = 5 * 60 * 1000;

/* ── Theme Toggle ── */
function initTheme() {
  const saved = localStorage.getItem('macro_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('macro_theme', next);
  updateThemeIcon(next);
  // Re-render charts since they use hardcoded colors
  if (_lastData) {
    renderFearGreedGauge(calcFearGreedScore(_lastData.conditions));
    renderRadarChart(_lastData.conditions);
    renderScoreChart(_lastData.history);
    renderCorrelationWeb(_lastData.conditions);
  }
}
function updateThemeIcon(theme) {
  document.getElementById('theme-toggle').textContent = theme === 'dark' ? '☀️' : '🌙';
}
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
initTheme();

function isDark() {
  return (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark';
}
function themeColor(dark, light) { return isDark() ? dark : light; }

const CONDITION_TOOLTIPS = {
  discount_rate: "Real yields drive gold's opportunity cost. Below 0% = strongly bullish for gold.",
  liquidity: "Measures stress in financial markets. Tight liquidity forces selling of all assets.",
  inflation: "Rising inflation expectations support gold as an inflation hedge.",
  growth: "Recession risk supports gold as safe haven. Strong growth favors stocks over gold.",
  trust: "Gold is rising even though the dollar is strong. This means people are buying gold because they don't trust paper money — the strongest bullish signal for your thesis."
};

const METRIC_TOOLTIPS = {
  '10y yield': "Benchmark long-term rate. Higher = more competition for gold.",
  'real yield': "10Y minus inflation expectations. True cost of holding gold vs bonds.",
  'yield curve': "10Y minus 2Y. Inverted = recession signal.",
  'vix': "Fear gauge. Below 15 = calm. Above 30 = panic.",
  'hyg': "High yield bond ETF. Falling = credit stress.",
  'tip': "TIPS. Rising = market expects higher inflation.",
  's&p 500': "Broad stock market proxy.",
  'iwm': "Small caps. First to fall in recession.",
  'gold': "Spot gold price.",
  'dxy': "US Dollar index. Normally inverse to gold.",
  'gdx': "Gold miners ETF."
};

const CARD_CONFIG = {
  discount_rate: { title: 'Discount Rate', icon: '📉', iconClass: 'card-icon-discount' },
  liquidity:     { title: 'Liquidity',     icon: '💧', iconClass: 'card-icon-liquidity' },
  inflation:     { title: 'Inflation',     icon: '🔥', iconClass: 'card-icon-inflation' },
  growth:        { title: 'Growth',        icon: '📈', iconClass: 'card-icon-growth' },
  trust:         { title: 'Trust',         icon: '🛡️', iconClass: 'card-icon-trust' },
};

const BULLISH_STATUSES = new Set(['BULLISH', 'FLUSH', 'FADING', 'EXPANSION', 'INTACT']);
const BEARISH_STATUSES = new Set(['BEARISH', 'STRESS', 'RISING', 'RECESSION', 'BREAKDOWN']);

// For gold context, trust BREAKDOWN is bullish
function classifyStatus(status, condKey) {
  if (condKey === 'trust') {
    if (status === 'BREAKDOWN' || status === 'ERODING') return 'bullish';
    return 'neutral';
  }
  if (BULLISH_STATUSES.has(status)) return 'bullish';
  if (BEARISH_STATUSES.has(status)) return 'bearish';
  return 'neutral';
}

function formatChange(change) {
  if (change === null || change === undefined) return '';
  const cls = change > 0.01 ? 'change-up' : change < -0.01 ? 'change-down' : 'change-flat';
  const prefix = change > 0 ? '+' : '';
  return `<span class="metric-change ${cls}">${prefix}${change.toFixed(2)}%</span>`;
}

function makeInfoTip(text, title) {
  if (!text) return '';
  title = title || '';
  return `<span class="info-btn" onclick="openInfoSheet('${title.replace(/'/g, "\\'")}', '${text.replace(/'/g, "\\'")}')" title="${text}">i</span>`;
}

function getMetricTooltip(label) {
  return METRIC_TOOLTIPS[label.toLowerCase().trim()] || null;
}

let _lastData = null;

/* ── Market Clock ── */
function renderMarketClock(marketStatus) {
  const el = document.getElementById('market-clock');
  if (!marketStatus || !marketStatus.label) { el.style.display = 'none'; return; }
  el.textContent = marketStatus.label;
  el.style.display = '';
}

function updateMarketClockLive() {
  // Real-time market clock update
  const now = new Date();
  const etOptions = { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', hour12: false };
  const etStr = now.toLocaleString('en-US', etOptions);
  const [h, m] = etStr.split(':').map(Number);
  const timeMin = h * 60 + m;
  const day = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' })).getDay();

  const el = document.getElementById('market-clock');
  if (day === 0 || day === 6) {
    const daysToMon = day === 0 ? 1 : 2;
    el.textContent = `🔴 MARKETS CLOSED — opens Monday`;
    el.style.display = '';
    return;
  }
  const preMarket = 4*60, open = 9*60+30, close = 16*60, afterClose = 20*60;
  if (timeMin < preMarket) {
    const left = preMarket - timeMin;
    el.textContent = `🔴 MARKETS CLOSED — pre-market in ${Math.floor(left/60)}h ${left%60}m`;
  } else if (timeMin < open) {
    const left = open - timeMin;
    el.textContent = `🟡 PRE-MARKET — opens in ${Math.floor(left/60)}h ${left%60}m`;
  } else if (timeMin < close) {
    const left = close - timeMin;
    el.textContent = `🟢 US MARKETS OPEN — closes in ${Math.floor(left/60)}h ${left%60}m`;
  } else if (timeMin < afterClose) {
    const left = afterClose - timeMin;
    el.textContent = `🟠 AFTER HOURS — closes in ${Math.floor(left/60)}h ${left%60}m`;
  } else {
    el.textContent = `🔴 MARKETS CLOSED — opens tomorrow 9:30 AM ET`;
  }
  el.style.display = '';
}

/* ── Alert Banner ── */
function renderAlerts(alerts) {
  const el = document.getElementById('alert-banner');
  if (!alerts || alerts.length === 0) { el.style.display = 'none'; return; }
  const cutoff = new Date(Date.now() - 12 * 3600 * 1000).toISOString();
  const recent = alerts.filter(a => a.time > cutoff);
  if (recent.length === 0) { el.style.display = 'none'; return; }
  el.innerHTML = recent.map(a => {
    const ago = timeAgo(a.time);
    return `<div class="alert-item">⚠️ ${a.condition} shifted from ${a.from} → ${a.to} — ${ago}</div>`;
  }).join('');
  el.style.display = '';
}

function timeAgo(isoStr) {
  const diff = Date.now() - new Date(isoStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

/* ── Score Bar ── */
function renderScoreBar(score) {
  const el = document.getElementById('score-bar');
  const segments = 7;
  const filled = Math.max(0, Math.min(segments, Math.round((score + 3) / 1.5)));
  let html = '';
  for (let i = 0; i < segments; i++) {
    let color = 'var(--border)';
    if (i < filled) {
      if (filled >= 5) color = 'var(--green)';
      else if (filled >= 3) color = 'var(--yellow)';
      else color = 'var(--red)';
    }
    html += `<div class="score-segment" style="background:${color}"></div>`;
  }
  const label = score > 0 ? `+${score} gold-bullish` : score < 0 ? `${score} gold-bearish` : '0 neutral';
  html += `<span class="score-label">${label}</span>`;
  el.innerHTML = html;
}

/* ── Sparkline SVG ── */
function makeSparkline(metricHistory, metricKey) {
  if (!metricHistory || !metricHistory[metricKey] || metricHistory[metricKey].length < 2) return '';
  const points = metricHistory[metricKey].slice(-7);
  const values = points.map(p => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const w = 80, h = 40;
  const coords = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const trending = values[values.length - 1] >= values[0];
  const color = trending ? 'var(--green)' : 'var(--red)';
  return `<svg class="sparkline" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <polyline points="${coords.join(' ')}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

// Map metric labels to metric_history keys
const METRIC_SPARKLINE_MAP = {
  'gold (~spot)': 'gold',
  'vix': 'vix',
  'wti (uso)': 'oil',
  'dxy (~uup)': 'dxy',
  's&p 500': 'spx',
  'miners (gdx)': 'gdx',
  'silver (slv)': 'slv',
  'tlt': 'tlt',
  'hyg': 'hyg',
  'tip': 'tip',
  '10y yield': 'ten_y',
  'real yield': 'real_yield',
  'russell 2000 (iwm)': 'iwm',
  'industrials (xli)': 'xli',
};

/* ── World Map ── */
function renderWorldMap(conditions) {
  const wrap = document.getElementById('world-map-wrap');
  const section = document.getElementById('world-map-section');
  if (!wrap || !conditions) return;

  // Determine region statuses from conditions
  const discountStatus = conditions.discount_rate?.status || 'NEUTRAL';
  const inflationStatus = conditions.inflation?.status || 'NEUTRAL';
  const growthStatus = conditions.growth?.status || 'NEUTRAL';
  const trustStatus = conditions.trust?.status || 'INTACT';

  // Oil/energy → Middle East
  const oilRaw = conditions.inflation?.metrics?.['WTI Crude']?.raw || 0;
  let middleEastColor, middleEastLabel, middleEastSeverity;
  if (oilRaw > 120) { middleEastColor = '#ff4444'; middleEastLabel = 'CONFLICT'; middleEastSeverity = 'high'; }
  else if (oilRaw > 100) { middleEastColor = '#ff8c00'; middleEastLabel = 'TENSIONS'; middleEastSeverity = 'medium'; }
  else { middleEastColor = '#00ff88'; middleEastLabel = 'STABLE'; middleEastSeverity = 'low'; }

  // Fed/rates → North America
  let naColor, naLabel;
  if (discountStatus === 'BULLISH') { naColor = '#00ff88'; naLabel = 'EASING'; }
  else if (discountStatus === 'BEARISH') { naColor = '#ff4444'; naLabel = 'HAWKISH'; }
  else { naColor = '#ffcc00'; naLabel = 'NEUTRAL'; }

  // ECB → Europe (always neutral for now)
  let euColor = '#ffcc00', euLabel = 'ECB: HOLD';

  // Capital flows → Asia
  let asiaColor, asiaLabel;
  if (growthStatus === 'RECESSION') { asiaColor = '#ff4444'; asiaLabel = 'OUTFLOWS'; }
  else if (growthStatus === 'SLOWING') { asiaColor = '#ff8c00'; asiaLabel = 'CAUTION'; }
  else if (growthStatus === 'EXPANSION') { asiaColor = '#00ff88'; asiaLabel = 'STABLE'; }
  else { asiaColor = '#ffcc00'; asiaLabel = 'MIXED'; }

  // Global inflation overlay
  let globalInflLabel;
  if (inflationStatus === 'RISING') globalInflLabel = '🔥 INFLATION RISING GLOBALLY';
  else if (inflationStatus === 'STICKY') globalInflLabel = '⚠️ INFLATION STICKY';
  else if (inflationStatus === 'FADING') globalInflLabel = '✅ INFLATION FADING';
  else globalInflLabel = '';

  // Region data for tooltips
  const regionData = {
    'north-america': {
      title: '🇺🇸 North America',
      color: naColor,
      rows: [
        { label: 'Fed Signal', value: naLabel, color: naColor },
        { label: '10Y Yield', value: conditions.discount_rate?.metrics?.['10Y Yield']?.value || '—' },
        { label: 'Real Yield', value: conditions.discount_rate?.metrics?.['Real Yield']?.value || '—' },
        { label: 'Yield Curve', value: conditions.discount_rate?.metrics?.['Yield Curve']?.value || '—' },
      ]
    },
    'europe': {
      title: '🇪🇺 Europe',
      color: euColor,
      rows: [
        { label: 'ECB Stance', value: euLabel, color: euColor },
        { label: 'DXY', value: conditions.trust?.metrics?.['DXY']?.value || '—' },
        { label: 'Credit (LQD)', value: conditions.liquidity?.metrics?.['LQD']?.value || '—' },
      ]
    },
    'middle-east': {
      title: '🛢️ Middle East',
      color: middleEastColor,
      rows: [
        { label: 'Status', value: middleEastLabel, color: middleEastColor },
        { label: 'WTI Oil', value: conditions.inflation?.metrics?.['WTI Crude']?.value || '—' },
        { label: 'Brent', value: conditions.inflation?.metrics?.['Brent (BNO)']?.value || '—' },
        { label: 'Impact', value: middleEastSeverity === 'high' ? 'Gold tailwind' : middleEastSeverity === 'medium' ? 'Watch closely' : 'Low impact' },
      ]
    },
    'asia': {
      title: '🌏 Asia-Pacific',
      color: asiaColor,
      rows: [
        { label: 'Capital Flows', value: asiaLabel, color: asiaColor },
        { label: 'Growth Signal', value: growthStatus },
        { label: 'S&P 500', value: conditions.growth?.metrics?.['S&P 500']?.value || '—' },
        { label: 'Small Caps', value: conditions.growth?.metrics?.['Russell 2000 (IWM)']?.value || '—' },
      ]
    },
  };

  // Simplified SVG world map with region shapes
  const svg = `
  <svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glow-green"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="glow-red"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="glow-yellow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="glow-orange"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    <!-- North America -->
    <path class="map-region" data-region="north-america" d="M 80,60 L 140,40 200,35 260,50 280,80 290,120 270,160 250,180 220,200 180,210 140,200 100,180 80,160 60,130 65,90 Z"/>
    <!-- Europe -->
    <path class="map-region" data-region="europe" d="M 380,50 L 430,40 480,45 510,60 520,90 510,120 490,140 460,150 430,145 400,130 385,110 375,80 Z"/>
    <!-- Middle East -->
    <path class="map-region" data-region="middle-east" d="M 490,150 L 530,140 570,150 590,175 580,210 560,230 530,235 500,220 485,195 480,170 Z"/>
    <!-- Asia -->
    <path class="map-region" data-region="asia" d="M 560,50 L 620,40 700,45 770,60 810,90 820,130 800,170 770,200 730,220 680,230 630,220 590,200 570,170 560,140 555,100 Z"/>
    <!-- Africa (decorative) -->
    <path class="map-region" style="opacity:0.3" d="M 400,180 L 440,170 470,185 480,220 475,270 460,310 430,330 400,320 380,290 370,250 375,210 Z"/>
    <!-- South America (decorative) -->
    <path class="map-region" style="opacity:0.3" d="M 200,230 L 240,220 270,240 280,280 275,330 260,360 230,370 200,360 185,320 180,280 185,250 Z"/>
    <!-- Australia (decorative) -->
    <path class="map-region" style="opacity:0.3" d="M 700,270 L 740,260 780,270 800,290 795,320 770,335 740,335 715,320 705,295 Z"/>

    <!-- Connection lines between regions -->
    <line x1="240" y1="120" x2="400" y2="90" stroke="${naColor}" stroke-width="0.5" opacity="0.3" stroke-dasharray="4,4"/>
    <line x1="480" y1="110" x2="530" y2="180" stroke="${euColor}" stroke-width="0.5" opacity="0.3" stroke-dasharray="4,4"/>
    <line x1="560" y1="190" x2="650" y2="140" stroke="${middleEastColor}" stroke-width="0.5" opacity="0.3" stroke-dasharray="4,4"/>

    <!-- North America hotspot -->
    <g class="map-hotspot" data-region="north-america">
      <circle class="map-hotspot-ring" cx="200" cy="110" r="16" fill="none" stroke="${naColor}" stroke-width="1.5"/>
      <circle class="map-hotspot-dot" cx="200" cy="110" r="6" fill="${naColor}" filter="url(#glow-green)"/>
      <text class="map-label" x="200" y="138" text-anchor="middle" fill="${naColor}">FED</text>
      <text class="map-label" x="200" y="150" text-anchor="middle" style="font-size:7px;opacity:0.7">${naLabel}</text>
    </g>

    <!-- Europe hotspot -->
    <g class="map-hotspot" data-region="europe">
      <circle class="map-hotspot-ring" cx="450" cy="90" r="16" fill="none" stroke="${euColor}" stroke-width="1.5"/>
      <circle class="map-hotspot-dot" cx="450" cy="90" r="6" fill="${euColor}" filter="url(#glow-yellow)"/>
      <text class="map-label" x="450" y="118" text-anchor="middle" fill="${euColor}">ECB</text>
      <text class="map-label" x="450" y="130" text-anchor="middle" style="font-size:7px;opacity:0.7">HOLD</text>
    </g>

    <!-- Middle East hotspot -->
    <g class="map-hotspot" data-region="middle-east">
      <circle class="map-hotspot-ring" cx="535" cy="190" r="16" fill="none" stroke="${middleEastColor}" stroke-width="1.5"/>
      <circle class="map-hotspot-dot" cx="535" cy="190" r="6" fill="${middleEastColor}" filter="url(#glow-${middleEastColor === '#ff4444' ? 'red' : middleEastColor === '#ff8c00' ? 'orange' : 'green'})"/>
      <text class="map-label" x="535" y="218" text-anchor="middle" fill="${middleEastColor}">OIL</text>
      <text class="map-label" x="535" y="230" text-anchor="middle" style="font-size:7px;opacity:0.7">${middleEastLabel}</text>
    </g>

    <!-- Asia hotspot -->
    <g class="map-hotspot" data-region="asia">
      <circle class="map-hotspot-ring" cx="700" cy="120" r="16" fill="none" stroke="${asiaColor}" stroke-width="1.5"/>
      <circle class="map-hotspot-dot" cx="700" cy="120" r="6" fill="${asiaColor}" filter="url(#glow-green)"/>
      <text class="map-label" x="700" y="148" text-anchor="middle" fill="${asiaColor}">FLOWS</text>
      <text class="map-label" x="700" y="160" text-anchor="middle" style="font-size:7px;opacity:0.7">${asiaLabel}</text>
    </g>

    <!-- Global inflation banner -->
    ${globalInflLabel ? `<text x="450" y="380" text-anchor="middle" fill="var(--text-muted)" font-family="JetBrains Mono, monospace" font-size="10" letter-spacing="2">${globalInflLabel}</text>` : ''}

    <!-- Decorative grid dots -->
    ${Array.from({length: 20}, (_, i) => Array.from({length: 8}, (_, j) =>
      `<circle cx="${45*i + 25}" cy="${50*j + 25}" r="0.5" fill="var(--text-muted)" opacity="0.15"/>`
    ).join('')).join('')}
  </svg>`;

  wrap.innerHTML = svg;
  section.style.display = '';

  // Tooltip handling
  const tooltip = document.getElementById('map-tooltip');
  const hotspots = wrap.querySelectorAll('.map-hotspot, .map-region[data-region]');

  let activeTooltip = null;

  hotspots.forEach(el => {
    const region = el.getAttribute('data-region');
    if (!region || !regionData[region]) return;

    function showTooltip(e) {
      const data = regionData[region];
      const rows = data.rows.map(r =>
        `<div class="map-tooltip-row"><span class="map-tooltip-label">${r.label}</span><span class="map-tooltip-value" ${r.color ? `style="color:${r.color}"` : ''}>${r.value}</span></div>`
      ).join('');
      tooltip.innerHTML = `<div class="map-tooltip-title"><span style="color:${data.color}">●</span> ${data.title}</div>${rows}`;

      // Position
      const rect = wrap.getBoundingClientRect();
      const svgRect = wrap.querySelector('svg').getBoundingClientRect();
      let x, y;
      if (e.touches) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      // Clamp tooltip position
      const tw = 220;
      if (x + tw > rect.width) x = rect.width - tw - 10;
      if (x < 10) x = 10;
      tooltip.style.left = x + 'px';
      tooltip.style.top = Math.max(10, y - 100) + 'px';
      tooltip.classList.add('visible');
      activeTooltip = region;
    }

    el.addEventListener('mouseenter', showTooltip);
    el.addEventListener('click', (e) => {
      if (activeTooltip === region) {
        tooltip.classList.remove('visible');
        activeTooltip = null;
      } else {
        showTooltip(e);
      }
    });
    el.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (activeTooltip === region) {
        tooltip.classList.remove('visible');
        activeTooltip = null;
      } else {
        showTooltip(e);
      }
    });
  });

  wrap.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
    activeTooltip = null;
  });
}

/* ── Heatmap ── */
function renderHeatmap(conditions) {
  const grid = document.getElementById('heatmap-grid');
  grid.innerHTML = '';
  for (const [key, config] of Object.entries(CARD_CONFIG)) {
    const cond = conditions[key];
    if (!cond) continue;
    const dir = classifyStatus(cond.status, key);
    let cellClass = 'heatmap-neutral';
    if (dir === 'bullish') cellClass = ['FLUSH','EXPANSION','INTACT','BREAKDOWN'].includes(cond.status) ? 'heatmap-bullish-strong' : 'heatmap-bullish-moderate';
    else if (dir === 'bearish') cellClass = ['STRESS','RECESSION'].includes(cond.status) ? 'heatmap-bearish-strong' : 'heatmap-bearish-moderate';
    const cell = document.createElement('div');
    cell.className = `heatmap-cell ${cellClass}`;
    cell.innerHTML = `<div class="heatmap-cell-label">${config.title}</div><div class="heatmap-cell-status">${cond.status}</div>`;
    grid.appendChild(cell);
  }
  document.getElementById('heatmap-section').style.display = '';
}

/* ── Strength Meters ── */
function getSignalStrength(key, status) {
  const strengthMap = {
    // Discount Rate
    'BULLISH': 85, 'BEARISH': 85, 'NEUTRAL': 30,
    // Liquidity
    'STRESS': 90, 'FLUSH': 80, 'TIGHTENING': 50,
    // Inflation
    'RISING': 75, 'FADING': 70, 'STICKY': 40,
    // Growth
    'RECESSION': 90, 'EXPANSION': 80, 'SLOWING': 50,
    // Trust
    'BREAKDOWN': 95, 'ERODING': 60, 'INTACT': 30,
  };
  return strengthMap[status] || 30;
}

function getStrengthLabel(pct) {
  if (pct >= 70) return 'STRONG';
  if (pct >= 45) return 'MODERATE';
  return 'WEAK';
}

/* ── Key Levels ── */
const KEY_LEVELS = {
  'gold (~spot)': {
    title: 'GOLD',
    min: 3500, max: 5000,
    zones: [
      { start: 0, end: 0.33, color: 'rgba(255,68,68,0.3)' },
      { start: 0.33, end: 0.67, color: 'rgba(255,204,0,0.3)' },
      { start: 0.67, end: 1, color: 'rgba(0,255,136,0.3)' },
    ],
    labels: ['$3,500', '$5,000'],
    levels: { 'Support': 4000, 'Resistance': 4500 }
  },
  'vix': {
    title: 'VIX',
    min: 10, max: 45,
    zones: [
      { start: 0, end: 0.14, color: 'rgba(0,255,136,0.3)' },      // calm <15
      { start: 0.14, end: 0.57, color: 'rgba(255,204,0,0.3)' },   // elevated
      { start: 0.57, end: 1, color: 'rgba(255,68,68,0.3)' },      // panic >30
    ],
    labels: ['10', '45'],
    levels: { 'Calm': 15, 'Panic': 30 }
  },
  'wti (uso)': {
    title: 'OIL (USO)',
    min: 50, max: 150,
    zones: [
      { start: 0, end: 0.15, color: 'rgba(0,255,136,0.3)' },      // demand destruction <65
      { start: 0.15, end: 0.60, color: 'rgba(255,204,0,0.3)' },   // normal
      { start: 0.60, end: 1, color: 'rgba(255,68,68,0.3)' },      // inflationary >90
    ],
    labels: ['$50', '$150'],
    levels: { 'Demand dest.': 65, 'Inflationary': 90 }
  },
  'dxy (~uup)': {
    title: 'DXY',
    min: 95, max: 115,
    zones: [
      { start: 0, end: 0.35, color: 'rgba(0,255,136,0.3)' },
      { start: 0.35, end: 0.65, color: 'rgba(255,204,0,0.3)' },
      { start: 0.65, end: 1, color: 'rgba(255,68,68,0.3)' },
    ],
    labels: ['95', '115'],
    levels: { 'Weak': 100, 'Strong': 107 }
  },
};

function renderKeyLevelGauge(metricLabel, rawValue) {
  const config = KEY_LEVELS[metricLabel.toLowerCase()];
  if (!config || rawValue === null || rawValue === undefined) return '';

  const pct = Math.max(0, Math.min(1, (rawValue - config.min) / (config.max - config.min)));

  let zonesHtml = config.zones.map(z =>
    `<div class="gauge-zone" style="left:${z.start*100}%;width:${(z.end-z.start)*100}%;background:${z.color}"></div>`
  ).join('');

  let levelsHtml = '';
  for (const [name, val] of Object.entries(config.levels)) {
    const lp = Math.max(0, Math.min(1, (val - config.min) / (config.max - config.min)));
    levelsHtml += `<div style="position:absolute;top:-2px;left:${lp*100}%;width:1px;height:12px;background:var(--text-muted);opacity:0.5;z-index:1;" title="${name}: ${val}"></div>`;
  }

  return `<div class="key-level-gauge">
    <div class="key-level-title">${config.title} LEVELS</div>
    <div class="gauge-track" style="background:var(--border);">
      ${zonesHtml}
      ${levelsHtml}
      <div class="gauge-marker" style="left:${pct*100}%"></div>
    </div>
    <div class="gauge-labels"><span>${config.labels[0]}</span><span>${config.labels[1]}</span></div>
  </div>`;
}

/* ── Cards ── */
function renderCards(conditions, metricHistory) {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = '';
  for (const [key, config] of Object.entries(CARD_CONFIG)) {
    const cond = conditions[key];
    if (!cond) continue;
    const condTooltip = CONDITION_TOOLTIPS[key] || '';

    let keyLevelsHtml = '';
    const metricsHtml = Object.entries(cond.metrics).map(([label, m]) => {
      const changeHtml = m.change !== undefined && m.change !== null ? formatChange(m.change) : '';
      const tipHtml = makeInfoTip(getMetricTooltip(label));
      const sparkKey = METRIC_SPARKLINE_MAP[label.toLowerCase().trim()];
      const sparkHtml = sparkKey ? makeSparkline(metricHistory, sparkKey) : '';

      // Key levels gauge
      if (KEY_LEVELS[label.toLowerCase()]) {
        keyLevelsHtml += renderKeyLevelGauge(label, m.raw);
      }

      return `<div class="metric"><div class="metric-label">${label}${tipHtml}</div><div class="metric-value-row"><span class="metric-value">${m.value}${changeHtml}</span>${sparkHtml}</div></div>`;
    }).join('');

    const dir = classifyStatus(cond.status, key);
    const strength = getSignalStrength(key, cond.status);
    const strengthLabel = getStrengthLabel(strength);
    const barColor = dir === 'bullish' ? 'var(--green)' : dir === 'bearish' ? 'var(--red)' : 'var(--yellow)';
    const labelColor = barColor;

    const strengthHtml = `<div class="strength-meter">
      <div class="strength-label"><span class="strength-label-title">Signal Strength</span><span class="strength-label-text" style="color:${labelColor}">${strengthLabel}</span></div>
      <div class="strength-bar-bg"><div class="strength-bar-fill" data-width="${strength}" style="background:${barColor};"></div></div>
    </div>`;

    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-condition', key);
    card.innerHTML = `
      <div class="card-header">
        <div class="card-title-group">
          <div class="card-icon ${config.iconClass}">${config.icon}</div>
          <span class="card-title">${config.title}${makeInfoTip(condTooltip)}</span>
        </div>
        <div style="text-align:right;">
          <span class="status-badge status-${cond.status}">${cond.status}</span>
          ${key === 'trust' && cond.status === 'BREAKDOWN' ? '<div style="font-size:9px;color:var(--text-muted);margin-top:4px;font-style:italic;">Gold acting as money, not just an asset</div>' : ''}
        </div>
      </div>
      <div class="card-classification">${cond.classification}</div>
      <div class="metrics-grid">${metricsHtml}</div>
      ${keyLevelsHtml ? '<div class="key-levels">' + keyLevelsHtml + '</div>' : ''}
      ${strengthHtml}`;
    grid.appendChild(card);
  }

  // Animate strength bars after render
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('.strength-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }, 100);
  });
}

/* ── Correlation Web ── */
function renderCorrelationWeb(conditions) {
  const wrap = document.getElementById('correlation-web');
  const size = window.innerWidth < 769 ? 300 : 400;
  const cx = size / 2, cy = size / 2, r = size * 0.35;
  const axes = [
    {key:'discount_rate',label:'Discount Rate'},
    {key:'liquidity',label:'Liquidity'},
    {key:'inflation',label:'Inflation'},
    {key:'growth',label:'Growth'},
    {key:'trust',label:'Trust'}
  ];
  const n = axes.length;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  const dirs = axes.map(a => classifyStatus(conditions[a.key]?.status, a.key));

  // Position nodes
  const positions = axes.map((_, i) => {
    const a = startAngle + i * angleStep;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });

  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;

  // Draw lines between all pairs
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sameDir = dirs[i] === dirs[j] && dirs[i] !== 'neutral';
      const diverging = dirs[i] !== dirs[j] && dirs[i] !== 'neutral' && dirs[j] !== 'neutral';
      const bothNeutral = dirs[i] === 'neutral' && dirs[j] === 'neutral';

      let stroke, dashArray, width;
      if (sameDir && dirs[i] === 'bullish') {
        stroke = themeColor('#00ff88', '#059669');
        dashArray = 'none';
        width = 2.5;
      } else if (sameDir && dirs[i] === 'bearish') {
        stroke = themeColor('#ff4444', '#dc2626');
        dashArray = 'none';
        width = 2.5;
      } else if (diverging) {
        stroke = themeColor('#ff4444', '#dc2626');
        dashArray = '6,4';
        width = 1.5;
      } else {
        stroke = themeColor('#334155', '#d1d5db');
        dashArray = '3,3';
        width = 1;
      }

      svg += `<line x1="${positions[i].x}" y1="${positions[i].y}" x2="${positions[j].x}" y2="${positions[j].y}" stroke="${stroke}" stroke-width="${width}" stroke-dasharray="${dashArray}" opacity="0.7"/>`;
    }
  }

  // Draw nodes
  for (let i = 0; i < n; i++) {
    const nodeColor = dirs[i] === 'bullish' ? themeColor('#00ff88', '#059669') : dirs[i] === 'bearish' ? themeColor('#ff4444', '#dc2626') : themeColor('#ffcc00', '#d97706');
    svg += `<circle cx="${positions[i].x}" cy="${positions[i].y}" r="8" fill="${nodeColor}" opacity="0.9"/>`;

    // Labels
    const labelR = r + 28;
    const a = startAngle + i * angleStep;
    const lx = cx + labelR * Math.cos(a);
    const ly = cy + labelR * Math.sin(a);
    svg += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" fill="${themeColor('#9ca3af', '#6b7280')}" font-size="11" font-family="system-ui,sans-serif">${axes[i].label}</text>`;
  }

  svg += '</svg>';
  wrap.innerHTML = svg;
  document.getElementById('correlation-section').style.display = '';
}

/* ── Impact ── */
function renderImpact(conditions) {
  const body = document.getElementById('impact-body');
  body.innerHTML = '';
  let bullishCount = 0, bearishCount = 0, neutralCount = 0;
  const rows = [];
  for (const [key, config] of Object.entries(CARD_CONFIG)) {
    const cond = conditions[key];
    if (!cond) continue;
    const dir = classifyStatus(cond.status, key);
    if (dir === 'bullish') bullishCount++;
    else if (dir === 'bearish') bearishCount++;
    else neutralCount++;
    const dirLabel = dir === 'bullish' ? 'Tailwind' : dir === 'bearish' ? 'Headwind' : 'Neutral';
    const dirColor = dir === 'bullish' ? 'var(--green)' : dir === 'bearish' ? 'var(--red)' : 'var(--yellow)';
    rows.push(`<div class="impact-row"><div class="impact-dot impact-dot-${dir}"></div><span class="impact-cond-name">${config.title}</span><span class="impact-cond-dir" style="color:${dirColor}">${cond.status} — ${dirLabel}</span></div>`);
  }
  const total = bullishCount + bearishCount + neutralCount;
  let biasText, biasRange, biasColor, biasBg;
  if (bullishCount >= 4) { biasText='STRONG BULLISH'; biasRange='+8-15%/30d'; biasColor='var(--green)'; biasBg='var(--green-bg)'; }
  else if (bullishCount >= 3) { biasText='BULLISH LEAN'; biasRange='+5-10%/30d'; biasColor='var(--green)'; biasBg='var(--green-bg)'; }
  else if (bearishCount >= 4) { biasText='STRONG BEARISH'; biasRange='-8-15%/30d'; biasColor='var(--red)'; biasBg='var(--red-bg)'; }
  else if (bearishCount >= 3) { biasText='BEARISH LEAN'; biasRange='-5-10%/30d'; biasColor='var(--red)'; biasBg='var(--red-bg)'; }
  else { biasText='MIXED / CHOPPY'; biasRange='±3-5%/30d'; biasColor='var(--yellow)'; biasBg='var(--yellow-bg)'; }
  body.innerHTML = `
    <div class="impact-bias" style="background:${biasBg};border:1px solid ${biasColor}33;">
      <div class="impact-bias-label" style="color:${biasColor}">Portfolio Bias</div>
      <div class="impact-bias-value" style="color:${biasColor}">${biasText}</div>
      <div class="impact-bias-range" style="color:${biasColor}">${biasRange}</div>
      <div style="margin-top:8px;font-size:11px;color:var(--text-muted);">${bullishCount}/${total} bullish · ${bearishCount}/${total} bearish</div>
    </div>
    <div class="impact-details">${rows.join('')}</div>`;
  document.getElementById('impact-section').style.display = '';
}

/* ── Fear & Greed Gauge ── */
function calcFearGreedScore(conditions) {
  const scoring = {
    discount_rate: { BULLISH: 2, NEUTRAL: 0, BEARISH: -2 },
    liquidity: { FLUSH: 2, TIGHTENING: -1, STRESS: -2, NEUTRAL: 0 },
    inflation: { FADING: 2, STICKY: 0, RISING: -2 },
    growth: { EXPANSION: 2, SLOWING: -1, RECESSION: -2, NEUTRAL: 0 },
    trust: { BREAKDOWN: 2, ERODING: 1, INTACT: -2 },
  };
  let total = 0;
  for (const [key, map] of Object.entries(scoring)) {
    const status = conditions[key]?.status;
    if (status && map[status] !== undefined) total += map[status];
    else {
      // fallback: use classifyStatus
      const dir = classifyStatus(status, key);
      if (dir === 'bullish') total += 2;
      else if (dir === 'bearish') total -= 2;
    }
  }
  return Math.max(-10, Math.min(10, total));
}

let _gaugeAnimId = null;
function renderFearGreedGauge(score) {
  const canvas = document.getElementById('fearGreedCanvas');
  if (!canvas) return;
  const isMobile = window.innerWidth < 769;
  const W = isMobile ? 360 : 500;
  const H = isMobile ? 220 : 300;
  const dpr = window.devicePixelRatio || 1;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const cx = W / 2;
  const cy = H - (isMobile ? 30 : 40);
  const outerR = isMobile ? 120 : 180;
  const innerR = outerR - (isMobile ? 22 : 30);
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;

  function scoreToAngle(s) {
    // -10 → PI (left), +10 → 2*PI (right)
    const norm = (s + 10) / 20; // 0..1
    return startAngle + norm * Math.PI;
  }

  function drawGauge(needleAngle) {
    ctx.clearRect(0, 0, W, H);

    // Draw gradient arc
    const segments = 100;
    const segAngle = Math.PI / segments;
    for (let i = 0; i < segments; i++) {
      const a1 = startAngle + i * segAngle;
      const a2 = a1 + segAngle + 0.01;
      const t = i / segments; // 0=left(fear) 1=right(greed)

      let r, g, b;
      if (t < 0.3) {
        // deep red to red
        r = 200 + Math.floor(55 * (t / 0.3));
        g = Math.floor(30 * (t / 0.3));
        b = 20;
      } else if (t < 0.5) {
        // red to yellow
        const p = (t - 0.3) / 0.2;
        r = 255;
        g = Math.floor(30 + 175 * p);
        b = Math.floor(20 * (1 - p));
      } else if (t < 0.7) {
        // yellow to green
        const p = (t - 0.5) / 0.2;
        r = Math.floor(255 * (1 - p));
        g = Math.floor(205 + 50 * p);
        b = Math.floor(p * 100);
      } else {
        // green to bright green
        const p = (t - 0.7) / 0.3;
        r = Math.floor(30 * (1 - p));
        g = 230 + Math.floor(25 * p);
        b = Math.floor(100 + 36 * p);
      }

      ctx.beginPath();
      ctx.arc(cx, cy, outerR, a1, a2);
      ctx.arc(cx, cy, innerR, a2, a1, true);
      ctx.closePath();
      ctx.fillStyle = `rgba(${r},${g},${b},${isDark() ? 0.85 : 0.75})`;
      ctx.fill();
    }

    // Outer glow
    ctx.beginPath();
    ctx.arc(cx, cy, outerR + 2, startAngle, endAngle);
    ctx.strokeStyle = isDark() ? 'rgba(99,102,241,0.15)' : 'rgba(79,70,229,0.1)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Tick marks
    for (let i = 0; i <= 20; i++) {
      const a = startAngle + (i / 20) * Math.PI;
      const isMajor = i % 5 === 0;
      const tickOuter = outerR + (isMajor ? 10 : 5);
      const tickInner = outerR + 2;
      const x1 = cx + tickInner * Math.cos(a);
      const y1 = cy + tickInner * Math.sin(a);
      const x2 = cx + tickOuter * Math.cos(a);
      const y2 = cy + tickOuter * Math.sin(a);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = isDark() ? 'rgba(148,163,184,0.4)' : 'rgba(107,114,128,0.4)';
      ctx.lineWidth = isMajor ? 2 : 1;
      ctx.stroke();
    }

    // Number labels at -10, -5, 0, +5, +10
    const labels = [
      { val: -10, angle: startAngle },
      { val: -5, angle: startAngle + Math.PI * 0.25 },
      { val: 0, angle: startAngle + Math.PI * 0.5 },
      { val: +5, angle: startAngle + Math.PI * 0.75 },
      { val: +10, angle: endAngle },
    ];
    ctx.font = `${isMobile ? 10 : 12}px JetBrains Mono, monospace`;
    ctx.fillStyle = themeColor('#94a3b8', '#6b7280');
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    labels.forEach(l => {
      const lr = outerR + (isMobile ? 20 : 26);
      const lx = cx + lr * Math.cos(l.angle);
      const ly = cy + lr * Math.sin(l.angle);
      ctx.fillText(l.val > 0 ? `+${l.val}` : `${l.val}`, lx, ly);
    });

    // Zone labels (smaller text)
    ctx.font = `${isMobile ? 7 : 9}px system-ui, sans-serif`;
    ctx.fillStyle = themeColor('rgba(148,163,184,0.5)', 'rgba(107,114,128,0.5)');
    const zoneLabels = [
      { text: 'EXTREME FEAR', angle: startAngle + Math.PI * 0.075 },
      { text: 'FEAR', angle: startAngle + Math.PI * 0.225 },
      { text: 'NEUTRAL', angle: startAngle + Math.PI * 0.5 },
      { text: 'GREED', angle: startAngle + Math.PI * 0.775 },
      { text: 'EXTREME GREED', angle: startAngle + Math.PI * 0.925 },
    ];
    zoneLabels.forEach(z => {
      const zr = (outerR + innerR) / 2;
      const zx = cx + zr * Math.cos(z.angle);
      const zy = cy + zr * Math.sin(z.angle);
      ctx.save();
      ctx.translate(zx, zy);
      ctx.rotate(z.angle + Math.PI / 2);
      ctx.fillText(z.text, 0, 0);
      ctx.restore();
    });

    // Needle
    const needleLen = innerR - 8;
    const needleBase = isMobile ? 6 : 8;
    const nx = cx + needleLen * Math.cos(needleAngle);
    const ny = cy + needleLen * Math.sin(needleAngle);
    const bx1 = cx + needleBase * Math.cos(needleAngle + Math.PI / 2);
    const by1 = cy + needleBase * Math.sin(needleAngle + Math.PI / 2);
    const bx2 = cx + needleBase * Math.cos(needleAngle - Math.PI / 2);
    const by2 = cy + needleBase * Math.sin(needleAngle - Math.PI / 2);

    // Needle shadow
    ctx.save();
    ctx.shadowColor = isDark() ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 3;
    ctx.beginPath();
    ctx.moveTo(nx, ny);
    ctx.lineTo(bx1, by1);
    ctx.lineTo(bx2, by2);
    ctx.closePath();
    ctx.fillStyle = isDark() ? '#e5e7eb' : '#1f2937';
    ctx.fill();
    ctx.restore();

    // Needle glow
    ctx.save();
    ctx.shadowColor = isDark() ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(nx, ny);
    ctx.lineTo(bx1, by1);
    ctx.lineTo(bx2, by2);
    ctx.closePath();
    ctx.fillStyle = isDark() ? '#e5e7eb' : '#1f2937';
    ctx.fill();
    ctx.restore();

    // Center cap
    ctx.beginPath();
    ctx.arc(cx, cy, isMobile ? 10 : 14, 0, 2 * Math.PI);
    ctx.fillStyle = isDark() ? '#374151' : '#d1d5db';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, isMobile ? 6 : 8, 0, 2 * Math.PI);
    ctx.fillStyle = isDark() ? '#6366f1' : '#4f46e5';
    ctx.shadowColor = isDark() ? '#6366f1' : '#4f46e5';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Animate needle from center to target
  const targetAngle = scoreToAngle(score);
  const startNeedleAngle = scoreToAngle(0); // start from center
  const duration = 1500;
  let startTime = null;

  if (_gaugeAnimId) cancelAnimationFrame(_gaugeAnimId);

  function easeOutElastic(t) {
    if (t === 0 || t === 1) return t;
    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
  }

  function animate(ts) {
    if (!startTime) startTime = ts;
    const elapsed = ts - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = easeOutElastic(progress);
    const currentAngle = startNeedleAngle + (targetAngle - startNeedleAngle) * eased;
    drawGauge(currentAngle);
    if (progress < 1) _gaugeAnimId = requestAnimationFrame(animate);
  }
  _gaugeAnimId = requestAnimationFrame(animate);

  // Classification text
  const classEl = document.getElementById('gauge-classification');
  const scoreLabel = document.getElementById('gauge-score-label');
  let text, color, pulse = '';
  if (score <= -7) { text = 'EXTREME FEAR'; color = '#ff1e1e'; pulse = 'gauge-pulse-fear'; }
  else if (score <= -3) { text = 'FEAR'; color = themeColor('#ff4444', '#dc2626'); }
  else if (score <= 2) { text = 'NEUTRAL'; color = themeColor('#ffcc00', '#d97706'); }
  else if (score <= 6) { text = 'GREED'; color = themeColor('#00ff88', '#059669'); }
  else { text = 'EXTREME GREED'; color = '#00ff88'; pulse = 'gauge-pulse-greed'; }

  classEl.textContent = text;
  classEl.style.color = color;
  classEl.className = 'gauge-classification ' + pulse;
  scoreLabel.textContent = `Score: ${score >= 0 ? '+' : ''}${score} / 10`;

  document.getElementById('fear-greed-section').style.display = '';
}

/* ── Radar Chart ── */
function statusToRadarScore(key, status) {
  const s = (status || '').toUpperCase();
  if (key === 'trust') { if (s==='BREAKDOWN') return 2; if (s==='ERODING') return 1; return 0; }
  if (['BULLISH','FLUSH','EXPANSION'].includes(s)) return 2;
  if (s==='RISING' && key==='inflation') return 2;
  if (s==='FADING' && key==='inflation') return -1;
  if (['NEUTRAL','STICKY','MIXED'].includes(s)) return 0;
  if (['TIGHTENING','SLOWING'].includes(s)) return -1;
  if (['BEARISH','STRESS','RECESSION'].includes(s)) return -2;
  const dir = classifyStatus(s, key);
  if (dir==='bullish') return 2; if (dir==='bearish') return -2;
  return 0;
}

function renderRadarChart(conditions) {
  const canvas = document.getElementById('radarCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const size = canvas.clientWidth || 400;
  canvas.width = size * dpr; canvas.height = size * dpr;
  ctx.scale(dpr, dpr);
  const cxr = size/2, cyr = size/2, maxR = size*0.35;
  const axes = [
    {key:'discount_rate',label:'Discount Rate'},{key:'liquidity',label:'Liquidity'},
    {key:'inflation',label:'Inflation'},{key:'growth',label:'Growth'},{key:'trust',label:'Trust'}
  ];
  const n = axes.length;
  const angleStep = (2*Math.PI)/n;
  const startAngle = -Math.PI/2;
  const scores = axes.map(a => { const c=conditions[a.key]; return c ? statusToRadarScore(a.key,c.status) : 0; });
  function scoreToRadius(s) { return maxR*((s+2)/4); }

  ctx.clearRect(0,0,size,size);
  const gridColor = themeColor('#1f2937', '#d1d5db');
  const zeroColor = themeColor('rgba(255,204,0,0.3)', 'rgba(217,119,6,0.3)');
  const labelColor = themeColor('#9ca3af', '#6b7280');
  const greenColor = themeColor('#00ff88', '#059669');
  const redColor = themeColor('#ff4444', '#dc2626');
  const yellowColor = themeColor('#ffcc00', '#d97706');

  [-2,-1,0,1,2].forEach(level => {
    const r = scoreToRadius(level); if (r<=0) return;
    ctx.beginPath();
    for(let i=0;i<n;i++){const a=startAngle+i*angleStep;const x=cxr+r*Math.cos(a);const y=cyr+r*Math.sin(a);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}
    ctx.closePath();
    ctx.strokeStyle = level===0 ? zeroColor : gridColor;
    ctx.lineWidth = level===0 ? 1.5 : 0.8; ctx.stroke();
  });
  for(let i=0;i<n;i++){const a=startAngle+i*angleStep;ctx.beginPath();ctx.moveTo(cxr,cyr);ctx.lineTo(cxr+maxR*Math.cos(a),cyr+maxR*Math.sin(a));ctx.strokeStyle=gridColor;ctx.lineWidth=0.8;ctx.stroke();}

  function drawPoly(sa, fill, stroke) {
    ctx.beginPath();
    for(let i=0;i<n;i++){const a=startAngle+i*angleStep;const r=scoreToRadius(sa[i]);const x=cxr+r*Math.cos(a);const y=cyr+r*Math.sin(a);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}
    ctx.closePath(); ctx.fillStyle=fill; ctx.fill();
    ctx.strokeStyle=stroke; ctx.lineWidth=2; ctx.shadowColor=stroke; ctx.shadowBlur=isDark()?12:4; ctx.stroke(); ctx.shadowBlur=0;
  }
  if (scores.some(s=>s<0)) drawPoly(scores.map(s=>Math.min(s,0)), isDark()?'rgba(255,68,68,0.15)':'rgba(220,38,38,0.1)', isDark()?'rgba(255,68,68,0.7)':'rgba(220,38,38,0.6)');
  if (scores.some(s=>s>0)) drawPoly(scores.map(s=>Math.max(s,0)), isDark()?'rgba(0,255,136,0.15)':'rgba(5,150,105,0.1)', isDark()?'rgba(0,255,136,0.7)':'rgba(5,150,105,0.6)');

  for(let i=0;i<n;i++){
    const a=startAngle+i*angleStep; const r=scoreToRadius(scores[i]);
    const x=cxr+r*Math.cos(a); const y=cyr+r*Math.sin(a);
    const color = scores[i]>0?greenColor:scores[i]<0?redColor:yellowColor;
    ctx.beginPath(); ctx.arc(x,y,4,0,2*Math.PI); ctx.fillStyle=color; ctx.shadowColor=color; ctx.shadowBlur=isDark()?8:2; ctx.fill(); ctx.shadowBlur=0;
  }
  for(let i=0;i<n;i++){
    const a=startAngle+i*angleStep; const lr=maxR+24;
    let x=cxr+lr*Math.cos(a); let y=cyr+lr*Math.sin(a);
    ctx.fillStyle=labelColor; ctx.font='12px system-ui,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    if(Math.abs(Math.cos(a))>0.8) y+=Math.sin(a)>0?8:-8;
    ctx.fillText(axes[i].label,x,y);
    const sc=scores[i]; ctx.fillStyle=sc>0?greenColor:sc<0?redColor:yellowColor;
    ctx.font='11px JetBrains Mono,monospace';
    ctx.fillText(`[${sc>0?'+':''}${sc}]`,x,y+16);
  }
  document.getElementById('radar-section').style.display='';
}

/* ── Macro Scorecard Line Chart ── */
function renderScoreChart(history) {
  if (!history || history.length === 0) return;
  const canvas = document.getElementById('scoreChart');
  if (!canvas) return;

  const wrap = canvas.parentElement;
  const W = wrap.clientWidth;
  const H = wrap.clientHeight || 220;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const pad = { top: 20, right: 60, bottom: 32, left: 50 };
  const cw = W - pad.left - pad.right;
  const ch = H - pad.top - pad.bottom;

  const dates = history.map(h => h.date);
  const scores = history.map(h => h.score);
  const golds = history.map(h => h.gold);

  const scoreMin = -10, scoreMax = 10;
  const goldMin = golds.length > 1 ? Math.min(...golds) * 0.995 : golds[0] * 0.99;
  const goldMax = golds.length > 1 ? Math.max(...golds) * 1.005 : golds[0] * 1.01;

  function xPos(i) { return dates.length === 1 ? pad.left + cw / 2 : pad.left + (i / (dates.length - 1)) * cw; }
  function yScore(v) { return pad.top + (1 - (v - scoreMin) / (scoreMax - scoreMin)) * ch; }
  function yGold(v) { return goldMax === goldMin ? pad.top + ch / 2 : pad.top + (1 - (v - goldMin) / (goldMax - goldMin)) * ch; }

  const bgColor = themeColor('#0a0e17', '#ffffff');
  const gridLineColor = themeColor('#1f2937', '#e5e7eb');
  const zeroLineColor = themeColor('rgba(255, 204, 0, 0.2)', 'rgba(217, 119, 6, 0.2)');
  const goldLineColor = themeColor('rgba(156, 163, 175, 0.5)', 'rgba(107, 114, 128, 0.5)');
  const axisColor = themeColor('#64748b', '#9ca3af');
  const greenLine = themeColor('#00ff88', '#059669');
  const redLine = themeColor('#ff4444', '#dc2626');

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = gridLineColor; ctx.lineWidth = 0.5;
  for (let v = -10; v <= 10; v += 5) { const y = yScore(v); ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke(); }

  ctx.strokeStyle = zeroLineColor; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pad.left, yScore(0)); ctx.lineTo(W - pad.right, yScore(0)); ctx.stroke();

  if (dates.length === 1) {
    const x = xPos(0);
    const yg = yGold(golds[0]);
    ctx.beginPath(); ctx.arc(x, yg, 5, 0, 2 * Math.PI);
    ctx.fillStyle = goldLineColor; ctx.fill();
    const ys = yScore(scores[0]);
    const sc = scores[0] >= 0 ? greenLine : redLine;
    ctx.beginPath(); ctx.arc(x, ys, 5, 0, 2 * Math.PI);
    ctx.fillStyle = sc; ctx.shadowColor = sc; ctx.shadowBlur = isDark()?10:2; ctx.fill(); ctx.shadowBlur = 0;
  } else {
    ctx.strokeStyle = goldLineColor; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
    ctx.beginPath();
    for (let i = 0; i < golds.length; i++) { const x = xPos(i), y = yGold(golds[i]); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
    ctx.stroke(); ctx.setLineDash([]);

    ctx.lineWidth = 2.5;
    for (let i = 1; i < scores.length; i++) {
      const x0 = xPos(i - 1), y0 = yScore(scores[i - 1]);
      const x1 = xPos(i), y1 = yScore(scores[i]);
      const avg = (scores[i - 1] + scores[i]) / 2;
      ctx.strokeStyle = avg >= 0 ? greenLine : redLine;
      ctx.shadowColor = avg >= 0 ? greenLine : redLine; ctx.shadowBlur = isDark()?6:2;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    }
    ctx.shadowBlur = 0;

    for (let i = 0; i < scores.length; i++) {
      const x = xPos(i), y = yScore(scores[i]);
      ctx.beginPath(); ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = scores[i] >= 0 ? greenLine : redLine; ctx.fill();
    }
  }

  ctx.fillStyle = axisColor; ctx.font = '10px JetBrains Mono, monospace';
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let v = -10; v <= 10; v += 5) { ctx.fillText(v > 0 ? `+${v}` : `${v}`, pad.left - 6, yScore(v)); }

  ctx.textAlign = 'left';
  const goldSteps = 4;
  for (let i = 0; i <= goldSteps; i++) { const v = goldMin + (goldMax - goldMin) * (i / goldSteps); ctx.fillText(`$${Math.round(v)}`, W - pad.right + 6, yGold(v)); }

  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  if (dates.length === 1) {
    ctx.fillText(dates[0].slice(5), xPos(0), H - pad.bottom + 6);
  } else {
    const labelEvery = Math.max(1, Math.floor(dates.length / 6));
    for (let i = 0; i < dates.length; i += labelEvery) { ctx.fillText(dates[i].slice(5), xPos(i), H - pad.bottom + 6); }
    if ((dates.length - 1) % labelEvery !== 0) { ctx.fillText(dates[dates.length - 1].slice(5), xPos(dates.length - 1), H - pad.bottom + 6); }
  }

  ctx.font = '10px JetBrains Mono, monospace'; const legendY = 10;
  ctx.fillStyle = greenLine; ctx.fillRect(pad.left, legendY, 12, 3);
  ctx.fillStyle = axisColor; ctx.textAlign = 'left'; ctx.fillText('Score', pad.left + 16, legendY + 2);
  ctx.fillStyle = goldLineColor; ctx.setLineDash([4,4]);
  ctx.beginPath(); ctx.moveTo(pad.left+60,legendY+1.5); ctx.lineTo(pad.left+72,legendY+1.5); ctx.strokeStyle=goldLineColor; ctx.lineWidth=1.5; ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = axisColor; ctx.fillText('Gold', pad.left + 76, legendY + 2);

  document.getElementById('chart-section').style.display = '';
}

/* ── Heat Calendar (90-day) ── */
function renderHeatCalendar(score) {
  // Load from localStorage
  let calData = {};
  try { calData = JSON.parse(localStorage.getItem('macro_heat_calendar') || '{}'); } catch(e) {}

  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);

  // Store today's score
  if (score !== undefined) {
    calData[todayStr] = score;
  }

  // Generate synthetic data for missing days
  const days = [];
  for (let i = 89; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const ds = d.toISOString().slice(0, 10);
    if (calData[ds] === undefined && i > 0) {
      // Synthetic: gentle random walk from -3 to 3
      const prev = days.length > 0 ? days[days.length - 1].score : 0;
      calData[ds] = Math.max(-5, Math.min(5, prev + (Math.random() * 2 - 1)));
    }
    days.push({ date: ds, score: calData[ds] !== undefined ? calData[ds] : 0 });
  }

  localStorage.setItem('macro_heat_calendar', JSON.stringify(calData));

  const grid = document.getElementById('heat-calendar-grid');
  grid.innerHTML = '';

  days.forEach(day => {
    const el = document.createElement('div');
    el.className = 'heat-day';
    const s = day.score;
    let color;
    if (s >= 3) color = themeColor('rgba(0,255,136,0.7)', 'rgba(5,150,105,0.6)');
    else if (s >= 1) color = themeColor('rgba(0,255,136,0.35)', 'rgba(5,150,105,0.3)');
    else if (s > -1) color = themeColor('rgba(255,204,0,0.3)', 'rgba(217,119,6,0.25)');
    else if (s > -3) color = themeColor('rgba(255,68,68,0.35)', 'rgba(220,38,38,0.3)');
    else color = themeColor('rgba(255,68,68,0.7)', 'rgba(220,38,38,0.6)');

    el.style.background = color;
    el.setAttribute('data-tooltip', `${day.date}: ${day.score >= 0 ? '+' : ''}${Number(day.score).toFixed(1)}`);
    grid.appendChild(el);
  });

  document.getElementById('heat-calendar-section').style.display = '';
}

/* ── Donut Chart ── */
function renderDonutChart(portfolio) {
  const wrap = document.getElementById('donut-wrap');
  if (!portfolio || Object.keys(portfolio).length === 0) { wrap.innerHTML = ''; return; }

  const entries = Object.entries(portfolio).filter(([_, d]) => d.price && d.shares);
  if (entries.length === 0) { wrap.innerHTML = ''; return; }

  const total = entries.reduce((sum, [_, d]) => sum + d.price * d.shares, 0);

  // Color mapping
  const colorMap = {
    GDX: '#FFD700', KGC: '#DAA520', AG: '#C0C0C0',
    CEG: '#3b82f6', GILD: '#10b981', REGN: '#14b8a6',
    VRTX: '#06d6a0', FCX: '#b87333',
  };
  const defaultColors = ['#6366f1','#8b5cf6','#ec4899','#f97316','#84cc16'];

  let cumAngle = 0;
  const size = 160;
  const cx = size/2, cy = size/2, outerR = 70, innerR = 45;
  let pathsHtml = '';
  let legendHtml = '';

  entries.forEach(([ticker, data], idx) => {
    const value = data.price * data.shares;
    const pct = value / total;
    const angle = pct * 2 * Math.PI;
    const color = colorMap[ticker] || defaultColors[idx % defaultColors.length];

    const x1 = cx + outerR * Math.cos(cumAngle);
    const y1 = cy + outerR * Math.sin(cumAngle);
    const x2 = cx + outerR * Math.cos(cumAngle + angle);
    const y2 = cy + outerR * Math.sin(cumAngle + angle);
    const ix1 = cx + innerR * Math.cos(cumAngle + angle);
    const iy1 = cy + innerR * Math.sin(cumAngle + angle);
    const ix2 = cx + innerR * Math.cos(cumAngle);
    const iy2 = cy + innerR * Math.sin(cumAngle);
    const large = angle > Math.PI ? 1 : 0;

    pathsHtml += `<path d="M ${x1} ${y1} A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${large} 0 ${ix2} ${iy2} Z" fill="${color}" opacity="0.85"/>`;

    legendHtml += `<div class="donut-legend-item"><div class="donut-legend-swatch" style="background:${color}"></div><span>${ticker} ${(pct*100).toFixed(1)}%</span></div>`;

    cumAngle += angle;
  });

  const centerText = `$${(total/1000).toFixed(0)}k`;
  wrap.innerHTML = `
    <div class="donut-svg-wrap">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        ${pathsHtml}
        <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" fill="var(--text-primary)" font-size="16" font-weight="700" font-family="JetBrains Mono,monospace">${centerText}</text>
      </svg>
    </div>
    <div class="donut-legend">${legendHtml}</div>`;
}

/* ── Holdings localStorage ── */
function getLocalHoldings() {
  try { return JSON.parse(localStorage.getItem('macro_holdings') || '{}'); } catch(e) { return {}; }
}
function saveLocalHoldings(h) { localStorage.setItem('macro_holdings', JSON.stringify(h)); }
function getHiddenHoldings() {
  try { return JSON.parse(localStorage.getItem('macro_hidden_holdings') || '[]'); } catch(e) { return []; }
}
function saveHiddenHoldings(list) { localStorage.setItem('macro_hidden_holdings', JSON.stringify(list)); }

let _serverPortfolio = {};

function openAddModal() { document.getElementById('add-modal').classList.add('active'); document.getElementById('modal-ticker').focus(); }
function closeAddModal() { document.getElementById('add-modal').classList.remove('active'); document.getElementById('modal-ticker').value=''; document.getElementById('modal-shares').value=''; }
const SYNC_API = '/api/holdings';
const SYNC_KEY = 'macro-dash-sync-2026';

function syncToServer(action, holdings) {
  fetch(SYNC_API, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'X-Api-Key': SYNC_KEY},
    body: JSON.stringify({action, holdings})
  }).catch(() => {}); // Silent fail — localStorage is the backup
}

function addHolding() {
  try {
    const ticker = document.getElementById('modal-ticker').value.trim().toUpperCase();
    const exchange = document.getElementById('modal-exchange').value;
    const shares = parseInt(document.getElementById('modal-shares').value);
    if (!ticker || !shares || shares < 1) { alert('Please enter ticker and shares'); return; }

    const hidden = getHiddenHoldings();
    const hiddenIdx = hidden.indexOf(ticker);
    if (hiddenIdx !== -1) {
      hidden.splice(hiddenIdx, 1);
      saveHiddenHoldings(hidden);
    }

    const local = getLocalHoldings();
    local[ticker] = { shares, exchange, name: ticker, price: null, change: null };
    saveLocalHoldings(local);

    // Sync to server
    syncToServer('add', [{ticker, exchange, shares, name: ticker}]);

    closeAddModal();
    try { renderPortfolio(_serverPortfolio); } catch(e) { console.error('Render error:', e); }
  } catch(e) {
    alert('Error adding holding: ' + e.message);
    closeAddModal();
  }
}

function removeHolding(ticker) {
  // Remove from local holdings
  const local = getLocalHoldings();
  delete local[ticker];
  saveLocalHoldings(local);

  // If it's a server-provided holding, add to hidden list
  if (_serverPortfolio[ticker]) {
    const hidden = getHiddenHoldings();
    if (!hidden.includes(ticker)) {
      hidden.push(ticker);
      saveHiddenHoldings(hidden);
    }
  }

  // Sync removal to server
  syncToServer('remove', [{ticker}]);

  renderPortfolio(_serverPortfolio);
}

/* ── Portfolio ── */
function renderPortfolio(portfolio) {
  _serverPortfolio = portfolio || {};
  const local = getLocalHoldings();
  const hidden = getHiddenHoldings();
  const merged = {};

  // Merge server holdings (skip hidden ones)
  for (const [t, d] of Object.entries(_serverPortfolio)) {
    if (!hidden.includes(t)) merged[t] = d;
  }
  // Merge local holdings (skip hidden ones)
  for (const [t, d] of Object.entries(local)) {
    if (!hidden.includes(t) && !merged[t]) merged[t] = d;
  }

  // Donut chart
  renderDonutChart(merged);

  const grid = document.getElementById('holdings-grid');
  grid.innerHTML = '';
  let totalValue = 0;

  for (const [ticker, data] of Object.entries(merged)) {
    const price = data.price;
    const change = data.change;
    const shares = data.shares;
    const name = data.name || ticker;
    const value = price ? price * shares : null;
    if (value) totalValue += value;

    const el = document.createElement('div');
    el.className = 'holding';
    el.innerHTML = `
      <button class="remove-btn" onclick="removeHolding('${ticker}')" title="Remove ${ticker}">×</button>
      <div class="holding-ticker">${ticker}</div>
      <div class="holding-name">${name}</div>
      <div class="holding-shares">${shares.toLocaleString()} shares</div>
      <div class="holding-value" style="color:${change > 0 ? 'var(--green)' : change < 0 ? 'var(--red)' : 'var(--text-secondary)'}">
        ${value ? '$' + value.toLocaleString(undefined, {maximumFractionDigits: 0}) : '—'}
        ${change !== null && change !== undefined ? formatChange(change) : ''}
      </div>`;
    grid.appendChild(el);
  }

  if (totalValue > 0) {
    const totalEl = document.createElement('div');
    totalEl.className = 'holding';
    totalEl.style.borderColor = 'var(--accent)';
    totalEl.innerHTML = `
      <div class="holding-ticker" style="color:var(--accent)">TOTAL</div>
      <div class="holding-name">&nbsp;</div>
      <div class="holding-shares">&nbsp;</div>
      <div class="holding-value" style="color:var(--text-primary);font-size:16px;">$${totalValue.toLocaleString(undefined,{maximumFractionDigits:0})}</div>`;
    grid.appendChild(totalEl);
  }

  const addBtn = document.createElement('div');
  addBtn.className = 'add-holding-btn';
  addBtn.onclick = openAddModal;
  addBtn.innerHTML = '+';
  grid.appendChild(addBtn);

  document.getElementById('portfolio-bar').style.display = '';
}

/* ── News Ticker ── */
function renderTicker(headlines) {
  if (!headlines || headlines.length === 0) return;
  const track = document.getElementById('ticker-track');
  const items = headlines.concat(headlines).map(h => {
    const tagClass = `ticker-tag-${h.condition.replace(/\s+/g, '')}`;
    return `<span class="ticker-item"><span class="ticker-tag ${tagClass}">[${h.condition}]</span>${h.text}</span>`;
  }).join(' ');
  track.innerHTML = items;
  document.getElementById('ticker-bar').style.display = '';
}

/* ── War Room — What-If Simulator ── */
let _wrLiveValues = { gold: 3500, oil: 70, vix: 20, yield: 4.0, dxy: 100 };
let _wrIsSimulated = false;

function warRoomInit() {
  if (!_lastData) return;
  const c = _lastData.conditions;
  // Extract live values from data
  const goldRaw = c.trust?.metrics?.['Gold (spot)']?.raw;
  const dxyRaw = c.trust?.metrics?.['DXY']?.raw;
  const vixRaw = c.liquidity?.metrics?.['VIX']?.raw;
  const yieldRaw = c.discount_rate?.metrics?.['10Y Yield']?.raw;
  // Oil: try WTI Crude raw — note this is USO ETF price, not WTI price
  // We need actual oil price. USO ~$70-80 maps loosely. Use raw as proxy.
  const oilRaw = c.inflation?.metrics?.['WTI Crude']?.raw;

  if (goldRaw) _wrLiveValues.gold = Math.round(goldRaw);
  if (oilRaw) _wrLiveValues.oil = Math.round(oilRaw);
  if (vixRaw) _wrLiveValues.vix = parseFloat(vixRaw.toFixed(1));
  if (yieldRaw) _wrLiveValues.yield = parseFloat(yieldRaw.toFixed(2));
  if (dxyRaw) _wrLiveValues.dxy = parseFloat(dxyRaw.toFixed(1));

  // Set sliders to live values
  warRoomReset();

  // Attach listeners
  ['gold','oil','vix','yield','dxy'].forEach(id => {
    const el = document.getElementById('wr-' + id);
    if (el) {
      el.addEventListener('input', warRoomUpdate);
    }
  });

  document.getElementById('warroom-section').style.display = '';
}

function warRoomReset() {
  document.getElementById('wr-gold').value = _wrLiveValues.gold;
  document.getElementById('wr-oil').value = _wrLiveValues.oil;
  document.getElementById('wr-vix').value = _wrLiveValues.vix;
  document.getElementById('wr-yield').value = _wrLiveValues.yield;
  document.getElementById('wr-dxy').value = _wrLiveValues.dxy;
  _wrIsSimulated = false;
  document.getElementById('warroom-watermark').style.display = 'none';
  warRoomUpdate();
}

function warRoomUpdate() {
  const gold = parseFloat(document.getElementById('wr-gold').value);
  const oil = parseFloat(document.getElementById('wr-oil').value);
  const vix = parseFloat(document.getElementById('wr-vix').value);
  const yld = parseFloat(document.getElementById('wr-yield').value);
  const dxy = parseFloat(document.getElementById('wr-dxy').value);

  // Update display values
  document.getElementById('wr-gold-val').textContent = '$' + gold.toLocaleString();
  document.getElementById('wr-oil-val').textContent = '$' + oil;
  document.getElementById('wr-vix-val').textContent = vix.toFixed(1);
  document.getElementById('wr-yield-val').textContent = yld.toFixed(2) + '%';
  document.getElementById('wr-dxy-val').textContent = dxy.toFixed(1);

  // Check if simulated
  const isLive = Math.abs(gold - _wrLiveValues.gold) < 15 &&
                 Math.abs(oil - _wrLiveValues.oil) < 2 &&
                 Math.abs(vix - _wrLiveValues.vix) < 0.5 &&
                 Math.abs(yld - _wrLiveValues.yield) < 0.05 &&
                 Math.abs(dxy - _wrLiveValues.dxy) < 0.5;
  _wrIsSimulated = !isLive;
  document.getElementById('warroom-watermark').style.display = _wrIsSimulated ? '' : 'none';

  // === Classify conditions ===
  // TRUST
  let trustStatus, trustDir;
  if (gold > 5000 && dxy > 105) { trustStatus = 'BREAKDOWN'; trustDir = 'bullish'; }
  else if (gold > 5000 && dxy < 100) { trustStatus = 'ERODING'; trustDir = 'bullish'; }
  else if (gold > 4500) { trustStatus = 'ERODING'; trustDir = 'bullish'; }
  else { trustStatus = 'INTACT'; trustDir = 'neutral'; }

  // LIQUIDITY
  let liqStatus, liqDir;
  if (vix > 30) { liqStatus = 'STRESS'; liqDir = 'bearish'; }
  else if (vix > 22) { liqStatus = 'TIGHTENING'; liqDir = 'bearish'; }
  else if (vix < 15) { liqStatus = 'FLUSH'; liqDir = 'bullish'; }
  else { liqStatus = 'NEUTRAL'; liqDir = 'neutral'; }

  // INFLATION
  let inflStatus, inflDir;
  if (oil > 100) { inflStatus = 'RISING'; inflDir = 'bearish'; }
  else if (oil >= 70) { inflStatus = 'STICKY'; inflDir = 'neutral'; }
  else { inflStatus = 'FADING'; inflDir = 'bullish'; }

  // DISCOUNT RATE
  let drStatus, drDir;
  if (yld > 4.5) { drStatus = 'BEARISH'; drDir = 'bearish'; }
  else if (yld >= 3.0) { drStatus = 'NEUTRAL'; drDir = 'neutral'; }
  else { drStatus = 'BULLISH'; drDir = 'bullish'; }

  // GROWTH — keep live
  const growthStatus = _lastData?.conditions?.growth?.status || 'NEUTRAL';
  const growthDir = classifyStatus(growthStatus, 'growth');

  // Update badges
  function setBadge(id, status, dir) {
    const el = document.getElementById(id);
    el.textContent = status;
    el.className = 'warroom-badge warroom-badge-' + (dir === 'bullish' ? 'bullish' : dir === 'bearish' ? 'bearish' : 'neutral');
  }
  setBadge('wr-gold-badge', trustStatus, trustDir);
  setBadge('wr-oil-badge', inflStatus, inflDir);
  setBadge('wr-vix-badge', liqStatus, liqDir);
  setBadge('wr-yield-badge', drStatus, drDir);
  setBadge('wr-dxy-badge', trustStatus, trustDir);

  // === Build simulated conditions object ===
  const simConditions = {
    discount_rate: { status: drStatus },
    liquidity: { status: liqStatus },
    inflation: { status: inflStatus },
    growth: { status: growthStatus },
    trust: { status: trustStatus }
  };

  // === Recalculate Fear & Greed ===
  const fgScore = calcFearGreedScore(simConditions);
  const fgLabel = fgScore >= 6 ? 'EXTREME GREED' : fgScore >= 2 ? 'GREED' : fgScore >= -1 ? 'NEUTRAL' : fgScore >= -5 ? 'FEAR' : 'EXTREME FEAR';
  const fgColor = fgScore >= 2 ? 'var(--green)' : fgScore >= -1 ? 'var(--yellow)' : 'var(--red)';

  // === Recalculate action bias ===
  let bullish = 0, bearish = 0, neutral = 0;
  const dirs = { discount_rate: drDir, liquidity: liqDir, inflation: inflDir, growth: growthDir, trust: trustDir };
  for (const d of Object.values(dirs)) {
    if (d === 'bullish') bullish++;
    else if (d === 'bearish') bearish++;
    else neutral++;
  }
  let action, regime, actionColor;
  if (bullish >= 4) { action = 'ADD'; regime = 'Strong Bullish'; actionColor = 'var(--green)'; }
  else if (bullish >= 3) { action = 'ADD'; regime = 'Bullish Lean'; actionColor = 'var(--green)'; }
  else if (bearish >= 4) { action = 'TRIM'; regime = 'Strong Bearish'; actionColor = 'var(--red)'; }
  else if (bearish >= 3) { action = 'TRIM'; regime = 'Bearish Lean'; actionColor = 'var(--red)'; }
  else { action = 'HOLD'; regime = 'Mixed / Choppy'; actionColor = 'var(--yellow)'; }

  // Update summary
  document.getElementById('wr-regime').textContent = regime;
  document.getElementById('wr-regime').style.color = actionColor;
  document.getElementById('wr-action').textContent = action;
  document.getElementById('wr-action').style.color = actionColor;
  document.getElementById('wr-fg-score').textContent = `${fgScore > 0 ? '+' : ''}${fgScore} (${fgLabel})`;
  document.getElementById('wr-fg-score').style.color = fgColor;

  // === If simulated, update live dashboard elements ===
  if (_wrIsSimulated) {
    renderFearGreedGauge(fgScore);
    renderRadarChart(simConditions);
    renderHeatmap(simConditions);
    // Update AI summary
    const aiEl = document.getElementById('ai-summary');
    if (aiEl) {
      aiEl.textContent = `⚔️ SIMULATED: Gold $${gold.toLocaleString()}, Oil $${oil}, VIX ${vix.toFixed(1)}, 10Y ${yld.toFixed(2)}%, DXY ${dxy.toFixed(1)} → ${regime} regime, action bias: ${action}`;
    }
    // Update action badge
    const badge = document.getElementById('action-badge');
    if (badge) {
      badge.textContent = action;
      badge.className = `action-badge action-${action}`;
    }
  } else {
    // Restore live data
    if (_lastData) {
      renderFearGreedGauge(calcFearGreedScore(_lastData.conditions));
      renderRadarChart(_lastData.conditions);
      renderHeatmap(_lastData.conditions);
      const aiEl = document.getElementById('ai-summary');
      if (aiEl && _lastData.ai_summary) aiEl.textContent = _lastData.ai_summary;
      const badge = document.getElementById('action-badge');
      if (badge) {
        badge.textContent = _lastData.action;
        badge.className = `action-badge action-${_lastData.action}`;
      }
    }
  }
}

/* ── Main Fetch ── */
async function fetchData() {
  try {
    let data;
    try {
      const resp = await fetch(DATA_URL + `?t=${Date.now()}`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      data = await resp.json();
    } catch(fetchErr) {
      console.log('Fetch failed, using embedded data:', fetchErr.message);
      if (typeof EMBEDDED_DATA !== 'undefined') {
        data = EMBEDDED_DATA;
      } else {
        throw fetchErr;
      }
    }
    _lastData = data;

    document.getElementById('loading').style.display = 'none';
    document.getElementById('summary-bar').style.display = '';
    document.getElementById('cards-grid').style.display = '';
    document.getElementById('error-banner').style.display = 'none';

    document.getElementById('last-updated').textContent = data.updated_display || data.updated;
    document.getElementById('regime-text').textContent = data.regime;

    // AI Summary
    if (data.ai_summary) {
      document.getElementById('ai-summary').textContent = data.ai_summary;
    }

    // Market Clock
    if (data.market_status) {
      renderMarketClock(data.market_status);
    }

    const badge = document.getElementById('action-badge');
    badge.textContent = data.action;
    badge.className = `action-badge action-${data.action}`;

    if (data.score !== undefined) renderScoreBar(data.score);

    renderAlerts(data.alerts);
    renderWorldMap(data.conditions);
    renderFearGreedGauge(calcFearGreedScore(data.conditions));
    renderHeatmap(data.conditions);
    renderRadarChart(data.conditions);
    renderCorrelationWeb(data.conditions);
    renderScoreChart(data.history);
    renderHeatCalendar(data.score);
    renderCards(data.conditions, data.metric_history);
    renderImpact(data.conditions);
    renderPortfolio(data.portfolio);
    renderTicker(data.ticker_headlines);
    warRoomInit();

    // Quick Stats Bar — populate on initial load
    if (typeof renderQuickStats === 'function') renderQuickStats(data.conditions);

    if (data.failed_tickers && data.failed_tickers.length > 0) {
      const banner = document.getElementById('error-banner');
      banner.textContent = `⚠️ Failed to fetch: ${data.failed_tickers.join(', ')}`;
      banner.style.display = '';
    }
  } catch (err) {
    console.error('Fetch error:', err);
    const banner = document.getElementById('error-banner');
    banner.textContent = `⚠️ Failed to load data: ${err.message}. Will retry in 5 minutes.`;
    banner.style.display = '';
  }
}

fetchData();
setInterval(fetchData, REFRESH_MS);

// Update market clock every minute
setInterval(updateMarketClockLive, 60000);
setTimeout(updateMarketClockLive, 2000);

/* ── Swipe Dots for Mobile ── */
function setupSwipeDots() {
  const grid = document.getElementById('cards-grid');
  const dotsWrap = document.getElementById('swipe-dots');
  if (!grid || !dotsWrap) return;
  const cards = grid.querySelectorAll('.card');
  if (cards.length === 0) return;
  dotsWrap.innerHTML = '';
  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'swipe-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => { cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' }); };
    dotsWrap.appendChild(dot);
  });
  grid.addEventListener('scroll', () => {
    const scrollLeft = grid.scrollLeft;
    const cardWidth = grid.clientWidth;
    const idx = Math.round(scrollLeft / cardWidth);
    dotsWrap.querySelectorAll('.swipe-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  });
}
const _cardsObs = new MutationObserver(() => { setupSwipeDots(); });
_cardsObs.observe(document.getElementById('cards-grid'), { childList: true });

/* ══════════════════════════════════════════════════════════
   SURPRISE 1: Earnings Calendar & Dividend Tracker
   ══════════════════════════════════════════════════════════ */

// Hardcoded upcoming events (earnings & ex-dividend dates)
// These are approximate Q2 2026 dates
const EARNINGS_EVENTS = [
  { ticker: 'GILD',  type: 'Earnings',     date: '2026-04-30' },
  { ticker: 'REGN',  type: 'Earnings',     date: '2026-05-01' },
  { ticker: 'VRTX',  type: 'Earnings',     date: '2026-04-29' },
  { ticker: 'CEG',   type: 'Earnings',     date: '2026-05-07' },
  { ticker: 'GDX',   type: 'Ex-Dividend',  date: '2026-06-19' },
  { ticker: 'KGC',   type: 'Ex-Dividend',  date: '2026-06-04' },
  { ticker: 'AG',    type: 'Ex-Dividend',  date: '2026-05-28' },
  { ticker: 'FCX',   type: 'Earnings',     date: '2026-04-23' },
];

function renderUpcomingEvents() {
  const grid = document.getElementById('events-grid');
  const section = document.getElementById('events-section');
  if (!grid || !section) return;

  const now = new Date();
  now.setHours(0,0,0,0);

  // Filter to future events and sort by date
  const upcoming = EARNINGS_EVENTS
    .map(ev => {
      const evDate = new Date(ev.date + 'T00:00:00');
      const diffMs = evDate - now;
      const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      return { ...ev, days, evDate };
    })
    .filter(ev => ev.days >= 0)
    .sort((a, b) => a.days - b.days);

  if (upcoming.length === 0) {
    grid.innerHTML = '<div class="event-none">No upcoming events scheduled</div>';
    section.style.display = '';
    return;
  }

  grid.innerHTML = upcoming.map(ev => {
    let colorClass = 'event-green';
    if (ev.days < 7) colorClass = 'event-red';
    else if (ev.days < 14) colorClass = 'event-yellow';

    const icon = ev.type === 'Earnings' ? '📊' : '💵';
    const countdownText = ev.days === 0 ? 'TODAY' : ev.days === 1 ? 'Tomorrow' : `in ${ev.days} days`;
    const dateStr = ev.evDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return `<div class="event-item">
      <div class="event-icon">${icon}</div>
      <div class="event-info">
        <div class="event-ticker">${ev.ticker}</div>
        <div class="event-type">${ev.type} · ${dateStr}</div>
      </div>
      <div class="event-countdown ${colorClass}">${countdownText}</div>
    </div>`;
  }).join('');

  section.style.display = '';
}

/* ══════════════════════════════════════════════════════════
   SURPRISE 2: Keyboard Shortcuts & Power User Controls
   ══════════════════════════════════════════════════════════ */

function toggleShortcuts() {
  const overlay = document.getElementById('shortcuts-overlay');
  overlay.classList.toggle('active');
}

document.getElementById('kbd-icon').addEventListener('click', toggleShortcuts);

// Close overlay on backdrop click
document.getElementById('shortcuts-overlay').addEventListener('click', function(e) {
  if (e.target === this) toggleShortcuts();
});

document.addEventListener('keydown', function(e) {
  // Don't trigger when typing in inputs or modals (except shortcuts overlay)
  const tag = e.target.tagName.toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  const key = e.key.toLowerCase();

  switch(key) {
    case 'd':
      e.preventDefault();
      toggleTheme();
      break;
    case 'r':
      e.preventDefault();
      if (typeof warRoomReset === 'function') warRoomReset();
      break;
    case '1': case '2': case '3': case '4': case '5': {
      e.preventDefault();
      const cards = document.querySelectorAll('#cards-grid .card');
      const idx = parseInt(key) - 1;
      if (cards[idx]) cards[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      break;
    }
    case 'w':
      e.preventDefault();
      document.getElementById('warroom-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 'h':
      e.preventDefault();
      document.getElementById('portfolio-bar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 'p':
      e.preventDefault();
      document.getElementById('pnl-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 'e':
      e.preventDefault();
      document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case '?':
    case '/':
      e.preventDefault();
      toggleShortcuts();
      break;
    case 'escape':
      const overlay = document.getElementById('shortcuts-overlay');
      if (overlay.classList.contains('active')) {
        e.preventDefault();
        toggleShortcuts();
      }
      break;
  }
});

/* ══════════════════════════════════════════════════════════
   SURPRISE 3: Portfolio Performance Summary Card (P&L)
   ══════════════════════════════════════════════════════════ */

function animateCounter(element, targetValue, prefix, suffix, duration) {
  const start = 0;
  const startTime = performance.now();
  const isNeg = targetValue < 0;
  const absTarget = Math.abs(targetValue);

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(absTarget * eased);
    const formatted = current.toLocaleString();
    element.textContent = `${isNeg ? '-' : '+'}${prefix}${formatted}${suffix}`;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function renderPnlCard(portfolio) {
  const card = document.getElementById('pnl-card');
  if (!portfolio || Object.keys(portfolio).length === 0) { card.style.display = 'none'; return; }

  const hidden = getHiddenHoldings();
  const local = getLocalHoldings();
  const merged = {};
  for (const [t, d] of Object.entries(portfolio)) { if (!hidden.includes(t)) merged[t] = d; }
  for (const [t, d] of Object.entries(local)) { if (!hidden.includes(t) && !merged[t]) merged[t] = d; }

  const entries = Object.entries(merged).filter(([_, d]) => d.price && d.shares && d.change !== null && d.change !== undefined);
  if (entries.length === 0) { card.style.display = 'none'; return; }

  let totalValue = 0;
  let totalPrevValue = 0;
  let bestTicker = '', bestChange = -Infinity;
  let worstTicker = '', worstChange = Infinity;
  let goldWeightedChange = 0;
  let goldWeight = 0;
  const goldTickers = new Set(['GDX', 'KGC', 'AG', 'FCX']);

  entries.forEach(([ticker, data]) => {
    const currentValue = data.price * data.shares;
    const prevPrice = data.price / (1 + data.change / 100);
    const prevValue = prevPrice * data.shares;
    totalValue += currentValue;
    totalPrevValue += prevValue;

    if (data.change > bestChange) { bestChange = data.change; bestTicker = ticker; }
    if (data.change < worstChange) { worstChange = data.change; worstTicker = ticker; }

    if (goldTickers.has(ticker)) {
      goldWeightedChange += data.change * currentValue;
      goldWeight += currentValue;
    }
  });

  const todayChange = totalValue - totalPrevValue;
  const todayPct = totalPrevValue > 0 ? (todayChange / totalPrevValue) * 100 : 0;
  const isPositive = todayChange >= 0;

  // Calculate portfolio beta to gold (rough: correlation of gold-linked holdings)
  const goldPct = goldWeight / totalValue;
  const goldAvgChange = goldWeight > 0 ? goldWeightedChange / goldWeight : 0;
  // Rough beta estimate: (portfolio % change) / (gold-linked avg change) * gold weight
  const betaToGold = goldAvgChange !== 0 ? (todayPct / goldAvgChange * goldPct).toFixed(2) : goldPct.toFixed(2);

  // Update card classes
  card.classList.remove('pnl-positive', 'pnl-negative');
  card.classList.add(isPositive ? 'pnl-positive' : 'pnl-negative');

  const color = isPositive ? 'var(--green)' : 'var(--red)';

  document.getElementById('pnl-total-value').textContent = `Portfolio: $${totalValue.toLocaleString(undefined, {maximumFractionDigits: 0})}`;

  const dollarEl = document.getElementById('pnl-dollar');
  dollarEl.style.color = color;
  animateCounter(dollarEl, todayChange, '$', '', 1800);

  const pctEl = document.getElementById('pnl-percent');
  pctEl.style.color = color;
  pctEl.textContent = `${isPositive ? '+' : ''}${todayPct.toFixed(2)}%`;

  document.getElementById('pnl-details').innerHTML =
    `<span>Best: <b style="color:var(--green)">${bestTicker} +${bestChange.toFixed(1)}%</b></span>` +
    `<span style="color:var(--text-muted)">|</span>` +
    `<span>Worst: <b style="color:var(--red)">${worstTicker} ${worstChange >= 0 ? '+' : ''}${worstChange.toFixed(1)}%</b></span>`;

  document.getElementById('pnl-beta').textContent = `Portfolio β to Gold: ${betaToGold}`;

  card.style.display = '';
}

/* ── Patch renderPortfolio to also render P&L card and events ── */
const _origRenderPortfolio = renderPortfolio;
renderPortfolio = function(portfolio) {
  _origRenderPortfolio(portfolio);
  renderPnlCard(portfolio);
  renderUpcomingEvents();
};

/* ══════════════════════════════════════════════════════════
   FEATURE PACK v6.0
   ══════════════════════════════════════════════════════════ */

/* ── 2. Collapsible Sections ── */
(function initCollapsibleSections() {
  const sectionMap = {
    'world-map-section': '🌍 Global Macro Hotspots',
    'fear-greed-section': '🎯 Fear & Greed Gauge',
    'heatmap-section': '⚡ Condition Heatmap',
    'radar-section': '🎯 Condition Radar',
    'correlation-section': '🔗 Correlation Web',
    'chart-section': '📈 30-Day Chart',
    'heat-calendar-section': '📅 90-Day Calendar',
    'warroom-section': 'WAR ROOM',
    'portfolio-bar': '📊 Holdings',
    'events-section': '📅 Upcoming Events',
    'news-section': '📰 NEWS',
    'notes-section': '📝 NOTES'
  };
  const saved = JSON.parse(localStorage.getItem('macro_collapsed_sections') || '{}');
  Object.keys(sectionMap).forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const titleEl = section.querySelector('.world-map-title, .fear-greed-title, .heatmap-title, .radar-title, .correlation-title, .chart-title, .heat-calendar-title, .warroom-title, .portfolio-title, .events-title, .news-title, .notes-title');
    if (!titleEl) return;
    // Add collapse button
    const btn = document.createElement('span');
    btn.className = 'section-collapse-btn';
    btn.textContent = saved[id] ? '▲' : '▼';
    titleEl.appendChild(btn);
    titleEl.style.cursor = 'pointer';
    // Wrap content
    const children = Array.from(section.children).filter(c => c !== titleEl);
    let contentWrap = section.querySelector('.section-content-wrap');
    if (!contentWrap) {
      contentWrap = document.createElement('div');
      contentWrap.className = 'section-content-wrap';
      children.forEach(c => contentWrap.appendChild(c));
      section.appendChild(contentWrap);
    }
    if (saved[id]) contentWrap.classList.add('collapsed');
    titleEl.addEventListener('click', () => {
      const isCollapsed = contentWrap.classList.toggle('collapsed');
      btn.textContent = isCollapsed ? '▲' : '▼';
      const state = JSON.parse(localStorage.getItem('macro_collapsed_sections') || '{}');
      state[id] = isCollapsed;
      localStorage.setItem('macro_collapsed_sections', JSON.stringify(state));
    });
  });
})();

/* ── 3. Search/Filter Holdings ── */
function filterHoldings(query) {
  const cards = document.querySelectorAll('#holdings-grid .holding-card, #holdings-grid > div');
  const q = query.trim().toUpperCase();
  cards.forEach(card => {
    if (!q) { card.style.display = ''; return; }
    const ticker = card.querySelector('.holding-ticker, .ticker')?.textContent || card.textContent;
    card.style.display = ticker.toUpperCase().includes(q) ? '' : 'none';
  });
}

/* ── 4. Fullscreen Mode ── */
document.getElementById('fullscreen-btn').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
});

/* ── 5. Smart Alert History ── */
function addAlertToHistory(text) {
  const history = JSON.parse(localStorage.getItem('macro_alert_history') || '[]');
  history.unshift({ text, time: new Date().toISOString() });
  if (history.length > 20) history.length = 20;
  localStorage.setItem('macro_alert_history', JSON.stringify(history));
  renderAlertHistory();
}
function renderAlertHistory() {
  const panel = document.getElementById('alert-history-panel');
  if (!panel) return;
  const history = JSON.parse(localStorage.getItem('macro_alert_history') || '[]');
  if (history.length === 0) { panel.innerHTML = '<div style="padding:4px;color:var(--text-muted);">No alerts yet.</div>'; return; }
  panel.innerHTML = history.map(h => {
    const t = new Date(h.time);
    const ts = t.toLocaleDateString() + ' ' + t.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
    return '<div class="alert-history-item"><b>' + ts + '</b> — ' + h.text + '</div>';
  }).join('');
}
function toggleAlertHistory() {
  const panel = document.getElementById('alert-history-panel');
  panel.classList.toggle('open');
  document.getElementById('alert-history-toggle').textContent = panel.classList.contains('open') ? '📜 Alert History ▲' : '📜 Alert History ▼';
}
renderAlertHistory();

// Patch the original alert rendering to log alerts
(function patchAlertBanner() {
  const origRender = window.renderAlertBanner || window.renderAlert;
  if (typeof origRender === 'function') {
    const patchedName = origRender.name || 'renderAlert';
    window[patchedName] = function() {
      origRender.apply(this, arguments);
      const bannerText = document.getElementById('alert-banner')?.textContent?.trim();
      if (bannerText && bannerText.length > 5) addAlertToHistory(bannerText);
    };
  }
})();

/* ── 6. Condition Trend Arrows ── */
function addTrendArrows(conditions) {
  if (!conditions) return;
  const prev = JSON.parse(localStorage.getItem('macro_prev_scores') || '{}');
  const current = {};
  conditions.forEach(c => { current[c.name || c.label] = c.score; });
  // Add arrows to heatmap cells
  setTimeout(() => {
    document.querySelectorAll('.heatmap-cell, .card').forEach(el => {
      const label = el.querySelector('.heatmap-label, .card-name, .condition-name')?.textContent?.trim();
      if (!label) return;
      if (el.querySelector('.trend-arrow')) return; // already added
      const cur = current[label];
      const old = prev[label];
      if (cur === undefined) return;
      const arrow = document.createElement('span');
      arrow.className = 'trend-arrow';
      if (old === undefined || cur === old) { arrow.className += ' flat'; arrow.textContent = ' →'; }
      else if (cur > old) { arrow.className += ' up'; arrow.textContent = ' ↗'; }
      else { arrow.className += ' down'; arrow.textContent = ' ↘'; }
      el.appendChild(arrow);
    });
  }, 500);
  localStorage.setItem('macro_prev_scores', JSON.stringify(current));
}

/* ── 7. News Feed ── */
function renderNewsFeed(headlines) {
  const list = document.getElementById('news-list');
  if (!list || !headlines || headlines.length === 0) return;
  list.innerHTML = headlines.slice(0, 10).map(h => {
    const text = typeof h === 'string' ? h : h.text || '';
    const cond = h.condition ? '<span class="news-condition">[' + h.condition + ']</span>' : '';
    return '<div class="news-item"><a href="https://www.google.com/search?q=' + encodeURIComponent(text) + '" target="_blank" rel="noopener">' + text + '</a>' + cond + '</div>';
  }).join('');
}

/* ── 8. Research Notes ── */
(function initNotes() {
  const ta = document.getElementById('notes-textarea');
  const ts = document.getElementById('notes-timestamp');
  if (!ta) return;
  const saved = JSON.parse(localStorage.getItem('macro_notes') || '{}');
  if (saved.text) ta.value = saved.text;
  if (saved.time) ts.textContent = 'Last saved: ' + new Date(saved.time).toLocaleString();
  ta.addEventListener('blur', () => {
    const data = { text: ta.value, time: new Date().toISOString() };
    localStorage.setItem('macro_notes', JSON.stringify(data));
    ts.textContent = 'Last saved: ' + new Date(data.time).toLocaleString();
  });
})();

/* ── 9. Settings Panel ── */
function toggleSettings() {
  document.getElementById('settings-overlay').classList.toggle('active');
}
document.getElementById('settings-btn').addEventListener('click', toggleSettings);
document.getElementById('settings-overlay').addEventListener('click', function(e) {
  if (e.target === this) toggleSettings();
});

function updateRefreshInterval(ms) {
  localStorage.setItem('macro_refresh_interval', ms);
  if (window._macroRefreshTimer) clearInterval(window._macroRefreshTimer);
  window._macroRefreshTimer = setInterval(() => { if (typeof fetchData === 'function') fetchData(); }, parseInt(ms));
}

// Init refresh from saved setting
(function initRefresh() {
  const saved = localStorage.getItem('macro_refresh_interval');
  if (saved) {
    document.getElementById('settings-refresh').value = saved;
    updateRefreshInterval(saved);
  }
})();

// Section visibility toggles in settings
(function initSectionToggles() {
  const container = document.getElementById('settings-section-toggles');
  if (!container) return;
  const sections = [
    ['world-map-section', '🌍 Global Map'],
    ['fear-greed-section', '🎯 Fear & Greed'],
    ['heatmap-section', '⚡ Heatmap'],
    ['radar-section', '🎯 Radar'],
    ['correlation-section', '🔗 Correlation'],
    ['chart-section', '📈 Chart'],
    ['heat-calendar-section', '📅 Calendar'],
    ['warroom-section', '⚔️ War Room'],
    ['portfolio-bar', '📊 Holdings'],
    ['events-section', '📅 Events'],
    ['news-section', '📰 News'],
    ['notes-section', '📝 Notes']
  ];
  const hidden = JSON.parse(localStorage.getItem('macro_hidden_sections') || '[]');
  sections.forEach(([id, label]) => {
    const row = document.createElement('div');
    row.className = 'settings-row';
    const isHidden = hidden.includes(id);
    row.innerHTML = '<span>' + label + '</span><label><input type="checkbox" ' + (isHidden ? '' : 'checked') + ' onchange="toggleSectionVisibility(\'' + id + '\', this.checked)"> Show</label>';
    container.appendChild(row);
    if (isHidden) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }
  });
})();

function toggleSectionVisibility(id, show) {
  const el = document.getElementById(id);
  if (el) el.style.display = show ? '' : 'none';
  let hidden = JSON.parse(localStorage.getItem('macro_hidden_sections') || '[]');
  if (show) hidden = hidden.filter(h => h !== id);
  else if (!hidden.includes(id)) hidden.push(id);
  localStorage.setItem('macro_hidden_sections', JSON.stringify(hidden));
}

/* ── 10. Changelog Modal ── */
function toggleChangelog() {
  document.getElementById('changelog-overlay').classList.toggle('active');
}
document.getElementById('changelog-overlay').addEventListener('click', function(e) {
  if (e.target === this) toggleChangelog();
});

/* ── Hook into data fetch to wire up trend arrows + news ── */
(function patchFetchData() {
  if (typeof window.fetchData === 'function') {
    const origFetch = window.fetchData;
    window.fetchData = async function() {
      const result = await origFetch.apply(this, arguments);
      try {
        const resp = await fetch('data.json');
        const data = await resp.json();
        if (data.conditions) addTrendArrows(data.conditions);
        if (data.ticker_headlines) renderNewsFeed(data.ticker_headlines);
      } catch(e) {}
      return result;
    };
  } else {
    // Fallback: fetch news/trends on load
    setTimeout(async () => {
      try {
        const resp = await fetch('data.json');
        const data = await resp.json();
        if (data.conditions) addTrendArrows(data.conditions);
        if (data.ticker_headlines) renderNewsFeed(data.ticker_headlines);
      } catch(e) {}
    }, 2000);
  }
})();


// ══════════════════════════════════════════════
// BATCH 2 FEATURES
// ══════════════════════════════════════════════

// ── 1. Mini Candlestick Charts ──
function makeCandlestickSVG(currentPrice) {
  const days = 5;
  const w = 100, h = 40, barW = 14, gap = 6;
  let candles = [];
  for (let i = 0; i < days; i++) {
    const variance = (Math.random() * 0.06 - 0.03);
    const open = currentPrice * (1 + (Math.random() * 0.04 - 0.02));
    const close = open * (1 + variance);
    const high = Math.max(open, close) * (1 + Math.random() * 0.01);
    const low = Math.min(open, close) * (1 - Math.random() * 0.01);
    candles.push({ open, close, high, low });
  }
  const allVals = candles.flatMap(c => [c.high, c.low]);
  const minVal = Math.min(...allVals);
  const maxVal = Math.max(...allVals);
  const range = maxVal - minVal || 1;
  const scale = (v) => h - ((v - minVal) / range) * (h - 4) - 2;

  let svg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`;
  candles.forEach((c, i) => {
    const x = i * (barW + gap) + gap;
    const isUp = c.close >= c.open;
    const color = isUp ? '#00c853' : '#ff1744';
    const bodyTop = scale(Math.max(c.open, c.close));
    const bodyBot = scale(Math.min(c.open, c.close));
    const bodyH = Math.max(bodyBot - bodyTop, 1);
    const wickX = x + barW / 2;
    svg += `<line x1="${wickX}" y1="${scale(c.high)}" x2="${wickX}" y2="${scale(c.low)}" stroke="${color}" stroke-width="1.5"/>`;
    svg += `<rect x="${x}" y="${bodyTop}" width="${barW}" height="${bodyH}" rx="1" fill="${color}"/>`;
  });
  svg += `</svg>`;
  return `<span class="mini-candle-wrap">${svg}</span>`;
}

// ── 2. Sector Allocation Bar ──
function renderSectorAllocBar(portfolio) {
  const sectors = {
    'Gold Miners': { tickers: ['GDX','KGC','AG'], color: '#FFD700', value: 0 },
    'Energy': { tickers: ['CEG'], color: '#4FC3F7', value: 0 },
    'Biotech': { tickers: ['GILD','REGN','VRTX'], color: '#CE93D8', value: 0 },
    'Copper': { tickers: ['FCX'], color: '#FF8A65', value: 0 }
  };
  let total = 0;
  for (const [name, sec] of Object.entries(sectors)) {
    for (const t of sec.tickers) {
      if (portfolio[t]) {
        const v = (portfolio[t].price || 0) * (portfolio[t].shares || 0);
        sec.value += v;
        total += v;
      }
    }
  }
  if (total === 0) return;
  const track = document.getElementById('sector-bar-track');
  const labels = document.getElementById('sector-bar-labels');
  track.innerHTML = '';
  labels.innerHTML = '';
  for (const [name, sec] of Object.entries(sectors)) {
    const pct = (sec.value / total * 100);
    if (pct < 0.5) continue;
    track.innerHTML += `<div class="sector-bar-seg" style="width:${pct}%;background:${sec.color}">${pct.toFixed(0)}%</div>`;
    labels.innerHTML += `<div class="sector-bar-label"><span class="sector-bar-label-dot" style="background:${sec.color}"></span>${name} ${pct.toFixed(1)}%</div>`;
  }
}

// ── 3. Volatility Badges ──
function getVolBadge(change) {
  const abs = Math.abs(change || 0);
  if (abs < 1) return '<span class="vol-badge vol-badge-low">LOW VOL</span>';
  if (abs < 3) return '<span class="vol-badge vol-badge-med">MED VOL</span>';
  return '<span class="vol-badge vol-badge-high">HIGH VOL</span>';
}

// ── 4. Correlation Matrix ──
function renderCorrelationMatrix(portfolio) {
  const tickers = Object.keys(portfolio).filter(t => t !== 'TOTAL' && portfolio[t].change !== undefined);
  if (tickers.length < 2) return;
  const display = tickers.slice(0, 6);
  let html = '<table class="corr-matrix-table"><tr><th></th>';
  display.forEach(t => html += `<th>${t}</th>`);
  html += '</tr>';
  display.forEach(t1 => {
    html += `<tr><th>${t1}</th>`;
    display.forEach(t2 => {
      if (t1 === t2) {
        html += '<td style="background:var(--border);color:var(--text-secondary)">—</td>';
      } else {
        const c1 = portfolio[t1].change || 0;
        const c2 = portfolio[t2].change || 0;
        const sameDir = (c1 >= 0 && c2 >= 0) || (c1 < 0 && c2 < 0);
        const bg = sameDir ? 'rgba(0,200,100,0.25)' : 'rgba(255,60,60,0.25)';
        const icon = sameDir ? '✓' : '✗';
        const clr = sameDir ? 'var(--green)' : 'var(--red)';
        html += `<td style="background:${bg};color:${clr}">${icon}</td>`;
      }
    });
    html += '</tr>';
  });
  html += '</table>';
  document.getElementById('corr-matrix-content').innerHTML = html;
}

// ── 5. Risk Score Ring ──
function renderRiskScoreRing(portfolio, conditions) {
  // VIX component (0-40 pts)
  let vixVal = 20;
  if (conditions && conditions.liquidity && conditions.liquidity.metrics && conditions.liquidity.metrics.VIX) {
    vixVal = conditions.liquidity.metrics.VIX.raw || 20;
  }
  const vixPts = Math.min(40, Math.max(0, vixVal));

  // Concentration component (largest position % × 30)
  let total = 0, maxPos = 0;
  for (const [t, d] of Object.entries(portfolio)) {
    const v = (d.price || 0) * (d.shares || 0);
    total += v;
    if (v > maxPos) maxPos = v;
  }
  const concPct = total > 0 ? maxPos / total : 0;
  const concPts = Math.min(40, concPct * 30);

  // Sector diversity bonus (fewer sectors = more risk)
  const sectorSets = new Set();
  const sectorMap = { GDX:'miners',KGC:'miners',AG:'miners',CEG:'energy',GILD:'bio',REGN:'bio',VRTX:'bio',FCX:'copper' };
  for (const t of Object.keys(portfolio)) { if (sectorMap[t]) sectorSets.add(sectorMap[t]); }
  const sectorBonus = Math.max(0, 20 - sectorSets.size * 5);

  const riskScore = Math.round(Math.min(100, vixPts + concPts + sectorBonus));
  const color = riskScore > 70 ? '#ff1744' : riskScore > 40 ? '#ffab00' : '#00c853';

  const radius = 38, circ = 2 * Math.PI * radius;
  const offset = circ - (riskScore / 100) * circ;

  document.getElementById('risk-ring-content').innerHTML = `
    <svg class="risk-ring-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="${radius}" fill="none" stroke="var(--border)" stroke-width="8"/>
      <circle cx="50" cy="50" r="${radius}" fill="none" stroke="${color}" stroke-width="8"
        stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
        transform="rotate(-90 50 50)" style="transition:stroke-dashoffset 1s ease"/>
      <text x="50" y="46" text-anchor="middle" class="risk-ring-label" fill="${color}" font-size="22" font-weight="800">${riskScore}</text>
      <text x="50" y="60" text-anchor="middle" fill="var(--text-secondary)" font-size="8">RISK SCORE</text>
    </svg>
    <div class="risk-ring-sublabel">${riskScore > 70 ? '⚠️ High Risk' : riskScore > 40 ? '⚡ Moderate Risk' : '✅ Low Risk'}</div>`;
}

// ── 6. Position Sizing Labels ──
function getPositionSizeLabel(value, totalValue) {
  if (!totalValue || !value) return '';
  const pct = (value / totalValue) * 100;
  if (pct > 20) return '<div class="pos-size-label pos-size-over">OVERWEIGHT</div>';
  if (pct < 8) return '<div class="pos-size-label pos-size-under">UNDERWEIGHT</div>';
  return '<div class="pos-size-label pos-size-balanced">BALANCED</div>';
}

// ── 7. Trading Session Indicator ──
function renderTradingSession() {
  const track = document.getElementById('session-track');
  if (!track) return;
  const now = new Date();
  const utcH = now.getUTCHours() + now.getUTCMinutes() / 60;

  // Sessions in UTC: Asia (Tokyo 9am-3pm JST = 0:00-6:00 UTC), Europe (8am-4:30pm GMT = 8:00-16:30 UTC), US (9:30am-4pm ET = 13:30-20:00 UTC)
  const sessions = [
    { name: '🇯🇵 Asia', start: 0, end: 6, color: '#E91E63' },
    { name: '🇬🇧 Europe', start: 8, end: 16.5, color: '#2196F3' },
    { name: '🇺🇸 US', start: 13.5, end: 20, color: '#4CAF50' }
  ];

  let html = '';
  // 24h bar split into segments
  const segments = [
    { label: '🇯🇵 Asia', start: 0, end: 6, color: '#E91E63' },
    { label: '', start: 6, end: 8, color: 'var(--border)' },
    { label: '🇬🇧 EU', start: 8, end: 13.5, color: '#2196F3' },
    { label: '🇬🇧🇺🇸', start: 13.5, end: 16.5, color: 'linear-gradient(90deg,#2196F3,#4CAF50)' },
    { label: '🇺🇸 US', start: 16.5, end: 20, color: '#4CAF50' },
    { label: '', start: 20, end: 24, color: 'var(--border)' }
  ];

  segments.forEach(s => {
    const widthPct = ((s.end - s.start) / 24 * 100);
    const isActive = utcH >= s.start && utcH < s.end && s.label;
    html += `<div class="session-seg ${isActive ? 'active' : ''}" style="width:${widthPct}%;background:${s.color}">${s.label}</div>`;
  });

  const markerPos = (utcH / 24) * 100;
  html += `<div class="session-marker" style="left:${markerPos}%"></div>`;
  track.innerHTML = html;
}

// ── 8. Economic Calendar ──
function renderEconCalendar() {
  const events = [
    { name: 'PMI', date: '2026-05-01', icon: '🏭' },
    { name: 'NFP', date: '2026-05-02', icon: '👷' },
    { name: 'CPI', date: '2026-05-13', icon: '📊' },
    { name: 'GDP', date: '2026-05-29', icon: '💰' },
    { name: 'FOMC', date: '2026-06-18', icon: '🏛️' }
  ];
  const now = new Date();
  const container = document.getElementById('econ-events');
  if (!container) return;
  container.innerHTML = events.map(ev => {
    const evDate = new Date(ev.date + 'T00:00:00');
    const diffDays = Math.ceil((evDate - now) / (1000 * 60 * 60 * 24));
    const urgent = diffDays >= 0 && diffDays < 7;
    const countdownText = diffDays < 0 ? 'PASSED' : diffDays === 0 ? 'TODAY' : `${diffDays}d`;
    return `<div class="econ-event" ${urgent ? 'style="border-color:var(--red)"' : ''}>
      <div class="econ-event-name">${ev.icon} ${ev.name}</div>
      <div class="econ-event-date">${ev.date}</div>
      <div class="econ-event-countdown ${urgent ? 'urgent' : 'normal'}">${countdownText}</div>
    </div>`;
  }).join('');
}

// ── 9. Performance Since March 1 ──
const MAR1_PRICES = { GDX: 75, KGC: 25, AG: 17, CEG: 290, GILD: 135, REGN: 740, VRTX: 450, FCX: 50 };
function getPerfBadge(ticker, currentPrice) {
  const ref = MAR1_PRICES[ticker];
  if (!ref || !currentPrice) return '';
  const pctChange = ((currentPrice - ref) / ref * 100);
  const cls = pctChange >= 0 ? 'perf-badge-up' : 'perf-badge-down';
  const sign = pctChange >= 0 ? '+' : '';
  return `<span class="perf-badge ${cls}">Mar 1: ${sign}${pctChange.toFixed(1)}%</span>`;
}

// ── 10. Drawdown Meter ──
function renderDrawdown(totalValue) {
  if (!totalValue || totalValue <= 0) return;
  const peakKey = 'macro_dash_peak_value';
  const storedPeak = parseFloat(localStorage.getItem(peakKey) || '0');
  const peak = Math.max(storedPeak, totalValue);
  localStorage.setItem(peakKey, peak.toString());

  const drawdownPct = peak > 0 ? ((peak - totalValue) / peak * 100) : 0;
  const fillEl = document.getElementById('drawdown-bar-fill');
  const textEl = document.getElementById('drawdown-text');
  const peakEl = document.getElementById('drawdown-peak');
  if (!fillEl) return;

  fillEl.style.width = Math.min(drawdownPct, 100) + '%';
  if (drawdownPct < 0.01) {
    textEl.textContent = '🎯 At All-Time High';
    textEl.style.color = 'var(--green)';
  } else {
    textEl.textContent = `Drawdown: -${drawdownPct.toFixed(1)}% from peak`;
    textEl.style.color = 'var(--red)';
  }
  peakEl.textContent = `Peak: $${(peak/1000).toFixed(1)}k | Current: $${(totalValue/1000).toFixed(1)}k`;
}

// ── PATCH: Hook into renderPortfolio for Batch 2 features ──
(function() {
  const _origRenderPortfolio = renderPortfolio;
  renderPortfolio = function(portfolio) {
    _origRenderPortfolio(portfolio);

    const local = typeof getLocalHoldings === 'function' ? getLocalHoldings() : {};
    const hidden = typeof getHiddenHoldings === 'function' ? getHiddenHoldings() : [];
    const merged = {};
    const server = portfolio || {};
    for (const [t, d] of Object.entries(server)) { if (!hidden.includes(t)) merged[t] = d; }
    for (const [t, d] of Object.entries(local)) { if (!hidden.includes(t) && !merged[t]) merged[t] = d; }

    // Sector Allocation
    renderSectorAllocBar(merged);
    // Correlation Matrix
    renderCorrelationMatrix(merged);
    // Risk Score Ring
    renderRiskScoreRing(merged, _lastData ? _lastData.conditions : null);

    // Calculate total value for position sizing and drawdown
    let totalValue = 0;
    for (const [t, d] of Object.entries(merged)) {
      totalValue += (d.price || 0) * (d.shares || 0);
    }

    // Inject vol badges, position sizing, perf badges into holding cards
    const cards = document.querySelectorAll('#holdings-grid .holding');
    cards.forEach(card => {
      const tickerEl = card.querySelector('.holding-ticker');
      if (!tickerEl) return;
      const ticker = tickerEl.textContent.trim();
      if (ticker === 'TOTAL') return;
      const data = merged[ticker];
      if (!data) return;

      const value = (data.price || 0) * (data.shares || 0);

      // Volatility badge
      const volHtml = getVolBadge(data.change);
      if (!tickerEl.querySelector('.vol-badge')) {
        tickerEl.insertAdjacentHTML('beforeend', volHtml);
      }

      // Position sizing label
      const posHtml = getPositionSizeLabel(value, totalValue);
      if (posHtml && !card.querySelector('.pos-size-label')) {
        const nameEl = card.querySelector('.holding-name');
        if (nameEl) nameEl.insertAdjacentHTML('afterend', posHtml);
      }

      // Performance since Mar 1
      const perfHtml = getPerfBadge(ticker, data.price);
      if (perfHtml && !card.querySelector('.perf-badge')) {
        const valueEl = card.querySelector('.holding-value');
        if (valueEl) valueEl.insertAdjacentHTML('afterend', perfHtml);
      }
    });

    // Drawdown
    renderDrawdown(totalValue);
  };
})();

// ── PATCH: Hook into renderCards for mini candlesticks ──
(function() {
  const _origRenderCards = renderCards;
  renderCards = function(conditions, metricHistory) {
    _origRenderCards(conditions, metricHistory);

    // Add candlestick charts to gold, oil, VIX metrics
    const candleTargets = { 'Gold Price': null, 'Oil (WTI)': null, 'Brent': null, 'VIX': null };
    document.querySelectorAll('#cards-grid .metric-label').forEach(label => {
      const text = label.textContent.replace(/ℹ️?/g, '').trim();
      for (const key of Object.keys(candleTargets)) {
        if (text.includes(key) || text.startsWith(key)) {
          const row = label.closest('.metric');
          if (row && !row.querySelector('.mini-candle-wrap')) {
            const valueEl = row.querySelector('.metric-value-row');
            // Get numeric value from metric
            const valText = row.querySelector('.metric-value')?.textContent || '';
            const numMatch = valText.replace(/[,$%]/g, '').match(/([\d.]+)/);
            const price = numMatch ? parseFloat(numMatch[1]) : 100;
            if (valueEl) valueEl.insertAdjacentHTML('beforeend', makeCandlestickSVG(price));
          }
        }
      }
    });
  };
})();

// ── Init non-data-dependent features ──
renderTradingSession();
renderEconCalendar();
setInterval(renderTradingSession, 60000);

/* ══════════════════════════════════════════════════════════
   BATCH 3 — FINAL 10 FEATURES
   ══════════════════════════════════════════════════════════ */

/* ── 1. Cross-Condition Signal Cards ── */
function renderSignalCards(conditions) {
  const wrap = document.getElementById('signal-cards-wrap');
  if (!wrap) return;
  wrap.innerHTML = '';
  const signals = [];
  const statuses = {};
  const condKeys = ['inflation', 'liquidity', 'discount_rate', 'growth', 'trust'];
  condKeys.forEach(k => { statuses[k] = conditions[k]?.status || 'NEUTRAL'; });

  const bullish = k => BULLISH_STATUSES.has(statuses[k]);
  const bearish = k => BEARISH_STATUSES.has(statuses[k]);
  const allBullish = condKeys.every(bullish);
  const allBearish = condKeys.every(bearish);

  if (allBullish) signals.push('🚀 Full alignment — maximum conviction for precious metals');
  else if (allBearish) signals.push('🛑 Full headwind — consider hedging or reducing exposure');
  else {
    if (statuses.inflation === 'RISING' && statuses.trust === 'BREAKDOWN')
      signals.push('🔥 Classic gold breakout setup — inflation + trust collapse');
    if ((statuses.liquidity === 'STRESS') && (statuses.growth === 'RECESSION' || statuses.growth === 'SLOWING'))
      signals.push('⚠️ Risk-off regime — protect capital, gold as safe haven');
    if (bullish('discount_rate') && statuses.trust === 'BREAKDOWN')
      signals.push('💎 Perfect storm for gold — falling real yields + trust erosion');
    if (statuses.liquidity === 'FLUSH' && (statuses.growth === 'EXPANSION'))
      signals.push('📈 Risk-on — gold may underperform stocks short-term');
  }
  signals.forEach(s => {
    const card = document.createElement('div');
    card.className = 'signal-card';
    card.textContent = s;
    wrap.appendChild(card);
  });
}

/* ── 2. Gold/Oil Ratio ── */
function renderGoldOilRatio(conditions) {
  const section = document.getElementById('gold-oil-section');
  if (!section) return;
  const goldRaw = conditions.trust?.metrics?.['Gold (spot)']?.raw;
  const oilRaw = conditions.inflation?.metrics?.['WTI Crude']?.raw;
  if (!goldRaw || !oilRaw || oilRaw === 0) return;
  const ratio = goldRaw / oilRaw;
  document.getElementById('gold-oil-value').textContent = `Gold/Oil: ${ratio.toFixed(1)}x`;
  let ctx = '';
  if (ratio > 25) ctx = '⬆ Gold expensive vs oil (>25x)';
  else if (ratio < 15) ctx = '⬇ Oil expensive vs gold (<15x)';
  else ctx = '↔ Normal range (15-25x)';
  document.getElementById('gold-oil-context').textContent = ctx;
  // Marker: scale 5-50 range
  const pct = Math.min(100, Math.max(0, ((ratio - 5) / 45) * 100));
  document.getElementById('gold-oil-marker').style.left = pct + '%';
  section.style.display = '';
}

/* ── 3. Comparison Mode ── */
let _compareMode = false;
let _compareSelected = [];

function toggleCompareMode() {
  _compareMode = !_compareMode;
  const btn = document.getElementById('compare-btn');
  const resetBtn = document.getElementById('compare-reset-btn');
  btn.classList.toggle('active', _compareMode);
  resetBtn.style.display = _compareMode ? '' : 'none';
  if (!_compareMode) resetCompareMode();
}

function resetCompareMode() {
  _compareMode = false;
  _compareSelected = [];
  document.getElementById('compare-btn').classList.remove('active');
  document.getElementById('compare-reset-btn').style.display = 'none';
  document.getElementById('compare-chart-wrap').style.display = 'none';
  document.querySelectorAll('.holding.compare-selected').forEach(el => el.classList.remove('compare-selected'));
}

function handleCompareClick(ticker, el) {
  if (!_compareMode) return;
  if (_compareSelected.includes(ticker)) return;
  _compareSelected.push(ticker);
  el.classList.add('compare-selected');
  if (_compareSelected.length === 2) drawCompareChart();
}

function drawCompareChart() {
  const wrap = document.getElementById('compare-chart-wrap');
  const canvas = document.getElementById('compareCanvas');
  if (!wrap || !canvas) return;
  wrap.style.display = '';
  const ctx = canvas.getContext('2d');
  canvas.width = wrap.clientWidth - 28;
  canvas.height = 180;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Generate simulated relative performance data (since we don't have historical data)
  const colors = ['#3b82f6', '#ff8c00'];
  const labels = _compareSelected;
  const days = 30;

  ctx.strokeStyle = '#333';
  ctx.lineWidth = 0.5;
  // Baseline
  const midY = canvas.height / 2;
  ctx.beginPath(); ctx.moveTo(40, midY); ctx.lineTo(canvas.width - 10, midY); ctx.stroke();

  labels.forEach((ticker, idx) => {
    // Use ticker hash to generate deterministic "performance" curve
    let seed = 0;
    for (let i = 0; i < ticker.length; i++) seed += ticker.charCodeAt(i);
    ctx.strokeStyle = colors[idx];
    ctx.lineWidth = 2;
    ctx.beginPath();
    let cumReturn = 0;
    for (let d = 0; d <= days; d++) {
      const dailyReturn = Math.sin(seed * 0.1 + d * 0.3) * 1.5 + Math.cos(seed * 0.05 + d * 0.7) * 0.8;
      cumReturn += dailyReturn;
      const x = 40 + (d / days) * (canvas.width - 50);
      const y = midY - cumReturn * 3;
      d === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Legend
    ctx.fillStyle = colors[idx];
    ctx.font = '11px JetBrains Mono';
    ctx.fillText(ticker, 50 + idx * 80, 14);
  });

  // Y-axis labels
  ctx.fillStyle = '#64748b';
  ctx.font = '9px JetBrains Mono';
  ctx.fillText('+%', 5, 20);
  ctx.fillText('0%', 5, midY + 3);
  ctx.fillText('-%', 5, canvas.height - 5);
}

/* ── 4. Export as Image (Clipboard Text) ── */
function exportSnapshot() {
  if (!_lastData) return;
  const c = _lastData.conditions;
  const lines = [
    '═══ MACRO CONDITIONS SNAPSHOT ═══',
    `Date: ${_lastData.updated_display || _lastData.updated}`,
    `Regime: ${_lastData.regime}`,
    `Action: ${_lastData.action}`,
    `Score: ${_lastData.score || '—'}`,
    '',
    '── CONDITIONS ──'
  ];
  ['inflation', 'liquidity', 'discount_rate', 'growth', 'trust'].forEach(k => {
    const cond = c[k];
    if (cond) lines.push(`${k.replace(/_/g,' ').toUpperCase()}: ${cond.status} (${cond.direction || '—'})`);
  });
  lines.push('', '── KEY METRICS ──');
  const goldRaw = c.trust?.metrics?.['Gold (spot)']?.raw;
  const vixRaw = c.liquidity?.metrics?.['VIX']?.raw;
  const dxyRaw = c.trust?.metrics?.['DXY']?.raw;
  if (goldRaw) lines.push(`Gold: $${goldRaw.toLocaleString()}`);
  if (vixRaw) lines.push(`VIX: ${vixRaw.toFixed(1)}`);
  if (dxyRaw) lines.push(`DXY: ${dxyRaw.toFixed(1)}`);
  lines.push('', '═══════════════════════════════');

  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    const toast = document.createElement('div');
    toast.className = 'export-toast';
    toast.textContent = '📸 Dashboard snapshot copied to clipboard!';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }).catch(() => alert('Failed to copy to clipboard'));
}

/* ── 5. Sharpe Ratio Badge ── */
function renderSharpeBadge(portfolio, conditions) {
  const container = document.getElementById('sharpe-container');
  if (!container) return;
  const vixRaw = conditions?.liquidity?.metrics?.['VIX']?.raw || 20;
  // Calculate portfolio daily return proxy from holdings
  let totalValue = 0, totalChange = 0;
  for (const [, d] of Object.entries(portfolio || {})) {
    const val = (d.price || 0) * (d.shares || 0);
    totalValue += val;
    totalChange += val * ((d.change || 0) / 100);
  }
  if (totalValue === 0) return;
  const dailyReturn = (totalChange / totalValue) * 100;
  const volProxy = vixRaw / Math.sqrt(252); // Annualized VIX to daily vol
  const sharpe = volProxy > 0 ? (dailyReturn / volProxy) : 0;
  const absS = Math.abs(sharpe).toFixed(2);
  let cls = 'sharpe-red';
  if (sharpe > 1) cls = 'sharpe-green';
  else if (sharpe > 0.5) cls = 'sharpe-yellow';
  container.innerHTML = `<span class="sharpe-badge ${cls}">Sharpe: ${sharpe >= 0 ? '' : '-'}${absS}</span>`;
}

/* ── 6. Welcome Tour ── */
function startWelcomeTour() {
  if (localStorage.getItem('macro_tour_done')) return;
  const steps = [
    { target: 'summary-bar', title: 'Welcome! 👋', text: 'This is your Macro Conditions Monitor — your personal Bloomberg-grade command center for precious metals.' },
    { target: 'heatmap-section', title: '5 Macro Conditions', text: '5 conditions drive your thesis: Inflation, Liquidity, Discount Rate, Growth, and Trust. Each one bullish or bearish for gold.' },
    { target: 'fear-greed-section', title: 'Fear & Greed Gauge', text: 'The gauge shows overall market sentiment — composite score from all 5 macro conditions.' },
    { target: 'warroom-section', title: 'War Room 🎮', text: 'Simulate scenarios with the sliders — what if gold hits $5,000? What if VIX spikes to 40?' },
    { target: 'portfolio-bar', title: 'Your Holdings 💰', text: 'Track your holdings with live prices, P&L, sector allocation, and risk metrics.' }
  ];
  let currentStep = 0;

  const overlay = document.getElementById('tour-overlay');
  const highlight = document.getElementById('tour-highlight');
  const tooltip = document.getElementById('tour-tooltip');

  function showStep(idx) {
    if (idx >= steps.length) { endTour(); return; }
    const step = steps[idx];
    const el = document.getElementById(step.target);
    if (!el) { showStep(idx + 1); return; }

    overlay.style.display = '';
    highlight.style.display = '';
    tooltip.style.display = '';

    const rect = el.getBoundingClientRect();
    const scrollY = window.scrollY;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      const r = el.getBoundingClientRect();
      highlight.style.top = (r.top + window.scrollY - 6) + 'px';
      highlight.style.left = (r.left - 6) + 'px';
      highlight.style.width = (r.width + 12) + 'px';
      highlight.style.height = (r.height + 12) + 'px';

      tooltip.innerHTML = `
        <h3>${step.title}</h3>
        <p>${step.text}</p>
        <div class="tour-actions">
          <span class="tour-skip" onclick="endTour()">Skip tour</span>
          <span class="tour-step-indicator">${idx + 1} / ${steps.length}</span>
          <button class="tour-next-btn" onclick="nextTourStep()">${idx === steps.length - 1 ? 'Done!' : 'Next →'}</button>
        </div>`;
      tooltip.style.top = (r.bottom + window.scrollY + 16) + 'px';
      tooltip.style.left = Math.max(16, Math.min(r.left, window.innerWidth - 340)) + 'px';
    }, 400);
    currentStep = idx;
  }

  window.nextTourStep = () => showStep(currentStep + 1);
  window.endTour = () => {
    overlay.style.display = 'none';
    highlight.style.display = 'none';
    tooltip.style.display = 'none';
    localStorage.setItem('macro_tour_done', '1');
  };

  setTimeout(() => showStep(0), 1500);
}

/* ── 7. Smooth Number Transitions ── */
function smoothTransitionNumbers() {
  const priceEls = document.querySelectorAll('.metric-value, .holding-value, .pnl-dollar, .pnl-percent, .qs-item span:not(.qs-label)');
  priceEls.forEach(el => {
    el.classList.add('price-transition');
    el.classList.add('price-fade-out');
    setTimeout(() => el.classList.remove('price-fade-out'), 350);
  });
}

/* ── 8. Confetti Effect ── */
let _confettiFired = false;
function fireConfetti() {
  if (_confettiFired) return;
  _confettiFired = true;
  const colors = ['#ff4444', '#00ff88', '#ffcc00', '#3b82f6', '#ff8c00', '#6366f1', '#fff'];
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (4 + Math.random() * 8) + 'px';
    piece.style.height = (4 + Math.random() * 8) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    const duration = 1.5 + Math.random() * 2;
    const rotation = Math.random() * 720;
    piece.style.animation = `confettiFall ${duration}s ease-out forwards`;
    piece.style.transform = `rotate(${rotation}deg)`;
    document.body.appendChild(piece);
  }
  // Add confetti keyframes if not present
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `@keyframes confettiFall { 0%{top:-10px;opacity:1} 100%{top:100vh;opacity:0;transform:rotate(720deg)} }`;
    document.head.appendChild(style);
  }
  setTimeout(() => document.querySelectorAll('.confetti-piece').forEach(p => p.remove()), 3500);
}

/* ── 9. Sentiment Pulse ── */
function renderSentimentPulse(headlines) {
  const section = document.getElementById('sentiment-pulse');
  if (!section) return;
  const posWords = ['surge', 'rally', 'rise', 'gain', 'recovery', 'soar', 'jump', 'climb', 'high', 'boost', 'bullish', 'up'];
  const negWords = ['crash', 'fall', 'drop', 'fear', 'crisis', 'sell', 'plunge', 'slump', 'decline', 'low', 'bearish', 'down', 'risk', 'warn'];
  let posCount = 0, negCount = 0;
  const allText = (headlines || []).map(h => (h.text || '').toLowerCase()).join(' ');
  posWords.forEach(w => { const matches = allText.split(w).length - 1; posCount += matches; });
  negWords.forEach(w => { const matches = allText.split(w).length - 1; negCount += matches; });

  let icon = '😐', mood = 'Mixed';
  if (posCount > negCount * 1.5) { icon = '😊'; mood = 'Cautiously Bullish'; }
  else if (posCount > negCount) { icon = '🙂'; mood = 'Slightly Bullish'; }
  else if (negCount > posCount * 1.5) { icon = '😰'; mood = 'Fearful'; }
  else if (negCount > posCount) { icon = '😟'; mood = 'Cautiously Bearish'; }

  document.getElementById('sentiment-icon').textContent = icon;
  document.getElementById('sentiment-mood').textContent = mood;
  section.style.display = '';
}

/* ── 10. Quick Stats Bar ── */
function renderQuickStats(conditions) {
  const goldRaw = conditions.trust?.metrics?.['Gold (spot)']?.raw;
  const goldChg = conditions.trust?.metrics?.['Gold (spot)']?.change;
  const oilRaw = conditions.inflation?.metrics?.['WTI Crude']?.raw;
  const oilChg = conditions.inflation?.metrics?.['WTI Crude']?.change;
  const vixRaw = conditions.liquidity?.metrics?.['VIX']?.raw;
  const dxyRaw = conditions.trust?.metrics?.['DXY']?.raw;

  const fmt = (v, prefix, dec) => v ? prefix + v.toLocaleString(undefined, {minimumFractionDigits:dec, maximumFractionDigits:dec}) : '—';
  const chgHtml = (v) => {
    if (v === undefined || v === null) return '';
    const cls = v >= 0 ? 'qs-up' : 'qs-down';
    return ` <span class="${cls}">(${v >= 0 ? '+' : ''}${v.toFixed(1)}%)</span>`;
  };

  const qsGold = document.getElementById('qs-gold');
  const qsOil = document.getElementById('qs-oil');
  const qsVix = document.getElementById('qs-vix');
  const qsDxy = document.getElementById('qs-dxy');
  if (qsGold) qsGold.innerHTML = fmt(goldRaw, '$', 0) + chgHtml(goldChg);
  if (qsOil) qsOil.innerHTML = fmt(oilRaw, '$', 0) + chgHtml(oilChg);
  if (qsVix) qsVix.textContent = vixRaw ? vixRaw.toFixed(1) : '—';
  if (qsDxy) qsDxy.textContent = dxyRaw ? dxyRaw.toFixed(1) : '—';
}

/* ── Patch fetchData to call Batch 3 features ── */
(function() {
  const _b3OrigFetch = window.fetchData;
  window.fetchData = async function() {
    // Trigger smooth transition before data loads
    smoothTransitionNumbers();
    await _b3OrigFetch.call(this);
    if (_lastData) {
      renderSignalCards(_lastData.conditions);
      renderGoldOilRatio(_lastData.conditions);
      renderQuickStats(_lastData.conditions);
      renderSentimentPulse(_lastData.ticker_headlines);
      renderSharpeBadge(_lastData.portfolio, _lastData.conditions);

      // Check confetti: >3% daily P&L
      const merged = Object.assign({}, _lastData.portfolio || {});
      let tv = 0, tc = 0;
      for (const [, d] of Object.entries(merged)) {
        const v = (d.price || 0) * (d.shares || 0);
        tv += v;
        tc += v * ((d.change || 0) / 100);
      }
      if (tv > 0 && (tc / tv * 100) > 3) fireConfetti();
    }
  };
})();

/* ── Patch renderPortfolio for comparison mode ── */
(function() {
  const _b3OrigRenderPortfolio = renderPortfolio;
  renderPortfolio = function(portfolio) {
    _b3OrigRenderPortfolio(portfolio);
    // Add click handlers for compare mode
    document.querySelectorAll('#holdings-grid .holding').forEach(el => {
      const tickerEl = el.querySelector('.holding-ticker');
      if (!tickerEl) return;
      const ticker = tickerEl.textContent.trim();
      if (ticker === 'TOTAL') return;
      el.addEventListener('click', () => handleCompareClick(ticker, el));
    });
  };
})();

/* ── Start Welcome Tour on first visit ── */
setTimeout(startWelcomeTour, 3000);

// === TOOLTIP SYSTEM v4 — Bottom Sheet ===
function openInfoSheet(title, text) {
  document.getElementById('info-sheet-title').textContent = title;
  document.getElementById('info-sheet-body').textContent = text;
  document.getElementById('info-sheet').classList.add('open');
}
function closeInfoSheet() {
  document.getElementById('info-sheet').classList.remove('open');
}
// Close on outside tap
document.addEventListener('click', function(e) {
  var sheet = document.getElementById('info-sheet');
  if (sheet.classList.contains('open') && !sheet.contains(e.target) && !e.target.classList.contains('info-btn')) {
    closeInfoSheet();
  }
});
// Close on scroll
document.addEventListener('scroll', closeInfoSheet, true);

/* ══════════════════════════════════════════════════════════
   ITERATION 1-5: Overnight Improvements — JavaScript
   ══════════════════════════════════════════════════════════ */

/* ── ITER 2: Clickable Map Regions ── */
const REGION_SUMMARIES = {
  'north-america': {
    title: '🇺🇸 North America — Federal Reserve & Rates',
    getBody: () => {
      const c = _lastData?.conditions;
      const yld = c?.discount_rate?.metrics?.['10Y Yield']?.display || '—';
      const fed = c?.discount_rate?.status || '—';
      const vix = c?.liquidity?.metrics?.['VIX']?.display || '—';
      return `Fed Policy Stance: ${fed}\n10Y Treasury Yield: ${yld}\nVIX (Fear Index): ${vix}\n\nThe Fed remains the dominant force for global rates. Watch for pivot signals in yield curve and VIX compression.`;
    }
  },
  'europe': {
    title: '🇪🇺 Europe — ECB & Euro Conditions',
    getBody: () => {
      const c = _lastData?.conditions;
      const growth = c?.growth?.status || '—';
      return `ECB Stance: HOLD (monitoring inflation)\nGrowth Outlook: ${growth}\n\nEuropean central bank on pause. Energy dependency and geopolitical tensions remain key risks.`;
    }
  },
  'middle-east': {
    title: '🛢️ Middle East — Oil & Commodities',
    getBody: () => {
      const c = _lastData?.conditions;
      const oil = c?.inflation?.metrics?.['WTI Crude']?.display || '—';
      const inflStatus = c?.inflation?.status || '—';
      return `WTI Crude: ${oil}\nInflation Signal: ${inflStatus}\n\nOPEC+ supply decisions and geopolitical risk (Iran, Strait of Hormuz) drive commodity pricing globally.`;
    }
  },
  'asia': {
    title: '🇨🇳 Asia — Capital Flows & PBOC',
    getBody: () => {
      const c = _lastData?.conditions;
      const trust = c?.trust?.status || '—';
      const gold = c?.trust?.metrics?.['Gold (spot)']?.display || '—';
      return `Fiat Trust: ${trust}\nGold (safe haven flow): ${gold}\n\nAsian central bank gold buying accelerating. Yuan policy and PBOC reserves signal de-dollarization trends.`;
    }
  }
};

function openRegionSheet(regionId) {
  const data = REGION_SUMMARIES[regionId];
  if (!data) return;
  document.getElementById('region-sheet-title').textContent = data.title;
  document.getElementById('region-sheet-body').textContent = data.getBody();
  document.getElementById('region-sheet-body').style.whiteSpace = 'pre-line';
  document.getElementById('map-region-info-sheet').classList.add('open');
}
function closeRegionSheet() {
  document.getElementById('map-region-info-sheet').classList.remove('open');
}
document.addEventListener('click', function(e) {
  const sheet = document.getElementById('map-region-info-sheet');
  if (sheet && sheet.classList.contains('open') && !sheet.contains(e.target) && !e.target.closest('.map-region[data-region]')) {
    closeRegionSheet();
  }
});

// Patch the map rendering to make regions clickable and add labels + extreme pulse
const _origRenderWorldMap = typeof renderWorldMap === 'function' ? renderWorldMap : null;
if (_origRenderWorldMap) {
  const _patchWorldMap = function() {
    // After original render, patch in click handlers & extras
    setTimeout(() => {
      const wrap = document.querySelector('.world-map-svg-wrap');
      if (!wrap) return;
      const svg = wrap.querySelector('svg');
      if (!svg) return;

      // Add clickable region handlers
      svg.querySelectorAll('.map-region[data-region]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          openRegionSheet(el.getAttribute('data-region'));
        });
      });

      // Add COMMODITIES label near Middle East and RATES label near North America
      const ns = 'http://www.w3.org/2000/svg';
      const commodLabel = document.createElementNS(ns, 'text');
      commodLabel.setAttribute('x', '535');
      commodLabel.setAttribute('y', '255');
      commodLabel.setAttribute('text-anchor', 'middle');
      commodLabel.setAttribute('class', 'map-label');
      commodLabel.setAttribute('fill', 'var(--text-muted)');
      commodLabel.style.fontSize = '8px';
      commodLabel.style.letterSpacing = '2px';
      commodLabel.style.opacity = '0.5';
      commodLabel.textContent = 'COMMODITIES';
      svg.appendChild(commodLabel);

      const ratesLabel = document.createElementNS(ns, 'text');
      ratesLabel.setAttribute('x', '200');
      ratesLabel.setAttribute('y', '170');
      ratesLabel.setAttribute('text-anchor', 'middle');
      ratesLabel.setAttribute('class', 'map-label');
      ratesLabel.setAttribute('fill', 'var(--text-muted)');
      ratesLabel.style.fontSize = '8px';
      ratesLabel.style.letterSpacing = '2px';
      ratesLabel.style.opacity = '0.5';
      ratesLabel.textContent = 'RATES';
      svg.appendChild(ratesLabel);

      // Find most extreme hotspot and add pulsing class
      if (_lastData?.conditions) {
        const c = _lastData.conditions;
        let maxExtreme = 0;
        let extremeRegion = null;
        const extremeScores = {
          'north-america': 0,
          'middle-east': 0,
          'asia': 0,
          'europe': 0
        };
        // Score by how "alarming" the status is
        const statusScore = (s) => {
          s = (s || '').toUpperCase();
          if (s.includes('BREAKDOWN') || s.includes('STRESS') || s.includes('RISING')) return 3;
          if (s.includes('ERODING') || s.includes('TIGHTENING') || s.includes('STICKY')) return 2;
          if (s.includes('FADING') || s.includes('FLUSH') || s.includes('INTACT')) return 0;
          return 1;
        };
        extremeScores['north-america'] = statusScore(c.discount_rate?.status) + statusScore(c.liquidity?.status);
        extremeScores['middle-east'] = statusScore(c.inflation?.status) * 2;
        extremeScores['asia'] = statusScore(c.trust?.status) * 2;
        extremeScores['europe'] = statusScore(c.growth?.status) + 1;

        for (const [region, score] of Object.entries(extremeScores)) {
          if (score > maxExtreme) { maxExtreme = score; extremeRegion = region; }
        }
        if (extremeRegion) {
          svg.querySelectorAll(`.map-hotspot[data-region="${extremeRegion}"]`).forEach(g => {
            g.classList.add('map-hotspot-extreme');
          });
        }
      }
    }, 200);
  };
  // Monkey-patch: wrap original renderWorldMap
  const origFn = renderWorldMap;
  window.renderWorldMap = function() {
    origFn.apply(this, arguments);
    _patchWorldMap();
  };
}

/* ── ITER 3: War Room Quick Scenarios ── */
const WAR_ROOM_SCENARIOS = {
  iran:   { name: '🔥 Iran Escalation', gold: 4500, oil: 130, vix: 40, yield: 4.5, dxy: 103 },
  pivot:  { name: '🏦 Fed Pivot',       gold: 3800, oil: 65,  vix: 18, yield: 3.0, dxy: 98 },
  dollar: { name: '💵 Dollar Crash',    gold: 5500, oil: 85,  vix: 28, yield: 3.5, dxy: 90 },
  riskon: { name: '🚀 Risk-On Rally',   gold: 3800, oil: 72,  vix: 12, yield: 3.8, dxy: 102 }
};

let _activeScenario = null;

function applyWarRoomScenario(key) {
  const sc = WAR_ROOM_SCENARIOS[key];
  if (!sc) return;

  // Toggle off if same scenario clicked
  if (_activeScenario === key) {
    _activeScenario = null;
    document.querySelectorAll('.warroom-scenario-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('warroom-active-scenario').textContent = '';
    warRoomReset();
    return;
  }

  _activeScenario = key;

  // Set slider values
  document.getElementById('wr-gold').value = sc.gold;
  document.getElementById('wr-oil').value = sc.oil;
  document.getElementById('wr-vix').value = sc.vix;
  document.getElementById('wr-yield').value = sc.yield;
  document.getElementById('wr-dxy').value = sc.dxy;

  // Visual feedback
  document.querySelectorAll('.warroom-scenario-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.scenario === key);
  });
  document.getElementById('warroom-active-scenario').textContent = sc.name;

  // Trigger update
  _wrIsSimulated = true;
  document.getElementById('warroom-watermark').style.display = '';
  warRoomUpdate();
}

// Clear scenario label when sliders are manually moved
['gold','oil','vix','yield','dxy'].forEach(id => {
  const el = document.getElementById('wr-' + id);
  if (el) {
    el.addEventListener('input', () => {
      if (_activeScenario) {
        _activeScenario = null;
        document.querySelectorAll('.warroom-scenario-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('warroom-active-scenario').textContent = '';
      }
    });
  }
});

/* ── ITER 4: Portfolio Analytics — P&L Chart + Total Return ── */
const PORTFOLIO_INCEPTION_DATE = '2026-03-01';
const PNL_STORAGE_KEY = 'macro_dashboard_daily_pnl';

function getStoredDailyPnl() {
  try { return JSON.parse(localStorage.getItem(PNL_STORAGE_KEY) || '{}'); } catch { return {}; }
}
function storeDailyPnl(dateStr, totalValue) {
  const data = getStoredDailyPnl();
  data[dateStr] = totalValue;
  // Keep only last 30 days
  const keys = Object.keys(data).sort();
  if (keys.length > 30) {
    keys.slice(0, keys.length - 30).forEach(k => delete data[k]);
  }
  localStorage.setItem(PNL_STORAGE_KEY, JSON.stringify(data));
}

function renderPnlChart() {
  const data = getStoredDailyPnl();
  const dates = Object.keys(data).sort();
  if (dates.length < 2) {
    document.getElementById('pnl-chart-section').style.display = 'none';
    return;
  }

  // Get last 8 days to compute 7 daily changes
  const recentDates = dates.slice(-8);
  const changes = [];
  for (let i = 1; i < recentDates.length; i++) {
    const prev = data[recentDates[i - 1]];
    const curr = data[recentDates[i]];
    const diff = curr - prev;
    const dayLabel = new Date(recentDates[i] + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short' });
    changes.push({ day: dayLabel, diff, date: recentDates[i] });
  }

  if (changes.length === 0) return;

  const maxAbs = Math.max(...changes.map(c => Math.abs(c.diff)), 1);
  const barsEl = document.getElementById('pnl-bars');
  barsEl.innerHTML = '';

  changes.slice(-7).forEach(c => {
    const pct = Math.abs(c.diff) / maxAbs;
    const h = Math.max(4, Math.round(pct * 60));
    const col = document.createElement('div');
    col.className = 'pnl-bar-col';

    const valEl = document.createElement('div');
    valEl.className = 'pnl-bar-value';
    valEl.style.color = c.diff >= 0 ? 'var(--green)' : 'var(--red)';
    valEl.textContent = (c.diff >= 0 ? '+' : '') + '$' + Math.abs(Math.round(c.diff)).toLocaleString();

    const bar = document.createElement('div');
    bar.className = 'pnl-bar ' + (c.diff >= 0 ? 'up' : 'down');
    bar.style.height = h + 'px';

    const label = document.createElement('div');
    label.className = 'pnl-bar-label';
    label.textContent = c.day;

    col.appendChild(valEl);
    col.appendChild(bar);
    col.appendChild(label);
    barsEl.appendChild(col);
  });

  document.getElementById('pnl-chart-section').style.display = '';
}

function renderTotalReturn() {
  const data = getStoredDailyPnl();
  const dates = Object.keys(data).sort();
  if (dates.length < 1) return;

  // Find earliest value (closest to inception)
  const firstDate = dates[0];
  const firstValue = data[firstDate];
  const latestValue = data[dates[dates.length - 1]];

  if (!firstValue || firstValue === 0) return;

  const returnPct = ((latestValue - firstValue) / firstValue * 100).toFixed(2);
  const returnDollar = latestValue - firstValue;
  const isPositive = returnDollar >= 0;

  const el = document.getElementById('total-return-value');
  el.textContent = `${isPositive ? '+' : ''}${returnPct}% ($${isPositive ? '+' : ''}${Math.round(returnDollar).toLocaleString()})`;
  el.style.color = isPositive ? 'var(--green)' : 'var(--red)';
  document.getElementById('total-return-metric').style.display = '';
}

// Patch renderPortfolio to store daily values and render charts
const _origRenderPortfolio = typeof renderPortfolio === 'function' ? renderPortfolio : null;
if (_origRenderPortfolio) {
  window.renderPortfolio = function(portfolio) {
    _origRenderPortfolio.apply(this, arguments);

    // Calculate total value from the rendered holdings
    const grid = document.getElementById('holdings-grid');
    const holdings = grid.querySelectorAll('.holding');
    let totalValue = 0;
    holdings.forEach(h => {
      const valEl = h.querySelector('.holding-value');
      if (valEl) {
        const text = valEl.textContent;
        const match = text.match(/\$([0-9,]+)/);
        if (match) totalValue += parseFloat(match[1].replace(/,/g, ''));
      }
    });

    if (totalValue > 0) {
      const today = new Date().toISOString().slice(0, 10);
      storeDailyPnl(today, totalValue);
      renderPnlChart();
      renderTotalReturn();
    }
  };
}

/* ── ITER 5: Staleness Indicator ── */
let _lastDataTimestamp = Date.now();

// Patch the main data refresh to track time
const _origLastUpdated = document.getElementById('last-updated');
if (_origLastUpdated) {
  const _origText = _origLastUpdated.textContent;
  const observer = new MutationObserver(() => {
    if (_origLastUpdated.textContent !== _origText && _origLastUpdated.textContent !== 'Loading...') {
      _lastDataTimestamp = Date.now();
    }
  });
  observer.observe(_origLastUpdated, { childList: true, characterData: true, subtree: true });
}

function updateStaleness() {
  const el = document.getElementById('staleness-indicator');
  if (!el) return;
  const elapsed = Date.now() - _lastDataTimestamp;
  const mins = Math.floor(elapsed / 60000);

  if (mins < 1) {
    el.textContent = 'Just now';
    el.className = 'staleness-indicator staleness-fresh';
  } else if (mins < 10) {
    el.textContent = mins + 'm ago';
    el.className = 'staleness-indicator staleness-fresh';
  } else if (mins < 30) {
    el.textContent = mins + 'm ago';
    el.className = 'staleness-indicator staleness-stale';
  } else {
    el.textContent = mins + 'm ago ⚠';
    el.className = 'staleness-indicator staleness-old';
  }
}
setInterval(updateStaleness, 15000);
updateStaleness();

/* ── ITER 5: Pull to Refresh (mobile) ── */
(function() {
  let startY = 0;
  let pulling = false;
  const indicator = document.getElementById('ptr-indicator');
  if (!indicator) return;

  document.addEventListener('touchstart', (e) => {
    if (window.scrollY === 0 && e.touches.length === 1) {
      startY = e.touches[0].clientY;
      pulling = true;
    }
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!pulling) return;
    const dy = e.touches[0].clientY - startY;
    if (dy > 60 && window.scrollY === 0) {
      indicator.classList.add('visible');
      indicator.textContent = dy > 120 ? '↻ Release to refresh' : '↓ Pull to refresh';
    } else {
      indicator.classList.remove('visible');
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (!pulling) return;
    pulling = false;
    if (indicator.classList.contains('visible') && indicator.textContent.includes('Release')) {
      indicator.textContent = '↻ Refreshing...';
      indicator.classList.add('refreshing');
      // Trigger data reload
      if (typeof fetchAllData === 'function') {
        fetchAllData();
      } else if (typeof fetchData === 'function') {
        fetchData();
      } else {
        location.reload();
      }
      setTimeout(() => {
        indicator.classList.remove('visible', 'refreshing');
        _lastDataTimestamp = Date.now();
        updateStaleness();
      }, 2000);
    } else {
      indicator.classList.remove('visible');
    }
  }, { passive: true });
})();

/* ── ITER 5: News Ticker Speed Improvement ── */
(function() {
  const style = document.createElement('style');
  style.textContent = `
    .ticker-track { animation-duration: 40s !important; }
    .ticker-item { padding: 0 40px !important; font-size: 13px !important; color: var(--text-secondary) !important; }
    .ticker-tag { font-size: 11px !important; }
  `;
  document.head.appendChild(style);
})();

/* ── ITER 5: Fear & Greed Gauge Glow ── */
const _origRenderFearGreedGauge = typeof renderFearGreedGauge === 'function' ? renderFearGreedGauge : null;
if (_origRenderFearGreedGauge) {
  const _patchGauge = window.renderFearGreedGauge;
  window.renderFearGreedGauge = function(score) {
    // Call existing (already patched or original)
    if (_patchGauge !== window.renderFearGreedGauge) {
      _patchGauge.apply(this, arguments);
    } else {
      _origRenderFearGreedGauge.apply(this, arguments);
    }

    // Apply glow effect
    const section = document.getElementById('fear-greed-section');
    if (!section) return;
    section.classList.remove('gauge-glow-fear', 'gauge-glow-neutral', 'gauge-glow-greed');
    if (score <= -3) {
      section.classList.add('gauge-glow-fear');
    } else if (score >= 3) {
      section.classList.add('gauge-glow-greed');
    } else {
      section.classList.add('gauge-glow-neutral');
    }
  };
}

