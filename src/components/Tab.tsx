import React, { useState } from "react";
import { motion } from "framer-motion";

import deviceWhite from "@/assets/device-white.svg";
import deviceColor from "@/assets/device-color.svg";
import website from "@/assets/website.png";

const AngledDeviceShowcase: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center py-20 px-4">
      <div className="relative group">

        {/* ✨ Neon glow aura (background bloom) */}
        <div className="absolute -inset-16 rounded-[40px] bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 blur-3xl opacity-0 group-hover:opacity-40 transition duration-700"></div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-10 cursor-pointer transition-transform duration-500 hover:scale-105"
        >
          <div className="relative w-[500px] md:w-[700px]">

            {/* ================= DEVICE FRAME ================= */}

            {/* White frame */}
            <img
              src={deviceWhite}
              className={`w-full transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
              alt=""
            />

            {/* Neon frame */}
            <img
              src={deviceColor}
              className={`absolute inset-0 w-full transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              alt=""
            />

            {/* ================= SCREEN CONTENT ================= */}

            <div
              className="absolute overflow-hidden rounded-[28px]"
              style={{
                top: "8%",     // tweak for perfect fit
                left: "6%",
                right: "6%",
                bottom: "10%",
              }}
            >
              <img
                src={website}
                alt="website"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AngledDeviceShowcase;
