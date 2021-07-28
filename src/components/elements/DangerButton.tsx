import { ReactNode } from "react";

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const DangerButton = ({ children, className, ...props }: OwnProps) => {
  return (
    <button
      className={`text-xs md:text-sm bg-yellow-700 rounded px-2 md:px-4 pt-1.5 pb-2 leading-3 text-white ${
        props.disabled ? "opacity-50 cursor-default" : "hover:bg-yellow-600"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
