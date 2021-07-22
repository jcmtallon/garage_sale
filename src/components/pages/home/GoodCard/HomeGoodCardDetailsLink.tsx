interface OwnProps {}

export const HomeGoodCardDetailsLink = ({}: OwnProps) => {
  return (
    <a
      className="text-primary-600 underline text-xs"
      href={
        "https://stackoverflow.com/questions/65676689/next-js-how-can-i-change-the-color-of-svg-in-next-image"
      }
    >
      More details
    </a>
  );
};
