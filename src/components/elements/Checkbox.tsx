import React from "react";

interface OwnProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
}

export const Checkbox = ({ label, checked, ...props }: OwnProps) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="text-primary-500 hover:text-primary-400 focus:ring-0 focus:ring-offset-0 text-lg rounded-sm"
        defaultChecked={checked}
        {...props}
      />
      <span className="select-none ml-1.5">{label}</span>
    </label>
  );
};
