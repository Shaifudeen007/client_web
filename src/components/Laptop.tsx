import React, { useState } from "react";
import { motion } from "framer-motion";

import laptopScreenWhite from "@/assets/icg-2.svg";
import laptopScreenColor from "@/assets/icg-1.svg";
import laptopKeyboardWhite from "@/assets/icg-4.svg";
import laptopKeyboardColor from "@/assets/icg-3.svg";

import linkedinProfile from "@/assets/p11.png";
import profile2 from "@/assets/p2.png";
import profile3 from "@/assets/p3.png";
import profile4 from "@/assets/imm.png";
import profile5 from "@/assets/imm2.png";

const AchievementLaptopSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 py-8 bg-transparent scale-90 md:scale-70 origin-top">
      <div className="relative w-full max-w-7xl rounded-3xl p-[2px] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 blur-2xl opacity-40"></div>

        <div className="relative rounded-3xl bg-[#0b0b0f] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-16 border border-white/10">

          {/* LEFT TEXT */}
          <div className="max-w-lg text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              After crossing so many struggles,
              <br />
              I turned challenges into milestones.
            </h2>
          </div>

          {/* LAPTOP */}
          <div className="relative group">
            <div className="absolute -inset-8 rounded-3xl bg-purple-600 blur-3xl opacity-0 group-hover:opacity-40 transition duration-500"></div>

            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-[420px] md:w-[520px] relative">

                {/* SCREEN */}
                <div className="relative w-full">
                  <img
                    src={laptopScreenWhite}
                    className={`w-full transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
                  />
                  <img
                    src={laptopScreenColor}
                    className={`absolute inset-0 w-full transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                  />

                  {/* SCREEN CONTENT */}
                  <div
                    className={`absolute overflow-hidden rounded-lg transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    style={{
                      top: "12%",
                      left: "6%",
                      right: "6%",
                      bottom: "12%",
                    }}
                  >
                    <motion.div
                      animate={isHovered ? { y: ["0%", "-400%"] } : { y: "0%" }}
                      transition={{
                        duration: 30,
                        repeat: isHovered ? Infinity : 0,
                        ease: "linear",
                      }}
                      className="flex flex-col h-full"
                    >
                      <img src={linkedinProfile} className="w-full h-full object-cover" />
                      <img src={profile2} className="w-full h-full object-cover" />
                      <img src={profile3} className="w-full h-full object-cover" />
                      <img src={profile4} className="w-full h-full object-cover" />
                      <img src={profile5} className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                </div>

                {/* KEYBOARD */}
                <div className="relative w-[125%] left-1/2 -translate-x-1/2 -mt-3">
                  <img
                    src={laptopKeyboardWhite}
                    className={`w-full transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
                  />
                  <img
                    src={laptopKeyboardColor}
                    className={`absolute inset-0 w-full transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                  />
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AchievementLaptopSection;
