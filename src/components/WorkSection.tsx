import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, ChevronRight, Briefcase } from "lucide-react";
import ElectricBorder from "@/components/ElectricBorder"; // <-- ADD THIS

const experiences = [
  {
    title: "Assistant Professor",
    company: "Nandha Engineering College",
    period: "August 2025 - Present (6 months)",
    location: "Erode, Tamil Nadu, India",
    description:
      "Currently serving as an Assistant Professor, guiding students in Computer Science & Engineering with a focus on programming, problem-solving, and real-time application building.",
    current: true,
  },
  {
    title: "HR Manager & Team Lead",
    company: "TERV PRO",
    period: "February 2023 - July 2025 (2 years 6 months)",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Led HR operations, recruitment, team leadership, Scrum practices, and technical training delivery across multiple corporate and academic programs.",
  },
  {
    title: "Visiting Professor",
    company: "Presidency University Bangalore",
    period: "July 2023 - December 2023 (6 months)",
    location: "Bangalore, India",
    description:
      "Delivered lectures on Problem Solving in C and improved completion rates by 30% through hands-on mentoring.",
  },
  {
    title: "Brand Ambassador",
    company: "Zaphire®",
    period: "January 2022 - November 2022 (11 months)",
    location: "Tamil Nadu, India",
    description:
      "Represented the brand, improved outreach and supported marketing engagement initiatives.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 lg:py-32 bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-[#e81cff] text-sm uppercase tracking-widest mb-2 font-semibold">
            Career Journey
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Professional{" "}
            <span className="text-[#e81cff] drop-shadow-[0_0_14px_rgba(232,28,255,0.8)]">
              Experience
            </span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-10 gap-10">
          {/* LEFT TIMELINE */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e81cff] via-[#e81cff]/50 to-transparent hidden lg:block" />

            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-full text-left pl-10 pr-4 py-4 rounded-xl transition-all relative ${
                    activeIndex === index
                      ? "bg-[#e81cff]/10 border border-[#e81cff]/30"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div
                    className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 ${
                      activeIndex === index
                        ? "bg-[#e81cff] border-[#e81cff]"
                        : "bg-black border-white/30"
                    }`}
                  />

                  {exp.current && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 text-[10px] font-bold bg-[#e81cff] text-black rounded-full">
                      Now
                    </span>
                  )}

                  <h4 className="font-semibold text-sm text-white">
                    {exp.company}
                  </h4>
                  <p className="text-xs text-white/60 mt-1">{exp.period}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT DETAIL CARD */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >
              {/* 🔥 ELECTRIC BORDER WRAPPER */}
              <ElectricBorder
                color="#e81cff"
                speed={1.4}
                chaos={0.2}
                borderRadius={20}
                className="rounded-2xl"
              >
                {/* Glow blob */}
                <motion.div
                  className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(232,28,255,0.55) 0%, transparent 70%)",
                  }}
                  animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#e81cff] via-[#e81cff]/50 to-transparent rounded-l-2xl blur-sm" />

                <div className="relative bg-black p-6 rounded-2xl border border-[#e81cff]/30 backdrop-blur-xl shadow-lg group-hover:shadow-[0_0_40px_rgba(232,28,255,0.6)] transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-[#e81cff] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(232,28,255,0.9)]">
                    <Briefcase className="text-black" size={18} />
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-white">
                    {experiences[activeIndex].title}
                  </h3>

                  <p className="text-[#e81cff] font-semibold mb-4">
                    {experiences[activeIndex].company}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4 text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {experiences[activeIndex].period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {experiences[activeIndex].location}
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                    {experiences[activeIndex].description}
                  </p>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                    <button
                      onClick={() =>
                        setActiveIndex(Math.max(0, activeIndex - 1))
                      }
                      disabled={activeIndex === 0}
                      className="flex items-center gap-1 text-sm text-white/70 disabled:opacity-30"
                    >
                      <ChevronRight className="rotate-180" size={14} />
                      Prev
                    </button>

                    <button
                      onClick={() =>
                        setActiveIndex(
                          Math.min(experiences.length - 1, activeIndex + 1)
                        )
                      }
                      disabled={activeIndex === experiences.length - 1}
                      className="flex items-center gap-1 text-sm text-white/70 disabled:opacity-30"
                    >
                      Next
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
