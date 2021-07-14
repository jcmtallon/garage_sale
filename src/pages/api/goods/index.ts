import { NextApiRequest, NextApiResponse } from "next";
import { getGoods, addGood } from "../../../services/googleSheets/sheets";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const goods = await getGoods();
    res.status(200).json(goods);
  }
  if (req.method === "POST") {
    const response = await addGood();
    res.statusCode = 200;
    res.json({ response });
  }
};
