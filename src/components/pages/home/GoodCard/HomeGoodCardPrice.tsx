import { getDiscount, getJPYFormat } from "../../../../utils/labelUtils";

interface OwnProps {
  priceNow: number;
  priceOriginal: number;
}

export const HomeGoodCardPrice = ({ priceNow, priceOriginal }: OwnProps) => (
  <div className="text-right">
    <div
      className={`text-xl font-medium ${
        priceNow > 0 ? "" : "text-primary-700"
      }`}
    >
      {priceNow > 0 ? getJPYFormat(priceNow) : "FREE!"}
    </div>

    {priceNow > 0 && priceOriginal > 0 && (
      <div className="text-xxs text-gray-500 leading-3.5">
        <div>before {getJPYFormat(priceOriginal)}</div>
        <div className="text-primary-600">
          ({getDiscount(priceNow, priceOriginal)} OFF)
        </div>
      </div>
    )}
  </div>
);
