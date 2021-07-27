import { ConstantValueOptions } from "../types";
import { GoodCategory, GOOD_CATEGORY } from "./goodCategory";

export const GOOD_CATEGORY_OPTIONS: ConstantValueOptions<GoodCategory> = [
  { value: GOOD_CATEGORY.APPLIANCES, labelKey: "goodCategory.appliances" },
  { value: GOOD_CATEGORY.BATHROOM, labelKey: "goodCategory.bathroom" },
  { value: GOOD_CATEGORY.GAMES, labelKey: "goodCategory.games" },
  { value: GOOD_CATEGORY.FASHION, labelKey: "goodCategory.fashion" },
  { value: GOOD_CATEGORY.FURNITURE, labelKey: "goodCategory.furniture" },
  { value: GOOD_CATEGORY.HOME, labelKey: "goodCategory.home" },
  { value: GOOD_CATEGORY.KITCHEN, labelKey: "goodCategory.kitchen" },
  { value: GOOD_CATEGORY.LIGHTING, labelKey: "goodCategory.lighting" },
  { value: GOOD_CATEGORY.TOOLS, labelKey: "goodCategory.tools" },
] as const;
