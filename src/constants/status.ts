export const STATUS = {
  AVAILABLE: "AVAILABLE",
  RESERVED: "RESERVED",
  GIVEN: "GIVEN",
} as const;

export type Status = typeof STATUS[keyof typeof STATUS];
