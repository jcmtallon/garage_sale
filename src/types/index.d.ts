import { GoodType } from "../constants/goodType";
import { GoodStatus } from "../constants/goodStatus";
import { GoodCategory } from "../constants/goodCategory";

// Model Types

export type Good = {
  id: number;
  date_added: string;
  name_en: string;
  name_jp: string;
  description_en: string;
  description_jp: string;
  category: GoodCategory;
  status: GoodStatus;
  price_original: number;
  price_now: number;
  size_x: number;
  size_y: number;
  size_z: number;
  public: "TRUE" | "FALSE";
  booker_name: string; //TODO: might be better not to include the booker info (just the id) in the response for privacy reasons.
};

// State Types

export type GoodsFilterState = {
  type?: GoodType;
  status?: GoodStatus;
  category?: GoodCategory;
  wasAddedLastWeek: boolean;
};

// Util Types

export type ConstantValueOption<T> = {
  readonly value: T;
  readonly labelKey: string;
};

export type ConstantValueOptions<T> = Readonly<ConstantValueOption[]>;

// UI Types

export type LabeledValueOption<T> = {
  value?: T;
  label: string;
};
