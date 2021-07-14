import crypto from "crypto";

import serviceAccount from "../../../service-account.enc";

const algorithm = "aes-128-cbc";
const decipher = crypto.createDecipheriv(
  algorithm,
  process.env.GOOGLE_ENCRYPTION_KEY,
  process.env.GOOGLE_ENCRYPTION_IV
);

export const getDecryptedCredentials = () => {
  let decrypted = decipher.update(serviceAccount.encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");

  return JSON.parse(decrypted);
};
