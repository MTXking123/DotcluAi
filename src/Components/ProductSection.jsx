import { motion } from "framer-motion";

import dotVisionImg from "../assets/ai-chip.jpg";
import dotAiImg from "../assets/Dot-Ai.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const products = [
  {
    image: dotVisionImg,
    title: "DotVision",
    desc: "Our expert developers conduct in-depth assessments of your existing computer vision systems and deliver optimized AI-driven visual intelligence solutions.",
  },
  {
    image: dotAiImg,
    title: "Dot-AI/VI",
    desc: "Our expert consultants conduct in-depth assessments of your IT ecosystem and implement advanced AI and vision intelligence frameworks.",
  },
];

const ProductsSection = () => (
  <section id="products" className="relative z-10 container mx-auto px-6 py-28">

    {/* ===== Section Title ===== */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="font-display text-3xl md:text-5xl font-bold"
      >
        Our Products
      </motion.h2>
    </motion.div>

    {/* ===== Product Cards ===== */}
    <div className="grid md:grid-cols-2 gap-8">

      {products.map((product, i) => (
        <motion.div
          key={product.title}
          variants={fadeUp}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-200"
        >

          {/* Image */}
          <div className="h-56 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="bg-gray-100 text-center px-6 py-10">
            <h3 className="text-xl font-semibold mb-4">
              {product.title}
            </h3>

            <p className="text-sm text-gray-600 max-w-md mx-auto">
              {product.desc}
            </p>
          </div>

        </motion.div>
      ))}

    </div>

  </section>
);

export default ProductsSection;