import { Link } from "react-router-dom";

/*
  Flag #3: third button pair in the system (.btn-invert-solid / .btn-invert-outline).
  Now 5 button styles across 3 pairs. Worth reviewing whether to consolidate.
*/

export default function JoinMissionCTA() {
  return (
    <section className="bg-accent py-16 lg:py-[120px]" data-node-id="208:3487">
      <div className="container-page text-center">
        <h2 className="h2-display text-white mb-8">Join the Mission</h2>
        <p className="text-lead-lg text-white/90 max-w-[672px] mx-auto mb-10">
          Your contribution helps us identify and nurture the next generation of
          world-class leaders. Become a part of the legacy.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/donate" className="btn-invert-solid">
            Donate Now
          </Link>
          <Link to="/get-involved" className="btn-invert-outline">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
