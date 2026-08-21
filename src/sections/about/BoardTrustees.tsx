import { BOARD_MEMBER } from "@/lib/site";

export default function BoardTrustees() {
  return (
    <section
      className="bg-panel py-20 lg:py-[120px] border-t border-card-divider"
      data-node-id="208:3557"
    >
      <div className="container-page">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8 bg-white border border-card-divider p-10 lg:p-16 shadow-sm">
          <p className="eyebrow text-xs">Leadership</p>

          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-heading">
            Board of Trustees
          </h2>

          <div className="w-16 h-1 bg-accent my-1" />

          <div>
            <p className="text-3xl lg:text-4xl font-display font-semibold text-heading mb-2">
              {BOARD_MEMBER.name}
            </p>
            <p className="text-sm font-sans font-semibold uppercase tracking-[2px] text-accent">
              {BOARD_MEMBER.role}
            </p>
          </div>

          <blockquote className="text-lg lg:text-2xl font-display italic text-body-muted leading-relaxed max-w-xl">
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
