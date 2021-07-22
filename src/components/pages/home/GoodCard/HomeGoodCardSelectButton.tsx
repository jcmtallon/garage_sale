import React from "react";
import { useTranslation } from "react-i18next";
import { DangerButton } from "../../../elements/DangerButton";

import { PrimaryButton } from "../../../elements/PrimaryButton";

interface OwnProps {
  id: number;
  selectItem: (id: number) => void;
  isSelected: boolean;
}

export const HomeGoodCardSelectButton = ({
  id,
  selectItem,
  isSelected,
}: OwnProps) => {
  const { t } = useTranslation();

  if (isSelected) {
    return (
      <DangerButton
        onClick={() => {
          selectItem(id);
        }}
      >
        {t("itemCard.button.deselect")}
      </DangerButton>
    );
  }

  return (
    <PrimaryButton
      onClick={() => {
        selectItem(id);
      }}
    >
      {t("itemCard.button.select")}
    </PrimaryButton>
  );
};
