import React, { useState } from "react";

import { Good, GoodsFilterState } from "../../../types";
import { HomeGoodList } from "./HomeGoodList";
import { HomeInfoCard } from "./HomeInfoCard";
import { HomeListFilters } from "./HomeListFilters";

const filtersInit: GoodsFilterState = {
  type: undefined,
  status: undefined,
  category: undefined,
  wasAddedLastWeek: false,
};

interface OwnProps {
  goods: Good[];
}

export const HomeMainSection = ({ goods = [] }: OwnProps) => {
  const [filters, setFilters] = useState<GoodsFilterState>(filtersInit);

  return (
    <div className="px-2 md:px-6 max-w-screen-xl m-auto">
      <HomeInfoCard />
      <HomeListFilters
        filters={filters}
        updateFilters={(value) => setFilters(value)}
      />
      <HomeGoodList filters={filters} goods={goods} />
    </div>
  );
};
