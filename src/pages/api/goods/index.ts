import { NextApiRequest, NextApiResponse } from "next";
import { parseGoodsBookRequestData } from "../../../services/googleSheets/parsers";
import {
  getGoods,
  getAlreadyBookedGoods,
  bookGoods,
} from "../../../services/googleSheets/sheets";
import { BookRequest } from "../../../types";

interface NextApiRequestWithBody extends NextApiRequest {
  body: BookRequest;
}

export const Goods = async (
  req: NextApiRequestWithBody,
  res: NextApiResponse
) => {
  // Get method
  if (req.method === "GET") {
    const goods = await getGoods();
    res.status(200).json(goods);
  }

  // Post method
  if (req.method === "POST") {
    const request = req.body;
    const [alreadyBookedGoods, fetchData] = await getAlreadyBookedGoods(
      request.selectedIds
    );

    //TODO: add some better error handling

    if (alreadyBookedGoods.length > 0) {
      res.statusCode = 200;
      res.json({ alreadyBookedGoods: alreadyBookedGoods });
    } else {
      const payloadData = parseGoodsBookRequestData(request, fetchData);
      await bookGoods(payloadData);
      res.statusCode = 200;
      res.json({ alreadyBookedGoods: [] });
    }
  }
};

export default Goods;
