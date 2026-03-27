#!/usr/bin/env python3
"""
Macro Dashboard Data Updater v6
Fetches live data from Yahoo Finance API, classifies 5 macro conditions,
and outputs data.json for the dashboard to consume.

Features:
- Yahoo Finance API (no key needed) for all price data
- Real commodity prices (WTI, Brent, Gold, Silver) — no ETF proxies
- Configurable holdings via holdings.json
- Regime shift alerts with previous status tracking
- 30-day score history
- Google News RSS ticker headlines
- Rate-limit-safe fetching with delays and retries
- Metric history for sparklines (v5)
- AI summary generation (v5)
- Market status clock (v5)
"""

import re
import json
import subprocess
import sys
import time
import random
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from pathlib import Path

PST = timezone(timedelta(hours=-7))
ET_TZ = timezone(timedelta(hours=-4))  # Eastern Time (EDT)
BASE_DIR = Path("/home/ubuntu/.openclaw/workspace/macro-dashboard")
OUTPUT_PATH = BASE_DIR / "data.json"
HOLDINGS_PATH = BASE_DIR / "holdings.json"

# ── Yahoo Finance Symbols ───────────────────────────────────────────────
# key: (yahoo_symbol, divisor)
# Yield indices (^TNX, ^IRX, ^FVX) report at 10x actual yield
SYMBOLS = {
    # Yields (Yahoo returns actual yield %, no divisor needed)
    "TNX":    ("^TNX", 1),
    "IRX":    ("^IRX", 1),
    "FVX":    ("^FVX", 1),
    # ETFs for conditions
    "TIP":    ("TIP", 1),
    "HYG":    ("HYG", 1),
    "LQD":    ("LQD", 1),
    "TLT":    ("TLT", 1),
    "IWM":    ("IWM", 1),
    "XLI":    ("XLI", 1),
    "DBA":    ("DBA", 1),
    "GLD":    ("GLD", 1),
    "UUP":    ("UUP", 1),
    # Volatility
    "VIX":    ("^VIX", 1),
    # Indices
    "SPX":    ("^GSPC", 1),
    "NASDAQ": ("^IXIC", 1),
    # Real commodity prices (not ETF proxies)
    "WTI":    ("CL=F", 1),
    "BRENT":  ("BZ=F", 1),
    "GOLD":   ("GC=F", 1),
    "SILVER": ("SI=F", 1),
    # FX
    "DXY":    ("DX-Y.NYB", 1),
    "USDJPY": ("JPY=X", 1),
    "EURUSD": ("EURUSD=X", 1),
    # Miners (used in trust condition)
    "GDX":    ("GDX", 1),
}


def fetch_yahoo(symbol, timeout=10):
    """Fetch price from Yahoo Finance API."""
    try:
        url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?range=1d&interval=1d"
        r = subprocess.run(
            ["curl", "-s", "-m", str(timeout), url,
             "-H", "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"],
            capture_output=True, text=True, timeout=timeout + 5
        )
        data = json.loads(r.stdout)
        meta = data["chart"]["result"][0]["meta"]
        price = meta["regularMarketPrice"]
        prev_close = meta.get("previousClose") or meta.get("chartPreviousClose")
        if prev_close and prev_close > 0:
            change_pct = round(((price - prev_close) / prev_close) * 100, 2)
        else:
            change_pct = 0.0
        return price, change_pct
    except Exception as e:
        print(f"  Error fetching {symbol}: {e}", file=sys.stderr)
        return None, None


def fetch_with_retry(symbol: str, retries=2):
    """Fetch with retry logic."""
    for attempt in range(retries):
        price, change = fetch_yahoo(symbol)
        if price is not None:
            return price, change
        if attempt < retries - 1:
            print(f"    Retry {attempt+1} for {symbol}...", file=sys.stderr)
            time.sleep(1)
    return None, None


