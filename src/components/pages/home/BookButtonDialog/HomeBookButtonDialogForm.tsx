import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { BookFormInput } from "../../../../types";

import { TextField } from "../../../elements/TextField";

interface OwnProps {
  input: BookFormInput;
  onInputChange: (input: BookFormInput) => void;
}

export const HomeBookButtonDialogForm = ({
  input,
  onInputChange,
}: OwnProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="text-gray-600 pb-1">
        {t("bookCard.desc.pleaseFilTheForm")}
      </div>
      <form className="bg-primary-50 flex flex-col px-4 md:px-6 py-8 space-y-6">
        <FormFieldWrapper
          fieldName={t("bookCard.fieldName.name")}
          description={t("bookCard.desc.name")}
        >
          <TextField
            value={input.name}
            id={t("bookCard.fieldName.name")}
            placeholder={t("bookCard.placeholder.name")}
            onChange={(e) => onInputChange({ ...input, name: e.target.value })}
          />
        </FormFieldWrapper>

        <FormFieldWrapper
          fieldName={t("bookCard.fieldName.contact")}
          description={t("bookCard.desc.contact")}
        >
          <TextField
            id={t("bookCard.fieldName.contact")}
            value={input.contact}
            placeholder={t("bookCard.placeholder.contact")}
            onChange={(e) =>
              onInputChange({ ...input, contact: e.target.value })
            }
          />
        </FormFieldWrapper>

        <FormFieldWrapper fieldName={t("bookCard.fieldName.comments")}>
          <textarea
            id={t("bookCard.fieldName.comments")}
            value={input.comments}
            placeholder={t("bookCard.placeholder.comments")}
            className="text-sm placeholder-gray-400 rounded-sm border border-gray-300 appearance-none focus:outline-none focus:border-primary-600"
            onChange={(e) =>
              onInputChange({ ...input, comments: e.target.value })
            }
          />
        </FormFieldWrapper>
      </form>
    </div>
  );
};

interface FormFieldWrapperProps {
  fieldName: string;
  children: ReactNode;
  description?: string;
}

const FormFieldWrapper = ({
  fieldName,
  children,
  description,
}: FormFieldWrapperProps) => {
  return (
    <div className="flex space-x-6">
      <div
        className={`flex flex-col flex-none ${description ? "w-96" : "w-full"}`}
      >
        <label
          className="text-xs font-bold text-primary-600 pb-0.5"
          htmlFor={fieldName}
        >
          {fieldName}
        </label>
        {children}
      </div>
      {description && (
        <div className="flex items-center pt-2.5">
          <div className="text-xs italic text-gray-600">{description}</div>
        </div>
      )}
    </div>
  );
};
