import { motion } from "framer-motion";
import globalNetwork from "../assets/global-network.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const stats = [
  {
    value: "200+",
    label: "Customers including startups and Fortune 500 companies",
  },
  {
    value: "1800+",
    label: "Digital & Tech Experts with experience across industries",
  },
  {
    value: "7+",
    label: "Countries where we drive our technology",
  },
];

const GlobalNetworkSection = () => (
  <section id="network" className="relative z-10 py-28">
    <div className="container mx-auto px-6">

      {/* ===== Full-width image ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl overflow-hidden mb-12"
      >
        <img
          src={globalNetwork}
          alt="Global Technology Network"
          className="w-full h-72 md:h-[420px] object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

        {/* Overlay Content */}
        <div className="absolute bottom-8 left-8 right-8">
          <p className="font-display text-2xl md:text-4xl font-bold">
            Connect With Us Worldwide
          </p>

          <p className="font-body text-sm text-muted-foreground mt-2 max-w-lg">
            Empowering businesses globally through innovation, digital
            transformation, and scalable technology solutions.
          </p>
        </div>
      </motion.div>

      {/* ===== Stats Grid ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            custom={i}
            className="card-elevated p-8 text-center"
          >
            <p className="font-display text-4xl md:text-5xl font-bold text-primary">
              {stat.value}
            </p>
            <p className="font-body text-sm text-muted-foreground mt-3 max-w-xs mx-auto">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default GlobalNetworkSection;