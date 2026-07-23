import { ASSETS, DONATE_PRESETS } from "@/lib/site";

/*
  TODO(design): reconcile #3F4942 (prose) vs #5F5E5E (body-muted):
  differentiate or consolidate across the system.
  Flag #3: h1-lg line-height is 90 here vs 84 in .h1-display — lg:leading-[90px] override.
  Flag #4: preset cards now CLICKABLE (was static; requirement changed — clicking auto-fills the form amount).
  Flag #6: hero background bg-panel confirmed by user (not in initial spec read).
  Flag #9: NGN amounts are USD presets × live exchange rate (exchangerate-api.com).
*/

function currencySymbol(c: "USD" | "NGN") {
  return c === "USD" ? "$" : "\u20A6";
}

interface Props {
  currency: "USD" | "NGN";
  onSelectAmount: (value: number) => void;
  rate: number;
}

export default function DonateHero({ currency, onSelectAmount, rate }: Props) {
  return (
    <section
      className="bg-panel lg:pt-[104px]"
      data-node-id="208:3110"
    >
      <div className="container-page">
        {/* Mobile: image first */}
        <div className="lg:hidden mb-10">
          {ASSETS.donateHero ? (
            <img
              src={ASSETS.donateHero}
              alt=""
              aria-hidden="true"
              className="w-full h-[400px] object-cover"
            />
          ) : (
            <div className="w-full h-[400px] bg-ink/10" aria-hidden="true" />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center min-h-[600px]">
          {/* Left: text + presets */}
          <div className="col-span-1 lg:col-span-6 py-10 lg:py-20">
            <p className="eyebrow mb-4">Invest in the Future</p>
            <h1 className="h1-display text-heading lg:leading-[90px] mb-6">
              Your contribution creates opportunity.
            </h1>
            <p className="text-lead-lg text-prose mb-10 max-w-lg">
              Every dollar fuels scholarships, mentorship, and technology access
              for the next generation of African talent.
            </p>

            {/* Preset cards — clickable */}
            <div className="flex flex-col sm:flex-row gap-4">
              {DONATE_PRESETS.map((preset) => {
                const symbol = currencySymbol(currency);
                const value =
                  currency === "NGN"
                    ? Math.round(preset.value * rate)
                    : preset.value;
                const display = symbol + value.toLocaleString();

                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => onSelectAmount(value)}
                    className="flex-1 border border-preset-border p-[25px] h-[156px] flex flex-col justify-center text-left hover:border-accent transition-colors focus-visible:border-accent"
                  >
                    <p className="text-h2 font-display font-semibold text-accent mb-2">
                      {display}
                    </p>
                    <p className="text-small font-sans font-semibold tracking-[0.7px] text-heading">
                      {preset.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: image */}
          <div className="hidden lg:block lg:col-span-6 lg:pl-12">
            {ASSETS.donateHero ? (
              <img
                src={ASSETS.donateHero}
                alt=""
                aria-hidden="true"
                className="w-full h-[640px] object-cover"
              />
            ) : (
              <div
                className="w-full h-[640px] bg-ink/10"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
