import { useTranslation } from "react-i18next";
import { InfoCard } from "../../elements/InfoCard";

export const HomeInfoCard = () => {
  const { t } = useTranslation();

  return (
    <InfoCard
      title={t("goodsInfoCard.title.helpThem")}
      body={t("goodsInfoCard.body.description")}
    />
  );
};
