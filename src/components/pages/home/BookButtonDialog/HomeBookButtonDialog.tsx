import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import closeIcon from "../../../../../public/close.svg";
import { BookFormInput, Good } from "../../../../types";
import { Dialog } from "../../../overlays/Dialog";
import { HomeBookButtonDialogSummary } from "./HomeBookButtonDialogSummary";
import { HomeBookButtonDialogForm } from "./HomeBookButtonDialogForm";

const initialState: BookFormInput = {
  name: "",
  contact: "",
  comments: "",
};

interface OwnProps {
  ids: number[];
  goods: Good[];
  onClose: () => void;
  onBook: (input: BookFormInput) => void;
}

export const HomeBookButtonDialog = ({
  ids = [],
  goods = [],
  onClose,
  onBook,
}: OwnProps) => {
  const [formInput, setFormInput] = useState(initialState);

  const { t } = useTranslation();

  const onCloseButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClose();
  };

  const onBookClick = () => {
    if (formInput.name === "") {
      alert(t("bookCard.validation.nameFieldMandatory"));
      return;
    }

    if (formInput.contact === "") {
      alert(t("bookCard.validation.contactFieldMandatory"));
      return;
    }

    onBook(formInput);
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
        <div className="pt-6 md:pt-8">
          <HomeBookButtonDialogForm
            input={formInput}
            onInputChange={(input) => setFormInput(input)}
          />
        </div>
        <div className="pt-10 flex justify-center" onClick={onBookClick}>
          <button className="bg-primary-600 hover:bg-primary-500 active:bg-primary-400 text-white text-base py-1.5 w-full rounded max-w-xl">
            {t("bookCard.button.bookSelected")}
          </button>
        </div>
        <div className="flex flex-col pt-10 text-xs italic text-gray-600">
          <div>{t("bookCard.notes.itMayTakeTime")}</div>
          <div>{t("bookCard.notes.weWillReactivateItems")}</div>
        </div>
      </div>
    </Dialog>
  );
};
