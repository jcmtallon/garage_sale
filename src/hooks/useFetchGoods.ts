import { useEffect, useState, useCallback } from "react";

import { axiosInstance } from "../services/axios/apiCore";
import { BookRequest, BookResponse, Good } from "../types";

export const useFetchGoods = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const fetchGoods = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await axiosInstance.get("goods");
      const goods = await res.data;

      setGoods(goods);
    } catch (error) {
      setGoods([]);
      alert("Unexpected error. Please refresh the browser and try again");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGoods();
  }, []);

  const bookGoods = useCallback(
    async (req: BookRequest): Promise<BookResponse> => {
      setIsPosting(true);

      try {
        const res = await axiosInstance.post<BookResponse>("goods", req);
        return res.data;
      } catch (error) {
        alert("Unexpected error. Please refresh the browser and try again");
      } finally {
        setIsPosting(false);
      }
    },
    []
  );

  return [goods, isLoading, isPosting, fetchGoods, bookGoods] as const;
};
