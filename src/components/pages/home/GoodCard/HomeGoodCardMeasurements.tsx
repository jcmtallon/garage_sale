import Image from "next/image";

import rulerIcon from "../../../../../public/ruler.svg";

interface OwnProps {
  sizeX: number;
  sizeY: number;
  sizeZ: number;
}

export const HomeGoodCardMeasurements = ({ sizeX, sizeY, sizeZ }: OwnProps) => {
  if (sizeX > 0 && sizeY > 0 && sizeZ > 0) {
    return (
      <div className="flex space-x-1 text-xs text-gray-600">
        <div className="mr-0.5 w-4">
          <Image
            src={rulerIcon}
            alt="Measurements icon"
            width={16}
            height={16}
          />
        </div>
        <div>{sizeX}</div>
        <div>x</div>
        <div>{sizeY}</div>
        <div>x</div>
        <div>{sizeZ}</div>
      </div>
    );
  }

  return null;
};
