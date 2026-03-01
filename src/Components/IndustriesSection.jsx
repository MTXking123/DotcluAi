import { motion } from "framer-motion";

import healthcareImg from "../assets/Industries/health-industry.jpg";
// import financeImg from "../assets/industries/finance.jpg";
import manufacturingImg from "../assets/Industries/Manufacturing Industries.jpg";
import ecommerceImg from "../assets/Industries/E-commerce.jpg";
import educationImg from "../assets/Industries/Education-sector.jpg";
import Governmentimg from "../assets/Industries/Government-sector.webp";
import InsuranceImg from "../assets/Industries/Insurance.jpg";
import financeImg from "../assets/Industries/finance.jpg";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};


const industries = [
  {
    image: healthcareImg,
    title: "Healthcare Industry",
    desc: "Transforming patient care and operational efficiency through secure digital health platforms and AI-driven diagnostics.",
    bg: "bg-blue-50",
  },
  {
    image: financeImg,
    title: "Financial Services",
    desc: "Secure fintech solutions enabling digital banking, fraud detection, and scalable financial ecosystems.",
    bg: "bg-yellow-50",
  },
  {
    image: manufacturingImg,
    title: "Manufacturing Industry",
    desc: "Smart automation and predictive analytics for optimized supply chains and intelligent production systems.",
    bg: "bg-orange-50",
  },
  {
    image: ecommerceImg,
    title: "Retail Industry",
    desc: "Scalable digital commerce platforms delivering seamless omnichannel customer experiences and real-time analytics.",
    bg: "bg-green-50",
  },
  {
    image: educationImg,
    title: "Education Industry",
    desc: "Innovative EdTech platforms delivering interactive learning, virtual classrooms, and AI-powered insights.",
    bg: "bg-purple-50",
  },
  {
    image: Governmentimg,
    title: "Government Sector",
    desc: "Secure digital infrastructure and AI-powered governance solutions enhancing public services and operational transparency.",
    bg: "bg-indigo-50",
  },
  {
    image: InsuranceImg,
    title: "Insurance Sector",
    desc: "Intelligent risk assessment, claims automation, and digital insurance platforms for enhanced customer experience.",
    bg: "bg-pink-50",
  },
];

const IndustriesSection = () => (
  <section id="industries" className="relative z-10 container mx-auto px-6 py-28">
    

    {/* ===== Section Header ===== */}
        
 <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="font-display text-3xl md:text-5xl font-bold gradient-subtle"
      >
        Industries We Serve
      </motion.h2>

      <motion.p
        variants={fadeUp}
        custom={1}
        className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto"
      >
        Delivering tailored technology solutions across diverse industries,
        empowering organizations with innovation and scalable digital ecosystems.
      </motion.p>
    </motion.div>
    

 <motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {industries.map((industry, i) => (
<motion.div
  key={industry.title}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.3 }}   // triggers when 30% visible
  transition={{ duration: 0.4, ease: "easeOut" }}
  whileHover={{ y: -3 }}
  className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
>
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold mb-3">
          {industry.title}
        </h3>

        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          {industry.desc}
        </p>

        <button className="text-primary text-sm font-medium hover:underline">
          Read more →
        </button>
      </div>
    </motion.div>
  ))}
</motion.div>

  </section>
);

export default IndustriesSection;