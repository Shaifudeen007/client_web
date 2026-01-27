import { Trophy, Medal, Star, Award } from "lucide-react";
import { useState, useEffect } from "react";
import CardSwap, { Card } from "@/components/CardSwap";
import { motion } from "framer-motion";

const awards = [
  { title: "Best Employee Award", description: "Recognized for exceptional performance and dedication.", icon: Trophy, image: "/awards/p1.png" },
  { title: "Guinness World Record", description: "Holder of a Guinness World Record.", icon: Medal, image: "/awards/p4.png" },
  { title: "Best Student Award", description: "Honored for academic excellence.", icon: Star, image: "/awards/p2.png" },
  { title: "Best Innovation Award", description: "Awarded for creative solutions.", icon: Award, image: "/awards/p3.png" }
];

export default function AwardsCardSwap() {
  const [active, setActive] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Animation Variants */
  const sectionVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const leftVariant = {
    hidden: { x: -80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const rightVariant = {
    hidden: { x: 80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const statVariant = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="awards-swap"
      className="py-20 md:py-28 text-white relative overflow-hidden"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div variants={leftVariant} className="space-y-6 text-center lg:text-left">
          <p className="text-[#e81cff] font-black uppercase tracking-widest text-sm">
            Recognition
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Awards &{" "}
            <span className="text-[#e81cff] drop-shadow-[0_0_12px_#e81cff]">
              Honors
            </span>
          </h2>

          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              variants={statVariant}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              className="group flex gap-4 p-4 rounded-xl bg-black/60 border border-[#e81cff]/30 hover:border-[#e81cff] shadow-[0_0_10px_#e81cff30] hover:shadow-[0_0_25px_#e81cff] transition-all duration-300 cursor-pointer"
            >
              <a.icon className="text-white group-hover:text-[#e81cff] group-hover:fill-[#e81cff] transition" />
              <div className="text-left">
                <h4 className="font-semibold">{a.title}</h4>
                <p className="text-sm text-white/70">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={rightVariant}
          className="flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <CardSwap
            width="100%"
            height={isMobile ? 260 : 380}
            cardDistance={isMobile ? 35 : 60}
            verticalDistance={isMobile ? 40 : 70}
          >
            {awards.map(a => (
              <Card key={a.title}>
                <img src={a.image} className="award-img" />
              </Card>
            ))}
          </CardSwap>
        </motion.div>
      </div>

      {/* POPUP */}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <motion.img
            src={awards[active].image}
            initial={{ scale: 0.7, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="rounded-xl shadow-[0_0_40px_#e81cff] max-h-[85vh] w-auto"
          />
        </motion.div>
      )}
    </motion.section>
  );
}
