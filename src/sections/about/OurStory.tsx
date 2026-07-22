import { STORY_CONTENT } from "@/lib/site";

export default function OurStory() {
  return (
    <section className="bg-white py-16 lg:py-[120px]" data-node-id="208:3462">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-10">
          {/* Left: heading + underline */}
          <div className="lg:col-span-5">
            <h2 className="h2-display text-heading">{STORY_CONTENT.heading}</h2>
            <div className="w-24 h-1 bg-accent mt-12" />
          </div>

          {/* Right: paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-lead-lg text-prose">
              {STORY_CONTENT.paragraphs[0]}
            </p>
            <p className="text-body-relaxed text-prose/80">
              {STORY_CONTENT.paragraphs[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
