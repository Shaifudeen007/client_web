import { motion } from "framer-motion";

const colleges = [
  "Presidency University – Bengaluru",
  "St. Joseph's College of Engineering – Chennai",
  "Saveetha University – Chennai",
  "Sree Sastha Institute of Engineering and Technology – Kanchipuram",
  "IFET College of Engineering (Autonomous) – Villupuram",
  "Manakula Vinayagar Institute of Technology – Puducherry",
  "Sri Manakula Vinayagar Engineering College – Puducherry",
  "Sri Venkateshwaraa College of Engineering and Technology – Puducherry",
  "Rajiv Gandhi College of Engineering and Technology – Puducherry",
  "R. P. Sarathy Institute of Technology (RPSIT) – Puducherry",
  "Bannari Amman Institute of Technology – Erode",
  "Erode Sengunthar Engineering College – Erode",
  "Muthayammal Engineering College (Autonomous) – Namakkal",
  "Paavai Engineering College – Namakkal",
  "K.S.R. College of Engineering – Namakkal",
  "Velalar College of Engineering and Technology (VCET) – Erode",
  "Kongu Engineering College – Erode",
  "Nandha Engineering College – Erode",
  "M. Kumaraswamy College of Engineering – Karur",
  "Chettinad College of Engineering & Technology – Karur",
  "VSB Engineering College – Karur",
  "K. Ramakrishnan College of Engineering (KRCE) – Tiruchirappalli",
  "SRM TRP Engineering College – Tiruchirappalli",
  "Dhanalakshmi Srinivasan College of Engineering and Technology – Tiruchirappalli",
  "KPR Institute of Engineering and Technology – Coimbatore",
  "Karpagam Institute of Technology – Coimbatore",
  "Hindusthan Institute of Technology – Coimbatore",
  "Kamaraj College of Engineering & Technology (Autonomous) – Virudhunagar",
  "Kalasalingam University – Virudhunagar",
  "St. Jerome's College – Kanyakumari",
  "Pioneer Kumaraswamy College – Kanyakumari",
  "Muslim Arts College – Kanyakumari",
  "Noorul Islam College – Kanyakumari",
  "Nesamony Memorial Christian College – Kanyakumari",
  "Nanjil Catholic College of Arts and Science – Kanyakumari",
  "Malankara Catholic College – Kanyakumari",
  "Arignar Anna College – Kanyakumari",
  "Rajeev Gandhi Memorial College of Engineering and Technology – Andhra Pradesh"
];

const CollegeSection = () => {
  return (
    <section
      id="colleges"
      className="py-28 bg-transparent text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

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

          <h2 className="text-5xl font-bold">
            Associated across{" "}
            <span className="text-[#e81cff] drop-shadow-[0_0_14px_rgba(232,28,255,0.8)]">
              40+ Colleges
            </span>
          </h2>
        </motion.div>

         {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {colleges.map((college, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="college-card"
            >
              {college}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CollegeSection;
