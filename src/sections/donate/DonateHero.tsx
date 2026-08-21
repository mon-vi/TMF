import { ASSETS, DONATE_PRESETS } from "@/lib/site";

<<<<<<< HEAD
/*
  TODO(design): reconcile #3F4942 (prose) vs #5F5E5E (body-muted):
  differentiate or consolidate across the system.
  Flag #3: h1-lg line-height is 90 here vs 84 in .h1-display — lg:leading-[90px] override.
  Flag #4: preset cards now CLICKABLE (was static; requirement changed — clicking auto-fills the form amount).
  Flag #6: hero background bg-panel confirmed by user (not in initial spec read).
  Flag #9: NGN amounts are USD presets × live exchange rate (exchangerate-api.com).
*/

=======
>>>>>>> 4d90d35 (feat: redesign TMF home about and donate pages)
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
<<<<<<< HEAD
    <section className="bg-panel lg:pt-[104px]" data-node-id="208:3110">
=======
    <section
      className="bg-panel pt-[90px] lg:pt-[120px] pb-16 lg:pb-24 border-b border-card-divider"
      data-node-id="208:3110"
    >
>>>>>>> 4d90d35 (feat: redesign TMF home about and donate pages)
      <div className="container-page">
        {/* Mobile: image first */}
        <div className="lg:hidden mb-10">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/60">
            {ASSETS.donateHero ? (
              <img
                src={ASSETS.donateHero}
                alt="Support TalentMakers Foundation"
                className="w-full h-[320px] object-cover"
              />
            ) : (
              <div className="w-full h-[320px] bg-ink/10" aria-hidden="true" />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center min-h-[560px]">
          {/* Left: text + presets */}
          <div className="col-span-1 lg:col-span-6 py-6 lg:py-12">
            <p className="eyebrow mb-4 text-xs">Invest in the Future</p>
            <h1 className="h1-display text-heading mb-6 leading-[1.12]">
              Your contribution creates opportunity.
            </h1>
            <p className="lead text-body-muted mb-10 max-w-lg leading-relaxed">
              Every dollar fuels scholarships, mentorship, and technology access
              for the next generation of African talent.
            </p>

            {/* Preset cards — clickable */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
<<<<<<< HEAD
                    onClick={() => onSelectAmount(value)}
                    className="flex-1 border border-preset-border p-[25px] h-[156px] flex flex-col justify-center text-left hover:border-accent transition-colors focus-visible:border-accent"
=======
                    onClick={() => onSelectAmount(preset.value)}
                    className="bg-white border border-card-divider p-6 h-[140px] flex flex-col justify-center text-left hover:border-accent hover:shadow-md transition-all focus-visible:border-accent group"
>>>>>>> 4d90d35 (feat: redesign TMF home about and donate pages)
                  >
                    <p className="text-2xl lg:text-3xl font-display font-semibold text-accent mb-1 group-hover:scale-105 transition-transform">
                      {display}
                    </p>
                    <p className="text-xs font-sans font-semibold uppercase tracking-[0.8px] text-heading">
                      {preset.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: image */}
<<<<<<< HEAD
          <div className="hidden lg:block lg:col-span-6 lg:pl-12">
            {ASSETS.donateHero ? (
              <img
                src={ASSETS.donateHero}
                alt=""
                aria-hidden="true"
                className="w-full h-[640px] object-cover"
              />
            ) : (
              <div className="w-full h-[640px] bg-ink/10" aria-hidden="true" />
            )}
=======
          <div className="hidden lg:block lg:col-span-6 lg:pl-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/80">
              {ASSETS.donateHero ? (
                <img
                  src={ASSETS.donateHero}
                  alt="Support TalentMakers Foundation"
                  className="w-full h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div
                  className="w-full h-[520px] bg-ink/10"
                  aria-hidden="true"
                />
              )}
            </div>
>>>>>>> 4d90d35 (feat: redesign TMF home about and donate pages)
          </div>
        </div>
      </div>
    </section>
  );
}
