import { useEffect, useState } from "react";
import { useScrollPosition } from "@/hooks/use-parallax";

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
        {/* Line 1 */}
        <h1
          className="text-2xl md:text-4xl lg:text-5xl leading-[1.25]"
          style={{
            animation:
              "floatText 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite",
          }}
        >
          "Knowledge Grows When Shared
        </h1>

        {/* Line 2 */}
        <h1
          className="mt-2 text-2xl md:text-4xl lg:text-5xl leading-[1.25]"
          style={{
            animation:
              "floatText 6s ease-in-out infinite 0.6s, glowPulse 4s ease-in-out infinite",
          }}
        >
          And
        </h1>

        {/* Line 3 */}
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