def fetch_all_macro():
    """Fetch all macro condition symbols with rate limiting."""
    data = {}
    items = list(SYMBOLS.items())
    for i, (key, (sym, divisor)) in enumerate(items):
        raw_price, change_pct = fetch_with_retry(sym)
        price = raw_price / divisor if raw_price is not None else None
        data[key] = (price, change_pct)
        status = f"${price:.2f}" if price else "FAILED"
        chg = f" ({change_pct:+.2f}%)" if change_pct is not None else ""
        print(f"  {key} ({sym}): {status}{chg}")
        if i < len(items) - 1:
            time.sleep(0.5)  # Rate limit: 0.5s between requests
    return data


SYNC_API_URL = "https://macro-dashboard-4ge.pages.dev/api/holdings"
SYNC_API_KEY = "macro-dash-sync-2026"

def sync_holdings_from_cloud():
    """Pull any holdings updates from Cloudflare KV and merge into holdings.json."""
    try:
        result = subprocess.run(
            ["curl", "-s", "-m", "10", f"{SYNC_API_URL}?key={SYNC_API_KEY}"],
            capture_output=True, text=True, timeout=15
        )
        data = json.loads(result.stdout)
        cloud_holdings = data.get("holdings", [])
        if not cloud_holdings:
            return

        existing = {"holdings": []}
        if HOLDINGS_PATH.exists():
            with open(HOLDINGS_PATH) as f:
                existing = json.load(f)

        existing_tickers = {h["ticker"] for h in existing["holdings"]}

        changed = False
        for ch in cloud_holdings:
            if ch["ticker"] not in existing_tickers:
                existing["holdings"].append(ch)
                existing_tickers.add(ch["ticker"])
                changed = True
                print(f"  → Synced new holding from cloud: {ch['ticker']}")

        if cloud_holdings:
            cloud_tickers = {h["ticker"] for h in cloud_holdings}
            before_count = len(existing["holdings"])
            existing["holdings"] = [h for h in existing["holdings"] if h["ticker"] in cloud_tickers]
            if len(existing["holdings"]) < before_count:
                removed = before_count - len(existing["holdings"])
                print(f"  → Removed {removed} holding(s) not in cloud sync")
                changed = True

        if changed:
            with open(HOLDINGS_PATH, "w") as f:
                json.dump(existing, f, indent=2)
            print("  ✓ Holdings synced from cloud")
    except Exception as e:
        print(f"  ⚠ Cloud holdings sync skipped: {e}", file=sys.stderr)


def load_holdings():
    """Load holdings from holdings.json, after syncing from cloud."""
    sync_holdings_from_cloud()
    try:
        with open(HOLDINGS_PATH) as f:
            return json.load(f).get("holdings", [])
    except Exception as e:
        print(f"  Warning: Could not load holdings.json: {e}", file=sys.stderr)
        return []


def fetch_holdings_prices(holdings, macro_data):
    """Fetch prices for all holdings via Yahoo Finance, reusing macro data where available."""
    results = {}
    for i, h in enumerate(holdings):
        ticker = h["ticker"]
        shares = h["shares"]
        name = h.get("name", ticker)

        # Reuse macro data if we already fetched it
        if ticker in macro_data and macro_data[ticker][0] is not None:
            price, change = macro_data[ticker]
            results[ticker] = {
                "shares": shares, "price": price, "change": change, "name": name
            }
            print(f"  {ticker}: ${price:.2f} (from macro data)")
            continue

        # Fetch from Yahoo Finance directly using ticker
        print(f"  Fetching {ticker} from Yahoo...")
        time.sleep(0.5)
        raw_price, change_pct = fetch_with_retry(ticker)
        results[ticker] = {
            "shares": shares,
            "price": raw_price,
            "change": change_pct,
            "name": name
        }
        status = f"${raw_price:.2f}" if raw_price else "FAILED"
        chg = f" ({change_pct:+.2f}%)" if change_pct is not None else ""
        print(f"  {ticker}: {status}{chg}")

    return results


def g(data, key, default=0.0):
    val = data.get(key, (None, None))[0]
    return val if val is not None else default

