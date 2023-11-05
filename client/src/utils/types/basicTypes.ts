export type ChartDataType = {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string[] | string;
      fill?: boolean;
      borderColor?: string;
    }[];
  }

export type DiseaseType = {
    number: number,
    name: string,
    description: string,
    treatment: string,
}

export type AnimalType = {
    name:string,
    findPlace:string,
    race:string,
    number:number,
    species:string,
    weight:number,
    sex:string,
    birthDate:string
    desc:string,
    isIll:boolean,
    isIsolated:boolean,
    status:string,
}

export type PersonType = {
    number:number,
    name:string,
    lastName:string,
    birthDate:string,
    sex:string,
    phoneNumber:number,
    email:string,
    city:string,
    postCode:string,
    address:string,
    pesel:number,
}

export type IsolationType = {
    number?:number,
    reason:string,
    desc:string,
    startDate:string,
    endDate:string,
    petId:number,
}

export type PetDiseaseType = {
    diseaseId:number,
    petId:number,
    startDate:string,
    endDate:string | null,
}

export type PetManagementProps = {
    data?:AnimalType
}

export type DiseaseManagementProps = {
  data?:DiseaseType
}

export type EditPetModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data?: AnimalType;
  };

  
export type EditIsolationModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: IsolationType;
};

export type ModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

  export type DiseaseInfoProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data:PetDiseaseType | IsolationType,
    reason:string,
    desc:string,
    buttonText:string
  };


export type ConfirmModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    petid:number,
}