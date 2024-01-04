import React, { useEffect, useState } from "react";
function LanguageSwitcher({ lang, onChange }) {
  const supportedLang = ["en", "es"];                // add french?: ["en", "es", "fr"];
  // console.log(lang);
  const [language, setLangugae] = useState(lang);
  return (
    <>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="form-select appearance-none
      block
      px-1
      py-1
      text-base
      font-normal
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transport focus:outline-none
      "
        aria-label="Default select example"
      >
        <option value={language === "en" ? "en" : "es"}> 
          {language === "en" ? "🇺🇸" : "ᴇs"}
        </option>
        <option value={language === "en" ? "es" : "en"}>
          {language === "en" ? "ᴇs" : "🇺🇸"}
        </option>
      </select>
    </>
  );
}

export default LanguageSwitcher;
