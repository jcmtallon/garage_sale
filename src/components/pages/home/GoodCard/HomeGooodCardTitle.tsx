import { useTranslation } from "react-i18next";

import { LANG } from "../../../../constants/language";

interface OwnProps {
  nameEn: string;
  nameJp: string;
  onClick: () => void;
}

export const HomeGooodCardTitle = ({ nameEn, nameJp, onClick }: OwnProps) => {
  const { i18n } = useTranslation();

  return (
    <div
      onClick={onClick}
      className="md:text-base font-bold text-primary-600 line-clamp-1 hover:underline cursor-pointer select-none"
    >
      {i18n.language === LANG.EN_US ? nameEn : nameJp}
    </div>
  );
};
