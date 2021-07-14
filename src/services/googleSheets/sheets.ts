import { google } from "googleapis";

async function getClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  return google.sheets({ version: "v4", auth: client });
}

export const getGoods = async () => {
  const sheets = await getClient();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: `Sheet1!A:B`,
  });

  return response.data.values;
};

export const addGood = async () => {
  const sheets = await getClient();
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet1!A:B",
    valueInputOption: "RAW",
    requestBody: {
      values: [["TestA"], ["TestB"]],
    },
  });
};
