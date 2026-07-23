import { useState, type FormEvent, type Dispatch, type SetStateAction } from "react";

/*
  TODO(payment): replace initiatePaystackCheckout with real Paystack SDK integration.
  Currently stubbed — console.logs the amount and shows a pending state.

  Flag #1: Figma node says "OR ENTER CUSTOM AMOUNT" label and button text are 32px —
  design bug (line-height 20 confirms). Rendered label at text-h4 (20px), button at text-cta (~18px).
  Flag #5: payment integration stubbed.
  Flag #7: .btn-donate is font-semibold while .btn-solid is font-normal — could be
  intentional emphasis on the money button or design drift; worth review.
*/

type Currency = "USD" | "NGN";

const SYMBOL: Record<Currency, string> = { USD: "$", NGN: "\u20A6" };

/* Inline SVG icons — simple shapes, avoid expiring Figma asset URLs */
function LockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="7"
        width="11"
        height="7"
        rx="1"
        fill="white"
      />
      <path
        d="M5 7V5a3 3 0 0 1 6 0v2"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 0L0 3v5.5C0 12.5 4 15 7 16c3-1 7-3.5 7-7.5V3L7 0z"
        fill="currentColor"
      />
    </svg>
  );
}

function initiatePaystackCheckout(amount: number, currency: Currency) {
  // TODO(payment): replace with real Paystack SDK integration
  console.log("Paystack checkout — amount:", amount, "currency:", currency);
  return true;
}

interface Props {
  amount: string;
  onAmountChange: Dispatch<SetStateAction<string>>;
  currency: Currency;
  onCurrencyChange: Dispatch<SetStateAction<Currency>>;
}

export default function DonateForm({
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
}: Props) {
  const [pending, setPending] = useState(false);

  const parsedAmount = parseFloat(amount.replace(/,/g, ""));
  const isValid = !isNaN(parsedAmount) && parsedAmount > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    const success = initiatePaystackCheckout(parsedAmount, currency);
    if (success) {
      setPending(true);
    }
  }

  return (
    <section
      className="bg-white py-16 lg:py-[120px]"
      data-node-id="208:3135"
    >
      <div className="container-page lg:max-w-[640px]">
        <form onSubmit={handleSubmit} noValidate>
          {/* Label */}
          <p className="text-h4 font-sans font-semibold uppercase tracking-[0.7px] text-body-muted mb-6">
            Or Enter Custom Amount
          </p>

          {/* Currency toggle */}
          <div className="flex border border-preset-border mb-20">
            <button
              type="button"
              onClick={() => onCurrencyChange("USD")}
              className={`flex-1 py-3 text-center text-small font-sans font-semibold transition-colors ${
                currency === "USD"
                  ? "bg-accent text-white"
                  : "bg-white text-heading hover:bg-panel"
              }`}
            >
              USD ($)
            </button>
            <button
              type="button"
              onClick={() => onCurrencyChange("NGN")}
              className={`flex-1 py-3 text-center text-small font-sans font-semibold transition-colors ${
                currency === "NGN"
                  ? "bg-accent text-white"
                  : "bg-white text-heading hover:bg-panel"
              }`}
            >
              NGN (&#8358;)
            </button>
          </div>

          {/* Amount input */}
          <div className="flex items-end border-b border-card-divider pb-4 mb-20">
            <span
              className="text-[48px] leading-none font-display font-semibold text-accent mr-3"
              aria-hidden="true"
            >
              {SYMBOL[currency]}
            </span>
            <input
              type="text"
              inputMode="decimal"
              id="donate-amount"
              aria-label={`Enter donation amount in ${currency === "USD" ? "dollars" : "naira"}`}
              placeholder="0.00"
              value={amount}
              onChange={(e) => onAmountChange(e.target.value)}
              disabled={pending}
              className="w-full bg-transparent text-[48px] leading-none font-display font-semibold text-heading placeholder:text-nav-border/50 outline-none border-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!isValid || pending}
            className="btn-donate disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            <LockIcon />
            {pending ? "Processing..." : "Continue to Payment"}
          </button>

          {/* Security badge */}
          <div className="flex items-center justify-center gap-1 opacity-40">
            <ShieldIcon />
            <ShieldIcon />
            <span className="text-small font-sans font-semibold tracking-[1px] uppercase text-body-muted">
              Secured by Paystack
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
