import { useContext, useState } from "react";
import { LanguageContext } from "./../utils/LanguageContext";
import { message as Message } from "antd";
import { motion } from "framer-motion";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (name === "" || email === "" || message === "") {
      Message.error(language.alert.sendfail);
    } else {
      Message.success(language.alert.sendsuccess);
    }
  };

  // Variants cho hiệu ứng xuất hiện mượt mà
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Kích hoạt khi 20% phần tử vào màn hình
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          variants={fadeInUp}
        >
          {language.contact.title}
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          variants={fadeInUp}
        >
          <motion.div className="mb-4" variants={fadeInUp}>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              {language.contact.name}
              <span className="text-red-500">*</span>
            </label>
            <motion.input
              type="text"
              id="name"
              className="w-full border bg-white border-gray-300 px-3 py-2 rounded focus:outline-none"
              onChange={(e) => setName(e.target.value)}
              placeholder={language.contact.yourname}
              whileFocus={{ scale: 1.02 }} // Zoom nhẹ khi focus
            />
          </motion.div>
          <motion.div className="mb-4" variants={fadeInUp}>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              {language.contact.email}
              <span className="text-red-500">*</span>
            </label>
            <motion.input
              type="email"
              id="email"
              className="w-full bg-white border border-gray-300 px-3 py-2 rounded focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language.contact.youremail}
              whileFocus={{ scale: 1.02 }} // Zoom nhẹ khi focus
            />
          </motion.div>
          <motion.div className="mb-4" variants={fadeInUp}>
            <label className="block text-gray-700 mb-2" htmlFor="message">
              {language.contact.message}
              <span className="text-red-500">*</span>
            </label>
            <motion.textarea
              id="message"
              className="w-full bg-white border border-gray-300 px-3 py-2 rounded focus:outline-none"
              rows="5"
              onChange={(e) => setMessage(e.target.value)}
              placeholder={language.contact.message}
              whileFocus={{ scale: 1.02 }} // Zoom nhẹ khi focus
            ></motion.textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }} // Phóng to khi hover
            whileTap={{ scale: 0.95 }} // Thu nhỏ khi click
          >
            {language.contact.sendmessage}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
