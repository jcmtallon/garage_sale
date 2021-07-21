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
