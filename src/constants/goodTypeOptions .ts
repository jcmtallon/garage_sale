import { ConstantValueOptions } from "../types";
import { GoodType, GOOD_TYPE } from "./goodType";

export const GOOD_TYPE_OPTIONS: ConstantValueOptions<GoodType> = [
  { value: GOOD_TYPE.FREE, labelKey: "goodType.free" },
  { value: GOOD_TYPE.PAID, labelKey: "goodType.paid" },
] as const;
