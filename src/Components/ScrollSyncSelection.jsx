"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import manufactureImg from "../assets/Auto-Manufacturers.jpg";
import logisticsImg from "../assets/automotiveside.jpeg";
import afterMarketImg from "../assets/Auto-Aftermarket.webp";
import insuranceImg from "../assets/Vehicle-Insurance.jpg";
import warehouseImg from "../assets/Warehousing.avif";
import pharmaImg from "../assets/Pharma.png";

const sections = [
  { id: "manufacture", title: "Automotive Manufacture", image: manufactureImg },
  { id: "logistics", title: "Automotive Logistics", image: logisticsImg },
  { id: "aftermarket", title: "Automotive Aftermarket", image: afterMarketImg },
  { id: "insurance", title: "Vehicle Insurance", image: insuranceImg },
  { id: "warehouse", title: "Warehousing", image: warehouseImg },
  { id: "pharma", title: "Pharma", image: pharmaImg },
];

export default function ScrollSyncSelection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.6 }
      );

      if (section) observer.observe(section);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="w-full">

      {/* IMAGE SECTION */}
      <div className="relative w-full h-[650px] overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={sections[activeIndex].image}
            src={sections[activeIndex].image}
            alt={sections[activeIndex].title}
            className="absolute w-full h-full object-cover"
            initial={{
              opacity: 0,
              scale: 1.1,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: "blur(10px)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TEXT RIGHT SIDE */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative cursor-pointer"
            >
              <h2
                className={`text-xl md:text-2xl font-semibold transition-all duration-300 ${
                  activeIndex === index
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {section.title}
              </h2>

              {/* Animated Underline */}
              {activeIndex === index && (
                <motion.div
                  layoutId="underline"
                  className="h-[2px] bg-white mt-1"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>



    </div>
  );
}