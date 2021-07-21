import React from "react";

import { LabeledValueOption } from "../../types";

interface OwnProps<T = string | number>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: LabeledValueOption<T>[];
  selectedValud?: T;
}

export const SelectBox = ({ options, selectedValud, ...props }: OwnProps) => {
  return (
    <select
      className={`text-sm rounded py-1.5 md:py-2 pl-2.5 md:pl-4 pr-9 border border-green-600 focus:border-gray-900 focus:shadow focus:ring-0 w-full`}
      value={selectedValud}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.label} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
