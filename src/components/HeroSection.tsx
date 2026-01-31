import { useEffect, useState } from "react";
import { useScrollPosition } from "@/hooks/use-parallax";

const HeroSection = () => {
  const scrollY = useScrollPosition();
  const [morph, setMorph] = useState(false);
  const [strike, setStrike] = useState(false);
  const [hideStrike, setHideStrike] = useState(false);

  useEffect(() => {
    const strikeTimer = setTimeout(() => setStrike(true), 2000);
    const morphTimer = setTimeout(() => setMorph(true), 2600);
    const hideTimer = setTimeout(() => setHideStrike(true), 3400);

    return () => {
      clearTimeout(strikeTimer);
      clearTimeout(morphTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 350);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
      style={{
        opacity: heroOpacity,
        transform: `translateY(${scrollY * -0.08}px)`,
      }}
    >
      <div className="w-full max-w-4xl mx-auto text-center font-extrabold">
        <h1
          className="text-2xl md:text-4xl lg:text-5xl leading-[1.25] tracking-tight"
          style={{
            color: "#ffffff",
            WebkitTextStroke: "0.3px rgba(255,255,255,0.5)",
            textShadow: `
              0 0 3px rgba(255,255,255,0.6),
              0 0 6px rgba(255,255,255,0.4),
              0 0 12px rgba(120,180,255,0.25)
            `,
          }}
        >
          <span className="text-white/40 mr-2">“</span>

          Growth Comes From{" "}

          <span className="inline-flex relative">
            <span>Chan</span>

            {/* Morph Letter Slot */}
            <span className="relative inline-block w-[0.6em] align-baseline">

              {/* STRIKE ONLY HERE */}
              <span
                className={`absolute left-0 top-1/2 h-[3px] bg-white origin-left
                transition-all duration-700 ease-in-out
                ${strike && !hideStrike ? "scale-x-100 opacity-100" : ""}
                ${hideStrike ? "scale-x-0 opacity-0" : "scale-x-0 opacity-0"}`}
                style={{ width: "100%" }}
              />

              {/* c */}
              <span
                className={`absolute left-0 top-0 transition-all duration-700
                ease-[cubic-bezier(.65,0,.35,1)]
                ${morph
                  ? "opacity-0 -translate-y-5 rotate-[-90deg] scale-50"
                  : "opacity-100 translate-y-0 rotate-0 scale-100"}`}
              >
                c
              </span>

              {/* g */}
              <span
                className={`absolute left-0 top-0 transition-all duration-700
                ease-[cubic-bezier(.65,0,.35,1)]
                ${morph
                  ? "opacity-100 translate-y-0 rotate-0 scale-100"
                  : "opacity-0 translate-y-5 rotate-90 scale-150"}`}
              >
                g
              </span>
            </span>

            <span>e</span>
          </span>

          <span className="text-white/40 ml-2">”</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
