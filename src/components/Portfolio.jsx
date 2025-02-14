import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { motion } from "framer-motion";

const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const projects = language.portfolio.projects;

  // Variants cho container (chứa các item)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 }, // Hiện từng item cách nhau 0.2s
    },
  };

  // Variants cho từng item
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }} // Bắt đầu mờ + di chuyển lên trên
          whileInView={{ opacity: 1, y: 0 }} // Hiện ra khi cuộn đến
          viewport={{ once: true, amount: 0.2 }} // Chạy 1 lần khi 20% phần tử xuất hiện
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {language.portfolio.title}
        </motion.h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Kích hoạt khi 20% phần tử xuất hiện
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-md rounded overflow-hidden 
              cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} // Hiệu ứng khi click
              transition={{ type: "spring", stiffness: 200, damping: 10 }} // Mượt mà hơn
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-top transition-transform duration-5000 ease-in-out hover:-translate-y-full"
                />
              </div>
              <div className="px-4 py-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
              <a className="absolute px-4 bottom-2 text-blue-500 hover:underline">
                {language.viewmore}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
