import React, { useEffect, useState } from "react";
function LanguageSwitcher({ lang, onChange }) {
  const supportedLang = ["en", "es"];                // add like french??: ["en", "fr"];
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

{/* <option value={language === "en" ? "en" : "fr"}> 
{language === "en" ? "🇺🇸" : "🇫🇷"}
</option>
<option value={language === "en" ? "fr" : "en"}>
{language === "en" ? "🇫🇷" : "🇺🇸"}
</option>
</select> */}


export default LanguageSwitcher;
