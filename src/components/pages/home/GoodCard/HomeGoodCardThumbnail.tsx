import Image from "next/image";

interface OwnProps {
  imageId: string;
}

export const HomeGoodCardThumbnail = ({ imageId }: OwnProps) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={`https://drive.google.com/uc?export=view&id=${imageId}`}
        layout="fill"
        alt="Item thumbnail"
        className="rounded bg-gray-50 shadow-inner cursor-pointer"
      />
    </div>
  );
};