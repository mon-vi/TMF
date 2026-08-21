import { useState, type FormEvent, type Dispatch, type SetStateAction } from "react";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

type Currency = "USD" | "NGN";

const SYMBOL: Record<Currency, string> = { USD: "$", NGN: "\u20A6" };

function initiatePaystackCheckout(amount: number, currency: Currency) {
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
  const [submitted, setSubmitted] = useState(false);

  const parsedAmount = parseFloat(amount.replace(/,/g, ""));
  const isValid = !isNaN(parsedAmount) && parsedAmount > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    setPending(true);
    const success = initiatePaystackCheckout(parsedAmount, currency);
    if (success) {
      setTimeout(() => {
        setPending(false);
        setSubmitted(true);
      }, 800);
    }
  }

  return (
    <section
      className="bg-white py-20 lg:py-[120px]"
      data-node-id="208:3135"
    >
      <div className="container-page max-w-xl mx-auto">
        <div className="bg-panel/40 border border-card-divider p-8 lg:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-heading mb-2">
                Thank You for Your Generosity!
              </h3>
              <p className="text-body-muted text-base mb-6">
                Your pledge of {SYMBOL[currency]}{parsedAmount.toLocaleString()} empowers our scholars and expands access to tech education.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onAmountChange("");
                }}
                className="btn-outline text-sm"
              >
                Make Another Donation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Label */}
              <p className="text-xs font-sans font-bold uppercase tracking-[1.5px] text-accent mb-4">
                Or Enter Custom Amount
              </p>

              {/* Currency toggle */}
              <div className="flex border border-card-divider bg-white mb-10">
                <button
                  type="button"
                  onClick={() => onCurrencyChange("USD")}
                  className={`flex-1 py-3 text-center text-xs font-sans font-bold tracking-wider uppercase transition-colors ${
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
                  className={`flex-1 py-3 text-center text-xs font-sans font-bold tracking-wider uppercase transition-colors ${
                    currency === "NGN"
                      ? "bg-accent text-white"
                      : "bg-white text-heading hover:bg-panel"
                  }`}
                >
                  NGN (&#8358;)
                </button>
              </div>

              {/* Amount input */}
              <div className="bg-white border border-card-divider px-6 py-4 flex items-center mb-8 focus-within:border-accent transition-colors">
                <span
                  className="text-4xl font-display font-bold text-accent mr-3 select-none"
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
                  className="w-full bg-transparent text-3xl lg:text-4xl font-display font-semibold text-heading placeholder:text-gray-300 outline-none border-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={!isValid || pending}
                className="btn-donate w-full disabled:opacity-50 disabled:cursor-not-allowed mb-6"
              >
                <Lock className="w-5 h-5" />
                <span>{pending ? "Connecting..." : "Continue to Payment"}</span>
              </button>

              {/* Security badge */}
              <div className="flex items-center justify-center gap-2 text-body-muted/70 text-xs font-sans font-medium uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Secured 256-bit SSL encrypted donation</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
