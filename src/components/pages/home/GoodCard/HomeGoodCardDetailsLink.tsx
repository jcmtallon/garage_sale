import { useTranslation } from "react-i18next";

interface OwnProps {}

export const HomeGoodCardDetailsLink = ({}: OwnProps) => {
  const { t } = useTranslation();

  return (
    <a
      className="text-primary-600 underline text-xs"
      href={
        "https://stackoverflow.com/questions/65676689/next-js-how-can-i-change-the-color-of-svg-in-next-image"
      }
    >
      {t("itemCard.link.details")}
    </a>
  );
};
