import { useMediaPredicate } from "react-media-hook";

const mdScreenPredicate = "(min-width: 768px)";

export const useMdScreenQuery = () => {
  const isMd = useMediaPredicate(mdScreenPredicate);
  return isMd;
};
