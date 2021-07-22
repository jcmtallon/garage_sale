import { ConstantValueOptions } from "../types";
import { GoodStatus, GOOD_STATUS } from "./goodStatus";

export const GOOD_STATUS_OPTIONS: ConstantValueOptions<GoodStatus> = [
  { value: GOOD_STATUS.AVAILABLE, labelKey: "goodStatus.available" },
  { value: GOOD_STATUS.RESERVED, labelKey: "goodStatus.reserved" },
  { value: GOOD_STATUS.GIVEN, labelKey: "goodStatus.given" },
] as const;

export const GOOD_STATUS_COLORS = {
  AVAILABLE: "#4FD37C",
  RESERVED: "#2563EB",
  GIVEN: "#4B5563",
} as const;
