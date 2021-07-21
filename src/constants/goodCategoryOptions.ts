import { ConstantValueOptions } from "../types";
import { GoodCategory, GOOD_CATEGORY } from "./goodCategory";

export const GOOD_CATEGORY_OPTIONS: ConstantValueOptions<GoodCategory> = [
  { value: GOOD_CATEGORY.BATHROOM, labelKey: "goodCategory.bathroom" },
  { value: GOOD_CATEGORY.KITCHEN, labelKey: "goodCategory.kitchen" },
  { value: GOOD_CATEGORY.FURNITURE, labelKey: "goodCategory.furniture" },
] as const;
