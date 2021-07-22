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
}

export const HomeMainSection = ({ goods = [] }: OwnProps) => {
  const [filters, setFilters] = useState<GoodsFilterState>(filtersInit);
  const [selected, setSelected] = useState<number[]>([]);

  const filteredGoods = useMemo(() => {
    return goods
      .filter((good) => filterGood(good, filters))
      .map((g) => ({ ...g, isSelected: selected.includes(g.id) }));
  }, [goods, filters, selected]);

  const selectItem = (id: number) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((val) => val !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  return (
    <div className="px-2 md:px-6 max-w-screen-xl m-auto">
      <HomeInfoCard />
      <HomeListFilters
        filters={filters}
        updateFilters={(value) => setFilters(value)}
        goodsCount={filteredGoods.length}
      />
      <HomeGoodList
        goods={filteredGoods}
        selectCategory={(cat) =>
          setFilters((prev) => ({ ...prev, category: cat }))
        }
        selectItem={selectItem}
      />
    </div>
  );
};
