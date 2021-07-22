import { ReactNode } from "react";

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const PrimaryButton = ({ children, className, ...props }: OwnProps) => {
  return (
    <button
      className={`bg-primary-600 rounded px-4 pt-1.5 pb-2 leading-3 text-white ${
        props.disabled ? "opacity-50 cursor-default" : "hover:bg-primary-400"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
