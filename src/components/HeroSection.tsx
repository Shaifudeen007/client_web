import { useEffect, useState } from "react";
import { useScrollPosition } from "@/hooks/use-parallax";

const HeroSection = () => {
  const scrollY = useScrollPosition();
  const [swapWord, setSwapWord] = useState(false);
  const [strike, setStrike] = useState(false);
  const [hideStrike, setHideStrike] = useState(false);

  useEffect(() => {
    const strikeTimer = setTimeout(() => setStrike(true), 2400);   // draw line
    const swapTimer = setTimeout(() => setSwapWord(true), 3000);   // change word
    const hideTimer = setTimeout(() => setHideStrike(true), 3600); // remove line

    return () => {
      clearTimeout(strikeTimer);
      clearTimeout(swapTimer);
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
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      }}
    >
      <div className="w-full max-w-4xl mx-auto text-white font-extrabold text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl leading-[1.25] tracking-tight">
          Growth Comes From{" "}
          <span className="relative inline-block">

            {/* STRIKE LINE */}
            <span
              className={`absolute left-0 top-1/2 h-[3px] bg-white origin-left transition-all duration-500 ease-in-out
                ${strike && !hideStrike ? "scale-x-100 opacity-100" : ""}
                ${hideStrike ? "scale-x-0 opacity-0" : "scale-x-0 opacity-100"}
              `}
              style={{ width: "100%" }}
            />

            {/* OLD WORD */}
            <span
              className={`transition-all duration-500 ${
                swapWord ? "opacity-0 blur-sm" : "opacity-100"
              }`}
            >
              Chance
            </span>

            {/* NEW WORD */}
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
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
