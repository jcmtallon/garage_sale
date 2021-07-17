export type Good = {
  id: number;
  name_en: string;
  name_jp: string;
  description: string;
  category: "bedrom" | "kitchen"; //TODO: add categories
  state: "AVAILABLE" | "RESERVED" | "GONE"; //TODO: add states
  price_original: number;
  price_now: number;
  size_x: number;
  size_y: number;
  size_z: number;
  booker_name: string;
  booker_email: string;
  booker_line_id: string;
};
