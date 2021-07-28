import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { END_DATE } from "../../../constants/endDate";
import { GOOD_STATUS } from "../../../constants/goodStatus";
import { Good } from "../../../types";
import { getDistanceInDays } from "../../../utils/dateUtils";

interface OwnProps {
  goods: Good[];
}

export const HomeStatsBar = ({ goods = [] }: OwnProps) => {
  const { t } = useTranslation();

  const available = useMemo(
    () => goods.filter((good) => good.status === GOOD_STATUS.AVAILABLE).length,
    [goods]
  );
  const reserved = useMemo(
    () => goods.filter((good) => good.status === GOOD_STATUS.RESERVED).length,
    [goods]
  );
  const given = useMemo(
    () => goods.filter((good) => good.status === GOOD_STATUS.GIVEN).length,
    [goods]
  );

  const remaining = useMemo(() => {
    const endDate = new Date(END_DATE);
    const today = new Date();

    return getDistanceInDays(endDate, today);
  }, []);

  return (
    <div className="pt-12 md:pt-14 bg-gray-100 w-screen">
      <div className="px-2 md:px-6 max-w-screen-xl m-auto">
        <div className="flex h-8 justify-between items-center">
          <div className="flex space-x-3 md:space-x-6">
            <StatLabel
              count={available}
              text={t("statBar.label.itemsAvailable")}
              textShort={t("statBar.label.available")}
            />
            <StatLabel
              count={reserved}
              text={t("statBar.label.itemsBooked")}
              textShort={t("statBar.label.booked")}
            />
            <StatLabel
              count={given}
              text={t("statBar.label.itemsGiven")}
              textShort={t("statBar.label.given")}
            />
          </div>
          <div className="flex items-end space-x-2 text-gray-800">
            <div className="text-xs pb-0.5 hidden md:block">
              {t("statBar.label.untilDate", {
                when: END_DATE,
                interpolation: { escapeValue: false },
              })}
            </div>
            <div>{t("statBar.label.daysLeft", { count: remaining })}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatLabelProps {
  count: number;
  text: string;
  textShort: string;
}

const StatLabel = ({ count = 0, text, textShort }: StatLabelProps) => {
  return (
    <div className="flex items-end space-x-1.5 text-gray-800">
      <div className="text-lg font-bold text-primary-600">{count}</div>

      {/* Desktop Label */}
      <div className="hidden md:block pb-0.5">{text}</div>

      {/* Mobile Label */}
      <div className="block md:hidden pb-0.5">{textShort}</div>
    </div>
  );
};
