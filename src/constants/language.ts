export const LANG = {
  JA_JP: "ja-JP",
  EN_US: "en-US",
} as const;

export type Lang = typeof LANG[keyof typeof LANG];
