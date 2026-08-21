import { ArrowUpRight, Compass } from "lucide-react";
import { STORY_CONTENT } from "@/lib/site";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white py-20 lg:py-32"
      data-node-id="208:3462"
    >
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-100/70 blur-3xl" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 tmf-animate-fade-in-up">
            <div className="mb-6 flex items-center gap-3 text-accent">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-subtle">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="eyebrow text-xs">The beginning</span>
            </div>
            <h2 className="h2-display max-w-md text-heading">
              A different kind of foundation.
            </h2>
            <div className="mt-8 h-1 w-16 bg-accent" />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-body-muted">
              We are building a bridge between extraordinary potential and the
              rooms where decisions are made.
            </p>
            <a
              href="#mission"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3"
            >
              See what guides us{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="space-y-6 lg:col-span-7 lg:pt-4">
            {STORY_CONTENT.paragraphs.map((paragraph, index) => (
              <div
                key={paragraph}
                className="tmf-glass-panel rounded-2xl p-6 sm:p-8 tmf-animate-fade-in-up"
                style={{ animationDelay: `${index * 140 + 150}ms` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-4xl font-semibold text-accent/20">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[2px] text-body-muted">
                    Our story
                  </span>
                </div>
                <p
                  className="text-base leading-relaxed text-prose lg:text-lg"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
