import React, { useState, useEffect } from "react";

import { Good } from "../types";
import { Head } from "../components/Head";
import { TopBar } from "../components/TopBar";
import { HomeStatsBar } from "../components/pages/home/HomeStatsBar";
import { HomeMainSection } from "../components/pages/home/HomeMainSection";

export default function Home() {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const postGood = async () => {
    await fetch("/api/goods", {
      method: "POST",
    });
  };

  useEffect(() => {
    const fetchGoods = async () => {
      const res = await fetch(`/api/goods`);
      const goods = await res.json();
      setGoods(goods);
    };

    fetchGoods();
  }, []);

  const selectItem = (id: number) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((val) => val !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  return (
    <div className="w-screen bg-white font-sans text-gray-900 text-sm">
      <Head />
      <main>
        <TopBar selected={selected.length} />
        <div>
          <HomeStatsBar goods={goods} />
          <HomeMainSection
            goods={goods}
            selected={selected}
            selectItem={selectItem}
          />
        </div>
        <button onClick={postGood}>TEST POST</button>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
