import { LabeledValueOption } from "../../types";

interface OwnProps<T> {
  buttons: LabeledValueOption<T>[];
  selectedValue: T;
  onClick: (value: T) => void;
}

export const GroupButtons = <T extends unknown>({
  buttons,
  selectedValue,
  onClick,
}: OwnProps<T>) => {
  return (
    <div>
      {buttons.map((btn, index) =>
        index === 0 ? (
          // First Button
          <BaseButton
            key={btn.label}
            label={btn.label}
            isSelected={btn.value === selectedValue}
            className={`border-r-0 rounded-l`}
            onClick={() => onClick(btn.value)}
          />
        ) : index === buttons.length - 1 ? (
          // Last Button
          <BaseButton
            key={btn.label}
            label={btn.label}
            isSelected={btn.value === selectedValue}
            className={`rounded-r`}
            onClick={() => onClick(btn.value)}
          />
        ) : (
          // Middle Button
          <BaseButton
            key={btn.label}
            label={btn.label}
            isSelected={btn.value === selectedValue}
            className={`border-r-0`}
            onClick={() => onClick(btn.value)}
          />
        )
      )}
    </div>
  );
};

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isSelected: boolean;
  className?: string;
}

const BaseButton = ({
  label,
  isSelected,
  className = "",
  ...props
}: BaseButtonProps) => {
  return (
    <button
      className={`border border-primary-600 px-4 py-2 mx-0 outline-none ${
        isSelected
          ? "bg-primary-600 text-white"
          : "bg-white text-primary-600 hover:bg-primary-100"
      } ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
