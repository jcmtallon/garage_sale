import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { LANG } from "../../../../constants/language";

import { Good } from "../../../../types";
import { getJPYFormat } from "../../../../utils/labelUtils";

interface OwnProps {
  goods: Good[];
}

export const HomeBookButtonDialogSummary = ({ goods = [] }: OwnProps) => {
  const { t, i18n } = useTranslation();

  const productNames = useMemo(
    () =>
      goods
        .map((good) =>
          i18n.language === LANG.EN_US ? good.name_en : good.name_jp
        )
        .join(", "),
    [goods, i18n]
  );

  const totalPrice = useMemo(() => {
    const reducer = (sum: number, good: Good) => sum + good.price_now;
    const initialValue = 0;

    return getJPYFormat(goods.reduce(reducer, initialValue));
  }, [goods]);

  return (
    <div className="border border-gray-300 p-4 md:p-6 flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row">
        <div className="text-primary-600 font-bold w-40 md:text-right pr-8 flex-none">
          {t("bookDialog.label.selectedItems")}
        </div>
        <div className="pt-2 md:pt-0">{productNames}</div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="text-primary-600 font-bold w-40 md:text-right pr-8 flex-none">
          {t("bookDialog.label.totalPrice")}
        </div>
        <div className="pt-2 md:pt-0">{totalPrice}</div>
      </div>
    </div>
  );
};
