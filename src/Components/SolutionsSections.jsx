import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aiChip from "../assets/ai-chip.jpg";

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

const SolutionsSection = () => (
  <section id="mission" className="relative z-10 container mx-auto px-6 py-28">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-16 items-start"
    >

      {/* ===== LEFT SIDE ===== */}
      <div>
        <motion.div variants={fadeUp} custom={0} className="section-badge mb-4">
          OUR MISSION
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="font-display text-3xl md:text-4xl font-bold mb-6"
        >
          Driving Digital Excellence Through{" "}
          <span className="gradient-subtle">Innovation & Technology</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="font-body text-muted-foreground leading-relaxed mb-8"
        >
          Our mission is to be a trusted digital transformation partner,
          delivering innovative, scalable, and secure technology solutions
          that empower organizations to achieve operational excellence and
          sustainable growth in a rapidly evolving digital world.
        </motion.p>

        {/* Image (kept design same) */}
        <motion.div
          variants={fadeUp}
          custom={2.5}
          className="mb-8 relative rounded-xl overflow-hidden border border-border"
        >
          <img
            src={aiChip}
            alt="Digital Innovation"
            className="w-full h-52 object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card to-transparent">
            <p className="font-display text-xs tracking-wider text-primary">
              DIGITAL TRANSFORMATION CORE
            </p>
          </div>
        </motion.div>

        {/* Bullet Points (same design, new content) */}
        <motion.div variants={fadeUp} custom={3} className="space-y-3">
          {[
            "Delivering secure and scalable digital solutions",
            "Empowering businesses through innovation and AI-driven insights",
            "Building sustainable growth through technology excellence",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <span className="font-body text-sm text-muted-foreground">
                {point}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== RIGHT SIDE (design unchanged, content updated) ===== */}
      <motion.div variants={fadeUp} custom={2}>
        <div className="card-elevated p-8 rounded-2xl">
          <p className="font-display text-xs tracking-wider text-muted-foreground mb-6">
            STRATEGIC FOCUS AREAS
          </p>

          <div className="space-y-6">
            {[
              { label: "Innovation & R&D", value: 95 },
              { label: "Customer Success", value: 97 },
              { label: "Operational Excellence", value: 93 },
              { label: "Technology Integration", value: 90 },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-sm font-body mb-2">
                  <span className="text-foreground">{bar.label}</span>
                  <span className="text-primary font-display text-xs">
                    {bar.value}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="divider-gradient my-6" />

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-muted/50 text-center">
              <p className="font-display text-lg font-bold text-primary">200+</p>
              <p className="font-body text-xs text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 text-center">
              <p className="font-display text-lg font-bold text-primary">99%</p>
              <p className="font-body text-xs text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default SolutionsSection;