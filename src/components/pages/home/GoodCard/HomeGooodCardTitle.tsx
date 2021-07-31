import { useTranslation } from "react-i18next";

import { LANG } from "../../../../constants/language";

interface OwnProps {
  nameEn: string;
  nameJp: string;
  isGiven: boolean;
  onClick: () => void;
}

export const HomeGooodCardTitle = ({
  nameEn,
  nameJp,
  isGiven = false,
  onClick,
}: OwnProps) => {
  const { i18n } = useTranslation();

  return (
    <div
      onClick={onClick}
      className={`md:text-base font-bold line-clamp-1 hover:underline cursor-pointer select-none ${
        isGiven ? "text-gray-500" : "text-primary-600"
      }`}
    >
      {i18n.language === LANG.EN_US ? nameEn : nameJp}
    </div>
  );
};
