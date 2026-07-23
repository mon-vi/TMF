import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 lg:py-[120px]" data-node-id="173:7482">
      <div className="container-page text-center max-w-3xl mx-auto">
        <h2 className="h2-display text-heading mb-8">
          Ready to make a lasting impact?
        </h2>
        <p className="lead mb-10 max-w-2xl mx-auto">
          Your donation fuels scholarships, mentorships, and technology for
          those who will define tomorrow.
        </p>
        <Link to="/donate" className="btn-cta inline-block">
          Invest in the Future
        </Link>
      </div>
    </section>
  );
}
