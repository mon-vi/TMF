import PaystackPop from "@paystack/inline-js";

type Currency = "USD" | "NGN";

export function openPaystackPopup(opts: {
  email: string;
  amount: number;
  currency: Currency;
  onSuccess: () => void;
  onClose: () => void;
}) {
  const paystack = new PaystackPop();
  paystack.newTransaction({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email: opts.email,
    amount: opts.amount,
    currency: opts.currency,
    ref: `TMF_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    onSuccess: () => opts.onSuccess(),
    onClose: () => opts.onClose(),
  });
}
