import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import closeIcon from "../../../../../public/close.svg";
import { LANG } from "../../../../constants/language";
import { Good } from "../../../../types";
import { Dialog } from "../../../overlays/Dialog";

interface OwnProps {
  good: Good;
  onClose: () => void;
}

export const HomeGoodCardDialog = ({ good, onClose }: OwnProps) => {
  const { i18n } = useTranslation();

  const onCloseButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <Dialog onClose={onClose}>
      <div className="border-0 rounded-lg shadow-lg flex flex-col bg-white w-screen md:w-96 p-4">
        <div className="flex justify-between space-x-2">
          <div className="text-base font-bold text-primary-600">
            {i18n.language === LANG.EN_US ? good.name_en : good.name_jp}
          </div>
          <div className="w-3 cursor-pointer" onClick={onCloseButton}>
            <Image src={closeIcon} width={240} height={240} alt="Close icon" />
          </div>
        </div>
        <div className="relative w-full pt-2">
          <img
            src={`https://drive.google.com/uc?export=view&id=${good.image_id}`}
            decoding="async"
            alt="Item image"
            className="rounded bg-gray-50 shadow-inner cursor-pointer"
          />
        </div>
        <div className="py-3 whitespace-pre-wrap">
          {i18n.language === LANG.EN_US
            ? good.description_en
            : good.description_jp}
        </div>
      </div>
    </Dialog>
  );
};
