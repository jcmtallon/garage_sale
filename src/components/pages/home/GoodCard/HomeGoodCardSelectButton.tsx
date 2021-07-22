import React from "react";
import { useTranslation } from "react-i18next";

import { PrimaryButton } from "../../../elements/PrimaryButton";

interface OwnProps {}

export const HomeGoodCardSelectButton = ({}: OwnProps) => {
  const { t } = useTranslation();

  return <PrimaryButton>{t("itemCard.button.select")}</PrimaryButton>;
};
