import { useTranslation } from "react-i18next";

import { LANG } from "../../../../constants/language";

interface OwnProps {
  nameEn: string;
  nameJp: string;
}

export const HomeGooodCardTitle = ({ nameEn, nameJp }: OwnProps) => {
  const { i18n } = useTranslation();

  return (
    <div className="text-lg font-bold text-primary-600">
      {i18n.language === LANG.EN_US ? nameEn : nameJp}
    </div>
  );
};
