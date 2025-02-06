import { useContext, useState } from "react";
import { LanguageContext } from "./../utils/LanguageContext";
import { message as Message } from "antd";

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
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          {language.contact.title}
        </h2>
        <form
          className="max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              {language.contact.name}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full border bg-white border-gray-300 px-3 py-2 rounded focus:outline-none"
              onChange={() => setName(document.getElementById("name").value)}
              placeholder={language.contact.yourname}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              {language.contact.email}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white border border-gray-300 px-3 py-2 rounded focus:outline-none"
              onChange={() => setEmail(document.getElementById("email").value)}
              placeholder={language.contact.youremail}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              {language.contact.message}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              className="w-full bg-white border border-gray-300 px-3 py-2 rounded  focus:outline-none"
              rows="5"
              onChange={() =>
                setMessage(document.getElementById("message").value)
              }
              placeholder={language.contact.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {language.contact.sendmessage}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
