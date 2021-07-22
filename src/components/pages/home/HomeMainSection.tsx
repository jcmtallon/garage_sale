import React, { useMemo, useState } from "react";

import { Good, GoodsFilterState } from "../../../types";
import { filterGood } from "../../../utils/filterUtils";
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
  selected: number[];
  selectItem: (id: number) => void;
}

export const HomeMainSection = ({
  goods = [],
  selected = [],
  selectItem,
}: OwnProps) => {
  const [filters, setFilters] = useState<GoodsFilterState>(filtersInit);

  const filteredGoods = useMemo(() => {
    return goods
      .filter((good) => filterGood(good, filters))
      .map((g) => ({ ...g, isSelected: selected.includes(g.id) }));
  }, [goods, filters, selected]);

  return (
    <div className="px-2 md:px-6 max-w-screen-xl m-auto h-full flex flex-col">
      <div className="py-3 md:py-5">
        <HomeInfoCard />
      </div>
      <HomeListFilters
        filters={filters}
        updateFilters={(value) => setFilters(value)}
        goodsCount={filteredGoods.length}
      />
      <div className="flex-grow">
        <HomeGoodList
          goods={filteredGoods}
          selectCategory={(cat) =>
            setFilters((prev) => ({ ...prev, category: cat }))
          }
          selectItem={selectItem}
        />
      </div>
    </div>
  );
};
