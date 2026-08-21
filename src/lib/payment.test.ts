import { describe, expect, it, vi, beforeEach } from "vitest";

const { ctorSpy, newTransactionMock } = vi.hoisted(() => ({
  ctorSpy: vi.fn(),
  newTransactionMock: vi.fn(),
}));

vi.mock("@paystack/inline-js", () => ({
  default: class {
    constructor() {
      ctorSpy();
    }
    newTransaction = newTransactionMock;
  },
}));

import { openPaystackPopup } from "./payment";

beforeEach(() => {
  ctorSpy.mockClear();
  newTransactionMock.mockClear();
  vi.stubEnv("VITE_PAYSTACK_PUBLIC_KEY", "pk_test_dummy");
});

describe("openPaystackPopup", () => {
  it("opens a transaction with the supplied details", () => {
    const onSuccess = vi.fn();
    const onClose = vi.fn();

    openPaystackPopup({
      email: "donor@example.com",
      amount: 5000,
      currency: "NGN",
      onSuccess,
      onClose,
    });

    expect(ctorSpy).toHaveBeenCalledTimes(1);
    expect(newTransactionMock).toHaveBeenCalledTimes(1);

    const tx = newTransactionMock.mock.calls[0][0];
    expect(tx.key).toBe("pk_test_dummy");
    expect(tx.email).toBe("donor@example.com");
    expect(tx.amount).toBe(5000);
    expect(tx.currency).toBe("NGN");
    expect(tx.ref).toMatch(/^TMF_\d+_[a-z0-9]{6}$/);
  });

  it("generates a unique reference per call", () => {
    openPaystackPopup({
      email: "a@example.com",
      amount: 100,
      currency: "USD",
      onSuccess: vi.fn(),
      onClose: vi.fn(),
    });
    openPaystackPopup({
      email: "b@example.com",
      amount: 200,
      currency: "USD",
      onSuccess: vi.fn(),
      onClose: vi.fn(),
    });

    const [first, second] = newTransactionMock.mock.calls.map(
      (call) => call[0].ref,
    );
    expect(first).not.toBe(second);
  });

  it("wires the success and close callbacks through", () => {
    const onSuccess = vi.fn();
    const onClose = vi.fn();

    openPaystackPopup({
      email: "a@example.com",
      amount: 100,
      currency: "USD",
      onSuccess,
      onClose,
    });

    const tx = newTransactionMock.mock.calls[0][0];
    tx.onSuccess();
    tx.onClose();

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
