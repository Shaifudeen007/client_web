import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Star, Lightbulb } from "lucide-react";

import deviceWhite from "@/assets/ascot-3.svg";
import deviceColor from "@/assets/ascot-4.png";

import img1 from "@/assets/p1.png";
import img2 from "@/assets/a1.png";
import img3 from "@/assets/a2.png";
import img4 from "@/assets/a3.png";

const awards = [
  {
    title: "Best Employee Award",
    description: "Recognized for exceptional performance and dedication in the workplace.",
    icon: Trophy,
    image: img1,
  },
  {
    title: "Guinness World Record",
    description: "Holder of a Guinness World Record — a testament to extraordinary achievement.",
    icon: Award,
    image: img4,
  },
  {
    title: "Best Student Award",
    description: "Honored for academic excellence and outstanding contributions.",
    icon: Star,
    image: img3,
  },
  {
    title: "Best Innovation Award",
    description: "Awarded for creative problem-solving and innovative solutions.",
    icon: Lightbulb,
    image: img2,
  },
];

export default function AwardsDeviceBoxSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setCanHover(mq.matches);
    const handler = (e) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleDevice = () => {
    if (!canHover) setIsHovered((prev) => !prev);
  };

  return (
    <section id="awards" className="scroll-mt-20 overflow-hidden">
      <div className="w-full flex justify-center px-6 py-8 md:py-12">
        <div className="relative w-full max-w-6xl rounded-3xl p-[2px] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 blur-2xl opacity-30"></div>

          <div className="relative rounded-3xl bg-[#0b0b0f] p-8 md:p-10 border border-white/10">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT SIDE */}
              <div className="text-white space-y-5">
                <p className="text-[#e81cff] text-sm uppercase tracking-widest font-semibold">
                  Awards
                </p>

                <h2 className="text-3xl md:text-4xl font-bold">
                  Recognition &{" "}
                  <span className="text-[#e81cff] drop-shadow-[0_0_14px_rgba(232,28,255,0.8)]">
                    Achievements
                  </span>
                </h2>

                {awards.map((award, index) => {
                  const Icon = award.icon;

                  return (
                    <motion.div
                      key={award.title}
                      onClick={() => setSelectedAward(award)}
                      whileHover={
                        canHover
                          ? { scale: 1.04, boxShadow: "0 0 30px rgba(232,28,255,0.45)" }
                          : {}
                      }
                      className="group relative flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 cursor-pointer overflow-hidden hover:border-[#e81cff] hover:bg-[#e81cff]/5"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg border bg-white/5 border-white/10 group-hover:bg-[#e81cff]/20 group-hover:border-[#e81cff] transition-all duration-300">
                        <Icon
                          className="w-5 h-5 text-[#e81cff] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(232,28,255,1)] transition-all duration-300"
                          strokeWidth={2.2}
                          fill="currentColor"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-base">{award.title}</h3>
                        <p className="text-gray-400 text-xs">{award.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* RIGHT DEVICE */}
              <div className="flex justify-center">
                <div className="relative group" onClick={toggleDevice}>
                  <motion.div
                    onMouseEnter={() => canHover && setIsHovered(true)}
                    onMouseLeave={() => canHover && setIsHovered(false)}
                    className="relative z-10 w-[320px] md:w-[380px] lg:w-[420px]"
                  >
                    <div className="relative w-full" style={{ aspectRatio: "1/1.15" }}>
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-5"
                          >
                            <svg className="absolute" style={{ width: 0, height: 0 }}>
                              <defs>
                                <clipPath id="screenClip" clipPathUnits="objectBoundingBox">
                                  <polygon points="0.14,0.04 0.91,0.41 0.91,0.92 0.08,0.52 0.08,0.12" />
                                </clipPath>
                              </defs>
                            </svg>

                            <div
                              className="absolute inset-0 overflow-hidden"
                              style={{ clipPath: "url(#screenClip)", background: "#000" }}
                            >
                              <motion.div
                                animate={{ x: ["0%", "-60%"], y: ["0%", "-25%"] }}
                                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                                className="flex h-full w-max"
                                style={{
                                  transform:
                                    "perspective(900px) rotateX(6deg) rotateY(-10deg) skewY(-6deg) scale(1.08)",
                                  transformOrigin: "50% 50%",
                                  marginTop: "4%",
                                  marginLeft: "1%",
                                }}
                              >
                                {[img1, img2, img3, img4, img1].map((img, i) => (
                                  <img key={i} src={img} className="h-full w-auto object-cover" draggable={false} />
                                ))}
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <img
                        src={deviceWhite}
                        draggable={false}
                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${
                          isHovered ? "opacity-0" : "opacity-100"
                        }`}
                      />

                      <motion.img
                        src={deviceColor}
                        draggable={false}
                        animate={
                          isHovered
                            ? {
                                filter: [
                                  "drop-shadow(0 0 10px rgba(232,28,255,0.5))",
                                  "drop-shadow(0 0 35px rgba(232,28,255,1))",
                                  "drop-shadow(0 0 10px rgba(232,28,255,0.5))",
                                ],
                              }
                            : { filter: "drop-shadow(0 0 0px rgba(0,0,0,0))" }
                        }
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* IMAGE POPUP MODAL */}
      <AnimatePresence>
        {selectedAward && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAward(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
            >
              <div className="bg-[#0b0b0f] border border-[#e81cff]/40 rounded-2xl p-6 max-w-md w-full relative shadow-[0_0_50px_rgba(232,28,255,0.5)]">

                <button
                  onClick={() => setSelectedAward(null)}
                  className="absolute top-3 right-3 text-white/70 hover:text-white text-xl"
                >
                  ✕
                </button>

                <h3 className="text-lg font-semibold text-[#e81cff] mb-3">
                  {selectedAward.title}
                </h3>

                <img
                  src={selectedAward.image}
                  className="rounded-xl mb-4 w-full object-cover"
                  draggable={false}
                />

                <p className="text-gray-400 text-sm leading-relaxed">
                  {selectedAward.description}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
