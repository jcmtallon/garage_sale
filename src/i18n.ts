import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { LANG } from "./constants/language";
import { i18nResources } from "./locales";

i18n.use(initReactI18next).init({
  debug: true,
  resources: i18nResources,
  lng: LANG.EN_US,
  fallbackLng: LANG.EN_US,
  keySeparator: false,
  load: "currentOnly",
  supportedLngs: [LANG.EN_US, LANG.JA_JP],
});

export default i18n;
