import crypto from "crypto";

const generateCryptoString = () => {
  return crypto.randomBytes(40).toString("hex");
};

export default generateCryptoString;
