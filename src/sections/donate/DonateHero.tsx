import { ArrowRight, Heart } from "lucide-react";
import { ASSETS, DONATE_PRESETS } from "@/lib/site";

function currencySymbol(c: "USD" | "NGN") {
  return c === "USD" ? "$" : "₦";
}

interface Props {
  currency: "USD" | "NGN";
  onSelectAmount: (value: number) => void;
  rate: number;
}

export default function DonateHero({ currency, onSelectAmount, rate }: Props) {
  return (
    <section
      className="relative isolate overflow-hidden bg-panel pt-24 lg:pt-32"
      data-node-id="208:3110"
    >
      <div className="absolute inset-0 -z-10 tmf-surface-grid opacity-60" />
      <div className="absolute -right-20 top-20 -z-10 h-80 w-80 rounded-full bg-fuchsia-300/25 blur-3xl tmf-animate-pulse-soft" />
      <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl tmf-animate-float-slow" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-24">
          <div className="order-2 lg:order-1 lg:col-span-6 tmf-animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-chip text-accent">
              <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
              Invest in the future
            </div>
            <h1 className="h1-display max-w-2xl text-heading">
              Your contribution creates{" "}
              <span className="tmf-text-gradient italic">opportunity.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-body-muted lg:text-xl">
              Every gift fuels scholarships, mentorship, and technology access
              for the next generation of African talent.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {DONATE_PRESETS.map((preset, index) => {
                const value =
                  currency === "NGN"
                    ? Math.round(preset.value * rate)
                    : preset.value;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => onSelectAmount(value)}
                    className="tmf-glass-panel group rounded-2xl p-4 text-left hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                  >
                    <p className="font-display text-2xl font-semibold text-accent transition-transform duration-300 group-hover:scale-105">
                      {currencySymbol(currency)}
                      {value.toLocaleString()}
                    </p>
                    <p className="mt-2 text-xs font-semibold leading-relaxed text-body-muted">
                      {preset.label}
                    </p>
                    <span className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-field text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Select{" "}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {index === 1 && (
                      <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-label text-violet-500">
                        Most popular
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 tmf-animate-fade-in-up">
            <div className="relative overflow-hidden rounded-card-xl border border-white/80 bg-white/50 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-card-lg">
                <img
                  src={ASSETS.donateHero}
                  alt="A scholar whose path was opened by donor support"
                  className="h-[400px] w-full object-cover object-center lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 tmf-glass-chip p-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-caption text-white/70">
                    Your impact, in motion
                  </p>
                  <p className="mt-1 font-display text-xl">
                    Give someone room to become.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
