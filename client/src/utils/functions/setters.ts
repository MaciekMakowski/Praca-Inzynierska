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