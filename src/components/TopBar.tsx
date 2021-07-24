import { useTranslation } from "react-i18next";
import Image from "next/image";

import logoMd from "../../public/logo_md.svg";
import logo from "../../public/logo.svg";
import flagUk from "../../public/flag_uk.png";
import flagJapan from "../../public/flag_japan.png";

import { SecondaryButton } from "./elements/SecondaryButton";
import { LANG } from "../constants/language";

interface OwnProps {
  selected: number;
  openBookDialog: () => void;
}

export const TopBar = ({ selected = 1, openBookDialog }: OwnProps) => {
  const { i18n, t } = useTranslation();

  const onLanguageChangeClick = () => {
    i18n.changeLanguage(i18n.language === LANG.EN_US ? LANG.JA_JP : LANG.EN_US);
  };

  return (
    <div className="bg-primary-600 fixed top-0 z-20 w-screen h-12 md:h-14">
      <div className="px-2 md:px-6 max-w-screen-xl m-auto h-full">
        <div className="flex justify-between items-center h-full">
          {/* Desktop logo */}
          <div className="hidden md:flex items-center">
            <Image src={logoMd} alt="Garage Sale Logo" />
          </div>

          {/* Mobile logo */}
          <div className="flex items-center md:hidden">
            <Image src={logo} alt="Garage Sale Logo" />
          </div>

          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Language Selector */}
            <button
              className="h-8 w-8 hover:bg-primary-400 p-1"
              onClick={onLanguageChangeClick}
            >
              <Image
                src={i18n.language === LANG.EN_US ? flagUk : flagJapan}
                alt="Spanish Language"
                className="rounded-full"
              />
            </button>

            {/* Desktop counter */}
            <div className="hidden md:block text-primary-50">
              {t("topBar.label.itemsSelected", { count: selected })}
            </div>

            {/* Mobile counter */}
            <div className="block md:hidden text-primary-50">
              {t("topBar.label.selected", { count: selected })}
            </div>

            {/* Desktop button */}
            <SecondaryButton
              className="hidden md:block"
              onClick={openBookDialog}
              disabled={selected === 0}
            >
              {t("topBar.botton.bookSelected")}
            </SecondaryButton>

            {/* Mobile button */}
            <SecondaryButton
              className="block md:hidden"
              onClick={openBookDialog}
              disabled={selected === 0}
            >
              {t("topBar.botton.book")}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
