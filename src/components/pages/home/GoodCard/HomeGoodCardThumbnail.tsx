interface OwnProps {
  imageUrl: string;
  isGiven: boolean;
}

// Vercel was throwing 500 errors when fetching external URLs images (might be a image optimization hobby account limit issue).
// For now we solved the issue by using the img tag instead of nextjs/image.

export const HomeGoodCardThumbnail = ({
  imageUrl,
  isGiven = false,
}: OwnProps) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={imageUrl}
        alt="Item thumbnail"
        draggable={false}
        decoding="async"
        className={`rounded bg-gray-50 shadow-inner cursor-pointer select-none object-cover absolute box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full ${
          isGiven ? "filter grayscale" : ""
        }`}
      />
    </div>
  );
};
