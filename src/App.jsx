import { motion } from "framer-motion";
import { Shield, ChevronRight, ArrowRight, Mail, FileText,Menu, X } from "lucide-react";
import HeroSection from "./Components/HeroSection";
import CapabilitiesSection from "./Components/CapabilitiesSection";
import GlobalNetworkSection from "./Components/GlobalNetworkSection";
import SolutionsSection from "./Components/SolutionsSections";
import ScrollSyncSection from "./Components/ScrollSyncSelection";
import ProductsSection from "./Components/ProductSection";
import IndustriesSection from "./Components/IndustriesSection";
import { useState } from "react";


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};


const App = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden bg-zinc-950">
      {/* Subtle background */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-50 border-b border-border  bg-white">
  <div className="container mx-auto flex items-center justify-between py-4 px-6">
    
    <div className="flex items-center gap-3">
      <img src="/dotclu-logo.png" alt="" className="h-16 w-16" />
      <span className="font-display text-lg font-bold tracking-wider"></span>
    </div>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
      <a href="#solutions" className="hover:text-foreground transition-colors">Products</a>
      <a href="#services" className="hover:text-foreground transition-colors">Services</a>
      <a href="#network" className="hover:text-foreground transition-colors">Industries</a>
      <a href="#contact" className="hover:text-foreground transition-colors">About</a>
      <a href="#careers" className="hover:text-foreground transition-colors">Careers</a>
    </div>

    {/* Desktop Button */}
    <button className="hidden md:flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90 font-display text-xs tracking-wider px-4 py-2 rounded-md transition-colors cursor-pointer">
       Contact Us 
       
       <ChevronRight className="h-3 w-3" />
    </button>

    {/* Mobile Toggle */}
    <button
      className="md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm text-muted-foreground bg-background border-t border-border">
      <a href="#solutions" onClick={() => setIsOpen(false)}>Products</a>
      <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
      <a href="#network" onClick={() => setIsOpen(false)}>Industries</a>
      <a href="#contact" onClick={() => setIsOpen(false)}>About</a>
      <a href="#careers" onClick={() => setIsOpen(false)}>Careers</a>

      <button className="mt-3 bg-primary text-primary-foreground py-2 rounded-md text-xs tracking-wider">
        Contact Us
      </button>
    </div>
  )}
</nav>

      <HeroSection />

      <ProductsSection/>

      <ScrollSyncSection/>

      <div className="container mx-auto px-6">
        <div className="divider-gradient my-20" />
      </div>

      <CapabilitiesSection />

      <div className="container mx-auto px-6">
        <div className="divider-gradient my-20" />
      </div>

      <GlobalNetworkSection />

      <div className="container mx-auto px-6">
        <div className="divider-gradient my-20" />
      </div>

      <IndustriesSection/>

      <SolutionsSection />

      {/* CTA */}
      <section id="contact" className="relative z-10 container mx-auto px-6 py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-elevated p-12 md:p-16 text-center relative overflow-hidden rounded-2xl"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

          <motion.div variants={fadeUp} custom={0} className="section-badge mx-auto mb-6">
            <Mail className="h-3 w-3" />
            CLASSIFIED ACCESS
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Secure the <span className="gradient-subtle">Future</span>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="font-body text-muted-foreground max-w-xl mx-auto mb-10"
          >
            Schedule a classified briefing with our defense solutions team.
            Government and allied partner credentials required.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-display text-sm tracking-wider px-6 py-3 rounded-md transition-colors cursor-pointer"
            >
              Request Briefing <ArrowRight className="h-4 w-4" />
            </button>
            <button
              className="flex items-center justify-center gap-2 border border-border text-foreground hover:bg-muted font-display text-sm tracking-wider px-6 py-3 rounded-md transition-colors cursor-pointer"
            >
              <FileText className="h-4 w-4" /> Download Whitepaper
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/dotclu-logo.png" alt="" className="h-16 w-16" />
              <span className="font-display text-sm font-bold tracking-wider">
                Dotclu<span className="text-primary">AI</span>
              </span>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground font-body">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Security</a>
              <a href="#" className="hover:text-foreground transition-colors">Compliance</a>
            </div>
            <p className="text-xs text-muted-foreground font-body">
              © 2026 Dotclu Defense Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;