import { useState, useEffect } from "react";

const FALLBACK_RATE = 1600;
const CACHE_KEY = "tmf_usd_ngn_rate";
const CACHE_TTL = 3_600_000; // 1 hour

interface CachedRate {
  rate: number;
  timestamp: number;
}

function readCachedRate(): number | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed: CachedRate = JSON.parse(raw);
    if (Date.now() - parsed.timestamp < CACHE_TTL) return parsed.rate;
  } catch {
    sessionStorage.removeItem(CACHE_KEY);
  }
  return null;
}

async function fetchLiveRate(): Promise<number> {
  try {
    const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await res.json();
    const rate = data.rates.NGN as number;
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ rate, timestamp: Date.now() }),
    );
    return rate;
  } catch {
    return FALLBACK_RATE;
  }
}

export function useExchangeRate(): number {
  const [rate, setRate] = useState<number>(
    () => readCachedRate() ?? FALLBACK_RATE,
  );

  useEffect(() => {
    let cancelled = false;
    fetchLiveRate().then((r) => {
      if (!cancelled) setRate(r);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return rate;
}
