import {
  useState,
  type FormEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import { stripePromise } from "@/lib/stripe";
import { openPaystackPopup } from "@/lib/payment";

/*
  TODO(payment): real keys in .env — currently stub values.

  Flag #1: Figma node says "OR ENTER CUSTOM AMOUNT" label and button text are 32px —
  design bug (line-height 20 confirms). Rendered label at text-h4 (20px), button at text-cta (~18px).
  Flag #7: .btn-donate is font-semibold while .btn-solid is font-normal — could be
  intentional emphasis on the money button or design drift; worth review.
  Flag #8: email field not in Figma design 208:3135 — required by both Paystack and Stripe.
*/

type Currency = "USD" | "NGN";

const SYMBOL: Record<Currency, string> = { USD: "$", NGN: "\u20A6" };

function LockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2.5" y="7" width="11" height="7" rx="1" fill="white" />
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

interface Props {
  amount: string;
  onAmountChange: Dispatch<SetStateAction<string>>;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export default function DonateForm({
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
}: Props) {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const parsedAmount = parseFloat(amount.replace(/,/g, ""));
  const amountValid = !isNaN(parsedAmount) && parsedAmount > 0;
  const emailValid = email.trim() !== "";
  const isValid = amountValid && emailValid;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setError("");
    setPending(true);

    const amountInSubunits = Math.round(parsedAmount * 100);

    if (currency === "USD") {
      const stripe = await stripePromise;
      if (!stripe) {
        setError("Payment service unavailable. Please try again.");
        setPending(false);
        return;
      }
      const { error: stripeError } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Donation to TalentMakers Foundation",
              },
              unit_amount: amountInSubunits,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        submitType: "donate",
        successUrl: `${window.location.origin}/donate/thank-you`,
        cancelUrl: `${window.location.origin}/donate`,
        customerEmail: email.trim(),
      });
      if (stripeError) {
        setError(stripeError.message ?? "Payment failed. Please try again.");
        setPending(false);
      }
    } else {
      openPaystackPopup({
        email: email.trim(),
        amount: amountInSubunits,
        currency: "NGN",
        onSuccess() {
          setPending(false);
          navigate("/donate/thank-you");
        },
        onClose() {
          setPending(false);
        },
      });
    }
  }

  return (
    <section className="bg-white py-16 lg:py-[120px]" data-node-id="208:3135">
      <div className="container-page lg:max-w-[640px]">
        <form onSubmit={handleSubmit} noValidate>
          <p className="text-h4 font-sans font-semibold uppercase tracking-[0.7px] text-body-muted mb-6">
            Or Enter Custom Amount
          </p>

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

          <div className="border-b border-card-divider pb-4 mb-6">
            <label
              htmlFor="donate-email"
              className="block text-small font-sans font-semibold uppercase tracking-[0.7px] text-body-muted mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="donate-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={pending}
              placeholder="you@example.com"
              className="w-full bg-transparent text-body font-sans text-heading placeholder:text-nav-border/50 outline-none"
            />
          </div>

          {error && (
            <p
              className="text-small font-sans font-semibold text-red-600 mb-6"
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={!isValid || pending}
            className="btn-donate disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            <LockIcon />
            {pending ? "Processing..." : "Continue to Payment"}
          </button>

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
