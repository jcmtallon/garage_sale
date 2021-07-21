export const GOOD_STATUS = {
  AVAILABLE: "AVAILABLE",
  RESERVED: "RESERVED",
  GIVEN: "GIVEN",
} as const;

export type GoodStatus = typeof GOOD_STATUS[keyof typeof GOOD_STATUS];
