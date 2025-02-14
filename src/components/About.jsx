import { useContext } from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { LanguageContext } from "../utils/LanguageContext";
const About = () => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const { top } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Hiện từng hàng với độ trễ 0.3s
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-6"
            variants={itemVariants}
          >
            {language.about.title}
          </motion.h2>
          <motion.p
            className="text-center text-gray-700 max-w-2xl mx-auto md:text-xl text-lg"
            variants={itemVariants}
          >
            {language.about.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
