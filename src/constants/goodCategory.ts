export const GOOD_CATEGORY = {
  APPLIANCES: "APPLIANCES",
  BATHROOM: "BATHROOM",
  FURNITURE: "FURNITURE",
  KITCHEN: "KITCHEN",
  TOOLS: "TOOLS",
} as const;

export type GoodCategory = typeof GOOD_CATEGORY[keyof typeof GOOD_CATEGORY];
