import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useMdScreenQuery } from "../hooks/useMediaQuery";
import { SecondaryButton } from "./elements/SecondaryButton";

const url = {
  regular: "logo.svg",
  md: "logo_md.svg",
};

interface OwnProps {
  selected: number;
}

export const TopBar = ({ selected = 1 }: OwnProps) => {
  const [logoUrl, setLogoUrl] = useState(url.regular);

  const { t } = useTranslation();
  const isMdScreen = useMdScreenQuery();

  //Strategy used to prevent 'Prop src did not match between client and server' error.
  // Reference: https://github.com/vercel/next.js/issues/10608
  useEffect(() => {
    setLogoUrl(isMdScreen ? url.md : url.regular);
  }, [isMdScreen]);

  const onBookButtonClick = () => {
    //TODO: click handling.
    alert("Under construction");
  };

  return (
    <div className="bg-primary-600 fixed w-full h-12 md:h-14">
      <div className="px-2 md:px-6 max-w-screen-xl m-auto h-full">
        <div className="flex justify-between items-center h-full">
          <img src={logoUrl} alt="Garage Sale Logo" />
          <div className="flex">
            <div>TODO: Language selector</div>
            <div>TODO: Selected Items counter</div>

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
