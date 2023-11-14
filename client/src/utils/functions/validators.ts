import { setAsError, unsetAsError } from "./setters";

import { ErrorInput } from "../types/errorInput";

interface BaseAttributes {
  [key: string]: string | number | boolean;
}

interface FormAttributes<T extends BaseAttributes> {
  attributes: T;
}

export const validateForm = async <T extends BaseAttributes>(
  formData: FormAttributes<T>["attributes"],
  foo: React.Dispatch<React.SetStateAction<ErrorInput>>
) => {
  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      const value = formData[key];

      if (value === "" || value === undefined || value === null || value === 0) {
        setAsError(key, foo);
        return false;
      } else {
        unsetAsError(key, foo);
      }
    }
  }

  return true;
};
