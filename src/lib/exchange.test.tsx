import { renderHook, waitFor, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useExchangeRate } from "./exchange";

const FALLBACK_RATE = 1600;
const CACHE_KEY = "tmf_usd_ngn_rate";

function stubFetch(impl: () => Promise<unknown>) {
  const fetchMock = vi.fn(impl);
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

function liveRateResponse(rate: number) {
  return { json: () => Promise.resolve({ rates: { NGN: rate } }) };
}

beforeEach(() => {
  sessionStorage.clear();
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useExchangeRate", () => {
  it("starts at the fallback rate, then adopts the live rate", async () => {
    stubFetch(() => Promise.resolve(liveRateResponse(1512)));

    const { result } = renderHook(() => useExchangeRate());
    expect(result.current).toBe(FALLBACK_RATE);

    await waitFor(() => expect(result.current).toBe(1512));
  });

  it("caches the fetched rate in sessionStorage", async () => {
    stubFetch(() => Promise.resolve(liveRateResponse(1512)));

    renderHook(() => useExchangeRate());

    await waitFor(() => {
      const cached = sessionStorage.getItem(CACHE_KEY);
      expect(cached).not.toBeNull();
      expect(JSON.parse(cached as string).rate).toBe(1512);
    });
  });

  it("stays at the fallback rate when the fetch fails", async () => {
    stubFetch(() => Promise.reject(new Error("offline")));

    const { result } = renderHook(() => useExchangeRate());
    await act(async () => {});

    expect(result.current).toBe(FALLBACK_RATE);
  });

  it("uses a fresh cached rate without waiting for the network", async () => {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ rate: 1490, timestamp: Date.now() }),
    );
    const fetchMock = stubFetch(
      () => new Promise(() => {}), // never resolves
    );

    const { result } = renderHook(() => useExchangeRate());

    expect(result.current).toBe(1490);
    await act(async () => {});
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(result.current).toBe(1490);
  });

  it("ignores a cache entry older than the TTL", () => {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        rate: 9999,
        timestamp: Date.now() - 3_600_001,
      }),
    );

    const { result } = renderHook(() => useExchangeRate());

    expect(result.current).toBe(FALLBACK_RATE);
  });
});
