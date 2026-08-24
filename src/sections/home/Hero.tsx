import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ASSETS } from "@/lib/site";
import {
  gsap,
  SplitText,
  prefersReducedMotion,
} from "@/lib/motion/gsapSetup";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const q = gsap.utils.selector(root);
    let split: SplitText | null = null;
    let cancelled = false;

    const ctx = gsap.context(() => {
      gsap.to(q(".tmf-hero-orb-a"), {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(q(".tmf-hero-orb-b"), {
        y: -130,
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
          .timeline({ defaults: { ease: "power4.out" }, delay: 0.15 })
          .from(q(".tmf-hero-chip"), { y: 20, opacity: 0, duration: 0.55 })
          .from(
            split.words,
            { yPercent: 115, duration: 0.9, stagger: 0.07 },
            "-=0.2",
          )
          .from(q(".tmf-hero-lead"), { y: 26, opacity: 0, duration: 0.7 }, "-=0.5")
          .from(
            q(".tmf-hero-ctas > *"),
            { y: 22, opacity: 0, duration: 0.6, stagger: 0.1 },
            "-=0.45",
          )
          .from(q(".tmf-hero-card"), { y: 26, opacity: 0, duration: 0.7 }, "-=0.4")
          .fromTo(
            q(".tmf-hero-media"),
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.inOut" },
            "-=0.55",
          )
          .from(
            q(".tmf-hero-media-zoom"),
            { scale: 1.15, duration: 1.1, ease: "power4.inOut" },
            "<",
          )
          .from(
            q(".tmf-hero-media-caption"),
            { y: 18, opacity: 0, duration: 0.6 },
            "-=0.3",
          )
          .from(
            q(".tmf-hero-stats > *"),
            { y: 18, opacity: 0, duration: 0.55, stagger: 0.08 },
            "-=0.25",
          );
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
      className="relative isolate overflow-hidden bg-panel pt-24 lg:pt-32"
      data-node-id="173:7430"
    >
      <div className="absolute inset-0 -z-10 tmf-surface-grid opacity-60" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="tmf-hero-orb-a absolute -left-24 top-24 h-72 w-72">
          <div className="h-full w-full rounded-full bg-violet-300/35 blur-3xl tmf-animate-pulse-soft" />
        </div>
        <div className="tmf-hero-orb-b absolute -right-24 top-8 h-96 w-96">
          <div className="h-full w-full rounded-full bg-sky-200/35 blur-3xl tmf-animate-float-slow" />
        </div>
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-12 lg:gap-16 lg:pb-28">
          <div className="relative z-10 lg:col-span-6">
            <div>
              <span className="tmf-glass-chip tmf-hero-chip mb-6 inline-flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-chip text-accent">
                Invest in the future
              </span>
              <h1 className="h1-display max-w-3xl text-heading">
                Empowering{" "}
                <span className="tmf-text-gradient italic">future</span>{" "}
                leaders.
              </h1>
              <p className="tmf-hero-lead lead mt-7 max-w-xl text-body-muted">
                Bridging opportunity gaps through strategic philanthropy,
                full-ride scholarships, and technology education for underserved
                communities.
              </p>
              <div className="tmf-hero-ctas mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/programs" viewTransition className="btn-solid group">
                  Explore our programs
                  <ArrowUpRight
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link to="/get-involved" viewTransition className="btn-outline">
                  Get involved
                </Link>
              </div>
            </div>

            <div className="tmf-glass-panel tmf-hero-card mt-12 max-w-md p-4">
              <div>
                <p className="font-display text-xl font-semibold text-heading">
                  120+ lives in motion
                </p>
                <p className="mt-1 text-sm text-body-muted">
                  A growing community of bold, future-ready leaders.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="absolute -right-5 -top-5 z-10 hidden h-24 w-24 rounded-full border border-white/70 bg-white/35 backdrop-blur-md lg:block tmf-animate-float-slow" />
            <div className="absolute -bottom-6 -left-6 z-10 hidden h-32 w-32 rounded-full bg-accent/20 blur-2xl lg:block tmf-animate-pulse-soft" />
            <div className="tmf-hero-media relative overflow-hidden rounded-card-xl border border-white/80 bg-white/50 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-card-lg">
                <img
                  src={ASSETS.homeHero}
                  alt="A TalentMakers scholar on their journey"
                  className="tmf-hero-media-zoom h-[440px] w-full object-cover object-center lg:h-[610px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <div className="tmf-hero-media-caption absolute bottom-5 left-5 right-5 tmf-glass-chip p-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-caption text-white/70">
                    TalentMakers Foundation
                  </p>
                  <p className="mt-1 font-display text-xl">
                    Talent is universal. Opportunity should be too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tmf-hero-stats grid grid-cols-2 gap-4 border-t border-slate-200/70 py-6 sm:grid-cols-4">
          {[
            ["50+", "Schools reached"],
            ["10+", "Active scholars"],
            ["2023", "Founded"],
            ["01", "Shared mission"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-2xl font-semibold text-heading lg:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-label text-body-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
