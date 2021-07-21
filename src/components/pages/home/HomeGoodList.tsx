import { useMemo } from "react";

import { Good, GoodsFilterState } from "../../../types";
import { filterGood } from "../../../utils/filterUtils";

interface OwnProps {
  goods: Good[];
  filters: GoodsFilterState;
}

export const HomeGoodList = ({ goods, filters }: OwnProps) => {
  const filteredGoods = useMemo(() => {
    return goods.filter((good) => filterGood(good, filters));
  }, [goods, filters]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredGoods.map((good) => (
        <div key={good.id} className="border p-4">
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
