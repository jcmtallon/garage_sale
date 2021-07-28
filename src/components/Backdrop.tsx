import React from "react";

import { LoadingSpinner } from "./LoadingSpinner";
import { Dialog } from "./overlays/Dialog";

interface OwnProps {}

export const Backdrop = ({}: OwnProps) => {
  return (
    <Dialog onClose={() => {}}>
      <div className="w-full h-screen py-12 flex items-center justify-center">
        <LoadingSpinner color="warning" />
      </div>
    </Dialog>
  );
};
