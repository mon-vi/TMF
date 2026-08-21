import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import techSparkConfImg from "@/assets/tech-spark-conf-new.jpg";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Hero Section (Dark Theme matching the design) */}
      <div className="container-page py-16 lg:py-24 pt-32 lg:pt-40">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow mb-3 block text-accent font-semibold tracking-wider text-sm uppercase">
            UPCOMING EVENTS
          </span>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Tech Spark Conference 2027
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Join global visionaries and rising talents for an immersive weekend
            of dialogue, innovation, and strategic networking in the heart of
            Zurich.
          </p>
        </div>

        {/* Featured Event Card with Background Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 mb-28">
          <div className="absolute inset-0 z-0">
            <img
              src={techSparkConfImg}
              alt="Tech Spark Conference 2027"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>

          <div className="relative z-10 p-8 lg:p-16 flex flex-col justify-end min-h-[480px]">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Oct 12-14, 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Zurich, CH</span>
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-white mb-6">
              Shaping the Next Decade of Philanthropy
            </h3>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent text-white font-medium px-8 py-3.5 rounded-md hover:bg-accent/90 transition-colors shadow-lg"
              >
                RSVP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Archive Section (Light Blue-Grey Background) */}
      <section className="bg-[#EAEFF5] text-ink py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="eyebrow mb-2 block text-accent font-semibold tracking-wider text-sm uppercase">
              ARCHIVE
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-heading">
              Legacy of Impact
            </h2>
          </div>

          <div className="space-y-8 divide-y divide-gray-300">
            <div className="pt-8 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                01 / MAY
              </span>
              <div className="md:col-span-3">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-heading mb-1">
                  Global Sustainability Roundtable
                </h3>
                <p className="text-gray-600 text-sm">London, United Kingdom</p>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                02 / MAR
              </span>
              <div className="md:col-span-3">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-heading mb-1">
                  The Equity Forum 2027
                </h3>
                <p className="text-gray-600 text-sm">New York City, USA</p>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                03 / JAN
              </span>
              <div className="md:col-span-3">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-heading mb-1">
                  Winter Arts Gala
                </h3>
                <p className="text-gray-600 text-sm">Paris, France</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-300 text-center">
            <Link
              to="/archives"
              className="inline-flex items-center gap-2 text-heading font-semibold hover:text-accent transition-colors tracking-wide text-sm uppercase border-b border-heading pb-1 hover:border-accent"
            >
              EXPLORE FULL ARCHIVES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
