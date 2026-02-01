import { useState, useRef } from "react";
import {
  Quote as QuoteIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import q1 from "./q1.jpg";
import q2 from "./q2.jpg";
import q3 from "./q3.jpg";
import q4 from "./q4.jpg";
import q5 from "./q5.jpg";

const images = [q1, q2, q3, q4, q5];

const Quote = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const toggleLeft = () => setDirection("left");
  const toggleRight = () => setDirection("right");

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Quote */}
        <motion.div style={{ opacity, y }} className="text-center max-w-4xl mx-auto mb-20">
          <QuoteIcon className="w-14 h-14 text-primary/40 mx-auto mb-6" />
          <blockquote className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
            <span className="gradient-text">"A person lives by what he learns,</span>
            <br />
            <span className="text-white/70">
              but becomes immortal by what he teaches."
            </span>
          </blockquote>
        </motion.div>

        {/* Gallery */}
        <div className="relative overflow-hidden">

          {/* LEFT BUTTON */}
          <button
            onClick={toggleLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 border border-white/20 p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={toggleRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 border border-white/20 p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

          <motion.div
            className="flex gap-8 w-max"
            animate={{
              x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="relative group rounded-2xl p-[2px]"
                onClick={() => setSelected(img)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-lg transition" />

                <img
                  src={img}
                  className="relative h-52 w-80 object-cover rounded-2xl cursor-pointer z-10"
                  alt={`q${i}`}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-2xl p-[2px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-border blur-lg" />

              <div className="relative bg-black rounded-2xl p-2 z-10">
                <img
                  src={selected}
                  className="max-h-[80vh] rounded-xl shadow-2xl"
                  alt="popup"
                />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-4 -right-4 bg-primary text-black p-2 rounded-full hover:scale-110 transition"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Quote;
