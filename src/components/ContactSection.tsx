import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, MapPin, Send } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -120 },
  hiddenRight: { opacity: 0, x: 120 },
  hiddenBottom: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 bg-transparent text-white relative overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-14 text-left"
            >
              <p className="text-[#e81cff] text-sm uppercase tracking-widest mb-4 font-semibold">
                Get In Touch
              </p>

              <h2 className="text-5xl font-bold">
                Contact{" "}
                <span className="text-[#e81cff] drop-shadow-[0_0_12px_rgba(232,28,255,0.8)] animate-pulse">
                  Me
                </span>
              </h2>
            </motion.div>

            {/* Cards */}
            <motion.div variants={containerVariants} className="grid sm:grid-cols-2 gap-10">

              <ContactCard
                icon={Mail}
                title="Email"
                text="ranjithbs61@gmail.com"
                link="mailto:ranjithbs61@gmail.com"
                variant="hiddenLeft"
              />

              <ContactCard
                icon={Linkedin}
                title="LinkedIn"
                text="Connect with me"
                link="https://www.linkedin.com/in/ranjithbs14/"
                variant="hiddenBottom"
              />

              <ContactCard
                icon={Instagram}
                title="Instagram"
                text="Follow me"
                link="https://www.instagram.com/ranjith_bs_14?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                variant="hiddenRight"
              />

              <ContactCard
                icon={MapPin}
                title="Location"
                text="Erode - 638 301, Tamil Nadu, India"
                link="https://www.google.com/maps/search/?api=1&query=Erode+Tamil+Nadu+638301"
                wide
                variant="hiddenBottom"
              />

            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="relative group rounded-xl mt-6"
          >
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-[#e81cff] to-[#40c9ff] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-black border border-white/15 group-hover:border-white/40 transition duration-500 rounded-xl p-10 z-10">
              <h3 className="text-2xl font-bold text-center text-[#40c9ff] mb-8">
                Send me a message
              </h3>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black border border-white/15 rounded-xl px-5 py-4 focus:outline-none focus:border-[#40c9ff]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black border border-white/15 rounded-xl px-5 py-4 focus:outline-none focus:border-[#40c9ff]"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-black border border-white/15 rounded-xl px-5 py-4 focus:outline-none focus:border-[#40c9ff] resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#e81cff] to-[#40c9ff] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, text, wide, variant, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      initial={variant}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -14, scale: 1.05 }}
      className={`relative group rounded-xl cursor-pointer block ${wide ? "sm:col-span-2" : ""}`}
    >
      <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-[#e81cff] to-[#40c9ff] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative bg-black border border-white/15 group-hover:border-white/40 transition duration-500 rounded-xl p-6 z-10 flex items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
          <Icon className="text-[#40c9ff]" size={22} />
        </div>

        <div>
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="text-white/70 text-sm">{text}</p>
        </div>
      </div>
    </motion.a>
  );
}
