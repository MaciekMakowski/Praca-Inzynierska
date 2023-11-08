import { ChangeEvent, Dispatch } from "react";
import dayjs, {Dayjs} from "dayjs";

import { SelectChangeEvent } from "@mui/material";

export const handleChange = (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent,
    attributeName: string,
    foo: Dispatch<React.SetStateAction<any>>,
  ) => {
    const { value } = event.target;
    const newValue =
      attributeName === "weight"
        ? parseFloat(value)
        : attributeName === "number"
        ? parseFloat(value)
        : value;
    foo((prevItem:any) => ({
      ...prevItem,
      [attributeName]: newValue,
    }));
  };

export const handleTextChange = (event: ChangeEvent<HTMLInputElement>, foo:Dispatch<React.SetStateAction<any>>) => {
    const attributeName = event.target.name;
    if (attributeName) {
      handleChange(event, attributeName, foo);
    }
  };
export const handleSelectChange = (event: SelectChangeEvent, foo:Dispatch<React.SetStateAction<any>>) => {
    const attributeName = event.target.name;
    if (attributeName) {
      handleChange(event, attributeName, foo);
    }
  };

export const handleChangeDate = (value: string, foo:Dispatch<React.SetStateAction<any>>, attributeName:string) => {
    foo((prevItem:any) => ({
      ...prevItem,
      [attributeName]: value,
    }));
  };