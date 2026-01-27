import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Users, Code2, Award } from "lucide-react";
import DecryptedText from "@/components/DecryptedText";
import profile from "@/assets/profile-photo.jpg";

const stats = [
  { icon: Briefcase, value: "300+", label: "Trainers Shaped" },
  { icon: Users, value: "7000+", label: "Students Guided" },
  { icon: Code2, label: "Versatile • Adaptable • Leadership-Driven" },
  { icon: Award, label: "Credentialed Tech Lead" },
];

const statVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  }),
  float: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen py-24 px-6 bg-transparent text-white flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div
            className="relative w-56 sm:w-64 h-[320px] sm:h-[380px] rounded-3xl overflow-hidden
                       border border-white/10
                       shadow-[0_0_0_2px_rgba(232,28,255,0.8),0_0_18px_rgba(64,201,255,0.6)]"
          >
            <motion.img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Glare Sweep */}
            <motion.div
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.9,
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="w-1/2 h-full rotate-12 blur-2xl opacity-40 bg-gradient-to-r from-transparent via-white to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="order-2 lg:order-1"
        >
          <p className="text-[#e81cff] text-sm tracking-widest uppercase font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            B S <span className="text-gradient">Ranjith</span>
          </h2>

          <p className="text-[#40c9ff] font-medium mb-5 text-sm sm:text-base">
            Assistant Professor · Technical Trainer · Scrum Master
          </p>

          <p className="text-white/70 leading-relaxed max-w-xl text-sm sm:text-base mb-10">
            Passionate Educator And Tech Lead With Expertise In Computer Science,
            Guiding Students In Programming, Problem-Solving, And Real-Time
            Application Building. Based In Tamil Nadu, India.
          </p>

          {/* STATS GRID (SMALL VERSION) */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statVariants}
                animate={inView ? ["visible", "float"] : "hidden"}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative rounded-xl p-[2px] overflow-hidden"
              >
                {/* Animated Gradient Border */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-xl
                    bg-[linear-gradient(90deg,#e81cff,#40c9ff,#e81cff)]
                    bg-[length:200%_200%] blur-[1px]"
                />

                {/* Small Card */}
                <div
                  className="relative z-10 bg-black rounded-xl p-3 sm:p-4
                             flex flex-col justify-center items-center
                             min-h-[110px] sm:min-h-[125px]
                             text-center space-y-1.5 sm:space-y-2
                             border border-white/10"
                >
                  <stat.icon className="text-[#40c9ff] w-5 h-5 sm:w-6 sm:h-6" />

                  {stat.value && (
                    <div className="text-base sm:text-lg font-bold text-gradient">
                      <DecryptedText text={stat.value} trigger={inView} />
                    </div>
                  )}

                  <p className="text-white/70 text-[10px] sm:text-[11px] leading-snug px-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
