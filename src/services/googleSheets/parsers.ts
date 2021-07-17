import { Good } from "../../types";

enum GoodDbPropName {
  "id",
  "name_en",
  "name_jp",
  "description",
  "category",
  "state",
  "price_original",
  "price_now",
  "size_x",
  "size_y",
  "size_z",
  "booker_name",
  "booker_email",
  "booker_line_id",
}

export const parseGoodsResponse = (values: any[]): Good[] => {
  const tableHeaders = values[0];
  const tableRows = values.slice(1);

  const propIndexes = <{ [key in keyof typeof GoodDbPropName]: number }>{};

  for (const prop in GoodDbPropName) {
    // Condition to ignore the numeric values stored in the enum.
    if (isNaN(Number(prop))) propIndexes[prop] = tableHeaders.indexOf(prop);
  }

  const goods: Good[] = [];

  tableRows.forEach((row) => {
    const good = <Good>{};
    Object.keys(propIndexes).forEach((key) => {
      good[key] = row[propIndexes[key]];
    });

    goods.push(good);
  });

  return goods;
};
