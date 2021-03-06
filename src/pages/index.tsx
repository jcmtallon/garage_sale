import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Head } from "../components/Head";
import { TopBar } from "../components/TopBar";
import { HomeStatsBar } from "../components/pages/home/HomeStatsBar";
import { HomeMainSection } from "../components/pages/home/HomeMainSection";
import { SiteFooter } from "../components/SiteFooter";
import { useFetchGoods } from "../hooks/useFetchGoods";
import { HomeBookButtonDialog } from "../components/pages/home/BookButtonDialog";
import { BookFormInput } from "../types";
import { Backdrop } from "../components/Backdrop";
import { LANG } from "../constants/language";

export default function Home() {
  const [goods, isLoading, isPosting, fetchGoods, bookGoods] = useFetchGoods();
  const [selected, setSelected] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t, i18n } = useTranslation();

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
      const blockedIds = response.alreadyBookedGoods.map((good) => good.id);
      const newSelected = selected.filter((id) => !blockedIds.includes(id));
      setSelected(newSelected);

      //TODO: Make this code more readable (avoid nesting, extract to a hook or something)
      const selectedItemNames = goods
        .filter((good) => blockedIds.includes(good.id))
        .map((good) =>
          i18n.language === LANG.EN_US ? good.name_en : good.name_jp
        )
        .join(", ");

      if (newSelected.length > 0) {
        alert(
          t("bookDialog.message.itemsAlreadyBooked1", {
            items: selectedItemNames,
          })
        );
      } else {
        if (newSelected.length > 0) {
          alert(
            t("bookDialog.message.itemsAlreadyBooked2", {
              items: selectedItemNames,
            })
          );
        }
      }
    } else {
      setSelected([]);
      alert(t("bookDialog.message.itemsBooked"));
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
          <HomeStatsBar goods={goods} isLoading={isLoading} />
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
        {isPosting && <Backdrop />}
      </main>
      <SiteFooter />
    </div>
  );
}
