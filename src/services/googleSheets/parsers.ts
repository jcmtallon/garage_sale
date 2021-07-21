import { Good } from "../../types";

enum GoodDbPropName {
  "id",
  "date_added",
  "name_en",
  "name_jp",
  "description_en",
  "description_jp",
  "category",
  "status",
  "price_original",
  "price_now",
  "size_x",
  "size_y",
  "size_z",
  "public",
  "booker_name",
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

    if (good.public === "TRUE") goods.push(good);
  });

  return goods;
};