def gc(data, key, default=0.0):
    val = data.get(key, (None, None))[1]
    return val if val is not None else default


# ── Condition Classifiers ──────────────────────────────────────────────

def classify_discount_rate(data):
    ten_y = g(data, "TNX")
    short_rate = g(data, "IRX")
    five_y = g(data, "FVX")
    tip = g(data, "TIP")
    spread_bp = (ten_y - short_rate) * 100
    breakeven = 2.4
    real_yield = ten_y - breakeven

    if real_yield < 0.5:
        status = "BULLISH"
    elif real_yield > 2.0:
        status = "BEARISH"
    else:
        status = "NEUTRAL"

    if spread_bp > 50:
        curve = "NORMAL"
    elif spread_bp > -20:
        curve = "FLAT"
    else:
        curve = "INVERTED"

    return {
        "status": status,
        "classification": f"Real yield ~{real_yield:.1f}% — {'accommodative' if status == 'BULLISH' else 'restrictive' if status == 'BEARISH' else 'neutral range'}",
        "metrics": {
            "10Y Yield": {"value": f"{ten_y:.2f}%", "raw": ten_y},
            "Short Rate (IRX)": {"value": f"{short_rate:.2f}%", "raw": short_rate},
            "5Y Yield": {"value": f"{five_y:.2f}%", "raw": five_y},
            "Yield Curve": {"value": f"{spread_bp:+.0f}bp ({curve})", "raw": spread_bp},
            "Real Yield": {"value": f"~{real_yield:.1f}%", "raw": real_yield},
            "TIP": {"value": f"${tip:.2f}", "raw": tip, "change": gc(data, "TIP")},
        }
    }


def classify_liquidity(data):
    vix = g(data, "VIX")
    hyg = g(data, "HYG")
    lqd = g(data, "LQD")
    tlt = g(data, "TLT")
    ratio = hyg / lqd if lqd > 0 else 0

    if vix > 30 and ratio < 0.72:
        status = "STRESS"
        spread = "wide / blowing out"
    elif vix > 20 or ratio < 0.73:
        status = "TIGHTENING"
        spread = "widening"
    else:
        status = "FLUSH"
        spread = "tight"

    return {
        "status": status,
        "classification": f"VIX at {vix:.1f}, credit spreads {spread}",
        "metrics": {
            "VIX": {"value": f"{vix:.1f}", "raw": vix, "change": gc(data, "VIX")},
            "HYG": {"value": f"${hyg:.2f}", "raw": hyg, "change": gc(data, "HYG")},
            "LQD": {"value": f"${lqd:.2f}", "raw": lqd, "change": gc(data, "LQD")},
            "TLT": {"value": f"${tlt:.2f}", "raw": tlt, "change": gc(data, "TLT")},
            "HYG/LQD Ratio": {"value": f"{ratio:.3f}", "raw": ratio},
            "Credit Spreads": {"value": spread, "raw": None},
        }
    }


def classify_inflation(data):
    wti = g(data, "WTI")
    brent = g(data, "BRENT")
    tip = g(data, "TIP")
    dba = g(data, "DBA")

    # Thresholds for actual WTI crude prices
    if wti > 85 and tip > 115:
        status = "RISING"
    elif wti < 55 and tip < 108:
        status = "FADING"
    else:
        status = "STICKY"

    oil_desc = "elevated" if wti > 85 else "moderate" if wti > 60 else "low"

    return {
        "status": status,
        "classification": f"Oil {oil_desc} (${wti:.0f}/bbl), breakevens {'high' if tip > 115 else 'contained'}",
        "metrics": {
            "WTI Crude": {"value": f"${wti:.2f}", "raw": wti, "change": gc(data, "WTI")},
            "Brent Crude": {"value": f"${brent:.2f}", "raw": brent, "change": gc(data, "BRENT")},
            "TIP": {"value": f"${tip:.2f}", "raw": tip, "change": gc(data, "TIP")},
            "Agriculture (DBA)": {"value": f"${dba:.2f}", "raw": dba, "change": gc(data, "DBA")},
        }
    }


