import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
const About = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          {language.about.title}
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          {language.about.description}
        </p>
      </div>
    </section>
  );
};

export default About;
