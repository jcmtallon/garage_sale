import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import closeIcon from "../../../../../public/close.svg";
import { Good } from "../../../../types";
import { Dialog } from "../../../overlays/Dialog";
import { HomeBookButtonDialogSummary } from "./HomeBookButtonDialogSummary";
import { HomeBookButtonDialogForm } from "./HomeBookButtonDialogForm";

interface OwnProps {
  ids: number[];
  goods: Good[];
  onClose: () => void;
}

export const HomeBookButtonDialog = ({
  ids = [],
  goods = [],
  onClose,
}: OwnProps) => {
  const { t, i18n } = useTranslation();

  const onCloseButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClose();
  };

  const selectedItems = useMemo(
    () => goods.filter((good) => ids.includes(good.id)),
    [ids, goods]
  );

  return (
    <Dialog onClose={onClose}>
      <div className="border-0 rounded-lg shadow-lg flex flex-col bg-white w-screen max-w-screen-lg p-4 md:p-8">
        <div className="flex justify-between space-x-2">
          <div className="text-lg font-bold text-primary-600">
            {t("bookCard.title.youAreAbout", { count: selectedItems.length })}
          </div>
          <div className="w-3 cursor-pointer" onClick={onCloseButton}>
            <Image src={closeIcon} width={240} height={240} alt="Close icon" />
          </div>
        </div>
        <div className="pt-4">
          <HomeBookButtonDialogSummary goods={selectedItems} />
        </div>
        <div>
          <HomeBookButtonDialogForm />
        </div>
        <div>Book Selected Items</div>
        <div className="flex flex-col">
          <div>* It may take us one or two days to contact you. </div>
          <div>
            * We will set the selected items as available again if we contact
            you and we receive no response for several days or you lose interest
            in the items.{" "}
          </div>
        </div>
      </div>
    </Dialog>
  );
};