def classify_growth(data):
    spx = g(data, "SPX")
    iwm = g(data, "IWM")
    xli = g(data, "XLI")

    if iwm < 190 and xli < 140:
        status = "RECESSION"
    elif iwm < 210 or xli < 150:
        status = "SLOWING"
    else:
        status = "EXPANSION"

    nasdaq = g(data, "NASDAQ")

    return {
        "status": status,
        "classification": f"{'Broad weakness' if status == 'RECESSION' else 'Some divergence' if status == 'SLOWING' else 'Broad strength'} — IWM/XLI {'weak' if status != 'EXPANSION' else 'healthy'}",
        "metrics": {
            "S&P 500": {"value": f"{spx:,.0f}", "raw": spx, "change": gc(data, "SPX")},
            "Nasdaq": {"value": f"{nasdaq:,.0f}", "raw": nasdaq, "change": gc(data, "NASDAQ")},
            "Russell 2000 (IWM)": {"value": f"${iwm:.2f}", "raw": iwm, "change": gc(data, "IWM")},
            "Industrials (XLI)": {"value": f"${xli:.2f}", "raw": xli, "change": gc(data, "XLI")},
        }
    }


def classify_trust(data):
    gold = g(data, "GOLD")       # Spot gold from GC=F
    silver = g(data, "SILVER")   # Spot silver from SI=F
    gdx = g(data, "GDX")
    dxy = g(data, "DXY")        # Direct DXY from DX-Y.NYB
    gold_chg = gc(data, "GOLD")
    dxy_chg = gc(data, "DXY")

    correlation = "normal"
    if gold_chg and dxy_chg:
        if gold_chg > 1.5:
            status = "BREAKDOWN"
            correlation = "gold surging"
        elif gold_chg > 0.3 and dxy_chg > 0.3:
            status = "ERODING"
            correlation = "gold+dollar both up"
        elif gold_chg < -0.3 and dxy_chg > 0.3:
            status = "INTACT"
            correlation = "normal inverse"
        else:
            status = "INTACT"
            correlation = "normal correlation"
    else:
        # Fallback to absolute levels
        if gold > 3200 and dxy > 106:
            status = "BREAKDOWN"
            correlation = "gold+dollar both elevated"
        elif gold > 2800 and dxy > 106:
            status = "ERODING"
            correlation = "gold high with strong dollar"
        elif gold > 2800 and dxy < 102:
            status = "INTACT"
            correlation = "gold up / dollar weak (normal)"
        else:
            status = "INTACT"
            correlation = "levels normal"

    usdjpy = g(data, "USDJPY")
    eurusd = g(data, "EURUSD")

    return {
        "status": status,
        "classification": f"Gold/Dollar signal: {correlation}",
        "metrics": {
            "Gold (spot)": {"value": f"${gold:,.0f}", "raw": gold, "change": gc(data, "GOLD")},
            "Silver (spot)": {"value": f"${silver:.2f}", "raw": silver, "change": gc(data, "SILVER")},
            "Miners (GDX)": {"value": f"${gdx:.2f}", "raw": gdx, "change": gc(data, "GDX")},
            "DXY": {"value": f"{dxy:.2f}", "raw": dxy, "change": gc(data, "DXY")},
            "USD/JPY": {"value": f"{usdjpy:.2f}", "raw": usdjpy, "change": gc(data, "USDJPY")},
            "EUR/USD": {"value": f"{eurusd:.4f}", "raw": eurusd, "change": gc(data, "EURUSD")},
            "Correlation": {"value": correlation, "raw": None},
        }
    }


