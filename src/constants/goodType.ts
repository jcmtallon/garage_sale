export const GOOD_TYPE = {
  FREE: "FREE",
  PAID: "PAID",
} as const;

export type GoodType = typeof GOOD_TYPE[keyof typeof GOOD_TYPE];
