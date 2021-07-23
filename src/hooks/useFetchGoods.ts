import { useEffect, useState } from "react";

import { axiosInstance } from "../services/axios/apiCore";
import { Good } from "../types";

export const useFetchGoods = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const res = await axiosInstance.get(`goods`);
        const goods = await res.data;

        setGoods(goods);
      } catch (error) {
        setGoods([]);
        alert("Unexpected error. Please refresh the browser and try again");
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchGoods();
  }, []);

  // const postGood = async () => {
  //   await fetch("/api/goods", {
  //     method: "POST",
  //   });
  // };

  return [goods, isLoading] as const;
};
