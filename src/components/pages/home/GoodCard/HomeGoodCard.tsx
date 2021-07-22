import React from "react";

import { GoodCategory } from "../../../../constants/goodCategory";
import { GOOD_STATUS } from "../../../../constants/goodStatus";
import { Good } from "../../../../types";
import { HomeGoodCardCategory } from "./HomeGoodCardCategory";
import { HomeGoodCardDescription } from "./HomeGoodCardDescription";
import { HomeGoodCardDetailsLink } from "./HomeGoodCardDetailsLink";
import { HomeGoodCardMeasurements } from "./HomeGoodCardMeasurements";
import { HomeGoodCardPrice } from "./HomeGoodCardPrice";
import { HomeGoodCardSelectButton } from "./HomeGoodCardSelectButton";
import { HomeGoodCardStatusBadge } from "./HomeGoodCardStatusBadge";
import { HomeGoodCardThumbnail } from "./HomeGoodCardThumbnail";
import { HomeGooodCardTitle } from "./HomeGooodCardTitle";

interface OwnProps {
  data: Good;
  selectCategory: (cat: GoodCategory) => void;
  selectItem: (id: number) => void;
}

//TODO useMemoization (?)

export const HomeGoodCard = ({
  data,
  selectCategory,
  selectItem,
}: OwnProps) => {
  const getCardStyles = () => {
    if (data.isSelected) {
      return "border-primary-600 bg-primary-100 shadow-lg";
    }

    if (data.status === GOOD_STATUS.RESERVED) {
      return "border-gray-300 bg-blue-100";
    }

    if (data.status === GOOD_STATUS.GIVEN) {
      return "border-gray-300 bg-gray-300 opacity-20";
    }

    return "border-gray-300";
  };

  return (
    <div
      className={`border rounded h-56 p-3.5 flex flex-none ${getCardStyles()}`}
    >
      {/* Card Left Side */}
      <div className="flex-none w-32 h-full">
        <HomeGoodCardThumbnail imageId={data.image_id} />
      </div>

      {/* Card Right Side */}
      <div className="pl-4 flex flex-col flex-grow">
        <HomeGooodCardTitle nameEn={data.name_en} nameJp={data.name_jp} />
        <HomeGoodCardCategory
          category={data.category}
          selectCategory={selectCategory}
        />
        <HomeGoodCardDescription
          descriptionEn={data.description_en}
          descriptionJp={data.description_jp}
        />

        <div className="flex justify-between mt-1.5 flex-grow">
          {/* Lower Left Side */}
          <div className="flex flex-col justify-between">
            <HomeGoodCardStatusBadge status={data.status} />
            <div>
              <HomeGoodCardMeasurements
                sizeX={data.size_x}
                sizeY={data.size_y}
                sizeZ={data.size_z}
              />
              <HomeGoodCardDetailsLink />
            </div>
          </div>

          {/* Lower Right Side */}
          <div className="flex flex-col items-end justify-end space-y-2">
            <HomeGoodCardPrice
              priceNow={data.price_now}
              priceOriginal={data.price_original}
            />
            {data.status === GOOD_STATUS.AVAILABLE && (
              <HomeGoodCardSelectButton
                id={data.id}
                selectItem={selectItem}
                isSelected={data.isSelected}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
