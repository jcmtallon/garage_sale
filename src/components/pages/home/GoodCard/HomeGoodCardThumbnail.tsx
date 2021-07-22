import Image from "next/image";

interface OwnProps {
  imageId: string;
}

export const HomeGoodCardThumbnail = ({ imageId }: OwnProps) => {
  return (
    <div className="flex-none w-32">
      <Image
        src={`https://drive.google.com/uc?export=view&id=${imageId}`}
        width={544}
        height={816}
        alt="Item thumbnail"
        className="rounded bg-gray-50 shadow-inner cursor-pointer"
      />
    </div>
  );
};
