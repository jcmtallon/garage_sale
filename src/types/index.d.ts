import { GoodType } from "../constants/goodType";
import { GoodStatus } from "../constants/goodStatus";
import { GoodCategory } from "../constants/goodCategory";

// Api Types

export type Good = {
  id: number;
  date_added: string;
  name_en: string;
  name_jp: string;
  description_en: string;
  description_jp: string;
  image_url: string;
  info_link: string;
  category: GoodCategory;
  status: GoodStatus;
  price_original: number;
  price_now: number;
  size_x: number;
  size_y: number;
  size_z: number;
  public: "TRUE" | "FALSE";
  isSelected?: boolean; //TODO: this belongs to the UI. Maybe better to put together a different type for this.
};

export type BookResponse = {
  alreadyBookedGoods: Good[];
};

export type BookRequest = {
  input: BookFormInput;
  selectedIds: number[];
};

export type GoogleSheetRequestBodyData = {
  range: string;
  values: string[][];
}[];

// State Types

export type GoodsFilterState = {
  type?: GoodType;
  status?: GoodStatus;
  category?: GoodCategory;
  wasAddedLastWeek: boolean;
};

export type BookFormInput = {
  name: string;
  contact: string;
  comments: string;
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
