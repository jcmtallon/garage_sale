import { google } from "googleapis";

import { getDecryptedCredentials } from "./credentialDecryption";

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
