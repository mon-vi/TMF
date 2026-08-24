import { useLayoutEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { ASSETS } from "@/lib/site";
import {
  gsap,
  SplitText,
  prefersReducedMotion,
} from "@/lib/motion/gsapSetup";

export default function CinematicHero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const q = gsap.utils.selector(root);
    let split: SplitText | null = null;
    let cancelled = false;

    const ctx = gsap.context(() => {
      gsap.to(q(".tmf-cine-bg"), {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const run = () => {
        if (cancelled) return;
        split = SplitText.create(q("h1"), {
          type: "words",
          mask: "lines",
          aria: "auto",
        });
        gsap
          .timeline({ defaults: { ease: "power4.out" }, delay: 0.2 })
          .from(q(".tmf-cine-badge"), { y: 18, opacity: 0, duration: 0.55 })
          .from(
            split.words,
            { yPercent: 115, duration: 0.9, stagger: 0.08 },
            "-=0.15",
          )
          .from(q(".tmf-cine-lead"), { y: 24, opacity: 0, duration: 0.7 }, "-=0.5")
          .from(q(".tmf-cine-card"), { y: 22, opacity: 0, duration: 0.65 }, "-=0.4")
          .from(q(".tmf-cine-explore"), { opacity: 0, duration: 0.6 }, "-=0.3");
      };

      if (typeof document !== "undefined" && document.fonts?.ready) {
        document.fonts.ready.then(run);
      } else {
        run();
      }
    }, root);

    return () => {
      cancelled = true;
      split?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-[620px] overflow-hidden bg-ink lg:min-h-[760px]"
      data-node-id="208:3498"
    >
      <div className="tmf-cine-bg absolute inset-0" aria-hidden="true">
        <img
          src={ASSETS.aboutHero}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-accent/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
      <div className="absolute -right-28 top-28 h-80 w-80 rounded-full bg-fuchsia-400/25 blur-3xl tmf-animate-pulse-soft" />
      <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl tmf-animate-float-slow" />

      <div className="container-page relative flex min-h-[620px] items-end py-20 lg:min-h-[760px] lg:py-28">
        <div className="max-w-3xl">
          <div className="tmf-cine-badge mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-chip text-purple-100 backdrop-blur-md">
            Est. 2023 · Our story
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Building a legacy of{" "}
            <span className="text-purple-200 italic">excellence.</span>
          </h1>
          <p className="tmf-cine-lead mt-7 max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            TalentMakers Foundation bridges opportunity gaps through strategic
            philanthropy, full-ride scholarships, and technology education for
            underserved communities.
          </p>
          <div className="tmf-glass-panel tmf-cine-card mt-10 max-w-xl p-4 text-white">
            <p className="text-sm leading-relaxed text-white/85">
              We find high-potential talent, then make the path to leadership
              visible.
            </p>
          </div>
        </div>

        <a
          href="#our-story"
          className="tmf-cine-explore absolute bottom-8 right-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-caption text-white/70 hover:text-white lg:flex"
        >
          Explore our story
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md">
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
