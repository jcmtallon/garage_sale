import { GoodStatus } from "../../../../constants/goodStatus";
import { GOOD_STATUS_COLORS } from "../../../../constants/goodStatusOptions";
import { getGoodStatusLabel } from "../../../../utils/labelUtils";

interface OwnProps {
  status: GoodStatus;
}

export const HomeGoodCardStatusBadge = ({ status }: OwnProps) => {
  return (
    <div
      className="w-min text-xs text-white tracking-wide pl-1.5 pr-2 pt-0.5 pb-1 rounded-r-lg rounded-tl-lg"
      style={{ backgroundColor: GOOD_STATUS_COLORS[status] }}
    >
      {getGoodStatusLabel(status)}
    </div>
  );
};
