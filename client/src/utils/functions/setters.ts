import { AnimalType } from "../types/basicTypes";

export const setAsError = (index: string, foo:React.Dispatch<React.SetStateAction<any>>) => {
    foo((prev: any) => ({
      ...prev,
      [index]: {
        status: true,
      },
    }));
  };
export  const unsetAsError = (index: string, foo:React.Dispatch<React.SetStateAction<any>>) => {
    foo((prev: any) => ({
      ...prev,
      [index]: {
        status: false,
      },
    }));
  };

export const setAnimalAsIsolated = async (animal:AnimalType) => {
    const newAnimal = {...animal, attributes:{
        ...animal.attributes,
        isIsolated: true
    }}
    return newAnimal
}