import { Link } from "react-router-dom";

export default function JoinMissionCTA() {
  return (
    <section className="bg-accent py-20 lg:py-[120px] text-white" data-node-id="208:3487">
      <div className="container-page text-center max-w-3xl mx-auto">
        <p className="text-xs font-sans font-bold uppercase tracking-[3px] text-purple-200 mb-4">
          Shape the Future
        </p>
        <h2 className="h2-display text-white mb-6">Join the Mission</h2>
        <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Your contribution helps us identify and nurture the next generation of
          world-class leaders. Become a part of the legacy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/donate" className="btn-invert-solid px-10 py-4">
            Donate Now
          </Link>
          <Link to="/get-involved" className="btn-invert-outline px-10 py-4">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
