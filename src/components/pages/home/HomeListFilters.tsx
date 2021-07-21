import React, { ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { GoodStatus } from "../../../constants/goodStatus";
import { GOOD_CATEGORY_OPTIONS } from "../../../constants/goodCategoryOptions";
import { GOOD_TYPE_OPTIONS } from "../../../constants/goodTypeOptions ";
import { GoodsFilterState } from "../../../types";
import { getLabeledValueOptionsWithAllOption } from "../../../utils/labelUtils";
import { GroupButtons } from "../../elements/GroupButtons";
import { SelectBox } from "../../elements/SelectBox";
import { GOOD_STATUS_OPTIONS } from "../../../constants/goodStatusOptions";
import { GoodType } from "../../../constants/goodType";
import { GoodCategory } from "../../../constants/goodCategory";
import { Checkbox } from "../../elements/Checkbox";

interface OwnProps {
  filters: GoodsFilterState;
  goodsCount?: number;
  updateFilters: (filters: GoodsFilterState) => void;
}

export const HomeListFilters = ({
  filters,
  goodsCount = 0,
  updateFilters,
}: OwnProps) => {
  const { t } = useTranslation();

  const types = useMemo(
    () => getLabeledValueOptionsWithAllOption<GoodType>(GOOD_TYPE_OPTIONS),
    []
  );

  const statuses = useMemo(
    () => getLabeledValueOptionsWithAllOption<GoodStatus>(GOOD_STATUS_OPTIONS),
    []
  );

  const categories = useMemo(
    () =>
      getLabeledValueOptionsWithAllOption<GoodCategory>(GOOD_CATEGORY_OPTIONS),
    []
  );

  return (
    <div className="flex justify-between items-center my-2">
      <div className="flex flex-wrap">
        <FilterSlot label={t("goodsFilters.label.type")}>
          <GroupButtons
            buttons={types}
            onClick={(value) => updateFilters({ ...filters, type: value })}
            selectedValue={filters.type}
          />
        </FilterSlot>

        <FilterSlot label={t("goodsFilters.label.status")}>
          <GroupButtons
            buttons={statuses}
            onClick={(value) => updateFilters({ ...filters, status: value })}
            selectedValue={filters.status}
          />
        </FilterSlot>

        <FilterSlot label={t("goodsFilters.label.category")}>
          <SelectBox selectedValud={filters.category} options={categories} />
        </FilterSlot>
        <FilterSlot>
          <div className="ml-4">
            <Checkbox
              label={t("goodsFilters.label.addedLastWeek")}
              checked={filters.wasAddedLastWeek}
              onClick={() =>
                updateFilters({
                  ...filters,
                  wasAddedLastWeek: !filters.wasAddedLastWeek,
                })
              }
            />
          </div>
        </FilterSlot>
      </div>
      <div className="hidden md:block">{goodsCount} items</div>
    </div>
  );
};

interface FilterSlotProps {
  children: ReactNode;
  label?: string;
}

const FilterSlot = ({ label, children }: FilterSlotProps) => {
  return (
    <div className="flex wrap flex-nowrap items-center space-x-3 pr-6">
      {label && <div>{label}</div>}
      <div>{children}</div>
    </div>
  );
};