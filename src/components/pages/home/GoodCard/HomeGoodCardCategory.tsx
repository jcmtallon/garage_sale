import { GoodCategory } from "../../../../constants/goodCategory";
import { getCategoryLabel } from "../../../../utils/labelUtils";

interface OwnProps {
  category: GoodCategory;
  selectCategory: (cat: GoodCategory) => void;
}

export const HomeGoodCardCategory = ({
  category,
  selectCategory,
}: OwnProps) => {
  return (
    <div className="text-xs text-gray-500 hover:text-primary-500">
      <span
        className="underline cursor-pointer"
        onClick={() => selectCategory(category)}
      >
        {getCategoryLabel(category)}
      </span>
    </div>
  );
};
