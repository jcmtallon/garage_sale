import { GOOD_STATUS } from "../../constants/goodStatus";
import { GOOGLE_SHEET_NAME } from "../../constants/googleSheetName";
import { BookRequest, Good, GoogleSheetRequestBodyData } from "../../types";

enum GoodDbPropName {
  "id",
  "date_added",
  "name_en",
  "name_jp",
  "description_en",
  "description_jp",
  "image_id",
  "info_link",
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
      const value = row[propIndexes[key]];

      //TODO: think a easier to mantain design for this.
      good[key] = ["price_original", "price_now"].includes(key)
        ? parseInt(value, 10)
        : value;
    });

    if (good.public === "TRUE") goods.push(good);
  });

  return goods;
};

export const parseGoodsBookRequestData = (
  request: BookRequest,
  goodsData: any[]
): GoogleSheetRequestBodyData => {
  const data: GoogleSheetRequestBodyData = [];
  const headers = goodsData[0];

  const idIndex = headers.indexOf("id");
  const statusCol = getFieldColumnLetter(headers, "status");
  const nameCol = getFieldColumnLetter(headers, "booker_name");
  const contactCol = getFieldColumnLetter(headers, "booker_contact");
  const commentCol = getFieldColumnLetter(headers, "booker_comment");

  request.selectedIds.forEach((id) => {
    const rowNumber = goodsData.findIndex((x) => x[idIndex] === id) + 1;

    data.push(getDataEntry(statusCol, rowNumber, GOOD_STATUS.RESERVED));
    data.push(getDataEntry(nameCol, rowNumber, request.input.name));
    data.push(getDataEntry(contactCol, rowNumber, request.input.contact));
    data.push(getDataEntry(commentCol, rowNumber, request.input.comments));
  });

  return data;
};

// Utils

const getFieldColumnLetter = (headers: any, field: string) => {
  return getColumnLetterByIndex(headers.indexOf(field));
};

const getColumnLetterByIndex = (index: number) => {
  return (index + 10).toString(36).toUpperCase();
};

const getDataEntry = (column: string, row: number, value: any) => {
  return {
    range: `'${GOOGLE_SHEET_NAME}'!${column}${row}`,
    values: [[value]],
  };
};
