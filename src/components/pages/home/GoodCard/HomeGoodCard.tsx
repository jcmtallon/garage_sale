import React from "react";

import { GoodCategory } from "../../../../constants/goodCategory";
import { Good } from "../../../../types";
import { HomeGoodCardCategory } from "./HomeGoodCardCategory";
import { HomeGoodCardDescription } from "./HomeGoodCardDescription";
import { HomeGoodCardDetailsLink } from "./HomeGoodCardDetailsLink";
import { HomeGoodCardMeasurements } from "./HomeGoodCardMeasurements";
import { HomeGoodCardStatusBadge } from "./HomeGoodCardStatusBadge";
import { HomeGoodCardThumbnail } from "./HomeGoodCardThumbnail";
import { HomeGooodCardTitle } from "./HomeGooodCardTitle";

interface OwnProps {
  data: Good;
  selectCategory: (cat: GoodCategory) => void;
}

export const HomeGoodCard = ({ data, selectCategory }: OwnProps) => {
  return (
    <div className={`border border-gray-300 rounded h-56 p-4 flex flex-none`}>
      {/* Card Left Side */}
      <div className="flex-none w-32 h-full">
        <HomeGoodCardThumbnail imageId={data.image_id} />
      </div>

      {/* Card Right Side */}
      <div className="pl-4 flex-grow flex flex-col">
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
          <div className="flex flex-col">
            <HomeGoodCardStatusBadge status={data.status} />
            <HomeGoodCardMeasurements
              sizeX={data.size_x}
              sizeY={data.size_y}
              sizeZ={data.size_z}
            />

            <HomeGoodCardDetailsLink />
          </div>

          {/* Lower Right Side */}
          <div>
            {/* Price data */}
            <div>{data.price_now}</div>
            <div>{data.price_original}</div>

            {/* Select button */}
            <div>SELECT</div>
          </div>
        </div>
      </div>
    </div>
  );
};
