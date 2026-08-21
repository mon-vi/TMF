import { Link } from "react-router-dom";
import { ASSETS } from "@/lib/site";

export default function Hero() {
  return (
<<<<<<< HEAD
    <section
      className="relative bg-panel lg:pt-[104px]"
      data-node-id="173:7430"
    >
      {/* Mobile: image + scrim overlay */}
      <div className="relative lg:hidden">
        <img
          src={ASSETS.homeHero}
          alt=""
          aria-hidden="true"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-hero-scrim" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12">
          <h1 className="h1-display text-white mb-4">
            Empowering Future Leaders
          </h1>
          <p className="lead text-white/90 mb-8 max-w-md">
            Bridging opportunity gaps through strategic philanthropy, full-ride
            scholarships, and technology education for underserved communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/programs" className="btn-solid text-center">
              Our Programs
            </Link>
            <Link to="/get-involved" className="btn-outline text-center">
              Get Involved
            </Link>
=======
    <section className="relative bg-panel pt-[90px] lg:pt-[120px] pb-16 lg:pb-24 overflow-hidden" data-node-id="173:7430">
      <div className="container-page">
        {/* Mobile View */}
        <div className="lg:hidden flex flex-col">
          <div className="mb-6">
            <span className="eyebrow mb-3 block text-accent font-semibold tracking-wider text-xs uppercase">
              Invest in the Future
            </span>
            <h1 className="text-4xl font-display font-bold text-heading leading-[1.15] mb-4">
              Empowering Future Leaders
            </h1>
            <p className="text-body-muted text-base leading-relaxed mb-6">
              Bridging opportunity gaps through strategic philanthropy, full-ride
              scholarships, and technology education for underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/programs" className="btn-solid text-center w-full sm:w-auto">
                Our Programs
              </Link>
              <Link to="/get-involved" className="btn-outline text-center w-full sm:w-auto">
                Get Involved
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/60">
            <img
              src={ASSETS.homeHero}
              alt="TalentMakers Foundation community"
              className="w-full h-[360px] object-cover"
            />
>>>>>>> 4d90d35 (feat: redesign TMF home about and donate pages)
          </div>
        </div>

<<<<<<< HEAD
      {/* Desktop: 6/6 grid, panel bg */}
      <div className="hidden lg:block">
        <div className="container-page">
          <div className="grid grid-cols-12 gap-8 min-h-[680px] items-center">
            <div className="col-span-6 py-20">
              <h1 className="h1-display text-heading mb-6">
                Empowering Future Leaders
              </h1>
              <p className="lead mb-8 max-w-lg">
                Bridging opportunity gaps through strategic philanthropy,
                full-ride scholarships, and technology education for underserved
                communities.
              </p>
              <div className="flex gap-4">
                <Link to="/programs" className="btn-solid">
                  Our Programs
                </Link>
                <Link
                  to="/get-involved"
                  className="btn-outline lg:bg-transparent"
                >
                  Get Involved
                </Link>
              </div>
=======
        {/* Desktop View: 12-col grid */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center min-h-[580px]">
          <div className="col-span-6 pr-4">
            <span className="eyebrow mb-4 block text-accent font-semibold tracking-[2.8px] text-sm uppercase">
              Invest in the Future
            </span>
            <h1 className="h1-display text-heading mb-6 leading-[1.12]">
              Empowering Future Leaders
            </h1>
            <p className="lead mb-8 max-w-lg text-body-muted text-lg leading-relaxed">
              Bridging opportunity gaps through strategic philanthropy,
              full-ride scholarships, and technology education for
              underserved communities.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/programs" className="btn-solid">
                Our Programs
              </Link>
              <Link to="/get-involved" className="btn-outline">
                Get Involved
              </Link>
>>>>>>> 4d90d35 (feat: redesign TMF home about and donate pages)
            </div>
          </div>

          <div className="col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/80">
              <img
                src={ASSETS.homeHero}
                alt="TalentMakers Foundation community"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
