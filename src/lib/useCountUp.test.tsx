import { render, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useCountUp } from "./useCountUp";

let rafQueue: FrameRequestCallback[] = [];
let now = 0;

function stubMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  trigger(isIntersecting: boolean) {
    const entry = { isIntersecting } as IntersectionObserverEntry;
    this.callback([entry], this as unknown as IntersectionObserver);
  }
}

function frame(t: number) {
  now = t;
  const callbacks = rafQueue;
  rafQueue = [];
  act(() => {
    callbacks.forEach((cb) => cb(t));
  });
}

function Counter({ target, duration }: { target: number; duration?: number }) {
  const [ref, count] = useCountUp(target, duration);
  return (
    <div ref={ref} data-testid="counter">
      {count}
    </div>
  );
}

beforeEach(() => {
  rafQueue = [];
  now = 0;
  MockIntersectionObserver.instances = [];
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    rafQueue.push(cb);
    return rafQueue.length;
  });
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
  vi.stubGlobal("performance", { now: () => now });
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useCountUp", () => {
  it("jumps straight to the target when reduced motion is preferred", () => {
    stubMatchMedia(true);

    const { getByTestId } = render(<Counter target={250} />);
    expect(getByTestId("counter")).toHaveTextContent("0");

    act(() => {
      MockIntersectionObserver.instances[0].trigger(true);
    });
    frame(0);

    expect(getByTestId("counter")).toHaveTextContent("250");
  });

  it("animates from 0 to the target once visible", () => {
    stubMatchMedia(false);

    const { getByTestId } = render(<Counter target={100} duration={1000} />);

    act(() => {
      MockIntersectionObserver.instances[0].trigger(true);
    });

    frame(0);
    expect(getByTestId("counter")).toHaveTextContent("0");

    frame(500);
    expect(getByTestId("counter")).toHaveTextContent("97");

    frame(1000);
    expect(getByTestId("counter")).toHaveTextContent("100");
  });

  it("does not start before the element is visible", () => {
    stubMatchMedia(false);

    const { getByTestId } = render(<Counter target={100} duration={1000} />);

    act(() => {
      MockIntersectionObserver.instances[0].trigger(false);
    });
    frame(1000);

    expect(getByTestId("counter")).toHaveTextContent("0");
  });
});
