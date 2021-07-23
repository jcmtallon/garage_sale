import * as React from "react";

interface OwnProps {
  size?: "sm" | "default";
  color?: "primary" | "warning";
}

const colors = {
  primary: { className: "loader-primary", border: "border-gray-200" },
  warning: { className: "loader-warning", border: "border-yellow-400" },
};

const sizes = {
  sm: "h-3 w-3",
  default: "h-9 w-9",
};

export const LoadingSpinner = ({
  size = "default",
  color = "primary",
}: OwnProps) => {
  return (
    <div
      className={`loader ease-linear rounded-full border-2 border-t-4 ${sizes[size]} ${colors[color].className} ${colors[color].border}`}
    ></div>
  );
};
