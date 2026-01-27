import { motion } from "framer-motion";
import styled from "styled-components";
import eduIcon from "@/assets/e1.svg";

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Excel Engineering College (Autonomous)",
    field: "Business Administration",
  },
  {
    degree: "Master of Engineering (ME)",
    institution: "Hindusthan College of Engineering and Technology",
    field: "Computer Science",
  },
  {
    degree: "Bachelor of Technology (BTech)",
    institution: "KSR Institute for Engineering and Technology, Namakkal",
    field: "Information Technology",
  },
];

const cardVariants = {
  left: { opacity: 0, x: -120 },
  right: { opacity: 0, x: 120 },
  bottom: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const EducationSection = () => {
  return (
    <section id="education" className="py-28 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-[#e81cff] text-sm uppercase tracking-widest mb-4 font-semibold">
            Academic Background
          </p>
          <h2 className="text-5xl font-bold">
            Education &{" "}
            <span className="text-[#e81cff] drop-shadow-[0_0_12px_rgba(232,28,255,0.8)]">
              Qualifications
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12">
          {education.map((edu, index) => {
            const start =
              index % 3 === 0 ? "left" :
              index % 3 === 1 ? "bottom" :
              "right";

            return (
              <motion.div
                key={edu.degree}
                variants={cardVariants}
                initial={start}
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -18, scale: 1.05 }}
              >
                <StyledCard>
                  <div className="package">
                    <div className="package2">
                      <div className="content">
                        <div className="icon">
                          <img src={eduIcon} alt="education" />
                        </div>

                        <h3>{edu.degree}</h3>
                        <p className="field">{edu.field}</p>
                        <p className="institution">{edu.institution}</p>
                      </div>
                    </div>
                  </div>
                </StyledCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

/* ================= STYLES ================= */

const StyledCard = styled.div`
  .package {
    width: 320px;
    height: 380px;
    background-image: linear-gradient(163deg, #e81cff 0%, #40c9ff 100%);
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .package:hover {
    box-shadow: 0px 0px 40px 2px rgba(232, 28, 255, 0.35);
  }

  .package2 {
    width: 100%;
    height: 100%;
    background-color: #0c0c12;
    border-radius: 18px;
    padding: 28px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .package2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .content {
    text-align: center;
    color: white;
  }

  .icon {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
  }

  /* 🤍 ALWAYS WHITE SVG */
  .icon img {
    width: 100%;
    transition: all 0.35s ease;
    filter: brightness(0) invert(1);
  }

  /* ⚡ GLOW ON HOVER */
  .package:hover .icon img {
    transform: scale(1.15);
    filter: brightness(0) invert(1)
      drop-shadow(0 0 10px #ffffff)
      drop-shadow(0 0 22px #ffffff)
      drop-shadow(0 0 40px #ffffff);
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .field {
    color: #e81cff;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .institution {
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    line-height: 1.5;
  }
`;
