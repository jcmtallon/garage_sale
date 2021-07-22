import { getDiscount, getJPYFormat } from "../../../../utils/labelUtils";

interface OwnProps {
  priceNow: number;
  priceOriginal: number;
}

export const HomeGoodCardPrice = ({ priceNow, priceOriginal }: OwnProps) => (
  <div className="text-right">
    <div className="text-xl font-medium">
      {priceNow > 0 ? getJPYFormat(priceNow) : "FREE"}
    </div>

    {priceNow > 0 && priceOriginal > 0 && (
      <div className="text-xxs text-gray-400 leading-4">
        <div>before {getJPYFormat(priceOriginal)}</div>
        <div>{getDiscount(priceNow, priceOriginal)} off</div>
      </div>
    )}
  </div>
);
