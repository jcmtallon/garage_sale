import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { GOOD_STATUS } from "../../../constants/goodStatus";
import { GOOD_TYPE } from "../../../constants/goodType";
import { GoodsFilterState } from "../../../types";
import { GroupButtons } from "../../elements/GroupButtons";

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

  return (
    <div className="flex justify-between my-2">
      <div className="flex flex-wrap space-x-6">
        <FilterSlot label={t("goodsFilters.label.type")}>
          <GroupButtons
            buttons={[
              { label: t("goodsFilters.button.all"), value: undefined },
              { label: t("goodsFilters.button.free"), value: GOOD_TYPE.FREE },
              { label: t("goodsFilters.button.paid"), value: GOOD_TYPE.PAID },
            ]}
            onClick={(value) => updateFilters({ ...filters, type: value })}
            selectedValue={filters.type}
          />
        </FilterSlot>

        <FilterSlot label={t("goodsFilters.label.status")}>
          <GroupButtons
            buttons={[
              { label: t("goodsFilters.button.all"), value: undefined },
              {
                label: t("goodsFilters.button.available"),
                value: GOOD_STATUS.AVAILABLE,
              },
              {
                label: t("goodsFilters.button.reserved"),
                value: GOOD_STATUS.RESERVED,
              },
              {
                label: t("goodsFilters.button.given"),
                value: GOOD_STATUS.GIVEN,
              },
            ]}
            onClick={(value) => updateFilters({ ...filters, status: value })}
            selectedValue={filters.status}
          />
        </FilterSlot>

        <div>TODO: Category</div>
        <div>TODO: wasAddedLastWeek</div>
      </div>
      <div className="hidden md:block">{goodsCount} items</div>
    </div>
  );
};

interface FilterSlotProps {
  label: string;
  children: ReactNode;
}

const FilterSlot = ({ label, children }: FilterSlotProps) => {
  return (
    <div className="flex wrap flex-nowrap items-center space-x-3">
      <div>{label}</div>
      <div>{children}</div>
    </div>
  );
};
