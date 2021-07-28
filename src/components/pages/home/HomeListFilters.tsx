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
import { GoodCategory, GOOD_CATEGORY } from "../../../constants/goodCategory";
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
  const { t, i18n } = useTranslation();

  const types = useMemo(
    () => getLabeledValueOptionsWithAllOption<GoodType>(GOOD_TYPE_OPTIONS),

    //eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  const statuses = useMemo(
    () => getLabeledValueOptionsWithAllOption<GoodStatus>(GOOD_STATUS_OPTIONS),

    //eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  const categories = useMemo(
    () =>
      getLabeledValueOptionsWithAllOption<GoodCategory>(GOOD_CATEGORY_OPTIONS),

    //eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  return (
    <div className="flex justify-between items-center mt-3">
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
          <SelectBox
            selectedValud={filters.category}
            options={categories}
            value={filters.category}
            onChange={(e) =>
              updateFilters({
                ...filters,
                category:
                  e.target.value in GOOD_CATEGORY
                    ? (e.target.value as GoodCategory)
                    : undefined,
              })
            }
          />
        </FilterSlot>
        {/* TODO: make this feature available from second week after release  */}
        {/* <FilterSlot>
          <div className="ml-24 md:ml-4">
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
        </FilterSlot> */}
      </div>
      <div className="hidden md:block mt-4">
        {t("goodsFilters.label.itemCounter", { count: goodsCount })}
      </div>
    </div>
  );
};

interface FilterSlotProps {
  children: ReactNode;
  label?: string;
}

const FilterSlot = ({ label, children }: FilterSlotProps) => {
  return (
    <div className="flex wrap flex-nowrap items-center space-x-3 mr-6 mt-4 text-xs md:text-sm">
      {label && (
        <div className="w-16 md:w-auto pr-2 md:pr-0 text-right">{label}</div>
      )}
      <div>{children}</div>
    </div>
  );
};
