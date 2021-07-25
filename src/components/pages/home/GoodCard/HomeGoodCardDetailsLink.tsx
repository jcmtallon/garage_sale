import { useTranslation } from "react-i18next";

interface OwnProps {
  link: string;
}

export const HomeGoodCardDetailsLink = ({ link }: OwnProps) => {
  const { t } = useTranslation();

  if (link) {
    return (
      <a
        className="text-primary-600 underline text-xs"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("itemCard.link.details")}
      </a>
    );
  }

  return null;
};
