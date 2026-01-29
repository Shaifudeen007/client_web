import { useEffect, useState } from "react";
import { useScrollPosition } from "@/hooks/use-parallax";

const HeroSection = () => {
  const scrollY = useScrollPosition();
  const [loaded, setLoaded] = useState(false);
  const [swapWord, setSwapWord] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    const swap = setTimeout(() => setSwapWord(true), 3000); // word swap after 3s
    return () => {
      clearTimeout(t);
      clearTimeout(swap);
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
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      }}
    >
      <div
        className="w-full max-w-4xl mx-auto text-white font-extrabold text-center"
        style={{ animation: "heroReveal 1.2s ease forwards" }}
      >
        <h1
          className="text-2xl md:text-4xl lg:text-5xl leading-[1.25] tracking-tight"
          style={{
            animation:
              "floatText 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite",
          }}
        >
          " Growth Comes From{" "}
          <span className="relative inline-block">
            
            {/* Chance (fades out smoothly) */}
            <span
              className={`transition-all duration-500 ${
                swapWord ? "opacity-0 blur-sm" : "opacity-100"
              }`}
            >
              Chance
            </span>

            {/* Change (fades in smoothly) */}
            <span
              className={`absolute left-0 top-0 transition-all duration-500 ${
                swapWord
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              Change
            </span>

          </span>
        <break> </break>"
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
