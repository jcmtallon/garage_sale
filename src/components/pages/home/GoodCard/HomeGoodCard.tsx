import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

import rulerIcon from "../../../../../public/ruler.svg";
import { GoodCategory } from "../../../../constants/goodCategory";
import { GOOD_STATUS_COLORS } from "../../../../constants/goodStatusOptions";
import { LANG } from "../../../../constants/language";
import { Good } from "../../../../types";
import {
  getCategoryLabel,
  getGoodStatusLabel,
} from "../../../../utils/labelUtils";
import { HomeGoodCardThumbnail } from "./HomeGoodCardThumbnail";

interface OwnProps {
  data: Good;
  selectCategory: (cat: GoodCategory) => void;
}

export const HomeGoodCard = ({ data, selectCategory }: OwnProps) => {
  const { i18n } = useTranslation();

  return (
    <div className={`border border-gray-300 rounded p-4 flex flex-none`}>
      <HomeGoodCardThumbnail imageId={data.image_id} />

      <div className="pl-4 flex-grow flex flex-col">
        {/* Title */}
        <div className="text-lg font-bold text-primary-600">
          {i18n.language === LANG.EN_US ? data.name_en : data.name_jp}
        </div>

        {/* Category */}
        <div
          className="text-xs text-gray-500 hover:text-primary-500 underline cursor-pointer"
          onClick={() => selectCategory(data.category)}
        >
          {getCategoryLabel(data.category)}
        </div>

        {/* Description */}
        <div className="text-xs pt-2 line-clamp-3">
          {i18n.language === LANG.EN_US
            ? data.description_en
            : data.description_jp}
        </div>

        <div className="flex justify-between mt-1.5 flex-grow">
          <div className="flex flex-col">
            {/* Status Badge */}
            <div
              className="flex-none inline-block text-xs text-white tracking-wide px-1.5 pt-0.5 pb-1 mb-3 rounded-r-lg rounded-tl-lg"
              style={{ backgroundColor: GOOD_STATUS_COLORS[data.status] }}
            >
              {getGoodStatusLabel(data.status)}
            </div>

            {/* Measurements */}
            {data.size_x > 0 && data.size_y > 0 && data.size_z > 0 && (
              <div className="flex space-x-1 text-xs text-gray-600">
                <div className="mr-0.5 w-4">
                  <Image
                    src={rulerIcon}
                    alt="Measurements icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div>{data.size_x}</div>
                <div>x</div>
                <div>{data.size_y}</div>
                <div>x</div>
                <div>{data.size_z}</div>
              </div>
            )}

            {/* Link */}
            <a
              className="text-primary-600 underline text-xs"
              href={
                "https://stackoverflow.com/questions/65676689/next-js-how-can-i-change-the-color-of-svg-in-next-image"
              }
            >
              More details
            </a>
          </div>
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
