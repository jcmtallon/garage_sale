import { useTranslation } from "react-i18next";

import { LANG } from "../../../../constants/language";

interface OwnProps {
  descriptionEn: string;
  descriptionJp: string;
}

export const HomeGoodCardDescription = ({
  descriptionEn,
  descriptionJp,
}: OwnProps) => {
  const { i18n } = useTranslation();

  return (
    <div className="text-xs pt-1 whitespace-pre-wrap line-clamp-3">
      {i18n.language === LANG.EN_US ? descriptionEn : descriptionJp}
    </div>
  );
};
