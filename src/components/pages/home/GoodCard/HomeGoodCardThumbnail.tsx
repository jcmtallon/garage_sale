interface OwnProps {
  imageId: string;
}

export const HomeGoodCardThumbnail = ({ imageId }: OwnProps) => {
  return (
    <div className="relative w-full h-full object-cover">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://drive.google.com/uc?export=view&id=${imageId}`}
        alt="Item thumbnail"
        draggable={false}
        loading="lazy"
        className="rounded bg-gray-50 shadow-inner cursor-pointer select-none"
      />
    </div>
  );
};
