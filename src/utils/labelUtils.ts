import { GoodCategory } from "../constants/goodCategory";
import { GOOD_CATEGORY_OPTIONS } from "../constants/goodCategoryOptions";
import { GoodStatus } from "../constants/goodStatus";
import { GOOD_STATUS_OPTIONS } from "../constants/goodStatusOptions";
import i18n from "../i18n";

import { ConstantValueOptions, LabeledValueOption } from "../types";

export const getLabeledValueOptions = <T>(
  options: ConstantValueOptions<T>
): LabeledValueOption<T>[] =>
  options.map((opt) => ({
    ...opt,
    label: i18n.t(opt.labelKey),
  }));

export const getLabeledValueOptionsWithAllOption = <T>(
  options: ConstantValueOptions<T>
): LabeledValueOption<T>[] => {
  const labeledOptions = getLabeledValueOptions<T>(options);
  return [
    { value: undefined, label: i18n.t("general.option.all") },
    ...labeledOptions,
  ];
};

export const getCategoryLabel = (category: GoodCategory) => {
  const labelKey = GOOD_CATEGORY_OPTIONS.find(
    (opt) => opt.value === category
  )?.labelKey;

  return labelKey ? i18n.t(labelKey) : category;
};

export const getGoodStatusLabel = (status: GoodStatus) => {
  const labelKey = GOOD_STATUS_OPTIONS.find(
    (opt) => opt.value === status
  ).labelKey;
  return i18n.t(labelKey);
};

export const getJPYFormat = (amount: number): string => {
  return `¥${amount.toLocaleString("ja-JP")}`;
};

export const getDiscount = (sale, original): string => {
  return `${-Math.round(((sale - original) / original) * 100)}%`;
};
