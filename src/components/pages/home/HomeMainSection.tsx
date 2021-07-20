import React from "react";

import { Good } from "../../../types";
import { HomeInfoCard } from "./HomeInfoCard";

interface OwnProps {
  goods: Good[];
}

export const HomeMainSection = ({ goods = [] }: OwnProps) => {
  return (
    <div className="px-2 md:px-6 max-w-screen-xl m-auto">
      <HomeInfoCard />
      {goods.map((good) => (
        <div key={good.id}>
          <div>{good.name_en}</div>
          <div>{good.name_jp}</div>
          <div>{good.description_en}</div>
          <div>{good.description_jp}</div>
          <div>{good.price_now}</div>
          <div>{good.size_x}</div>
          <div>{good.size_y}</div>
          <div>{good.size_z}</div>
        </div>
      ))}
    </div>
  );
};
