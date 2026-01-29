import { motion } from "framer-motion";
import { Linkedin, Quote } from "lucide-react";

const testimonials = [
  {name: 'Dhanush Kumar',
    role: 'LTIMindtree Interview Journey',
    text:
      'Though I was not selected in the final HR round, the 4-month interview journey improved my confidence, communication, and mindset. Grateful to my mentor B S Ranjith for constant guidance.',
    link:
      'https://www.linkedin.com/posts/dhanushkumar04_interviewexperience-placementjourney-hrinterview-activity-7411090033266364416-Il7n',
  },
  {
    name: 'Harini Arumugam',
    role: 'LTIMindtree Placement',
    text:
      '4 rounds, 54 days, countless revisions. Consistency and patience helped me achieve my LTIMindtree offer. Special thanks to my mentor B S Ranjith.',
    link:
      'https://www.linkedin.com/posts/harini-arumugam-4568042a3_proud-to-share-my-ltimindtree-placement-activity-7406653999409557504-Gzqt',
  },
  {
    name: 'Saran',
    role: 'Placement Success Story',
    text:
      'Projects, patience, and consistency were the key. My interview journey taught me that the right opportunity comes when you stay consistent.',
    link:
      'https://www.linkedin.com/posts/saran2701_one-unexpected-twist-changed-everything-ugcPost-7401250057427017728-kbtD',
  },
  {
    name: 'Mohammed Aadhil',
    role: 'Avasoft Interview Experience',
    text:
      'This interview process taught me to justify every skill and think logically. Thankful to my placement trainer Mr. B S Ranjith.',
    link:
      'https://www.linkedin.com/posts/mohammedaadhil1304_avasoft-interview-interviewexperience-activity-7372298280074072065-1p0t',
  },
  {
    name: 'Yogeshwaran D',
    role: 'Java & DSA Training',
    text:
      'Trainer B S Ranjith explained DSA concepts clearly and helped me implement them in real projects. The confidence I gained is priceless.',
    link:
      'https://www.linkedin.com/posts/yogeshwaran-d_github-yogeshcoder9865atmproject-activity-7331933103688441856-8zNe',
  },
  {
  name: 'Vijay Baskar',
  role: 'Portfolio & Internship Journey',
  text:
    'Got a call for an internship offer & launched my tech portfolio! I built a dedicated space showcasing my IoT, embedded systems & hardware projects that reflect my hands-on design mindset. Grateful to my trainer B S RANJITH for all the support and guidance. If you’re into tech, hardware, or IoT, let’s connect and explore ideas!',
  link:
    'https://www.linkedin.com/posts/vijaybaskar0305_portfolio-internshipjourney-embeddedsystems-activity-7335152846755000320-r5sd',
},

  {
    name: 'Tharvesh',
    role: 'Java & DSA Learning',
    text:
      'I gained strong DSA knowledge using Java and implemented it in projects. Thankful to my trainer B S Ranjith for his valuable interview tips.',
    link:
      'https://lnkd.in/gqpNssAu',
  },
  {
    name: 'Guhan G',
    role: 'Java Programming Training',
    text:
      'The Java and DSA training was highly practical and motivating. Complex topics were explained in a simple and engaging manner.',
    link:
      'https://www.linkedin.com/posts/guhan-g-17509530a_github-g-guhan5java-quizapp-activity-7332051653287628800-Szx4',
  },
    
];

const Testimonials = () => {
  return (
    <section id="testimonials"className="py-28 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-[#e81cff] text-sm uppercase tracking-widest mb-3 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold">
            Student{" "}
            <span
              className="
                text-[#e81cff]
                drop-shadow-[0_0_12px_rgba(232,28,255,0.8)]
                animate-pulse
              "
            >
              Voices
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl
              bg-black/60 border border-white/10 backdrop-blur
              hover:border-[#e81cff]/40 transition duration-500"
            >
              {/* GLOW */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-[#e81cff]/25 via-transparent to-[#40c9ff]/25 blur-xl
                transition duration-500 pointer-events-none"
              />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col gap-3">

                <div className="flex items-center gap-2 text-[#e81cff]">
                  <Quote size={16} />
                  <h3 className="font-semibold text-lg text-white">
                    {t.name}
                  </h3>
                </div>

                <p className="text-sm text-[#e81cff]/80">
                  {t.role}
                </p>

                <p className="text-sm text-white/70 leading-relaxed">
                  {t.text}
                </p>

                <a
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-[#e81cff] hover:underline"
                >
                  <Linkedin size={16} />
                  View LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
