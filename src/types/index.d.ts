import { GoodType } from "../constants/goodType";
import { GoodStatus } from "../constants/goodStatus";

export type Good = {
  id: number;
  date_added: string;
  name_en: string;
  name_jp: string;
  description_en: string;
  description_jp: string;
  category: "bedrom" | "kitchen"; //TODO: add categories
  status: GoodStatus;
  price_original: number;
  price_now: number;
  size_x: number;
  size_y: number;
  size_z: number;
  booker_name: string; //TODO: might be better not to include the booker info (just the id) in the response for privacy reasons.
};

export type GoodsFilterState = {
  type?: GoodType;
  status?: GoodStatus;
  category?: GoodCategory;
  wasAddedLastWeek: boolean;
};
