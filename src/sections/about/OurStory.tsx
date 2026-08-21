import { STORY_CONTENT } from "@/lib/site";

export default function OurStory() {
  return (
    <section className="bg-white py-20 lg:py-[120px]" data-node-id="208:3462">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-10 items-start">
          {/* Left: heading + underline */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3 text-xs">Origin & Purpose</p>
            <h2 className="h2-display text-heading">{STORY_CONTENT.heading}</h2>
            <div className="w-20 h-1 bg-accent mt-8" />
          </div>

          {/* Right: paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p
              className="text-lg lg:text-xl font-normal leading-relaxed text-heading"
              dangerouslySetInnerHTML={{ __html: STORY_CONTENT.paragraphs[0] }}
            />
            <p
              className="text-base lg:text-lg leading-relaxed text-body-muted"
              dangerouslySetInnerHTML={{ __html: STORY_CONTENT.paragraphs[1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
