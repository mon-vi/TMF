import { ASSETS, BOARD_MEMBER } from "@/lib/site";

export default function BoardTrustees() {
  return (
    <section
      className="bg-surface-light py-16 lg:py-[120px]"
      data-node-id="208:3557"
    >
      <div className="container-page">
        <div className="max-w-[448px] mx-auto flex flex-col items-center text-center gap-10">
          <p className="metric-eyebrow">Board of Trustees</p>

          {/* Portrait */}
          <div className="relative w-full aspect-[4/5] rounded overflow-hidden">
            {ASSETS.boardPortrait ? (
              <img
                src={ASSETS.boardPortrait}
                alt={BOARD_MEMBER.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full bg-ink/10"
                aria-hidden="true"
              />
            )}
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
          </div>

          <div>
            <p className="text-[36px] leading-[40px] font-display font-semibold text-heading mb-2">
              {BOARD_MEMBER.name}
            </p>
            <p className="text-[20px] leading-[24px] font-sans font-semibold uppercase tracking-[1.6px] text-accent">
              {BOARD_MEMBER.role}
            </p>
          </div>

          <blockquote className="text-[20px] leading-[26px] font-sans italic text-prose">
            &ldquo;
            <span
              dangerouslySetInnerHTML={{ __html: BOARD_MEMBER.quote }}
            />
            &rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
