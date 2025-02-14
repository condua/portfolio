import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
const Hero = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="hero"
      className="bg-blue-600 text-white py-60 bg-[url('/images/bg.gif')] bg-cover bg-center"
    >
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-4 px-2.5">
          {language.hero.title}
        </h2>
        <p className="md:text-2xl text-lg mb-8 px-2.5">
          {language.hero.description}
        </p>
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
