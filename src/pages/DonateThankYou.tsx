import { Link } from "react-router-dom";
import { useEffect } from "react";

/*
  Inferred — no Figma node exists for a thank-you confirmation page.
  Structure: post-payment success screen matching the system's design tokens.
*/

function CheckIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill="#6A0DAD" />
      <path
        d="M14 24l6 6 14-14"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DonateThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white py-20 lg:py-[160px]">
      <div className="container-page max-w-[640px] text-center">
        <div className="mb-8 flex justify-center">
          <CheckIcon />
        </div>
        <h1 className="h1-display text-heading mb-6">
          Thank you for your generosity.
        </h1>
        <p className="lead text-prose mb-12 max-w-md mx-auto">
          Your contribution fuels scholarships, mentorship, and technology
          access for the next generation of African talent. We&rsquo;ll send a
          confirmation to your email shortly.
        </p>
        <Link to="/" className="btn-solid inline-block">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
