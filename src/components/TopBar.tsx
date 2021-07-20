import { useTranslation } from "react-i18next";
import Image from "next/image";

import logoMd from "../../public/logo_md.svg";
import logo from "../../public/logo.svg";

import { SecondaryButton } from "./elements/SecondaryButton";

interface OwnProps {
  selected: number;
}

export const TopBar = ({ selected = 1 }: OwnProps) => {
  const { t } = useTranslation();

  const onBookButtonClick = () => {
    //TODO: click handling.
    alert("Under construction");
  };

  return (
    <div className="bg-primary-600 fixed w-full h-12 md:h-14">
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

          <div className="flex items-center space-x-2 md:space-x-6">
            <div>TODO: Language selector</div>

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
              onClick={onBookButtonClick}
              disabled={selected === 0}
            >
              {t("topBar.botton.bookSelected")}
            </SecondaryButton>

            {/* Mobile button */}
            <SecondaryButton
              className="block md:hidden"
              onClick={onBookButtonClick}
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