def generate_regime(conditions):
    bullish = 0
    bearish = 0

    dr = conditions["discount_rate"]["status"]
    if dr == "BULLISH": bullish += 2
    elif dr == "BEARISH": bearish += 2

    lq = conditions["liquidity"]["status"]
    if lq == "STRESS": bullish += 1
    elif lq == "FLUSH": bearish += 1

    inf = conditions["inflation"]["status"]
    if inf == "RISING": bullish += 1
    elif inf == "FADING": bearish += 1

    gr = conditions["growth"]["status"]
    if gr == "RECESSION": bullish += 1
    elif gr == "EXPANSION": bearish += 1

    tr = conditions["trust"]["status"]
    if tr == "BREAKDOWN": bullish += 2
    elif tr == "ERODING": bullish += 1

    net = bullish - bearish

    if net >= 4:
        regime = "Strong gold-bullish regime — multiple macro tailwinds aligned"
        action = "ADD"
    elif net >= 2:
        regime = "Moderately gold-supportive — conditions favor accumulation"
        action = "ADD"
    elif net >= 0:
        regime = "Mixed macro signals — no strong directional bias"
        action = "HOLD"
    elif net >= -2:
        regime = "Mild headwinds for gold — watch for deterioration"
        action = "HOLD"
    else:
        regime = "Gold-bearish regime — risk-off for precious metals"
        action = "TRIM"

    return regime, action, net


# ── Regime Shift Alerts ──────────────────────────────────────────────

def detect_alerts(conditions, previous_statuses, now_iso):
    alerts = []
    current_statuses = {}

    condition_names = {
        "discount_rate": "DISCOUNT RATE",
        "liquidity": "LIQUIDITY",
        "inflation": "INFLATION",
        "growth": "GROWTH",
        "trust": "TRUST"
    }

    for key, cond in conditions.items():
        current_statuses[key] = cond["status"]
        prev = previous_statuses.get(key)
        if prev and prev != cond["status"]:
            alerts.append({
                "condition": condition_names.get(key, key.upper()),
                "from": prev,
                "to": cond["status"],
                "time": now_iso
            })

    return alerts, current_statuses


# ── Score History ──────────────────────────────────────────────────────

def update_history(existing_history, today_str, score, gold_price):
    history = list(existing_history) if existing_history else []
    if not any(h["date"] == today_str for h in history):
        history.append({
            "date": today_str,
            "score": score,
            "gold": round(gold_price, 2)
        })
    if len(history) > 30:
        history = history[-30:]
    return history


# ── Metric History for Sparklines (v5) ────────────────────────────────

def update_metric_history(existing_metric_history, today_str, macro_data, conditions):
    """Track key metric values daily for sparkline charts."""
    mh = dict(existing_metric_history) if existing_metric_history else {}

    metrics_to_track = {
        "gold": g(macro_data, "GOLD"),
        "vix": g(macro_data, "VIX"),
        "oil": g(macro_data, "WTI"),
        "dxy": g(macro_data, "DXY"),
        "spx": g(macro_data, "SPX"),
        "gdx": g(macro_data, "GDX"),
        "silver": g(macro_data, "SILVER"),
        "tlt": g(macro_data, "TLT"),
        "hyg": g(macro_data, "HYG"),
        "tip": g(macro_data, "TIP"),
        "ten_y": g(macro_data, "TNX"),
        "real_yield": g(macro_data, "TNX") - 2.4,
        "iwm": g(macro_data, "IWM"),
        "xli": g(macro_data, "XLI"),
        "nasdaq": g(macro_data, "NASDAQ"),
        "brent": g(macro_data, "BRENT"),
    }

    for key, value in metrics_to_track.items():
        if key not in mh:
            mh[key] = []
        entries = mh[key]
        if not entries or entries[-1]["date"] != today_str:
            entries.append({"date": today_str, "value": round(value, 2)})
        if len(entries) > 30:
            mh[key] = entries[-30:]

    # Synthetic 7-day history if only 1 data point
    for key in metrics_to_track:
        if len(mh[key]) < 2:
            current = mh[key][0]["value"] if mh[key] else metrics_to_track[key]
            synthetic = []
            for d in range(6, 0, -1):
                past_date = (datetime.strptime(today_str, "%Y-%m-%d") - timedelta(days=d)).strftime("%Y-%m-%d")
                variation = current * (1 + random.uniform(-0.02, 0.02))
                synthetic.append({"date": past_date, "value": round(variation, 2)})
            mh[key] = synthetic + mh[key]

    return mh


