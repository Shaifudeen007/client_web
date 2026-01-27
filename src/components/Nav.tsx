import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, GraduationCap, Award, Mail } from "lucide-react";

const navItems = [
  { name: "About", id: "about", Icon: User },
  { name: "Experience", id: "experience", Icon: Briefcase },
  { name: "Education", id: "education", Icon: GraduationCap },
  { name: "Awards", id: "awards-swap", Icon: Award },
  { name: "Contact", id: "contact", Icon: Mail },
];

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [navOffset, setNavOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const hero = document.getElementById("home");

    const handleScroll = () => {
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsVisible(heroBottom <= 80);

      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setNavOffset({ x: x * 0.04, y: y * 0.06 });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          className="hidden md:block fixed top-6 left-1/2 -translate-x-[30%] z-50"
        >
          <div className="relative">
            <div className="nav-glow absolute inset-0 rounded-full" />

            <motion.nav
              onMouseMove={handleMouseMove}
              animate={{ x: navOffset.x, y: navOffset.y }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              whileHover={{ scale: 1.03 }}
              className="relative flex items-center gap-3 px-5 py-2 rounded-full"
              style={{
                background: "rgba(10,10,15,0.55)",
                backdropFilter: "blur(18px) saturate(140%)",
                border: "1px solid rgba(168,85,247,0.35)",
                boxShadow: `
                  0 8px 30px rgba(0,0,0,0.7),
                  0 0 25px rgba(168,85,247,0.25),
                  0 0 40px rgba(59,130,246,0.15)
                `,
              }}
            >
              {/* 🔥 BSR Branding */}
              <div
                onClick={() => scrollTo("home")}
                className="flex items-center pr-3 mr-2 border-r border-white/10 cursor-pointer"
              >
                <span
                  className="text-sm font-semibold tracking-widest"
                  style={{
                    background: "linear-gradient(90deg, #A855F7, #EC4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 12px rgba(168,85,247,0.6)",
                  }}
                >
                  BSR
                </span>
              </div>

              {navItems.map((item) => {
                const active = activeSection === item.id;
                const isHovered = hoveredItem === item.id;
                const Icon = item.Icon;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative cursor-pointer"
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
                      whileHover={{ y: -3 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={false}
                        animate={
                          active || isHovered
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        style={{
                          background:
                            "linear-gradient(135deg, #A855F7, #EC4899)",
                          boxShadow:
                            "0 0 15px rgba(168,85,247,0.8), 0 0 30px rgba(236,72,153,0.6)",
                        }}
                      />

                      <Icon
                        size={18}
                        strokeWidth={2.3}
                        className={`relative z-10 transition-all duration-300 ${
                          active || isHovered
                            ? "text-white"
                            : "text-white/50"
                        }`}
                      />
                    </motion.div>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 pointer-events-none"
                        >
                          <div
                            className="px-3 py-1.5 text-xs font-medium text-white rounded-lg border border-white/10"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(168,85,247,0.9), rgba(236,72,153,0.9))",
                              boxShadow: "0 0 20px rgba(168,85,247,0.5)",
                            }}
                          >
                            {item.name}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
