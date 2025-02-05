import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
const Hero = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="hero" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-4">{language.hero.title}</h2>
        <p className="text-lg mb-8">{language.hero.description}</p>
        <a
          href="#portfolio"
          className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-100 hover:text-red-500"
        >
          {language.hero.buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
