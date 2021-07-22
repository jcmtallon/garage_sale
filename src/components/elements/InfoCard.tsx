import { useState } from "react";
import Image from "next/image";

import infoIcon from "../../../public/information.svg";
import closeIcon from "../../../public/close.svg";

interface OwnProps {
  title: string;
  body: string;
}

export const InfoCard = ({ title, body }: OwnProps) => {
  const [isClosed, setIsVisible] = useState(false);

  if (isClosed) {
    return null;
  }

  return (
    <div className="flex bg-yellow-50 border border-yellow-200 p-4 space-x-0 md:space-x-5">
      <div className="relative flex-none h-4 w-5 py-4 hidden md:block">
        <Image src={infoIcon} layout="fill" alt="Info Icon" />
      </div>
      <div className="pr-4">
        <div className="font-bold text-lg mb-2 w-52 md:w-auto">{title}</div>
        <div className="whitespace-pre-wrap text-justify">{body}</div>
      </div>
      <button className="flex-none h-3 w-3" onClick={() => setIsVisible(true)}>
        <Image src={closeIcon} alt="Close Icon" />
      </button>
    </div>
  );
};