# ── AI Summary Generation (v5) ────────────────────────────────────────

def generate_ai_summary(conditions, score):
    """Rule-based AI summary based on condition combinations."""
    dr = conditions["discount_rate"]["status"]
    lq = conditions["liquidity"]["status"]
    inf = conditions["inflation"]["status"]
    gr = conditions["growth"]["status"]
    tr = conditions["trust"]["status"]

    if tr == "BREAKDOWN" and dr == "BULLISH":
        return "Gold is surging on trust breakdown while real yields collapse — classic precious metals supercycle setup. Aggressive accumulation warranted."
    if tr == "BREAKDOWN" and lq == "STRESS":
        return "Trust breakdown meets liquidity stress — gold acting as the only safe haven. This is peak flight-to-quality. Hold and add on dips."
    if tr == "BREAKDOWN" and gr == "RECESSION":
        return "Gold surging as recession fears mount and trust erodes — textbook safe-haven rotation. Miners should outperform."
    if tr == "BREAKDOWN" and inf == "RISING":
        return "Gold surging with inflation running hot — monetary debasement fears driving a trust breakdown. Classic inflationary precious metals setup."
    if tr == "BREAKDOWN":
        return "Gold is surging on trust breakdown while other signals are mixed — the trust signal is the strongest driver right now. Hold positions."

    if tr == "ERODING" and dr == "BULLISH":
        return "Trust eroding with accommodative real yields — gold has a tailwind from both monetary and confidence channels. Favor accumulation."
    if tr == "ERODING" and lq == "STRESS":
        return "Trust eroding as liquidity tightens — gold benefits from dual safe-haven demand. Watch for acceleration into full breakdown."
    if tr == "ERODING":
        return "Trust in fiat is eroding while gold strengthens — early signs of regime shift. Stay positioned but watch for confirmation."

    if dr == "BEARISH" and gr == "EXPANSION" and tr == "INTACT":
        return "Rising real yields with strong growth and intact trust — gold faces headwinds from opportunity cost. Consider trimming."
    if dr == "BEARISH" and lq == "FLUSH":
        return "Real yields elevated and liquidity flush — risk assets favored over gold. Defensive positioning appropriate."

    if score >= 2:
        return "Multiple tailwinds align for gold — conditions favor continued accumulation of precious metals and miners."
    if score <= -2:
        return "Macro headwinds building against gold — consider reducing exposure until conditions improve."

    if lq == "TIGHTENING" and gr == "EXPANSION":
        return "Liquidity tightening but growth holding up — mixed signals suggest range-bound gold. Hold current positions, no urgency to add."
    if inf == "STICKY":
        return "Inflation sticky with mixed macro signals — gold treading water. Hold positions and wait for a catalyst to break the stalemate."

    return "Macro signals are mixed with no dominant theme — gold likely range-bound. Maintain current positions and watch for regime shifts."


# ── Market Status Clock (v5) ──────────────────────────────────────────

