import { Link } from "react-router-dom";

/*
  Placeholder — no design exists for a 404 page (neither Figma canvas covers it).
  Minimal token-composed screen so unknown routes don't render an empty shell.
*/

export default function NotFound() {
  return (
    <main className="bg-white py-20 lg:py-[160px]">
      <div className="container-page max-w-[640px] text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="h1-display text-heading mb-6">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="lead text-prose mb-12 max-w-md mx-auto">
          The link may be outdated or mistyped. Let&rsquo;s get you back on
          track.
        </p>
        <Link to="/" className="btn-solid inline-block">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
