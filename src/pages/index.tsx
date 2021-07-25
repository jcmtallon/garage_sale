import React, { useState } from "react";

import { Head } from "../components/Head";
import { TopBar } from "../components/TopBar";
import { HomeStatsBar } from "../components/pages/home/HomeStatsBar";
import { HomeMainSection } from "../components/pages/home/HomeMainSection";
import { SiteFooter } from "../components/SiteFooter";
import { useFetchGoods } from "../hooks/useFetchGoods";
import { HomeBookButtonDialog } from "../components/pages/home/BookButtonDialog";
import { BookFormInput } from "../types";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [goods, isLoading, isPosting, fetchGoods, bookGoods] = useFetchGoods();
  const [selected, setSelected] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  const selectItem = (id: number) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((val) => val !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  const bookItems = async (input: BookFormInput) => {
    setIsModalOpen(false);

    const request = { input: input, selectedIds: selected };
    const response = await bookGoods(request);

    fetchGoods();

    if (response.alreadyBookedGoods.length > 0) {
      alert("TODO: error message");

      const blockedIds = response.alreadyBookedGoods.map((good) => good.id);
      const newSelected = selected.filter((id) => !blockedIds.includes(id));
      setSelected(newSelected);
    } else {
      setSelected([]);
      alert(t("bookCard.message.itemsBooked"));
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
            onBook={bookItems}
          />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
