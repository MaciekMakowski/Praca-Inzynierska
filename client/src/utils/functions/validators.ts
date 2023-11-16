import { AnimalType, DiseaseType } from "../types/basicTypes";
import { setAsError, unsetAsError } from "./setters";

import { ErrorInput } from "../types/errorInput";
import dayjs from "dayjs";

interface BaseAttributes {
  [key: string]: string | number | boolean | AnimalType | DiseaseType;
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
      if(typeof value !== "boolean"){
        if (key === "birthDate") {
          if(typeof value === "string"){
          if (dayjs(value).isAfter(dayjs())) {
            setAsError(key, foo);
            return false;
          } else {
            unsetAsError(key, foo);
          }
        }
        }else{
          if (value === "" || value === 0) {
            setAsError(key, foo);
            return false;
          } else {
            unsetAsError(key, foo);
          }
        }
      }
    }
  }

  return true;
}
