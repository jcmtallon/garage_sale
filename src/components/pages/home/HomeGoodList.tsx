import { Good } from "../../../types";

interface OwnProps {
  goods: Good[];
}

export const HomeGoodList = ({ goods }: OwnProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {goods.map((good) => (
        <div key={good.id} className="border p-4">
          <div>{good.name_en}</div>
          <div>{good.name_jp}</div>
          <div>{good.description_en}</div>
          <div>{good.description_jp}</div>
          <div>{good.price_now}</div>
          <div>{good.size_x}</div>
          <div>{good.size_y}</div>
          <div>{good.size_z}</div>
        </div>
      ))}
    </div>
  );
};
