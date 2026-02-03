import { motion } from "framer-motion";
import CollegeMap from "./CollegeMap";

const CollegeSection = () => {
  return (
    <section
      id="colleges"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* Background Glow Styles */}
      <style>{`
        .section-glow-1 {
          position: absolute;
          top: 20%;
          left: 15%;
          width: 400px;
          height: 400px;
          background: rgba(232, 28, 255, 0.08);
          border-radius: 50%;
          filter: blur(120px);
        }

        .section-glow-2 {
          position: absolute;
          bottom: 15%;
          right: 15%;
          width: 350px;
          height: 350px;
          background: rgba(232, 28, 255, 0.05);
          border-radius: 50%;
          filter: blur(100px);
        }

        .text-glow {
          text-shadow: 0 0 14px rgba(232, 28, 255, 0.8);
        }
      `}</style>

      {/* Glow Elements */}
      <div className="section-glow-1" />
      <div className="section-glow-2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#e81cff] uppercase tracking-widest text-sm font-semibold mb-4">
            7000+ Students Guided
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Associated across{" "}
            <span className="text-[#e81cff] text-glow">40+ Colleges</span>
          </h2>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CollegeMap />
        </motion.div>
      </div>
    </section>
  );
};

export default CollegeSection;
