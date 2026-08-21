import { MISSION_VISION } from "@/lib/site";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section
      className="bg-panel py-20 lg:py-[120px] border-y border-card-divider"
      data-node-id="208:3473"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {MISSION_VISION.map((item) => {
            const isTarget = item.icon === "target";
            return (
              <div
                key={item.title}
                className="bg-white border border-card-divider p-8 lg:p-14 flex flex-col gap-6 shadow-sm hover:border-accent transition-colors"
              >
                {/* 8px rounded icon container with #F3E8FF background and #6B21A8 icon */}
                <div className="w-14 h-14 rounded-lg bg-accent-subtle text-accent flex items-center justify-center">
                  {isTarget ? (
                    <Target className="w-7 h-7 stroke-[1.8]" />
                  ) : (
                    <Eye className="w-7 h-7 stroke-[1.8]" />
                  )}
                </div>

                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="text-body text-body-muted leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
