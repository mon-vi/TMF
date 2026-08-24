import { LockKeyhole, ShieldCheck } from "lucide-react";
import {
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import { openPaystackPopup } from "@/lib/payment";

type Currency = "USD" | "NGN";

const SYMBOL: Record<Currency, string> = { USD: "$", NGN: "₦" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildStripePaymentLink(email: string): string | null {
  const base = import.meta.env.VITE_STRIPE_PAYMENT_LINK_URL;
  if (!base) return null;
  try {
    const url = new URL(base);
    url.searchParams.set("prefilled_email", email);
    return url.toString();
  } catch {
    return null;
  }
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
  const amountValid = !Number.isNaN(parsedAmount) && parsedAmount > 0;
  const emailValid = EMAIL_PATTERN.test(email.trim());
  const amountTouched = amount.trim() !== "";
  const emailTouched = email.trim() !== "";
  const isValid = amountValid && emailValid;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setError("");
    setPending(true);

    const amountInSubunits = Math.round(parsedAmount * 100);

    if (currency === "USD") {
      const paymentLink = buildStripePaymentLink(email.trim());
      if (!paymentLink) {
        setError(
          "Card payments are temporarily unavailable. Please try again soon or donate in NGN.",
        );
        setPending(false);
        return;
      }
      window.location.assign(paymentLink);
      return;
    }

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

  return (
    <section
      className="relative overflow-hidden bg-white py-20 lg:py-32"
      data-node-id="208:3135"
    >
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="container-page relative">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
          <div className="pt-2 tmf-animate-fade-in-up">
            <p className="eyebrow mb-4 text-xs">Make an impact</p>
            <h2 className="h2-display text-heading">Choose your gift.</h2>
            <p className="mt-5 text-base leading-relaxed text-body-muted">
              Every contribution helps us move talent closer to the opportunity
              it deserves.
            </p>
            <div className="mt-8 border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-body-muted">
              Secure checkout powered by trusted payment partners. Your
              generosity stays focused on people, not overhead.
            </div>
          </div>

          <div className="tmf-glass-panel rounded-card-xl p-4 sm:p-6 lg:p-8 tmf-animate-fade-in-up">
            <form onSubmit={handleSubmit} noValidate>
              <p className="mb-4 text-xs font-bold uppercase tracking-caption text-accent">
                Or enter a custom amount
              </p>

              <div className="mb-8 grid grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-white/70 p-1">
                {(["USD", "NGN"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onCurrencyChange(option)}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                      currency === option
                        ? "bg-accent text-white shadow-md shadow-accent/20"
                        : "text-body-muted hover:bg-violet-50 hover:text-accent"
                    }`}
                  >
                    {option === "USD" ? "USD ($)" : "NGN (₦)"}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 transition-colors focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10 sm:p-6">
                <label
                  htmlFor="donate-amount"
                  className="block text-xs font-bold uppercase tracking-label text-body-muted"
                >
                  Donation amount
                </label>
                <div className="mt-3 flex items-baseline gap-3">
                  <span
                    className="font-display text-4xl font-semibold text-accent"
                    aria-hidden="true"
                  >
                    {SYMBOL[currency]}
                  </span>
                  <input
                    type="text"
                    inputMode="decimal"
                    id="donate-amount"
                    aria-label={`Enter donation amount in ${currency === "USD" ? "dollars" : "naira"}`}
                    aria-invalid={amountTouched && !amountValid}
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    disabled={pending}
                    className="w-full bg-transparent font-display text-4xl font-semibold text-heading outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-5 transition-colors focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10">
                <label
                  htmlFor="donate-email"
                  className="block text-xs font-bold uppercase tracking-label text-body-muted"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="donate-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={pending}
                  placeholder="you@example.com"
                  aria-invalid={emailTouched && !emailValid}
                  aria-describedby={
                    emailTouched && !emailValid
                      ? "donate-email-hint"
                      : undefined
                  }
                  className="mt-3 w-full bg-transparent text-body text-heading outline-none placeholder:text-slate-400"
                />
                {emailTouched && !emailValid && (
                  <p
                    id="donate-email-hint"
                    className="mt-2 text-small font-semibold text-red-600"
                  >
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              {error && (
                <p
                  className="mt-4 text-sm font-semibold text-red-600"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={!isValid || pending}
                className="btn-donate mt-6 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <LockKeyhole className="h-5 w-5" aria-hidden="true" />
                {pending ? "Processing..." : "Continue to payment"}
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-label text-body-muted/80">
                <ShieldCheck
                  className="h-4 w-4 text-accent"
                  aria-hidden="true"
                />
                Secure 256-bit encrypted checkout
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
