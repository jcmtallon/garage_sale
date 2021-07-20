import React, { useEffect } from "react";

import i18n from "../i18n";
import "../styles/index.css";
import { LANG } from "../constants/language";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!navigator.language) return;
    const browserLang = navigator.language;
    if (browserLang === "ja" && browserLang !== "ja-JP")
      i18n.changeLanguage(LANG.JA_JP);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