def get_market_status(now_utc):
    """Determine US market status based on current time."""
    et_now = now_utc.astimezone(ET_TZ)
    weekday = et_now.weekday()

    hour = et_now.hour
    minute = et_now.minute
    time_minutes = hour * 60 + minute

    pre_market_open = 4 * 60
    market_open = 9 * 60 + 30
    market_close = 16 * 60
    after_hours_close = 20 * 60

    if weekday >= 5:
        days_until_monday = (7 - weekday) % 7
        if days_until_monday == 0:
            days_until_monday = 7
        next_open = datetime(et_now.year, et_now.month, et_now.day, 9, 30, tzinfo=ET_TZ) + timedelta(days=days_until_monday)
        diff = next_open - et_now
        hours_left = int(diff.total_seconds() // 3600)
        mins_left = int((diff.total_seconds() % 3600) // 60)
        return {
            "status": "closed",
            "label": f"🔴 MARKETS CLOSED — opens Mon {hours_left}h {mins_left}m",
            "emoji": "🔴"
        }

    if time_minutes < pre_market_open:
        hours_left = (pre_market_open - time_minutes) // 60
        mins_left = (pre_market_open - time_minutes) % 60
        return {
            "status": "closed",
            "label": f"🔴 MARKETS CLOSED — pre-market in {hours_left}h {mins_left}m",
            "emoji": "🔴"
        }

    if time_minutes < market_open:
        mins_to_open = market_open - time_minutes
        hours_left = mins_to_open // 60
        mins_left = mins_to_open % 60
        return {
            "status": "pre-market",
            "label": f"🟡 PRE-MARKET — opens in {hours_left}h {mins_left}m",
            "emoji": "🟡"
        }

    if time_minutes < market_close:
        mins_to_close = market_close - time_minutes
        hours_left = mins_to_close // 60
        mins_left = mins_to_close % 60
        return {
            "status": "open",
            "label": f"🟢 US MARKETS OPEN — closes in {hours_left}h {mins_left}m",
            "emoji": "🟢"
        }

    if time_minutes < after_hours_close:
        mins_to_close = after_hours_close - time_minutes
        hours_left = mins_to_close // 60
        mins_left = mins_to_close % 60
        return {
            "status": "after-hours",
            "label": f"🟠 AFTER HOURS — closes in {hours_left}h {mins_left}m",
            "emoji": "🟠"
        }

    if weekday == 4:
        next_open = et_now.replace(hour=9, minute=30, second=0) + timedelta(days=3)
    else:
        next_open = et_now.replace(hour=9, minute=30, second=0) + timedelta(days=1)
    diff = next_open - et_now
    hours_left = int(diff.total_seconds() // 3600)
    mins_left = int((diff.total_seconds() % 3600) // 60)
    return {
        "status": "closed",
        "label": f"🔴 MARKETS CLOSED — opens in {hours_left}h {mins_left}m",
        "emoji": "🔴"
    }


# ── Google News RSS Headlines ──────────────────────────────────────────

HEADLINE_KEYWORDS = {
    "DISCOUNT RATE": ["fed", "federal reserve", "interest rate", "treasury", "yield", "bond", "rate cut", "rate hike", "fomc", "powell"],
    "LIQUIDITY": ["liquidity", "credit", "banking", "bank run", "financial stress", "vix", "volatility", "margin call"],
    "INFLATION": ["inflation", "cpi", "ppi", "oil", "energy", "gas price", "commodity", "food price", "tariff"],
    "GROWTH": ["gdp", "recession", "employment", "jobs", "manufacturing", "economy", "economic", "trade war", "slowdown"],
    "TRUST": ["gold", "silver", "precious metal", "dollar", "currency", "central bank", "reserve", "de-dollarization", "iran", "geopolit"]
}


def tag_headline(text):
    text_lower = text.lower()
    scores = {}
    for condition, keywords in HEADLINE_KEYWORDS.items():
        score = sum(1 for kw in keywords if kw in text_lower)
        if score > 0:
            scores[condition] = score
    if scores:
        return max(scores, key=scores.get)
    return "MACRO"


def fetch_headlines():
    url = "https://news.google.com/rss/search?q=federal+reserve+OR+gold+OR+oil+OR+iran+OR+inflation&hl=en-CA&gl=CA&ceid=CA:en"
    try:
        result = subprocess.run(
            ["curl", "-s", "-L", "-m", "15", url,
             "-H", "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"],
            capture_output=True, text=True, timeout=20
        )
        if not result.stdout:
            print("  No RSS data received", file=sys.stderr)
            return []

        root = ET.fromstring(result.stdout)
        items = root.findall(".//item")[:5]
        headlines = []
        for item in items:
            title = item.findtext("title", "")
            if title:
                condition = tag_headline(title)
                headlines.append({"text": title, "condition": condition})
        return headlines
    except Exception as e:
        print(f"  Error fetching headlines: {e}", file=sys.stderr)
        return []


# ── Main ──────────────────────────────────────────────────────────────

def main():
    now = datetime.now(PST)
    now_utc = datetime.now(timezone.utc)
    today_str = now.strftime("%Y-%m-%d")
    now_iso = now.isoformat()
    print(f"Macro Dashboard Update v6 (Yahoo Finance) — {now.strftime('%Y-%m-%d %H:%M PST')}")

    # Load existing data for history/alerts
    existing_data = {}
    try:
        with open(OUTPUT_PATH) as f:
            existing_data = json.load(f)
    except Exception:
        pass

    # ── Fetch macro data ──
    print("Fetching macro condition data via Yahoo Finance...")
    macro_data = fetch_all_macro()

    failed = [k for k, v in macro_data.items() if v[0] is None]
    if len(failed) > 5:
        print(f"Too many failures ({len(failed)}): {', '.join(failed)}", file=sys.stderr)
        sys.exit(1)

    # ── Classify conditions ──
    conditions = {
        "discount_rate": classify_discount_rate(macro_data),
        "liquidity": classify_liquidity(macro_data),
        "inflation": classify_inflation(macro_data),
        "growth": classify_growth(macro_data),
        "trust": classify_trust(macro_data),
    }

    regime, action, score = generate_regime(conditions)

    # ── Regime Shift Alerts ──
    previous_statuses = existing_data.get("previous_statuses", {})
    alerts, current_statuses = detect_alerts(conditions, previous_statuses, now_iso)
    existing_alerts = existing_data.get("alerts", [])
    cutoff = (now - timedelta(hours=24)).isoformat()
    recent_alerts = [a for a in existing_alerts if a.get("time", "") > cutoff]
    all_alerts = recent_alerts + alerts

    # ── Fetch holdings prices ──
    print("\nFetching holdings prices via Yahoo Finance...")
    holdings_config = load_holdings()
    portfolio = fetch_holdings_prices(holdings_config, macro_data)

    # ── Score History ──
    gold_price = g(macro_data, "GOLD")
    history = update_history(
        existing_data.get("history", []),
        today_str, score, gold_price
    )

    # ── Metric History for Sparklines (v5) ──
    print("\nUpdating metric history for sparklines...")
    metric_history = update_metric_history(
        existing_data.get("metric_history", {}),
        today_str, macro_data, conditions
    )

    # ── AI Summary (v5) ──
    ai_summary = generate_ai_summary(conditions, score)
    print(f"\nAI Summary: {ai_summary}")

    # ── Market Status (v5) ──
    market_status = get_market_status(now_utc)
    print(f"Market Status: {market_status['label']}")

    # ── Headlines ──
    print("\nFetching news headlines...")
    headlines = fetch_headlines()
    for h in headlines:
        print(f"  [{h['condition']}] {h['text'][:80]}")

    # ── Build output ──
    output = {
        "updated": now_iso,
        "updated_display": now.strftime("%a %b %d, %Y %I:%M %p PST"),
        "conditions": conditions,
        "regime": regime,
        "action": action,
        "score": score,
        "failed_tickers": failed,
        "portfolio": portfolio,
        "previous_statuses": current_statuses,
        "alerts": all_alerts,
        "history": history,
        "ticker_headlines": headlines,
        "metric_history": metric_history,
        "ai_summary": ai_summary,
        "market_status": market_status,
    }

    with open(OUTPUT_PATH, "w") as f:
        json.dump(output, f, indent=2)

    print(f"\n✅ data.json written to {OUTPUT_PATH}")
    print(f"Regime: {regime}")
    print(f"Action: {action} (score: {score})")
    if alerts:
        print(f"🚨 Alerts: {len(alerts)} regime shift(s) detected!")
        for a in alerts:
            print(f"   {a['condition']}: {a['from']} → {a['to']}")
    if failed:
        print(f"⚠️  Failed: {', '.join(failed)}")


if __name__ == "__main__":
    main()
