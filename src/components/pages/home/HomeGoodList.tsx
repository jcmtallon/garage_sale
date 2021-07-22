import React from "react";
import { GoodCategory } from "../../../constants/goodCategory";

import { Good } from "../../../types";
import { HomeGoodCard } from "./GoodCard/HomeGoodCard";

interface OwnProps {
  goods: Good[];
  selectCategory: (cat: GoodCategory) => void;
}

export const HomeGoodList = ({ goods, selectCategory }: OwnProps) => {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mt-4">
      {/* TODO: if no results, show no result message.  */}
      {/* TODO: if loading, show loading spinner */}
      {goods.map((good) => (
        <HomeGoodCard
          key={good.id}
          data={good}
          selectCategory={selectCategory}
        />
      ))}
    </div>
  );
};
