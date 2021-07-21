export const GOOD_CATEGORY = {
  KITCHEN: "KITCHEN",
  FURNITURE: "FURNITURE",
  BATHROOM: "BATHROOM",
} as const;

export type GoodCategory = typeof GOOD_CATEGORY[keyof typeof GOOD_CATEGORY];
