import { GoodCategory } from "../constants/goodCategory";
import { GoodStatus } from "../constants/goodStatus";
import { GoodType, GOOD_TYPE } from "../constants/goodType";
import { Good, GoodsFilterState } from "../types";
import { getDistanceInDays } from "./dateUtils";

const checkIsValidGoodType = (good: Good, target?: GoodType): boolean => {
  if (!target) return true;

  const isPaidGood = good.price_now > 0;
  if (isPaidGood && target === GOOD_TYPE.PAID) return true;
  if (!isPaidGood && target === GOOD_TYPE.FREE) return true;

  return false;
};

const checkIsValidGoodStatus = (good: Good, target?: GoodStatus): boolean => {
  if (!target) return true;
  return good.status === target;
};

const checkIsValidGoodCategory = (
  good: Good,
  target?: GoodCategory
): boolean => {
  if (!target) return true;
  return good.category === target;
};

const checkIsValidAddedLastWeek = (good: Good, target: boolean): boolean => {
  if (!target) return true;
  const daysPassed = getDistanceInDays(new Date(), new Date(good.date_added));
  return daysPassed < 7;
};

export const filterGood = (good: Good, filters: GoodsFilterState): boolean => {
  if (!checkIsValidGoodType(good, filters.type)) return false;
  if (!checkIsValidGoodStatus(good, filters.status)) return false;
  if (!checkIsValidGoodCategory(good, filters.category)) return false;
  if (!checkIsValidAddedLastWeek(good, filters.wasAddedLastWeek)) return false;
  return true;
};
