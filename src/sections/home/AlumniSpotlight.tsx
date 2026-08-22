import { useLayoutEffect, useRef } from "react";
import { ALUMNI } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { gsap, prefersReducedMotion } from "@/lib/motion/gsapSetup";

export default function AlumniSpotlight() {
  const rootRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const distance = () =>
        Math.max(
          0,
          track.scrollWidth -
            document.documentElement.clientWidth +
            window.innerWidth * 0.05,
        );

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative bg-white py-20 border-b border-card-divider lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:overflow-hidden lg:py-0"
      data-node-id="173:7466"
    >
      <div className="container-page mb-12 lg:mb-16 text-center">
        <p className="eyebrow mb-3 text-xs">Community</p>
        <h2 className="text-3xl lg:text-5xl font-display font-semibold text-heading">
          Alumni Spotlight
        </h2>
        <p className="text-body-muted text-base mt-4 max-w-xl mx-auto">
          Meet the scholars and tech innovators whose journeys were catalyzed by
          TMF fellowships and mentorship.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-x-auto snap-x snap-mandatory pb-6 px-4 lg:overflow-visible lg:snap-none no-scrollbar">
        <div ref={trackRef} className="flex gap-6 max-w-[1240px] mx-auto lg:max-w-none lg:w-max lg:mx-0 lg:pl-[5vw]">
          {ALUMNI.map(({ name, image }, i) => (
            <Reveal
              key={name}
              variant="scale"
              delay={(i % 4) * 90}
              className="w-[260px] shrink-0 snap-center lg:w-[320px]"
            >
              <div className="group h-full rounded-2xl overflow-hidden shadow-md bg-panel border border-card-divider flex flex-col justify-between">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={image}
                    alt={`Portrait of TMF alumnus ${name}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#6B21A8]/90 via-[#6B21A8]/30 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-6 top-6 self-end px-3 py-1 bg-white/90 text-accent font-sans font-bold text-xs uppercase tracking-wider rounded-full">
                    Scholar #{i + 1}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xl lg:text-2xl font-display font-bold text-white leading-tight drop-shadow-sm">
                      {name}
                    </p>
                    <p className="text-white/80 font-sans text-xs uppercase tracking-widest mt-1">
                      TMF Cohort 1 &middot; Alumni
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="container-page text-center text-xs font-sans font-semibold uppercase tracking-[1.8px] text-body-muted mt-8">
        TalentMakers Foundation Cohort 1
      </p>
    </section>
  );
}
