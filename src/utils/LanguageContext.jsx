// LanguageContext.js
import { createContext, useState } from "react";
import PropTypes from "prop-types";

import vn from "../json/vi.json";
import en from "../json/en.json";

export const LanguageContext = createContext();

const languageData = { vn, en };

export const LanguageProvider = ({ children }) => {
  const [currentLangKey, setCurrentLangKey] = useState("vn");
  const [language, setLanguage] = useState(languageData["vn"]);

  const changeLanguage = (langKey) => {
    if (languageData[langKey]) {
      setCurrentLangKey(langKey);
      setLanguage(languageData[langKey]);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ currentLangKey, language, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired, // `node` có thể là string, component, array, v.v.
};
