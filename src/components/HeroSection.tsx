import { useEffect, useState } from "react";
import { useScrollPosition } from "@/hooks/use-parallax";
import LetterGlitch from "@/components/LetterGlitch";

const HeroSection = () => {
  const scrollY = useScrollPosition();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 350);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* 💜 NEON VIOLET GLITCH BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <LetterGlitch
          glitchColors={[
            "#6a00ff",
            "#9d00ff",
            "#c77dff",
            "#3a0ca3"
          ]}
          glitchSpeed={40}
          smooth={true}
          outerVignette={true}
          centerVignette={false}
        />
      </div>

      {/* 🌟 HERO TEXT (PURE GLOW) */}
      <div
        className="w-full max-w-4xl mx-auto text-white font-extrabold text-center px-6 py-10"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${scrollY * -0.08}px)`,
          transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
          animation: "heroReveal 1.2s ease forwards",

          /* 💜 Neon Glow Only */
          textShadow: `
            0 0 8px rgba(180, 0, 255, 0.9),
            0 0 18px rgba(180, 0, 255, 0.7),
            0 0 35px rgba(180, 0, 255, 0.5)
          `,

          position: "relative",
          zIndex: 10,
        }}
      >
        <h1
          className="text-2xl md:text-4xl lg:text-5xl leading-[1.25]"
          style={{
            animation:
              "floatText 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite",
          }}
        >
          "Knowledge Grows When Shared
        </h1>

        <h1
          className="mt-2 text-2xl md:text-4xl lg:text-5xl leading-[1.25]"
          style={{
            animation:
              "floatText 6s ease-in-out infinite 0.6s, glowPulse 4s ease-in-out infinite",
          }}
        >
          And
        </h1>

        <h1
          className="mt-2 text-2xl md:text-4xl lg:text-5xl leading-[1.25]"
          style={{
            animation:
              "floatText 6s ease-in-out infinite 1.2s, glowPulse 4s ease-in-out infinite",
          }}
        >
          Leaders Grow When They Teach"
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
