import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "../assets/defense-ai.jpg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HeroSection = () => (
  <section className="relative z-10 overflow-hidden pt-28 pb-24 bg-background">

    <div className="container mx-auto px-6">

      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="section-badge mb-8">
            NEXT-GEN DEFENSE INTELLIGENCE
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
          >
            AI-Powered
            <br />
            <span className="gradient-subtle">Defense Systems</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Advanced artificial intelligence engineered for national security.
            Real-time threat detection, autonomous response, and predictive analytics
            at the speed of modern warfare.
          </motion.p>


        </motion.div>

        {/* RIGHT SIDE IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">

            {/* Glow Behind */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl scale-110 -z-10" />

            <img
              src={heroImage}
              alt="AI Command Center"
              className="w-full h-[480px] object-cover"
            />

            {/* Bottom Status Bar */}
            <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md rounded-xl px-6 py-3 flex items-center gap-3 border border-border">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <p className="text-sm font-display tracking-wide">
                SYSTEM ONLINE — LIVE THREAT MONITORING
              </p>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Stats */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
      >
        {[
          { label: "Threats Neutralized", value: "12,847", sub: "+23% this quarter" },
          { label: "Response Time", value: "0.003s", sub: "45% faster than v4" },
          { label: "System Uptime", value: "99.99%", sub: "Mission critical SLA" },
        ].map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="card-solid p-5">
            <p className="font-display text-2xl font-bold text-primary">
              {stat.value}
            </p>
            <p className="text-sm text-foreground mt-1 font-body font-medium">
              {stat.label}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 font-body">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default HeroSection;