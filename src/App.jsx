import { motion } from "framer-motion";
import { Shield, ChevronRight, ArrowRight, Mail, FileText,Menu, X } from "lucide-react";
import HeroSection from "./Components/HeroSection";
import CapabilitiesSection from "./Components/CapabilitiesSection";
import GlobalNetworkSection from "./Components/GlobalNetworkSection";
import SolutionsSection from "./Components/SolutionsSections";
import ScrollSyncSection from "./Components/ScrollSyncSelection";
import ProductsSection from "./Components/ProductSection";
import IndustriesSection from "./Components/IndustriesSection";
import NeuralBackground from "./Components/NeuralBackground";
import DotcluLogo from "./assets/dotclu-logo.png"
import { useState } from "react";
import WhatsApp from "./assets/WhatsApp.svg.webp"
import ContactForm from "./Components/ContactUs"



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
    const [activeMenu, setActiveMenu] = useState(null);
    const [isLocked, setIsLocked] = useState(false); 
    const [showForm, setShowForm] = useState(false);
    
  return (
       <div className="min-h-screen bg-background text-foreground overflow-hidden">

      <NeuralBackground/>
      

      {/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-50  bg-white">
  <div className="container mx-auto flex items-center justify-between py-4 px-6">
    
    <div className="flex items-center gap-3">
      <img src={DotcluLogo} alt="" className="h-16 w-16" />
      <span className="font-display text-lg font-bold tracking-wider"></span>
    </div>

    {showForm && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
    
    {/* FORM CONTAINER */}
    <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-3 text-gray-500"
      >
        ✕
      </button>

      {/* YOUR FORM COMPONENT */}
      <ContactForm/>
      
    </div>
  </div>
)}

    {/* Desktop Links */}
    
 <div className="hidden md:flex items-center gap-8 relative text-sm">

          {[
            "products",
            "services",
            "industries",
            "about",
            "careers",
          ].map((menu) => (
            <div
              key={menu}
              onMouseEnter={() => {
                if (!isLocked) setActiveMenu(menu);
              }}
              onMouseLeave={() => {
                if (!isLocked) setActiveMenu(null);
              }}
            >
              <span
                onClick={() => {
                  if (activeMenu === menu && isLocked) {
                    setIsLocked(false);
                    setActiveMenu(null);
                  } else {
                    setActiveMenu(menu);
                    setIsLocked(true);
                  }
                }}
                className="cursor-pointer capitalize hover:text-black"
              >
                {menu}
              </span>
            </div>
          ))}

          {/* DROPDOWN */}
          <div
            className="absolute left-0 top-full w-full flex justify-center"
            onMouseEnter={() => {
              if (!isLocked && activeMenu) setActiveMenu(activeMenu);
            }}
            onMouseLeave={() => {
              if (!isLocked) setActiveMenu(null);
            }}
          >
            {activeMenu && (
              <div className="mt-2 bg-white shadow-xl border p-6 flex gap-10 w-fit max-w-[95vw]">

                {/* PRODUCTS */}
                {activeMenu === "products" && (
                  <div className="flex flex-col gap-3 min-w-[200px]">
                    <a href="#">DotVision</a>
                    <a href="#">Dot-AI/VI</a>
                  </div>
                )}

                {/* SERVICES */}
                {activeMenu === "services" && (
                  <>
                    <div className="flex flex-col gap-3 min-w-[220px]">
                      <a href="#">IT-Consulting Services</a>
                      <a href="#">Cyber Security Services</a>
                      <a href="#">IT Training</a>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[220px]">
                      <a href="#">Custom Software Development</a>
                      <a href="#">IT Support</a>
                      <a href="#">AR/VR Services</a>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[220px]">
                      <a href="#">Cloud Solutions</a>
                      <a href="#">Data Analytics</a>
                      <a href="#">AI & Gen AI</a>
                    </div>
                  </>
                )}

                {/* INDUSTRIES */}
                {activeMenu === "industries" && (
                  <>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <a href="#">Banking & Finance</a>
                      <a href="#">Insurance</a>
                      <a href="#">Manufacturing</a>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <a href="#">E-Commerce</a>
                      <a href="#">Government</a>
                      <a href="#">Retail</a>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <a href="#">Education</a>
                      <a href="#">Healthcare</a>
                    </div>
                  </>
                )}

                {/* ABOUT */}
                {activeMenu === "about" && (
                  <div className="flex flex-col gap-3 min-w-[200px]">
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                  </div>
                )}

                {/* CAREERS */}
                {activeMenu === "careers" && (
                  <div className="flex flex-col gap-3 min-w-[200px]">
                    <a href="#">Career with Us</a>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>


    {/* Desktop Button */}
<div className="hidden md:flex items-center gap-3">

  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1"
  >
   <img src={WhatsApp} alt="" className="h-10 w-10 " />
  </a>

<button
  onClick={() => setShowForm(true)}
  className="bg-[#6D4EF0] text-white px-4 py-2 rounded-md text-xs flex items-center gap-1"
>
  Contact Us
</button>

</div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ================= MOBILE ================= */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t">

          {["products", "services", "industries", "about", "careers"].map(
            (menu) => (
              <div key={menu}>
                <button
                  onClick={() =>
                    setActiveMenu(activeMenu === menu ? null : menu)
                  }
                  className="w-full text-left font-medium capitalize"
                >
                  {menu}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeMenu === menu ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <div className="pl-4 flex flex-col gap-2">

                    {menu === "products" && (
                      <>
                        <a href="#">DotVision</a>
                        <a href="#">Dot-AI/VI</a>
                      </>
                    )}

                    {menu === "services" && (
                      <>
                        <a href="#">IT-Consulting</a>
                        <a href="#">Cyber Security</a>
                        <a href="#">Cloud</a>
                        <a href="#">AI</a>
                      </>
                    )}

                    {menu === "industries" && (
                      <>
                        <a href="#">Banking</a>
                        <a href="#">E-Commerce</a>
                        <a href="#">Healthcare</a>
                      </>
                    )}

                    {menu === "about" && (
                      <>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                      </>
                    )}

                    {menu === "careers" && (
                      <a href="#">Career with Us</a>
                    )}

                  </div>
                  </div>
              </div>
            )
          )}
          

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
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={DotcluLogo} alt="" className="h-16 w-16" />
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