import { Link } from "react-router-dom";
import { ASSETS } from "@/lib/site";

/*
  NOTE: "Get Involved" is misspelled as "Get Invovlved" (two v's) in the Figma design.
  Rendering the correct spelling here.
  TODO(design): confirm exact H1 and lead copy from node 208:3013 (desktop) / 173:7430 (mobile).
*/

export default function Hero() {
  return (
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
          </div>
        </div>
      </div>

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
            </div>
            <div className="col-span-6">
              <div className="bg-panel rounded-none">
                <img
                  src={ASSETS.homeHero}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
