export const LANG = {
  JA_JP: "ja_JP",
  EN_US: "en_US",
} as const;

export type Lang = typeof LANG[keyof typeof LANG];
