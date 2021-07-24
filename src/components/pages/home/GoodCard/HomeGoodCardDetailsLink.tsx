import { useTranslation } from "react-i18next";

interface OwnProps {
  link: string;
}

export const HomeGoodCardDetailsLink = ({ link }: OwnProps) => {
  const { t } = useTranslation();

  console.log(link);

  if (link) {
    return (
      <a className="text-primary-600 underline text-xs" href={link}>
        {t("itemCard.link.details")}
      </a>
    );
  }

  return null;
};
