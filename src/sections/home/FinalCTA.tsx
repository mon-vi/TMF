import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-panel py-20 lg:py-[120px]" data-node-id="173:7482">
      <div className="container-page max-w-4xl mx-auto">
        <div className="bg-white border border-card-divider p-10 lg:p-16 text-center shadow-md">
          <p className="eyebrow mb-4 text-xs">Join Us Today</p>
          <h2 className="h2-display text-heading mb-6 max-w-2xl mx-auto">
            Ready to make a lasting impact?
          </h2>
          <p className="lead mb-10 max-w-2xl mx-auto text-body-muted text-base lg:text-lg">
            Your donation fuels scholarships, mentorships, and technology for
            those who will define tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="btn-solid px-12 py-4">
              Invest in the Future
            </Link>
            <Link to="/get-involved" className="btn-outline px-10 py-4">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
