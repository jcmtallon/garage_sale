import React, { useState } from "react";

import { Head } from "../components/Head";
import { TopBar } from "../components/TopBar";
import { HomeStatsBar } from "../components/pages/home/HomeStatsBar";
import { HomeMainSection } from "../components/pages/home/HomeMainSection";
import { SiteFooter } from "../components/SiteFooter";
import { useFetchGoods } from "../hooks/useFetchGoods";
import { HomeBookButtonDialog } from "../components/pages/home/BookButtonDialog";

export default function Home() {
  const [goods, isLoading] = useFetchGoods();
  const [selected, setSelected] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectItem = (id: number) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((val) => val !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  return (
    <div className="w-screen bg-white font-sans text-gray-900 text-sm h-screen flex flex-col">
      <Head />
      <main className="flex-grow">
        <TopBar
          selected={selected.length}
          openBookDialog={() => setIsModalOpen(true)}
        />
        <div className="h-full flex flex-col">
          <HomeStatsBar goods={goods} />
          <div className="flex-grow">
            <HomeMainSection
              isLoading={isLoading}
              goods={goods}
              selected={selected}
              selectItem={selectItem}
            />
          </div>
        </div>
        {isModalOpen && (
          <HomeBookButtonDialog
            ids={selected}
            goods={goods}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
