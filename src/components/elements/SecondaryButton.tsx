import { ReactNode } from "react";

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}

export const SecondaryButton = ({
  children,
  className,
  ...props
}: OwnProps) => {
  return (
    <button
      className={`bg-white border border-primary-400 rounded-sm px-4 py-2 text-primary-400 ${
        props.disabled ? "opacity-50 cursor-default" : "hover:bg-primary-50"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
