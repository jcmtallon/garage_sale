import { google } from "googleapis";
import { GOOD_STATUS } from "../../constants/goodStatus";
import { GOOGLE_SHEET_NAME } from "../../constants/googleSheetName";
import { Good, GoogleSheetRequestBodyData } from "../../types";

import { getDecryptedCredentials } from "./credentialDecryption";
import { parseGoodsResponse } from "./parsers";

//Information about why we used a decryption method for
//passing credentials in: https://leerob.io/blog/vercel-env-variables-size-limit
//Cannot upload credential files into Vercel without uploading them into the source control,
//so that option was not possible either.
const credentials = getDecryptedCredentials();

let gapiClient = null;

async function getClient() {
  if (gapiClient !== null) return gapiClient;

  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  gapiClient = google.sheets({ version: "v4", auth: client });

  return gapiClient;
}

const fetchSheetData = async (): Promise<any> => {
  const sheets = await getClient();
  return await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: GOOGLE_SHEET_NAME,
  });
};

export const getGoods = async (): Promise<Good[]> => {
  const response = await fetchSheetData();
  return parseGoodsResponse(response.data.values);
};

export const getAlreadyBookedGoods = async (
  selectedIds: number[]
): Promise<[Good[], any[]]> => {
  const response = await fetchSheetData();
  const goods = parseGoodsResponse(response.data.values);

  const bookedGoods = goods.filter(
    (good) =>
      selectedIds.includes(good.id) && good.status !== GOOD_STATUS.AVAILABLE
  );
  return [bookedGoods, response.data.values];
};

export const bookGoods = async (
  data: GoogleSheetRequestBodyData
): Promise<any> => {
  const sheets = await getClient();
  return await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: process.env.SHEET_ID,
    requestBody: {
      valueInputOption: "RAW",
      data: data,
    },
  });
};
