import React, { useEffect } from "react";

import i18n from "../i18n";
import "../styles/index.css";
import { LANG } from "../constants/language";

function MyApp({ Component, pageProps }) {
  //TODO: select browser language automatically
  useEffect(() => {
    i18n.changeLanguage(LANG.EN_US);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
