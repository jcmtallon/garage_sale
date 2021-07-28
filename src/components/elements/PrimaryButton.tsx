import { ReactNode } from "react";

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const PrimaryButton = ({ children, className, ...props }: OwnProps) => {
  return (
    <button
      className={`text-xs md:text-sm bg-primary-600 rounded px-2 md:px-4 pt-1.5 pb-2 leading-3 text-white ${
        props.disabled ? "opacity-50 cursor-default" : "hover:bg-primary-500"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
