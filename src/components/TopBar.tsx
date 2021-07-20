import { useEffect, useState } from "react";

import { useMdScreenQuery } from "../hooks/useMediaQuery";

const url = {
  regular: "logo.svg",
  md: "logo_md.svg",
};

export const TopBar = () => {
  const [logoUrl, setLogoUrl] = useState(url.regular);

  const isMdScreen = useMdScreenQuery();

  //Strategy used to prevent 'Prop src did not match between client and server' error.
  // Reference: https://github.com/vercel/next.js/issues/10608
  useEffect(() => {
    setLogoUrl(isMdScreen ? url.md : url.regular);
  }, [isMdScreen]);

  return (
    <div className="bg-primary-600 fixed w-full h-10 md:h-12">
      <div className="px-2 md:px-6 max-w-screen-xl m-auto h-full">
        <div className="flex justify-between items-center h-full">
          <img src={logoUrl} alt="Garage Sale Logo" />
          <div className="flex">
            <div>TODO: Language selector</div>
            <div>TODO: Selected Items counter</div>
            <div>TODO: Book button</div>
          </div>
        </div>
      </div>
    </div>
  );
};
