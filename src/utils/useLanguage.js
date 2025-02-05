import { useState } from "react";

/**
 * Hook dùng để chuyển đổi ngôn ngữ.
 * @param {string} defaultLangKey - key của ngôn ngữ mặc định.
 * @param {object} languageData - đối tượng chứa các file JSON của ngôn ngữ, ví dụ:
 * {
 *   vn: { title: "...", content: "..." },
 *   en: { title: "...", content: "..." }
 * }
 */
const useLanguage = (defaultLangKey, languageData) => {
  const [currentLangKey, setCurrentLangKey] = useState(defaultLangKey);
  const [language, setLanguage] = useState(languageData[defaultLangKey]);

  const changeLanguage = (langKey) => {
    if (languageData[langKey]) {
      setCurrentLangKey(langKey);
      setLanguage(languageData[langKey]);
    }
  };

  return { currentLangKey, language, changeLanguage };
};

export default useLanguage;
