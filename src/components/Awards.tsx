import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Star, Lightbulb } from "lucide-react";

import deviceFrameWhite from "@/assets/ascot-3.svg";
import deviceFrameColor from "@/assets/ascot-4.png";

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

const deviceImages = [
  { src: img2, alt: "Screen 1" },
  { src: img1, alt: "Screen 2" },
  { src: img3, alt: "Screen 3" },
  { src: img4, alt: "Screen 4" },
];

export default function AwardsDeviceBoxSection() {
  const [selectedAward, setSelectedAward] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setCanHover(mq.matches);
    const handler = (e: any) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section id="awards" className="scroll-mt-20 overflow-hidden">
      <div className="w-full flex justify-center px-4 sm:px-6 py-8 md:py-12">
        <div className="relative w-full max-w-6xl rounded-3xl p-[2px] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 blur-2xl opacity-30"></div>

          <div className="relative rounded-3xl bg-[#0b0b0f] p-5 sm:p-8 md:p-10 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

              {/* LEFT SIDE */}
              <div className="text-white space-y-5">
                <p className="text-[#e81cff] text-xs sm:text-sm uppercase tracking-widest font-semibold">
                  Awards
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Recognition &{" "}
                  <span className="text-[#e81cff] drop-shadow-[0_0_14px_rgba(232,28,255,0.8)]">
                    Achievements
                  </span>
                </h2>

                {awards.map((award) => {
                  const Icon = award.icon;
                  return (
                    <motion.div
                      key={award.title}
                      onClick={() => setSelectedAward(award)}
                      whileHover={canHover ? { scale: 1.04, boxShadow: "0 0 30px rgba(232,28,255,0.45)" } : {}}
                      className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-white/10 bg-white/[0.02] cursor-pointer hover:border-[#e81cff] hover:bg-[#e81cff]/5"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border bg-white/5 flex items-center justify-center group-hover:bg-[#e81cff]/20 shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#e81cff]" fill="currentColor" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">{award.title}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">{award.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* RIGHT DEVICE */}
              <div className="flex justify-center mt-6 md:mt-0">
                <motion.div
                  onMouseEnter={() => canHover && setIsHovered(true)}
                  onMouseLeave={() => canHover && setIsHovered(false)}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-[260px] sm:w-[320px] md:w-[420px]"
                >
                  <div className="relative w-full" style={{ aspectRatio: "1/1.15" }}>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.35 }}
                          className="absolute inset-0 -z-10 rounded-[40px]"
                          style={{
                            background:
                              "radial-gradient(circle at center, rgba(232,28,255,0.55) 0%, rgba(232,28,255,0.25) 40%, transparent 70%)",
                            filter: "blur(40px)",
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
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
                              animate={{ y: ["0%", "-80%"] }}
                              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                              className="flex flex-col w-full"
                              style={{
                                transform: "skewY(-18deg) scale(1.25)",
                                transformOrigin: "20% 0%",
                                marginTop: "15%",
                                marginLeft: "5%",
                              }}
                            >
                              {deviceImages.map((image, index) => (
                                <img
                                  key={index}
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-auto object-contain mb-4 cursor-pointer hover:opacity-80"
                                  draggable={false}
                                  onClick={() => setSelectedImage(image.src)}
                                />
                              ))}
                              <img src={deviceImages[0].src} className="w-full h-auto object-contain mb-4" draggable={false}/>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <img
                      src={deviceFrameWhite}
                      className={`absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
                      draggable={false}
                    />
                    <img
                      src={deviceFrameColor}
                      className={`absolute inset-0 w-full h-full object-contain z-20 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                      draggable={false}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AWARD MODAL */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedAward(null)}>
            <div className="bg-[#0b0b0f] p-5 sm:p-6 rounded-2xl max-w-md w-full">
              <h3 className="text-[#e81cff] mb-3 text-lg">{selectedAward.title}</h3>
              <img src={selectedAward.image} className="mb-4 rounded-xl w-full" />
              <p className="text-gray-400 text-sm">{selectedAward.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DEVICE IMAGE POPUP */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImage(null)}>
            <motion.img src={selectedImage} className="max-w-[95vw] max-h-[85vh] rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
