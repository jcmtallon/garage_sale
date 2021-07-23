import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { Good } from "../../../types";
import noResultsIcon from "../../../../public/no-results.svg";
import { GoodCategory } from "../../../constants/goodCategory";
import { HomeGoodCard } from "./GoodCard/HomeGoodCard";
import { LoadingSpinner } from "../../LoadingSpinner";
import { HomeGoodCardDialog } from "./GoodCard/HomeGoodCardDialog";

interface OwnProps {
  goods: Good[];
  isLoading: boolean;
  selectCategory: (cat: GoodCategory) => void;
  selectItem: (id: number) => void;
}

export const HomeGoodList = ({
  goods,
  isLoading,
  selectCategory,
  selectItem,
}: OwnProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalGood, setModalGood] = useState<Good>();

  const onModalClose = () => {
    setIsModalOpen(false);
    setModalGood(undefined);
  };

  const onOpenModal = (good: Good) => {
    setModalGood(good);
    setIsModalOpen(true);
  };

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="w-full h-full py-6 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (goods.length === 0) {
    return (
      <div className="w-full h-full py-6">
        <div className="bg-gray-50 w-full h-full border border-gray-200 text-lg md:text-3xl text-gray-300 flex items-center justify-center space-x-2 md:space-x-5 py-4">
          <div className="w-5 h-5 md:w-8 md:h-8 md:pt-1">
            <Image
              src={noResultsIcon}
              width={240}
              height={240}
              alt="No results icon"
            />
          </div>
          <div>{t("goodsSearch.label.noResults")}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-4 pt-6">
        {goods.map((good) => (
          <HomeGoodCard
            key={good.id}
            data={good}
            selectCategory={selectCategory}
            selectItem={selectItem}
            openModal={onOpenModal}
          />
        ))}
      </div>
      {isModalOpen && (
        <HomeGoodCardDialog onClose={onModalClose} good={modalGood} />
      )}
    </>
  );
};
