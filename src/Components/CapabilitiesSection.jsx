import { motion } from "framer-motion";

import servicesVisual from "../assets/global-network.jpg";

// Import service images
import consultingImg from "../assets/services/consulting.webp";
import softwareImg from "../assets/services/Software-Development.jpg";
import cloudImg from "../assets/services/cloud-computing.jpg";
import cyberImg from "../assets/services/cybersecurity-services.webp";
import supportImg from "../assets/services/IT-support.jpg";
import dataImg from "../assets/services/Data-Analytics.jpg";
import trainingImg from "../assets/services/IT-Training.webp";
import arvrImg from "../assets/services/AR-VR-services.jpg";
import aiImg from "../assets/services/AI-Gen.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

const services = [
  {
    image: consultingImg,
    title: "IT Consulting Services",
    desc: "Strategic technology consulting to optimize operations and accelerate digital transformation.",
  },
  {
    image: softwareImg,
    title: "Custom Software Development",
    desc: "Scalable and secure custom-built software solutions tailored to business needs.",
  },
  {
    image: cloudImg,
    title: "Cloud Computing Solutions",
    desc: "Secure cloud migration, deployment, and infrastructure management services.",
  },
  {
    image: cyberImg,
    title: "Cybersecurity Services",
    desc: "Advanced protection for networks, data, and enterprise systems.",
  },
  {
    image: supportImg,
    title: "Managed IT Support",
    desc: "24/7 proactive IT monitoring and support to ensure operational continuity.",
  },
  {
    image: dataImg,
    title: "Big Data & AI Solutions",
    desc: "AI-driven analytics and automation to enhance business intelligence.",
  },
  {
    image: trainingImg,
    title: "IT Training & Certification",
    desc: "Professional certification programs to build technical expertise.",
  },
  {
    image: arvrImg,
    title: "AR/VR Services",
    desc: "Immersive augmented and virtual reality experiences for enterprises.",
  },
  {
    image: aiImg,
    title: "AI Consultation",
    desc: "Strategic AI integration for intelligent automation and innovation.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="services" className="relative container mx-auto px-6 py-28">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our <span className="gradient-subtle">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Empowering businesses with cutting-edge technology and scalable digital solutions.
        </p>
      </div>


      {/* Cards */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
>
  {services.map((item, i) => (
    <motion.div
      key={item.title}
      variants={fadeUp}
      custom={i}
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-xl overflow-hidden bg-card border border-border transition-all duration-300"
    >

      {/* IMAGE SECTION */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-500 
                     group-hover:scale-110 group-hover:blur-sm"
        />

        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* CONTENT */}
      <div className="relative p-6">

        {/* Text Content */}
        <div className="transition-all duration-300 group-hover:opacity-40">
          <h3 className="text-sm font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* READ MORE BUTTON */}
        <div
          className="absolute bottom-6 left-6 right-6 flex justify-center
                     opacity-0 translate-y-6
                     group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300"
        >
          <button
            className="px-5 py-2 text-sm font-medium bg-primary text-white 
                       rounded-md shadow-lg hover:shadow-xl transition-all"
          >
            Read More →
          </button>
        </div>

      </div>
    </motion.div>
  ))}
</motion.div>

    </section>
  );
};

export default CapabilitiesSection;