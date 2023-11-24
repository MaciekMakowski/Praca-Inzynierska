import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export type subListType = {
  name: string;
  path: string;
};

export type menuListType = {
  ico: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  name: string;
  path: string;
  subList?: subListType[];
};

export type ChartDataType = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[] | string;
    fill?: boolean;
    borderColor?: string;
  }[];
};

export type DiseaseType = {
  id: number;
  attributes: {
    name: string;
    description: string;
    treatment: string;
  };
};

export type AnimalType = {
  id: number;
  attributes: {
    name: string;
    findPlace: string;
    race: string;
    species: string;
    weight: number;
    sex: string;
    birthDate: string;
    description: string;
    isIll: boolean;
    isIsolated: boolean;
    toAdoption: boolean;
    adopted: boolean;
    dateOfAdmission: string;
    images: Image[] | null;
  };
};

export type PersonType = {
  id: number;
  attributes: {
    name: string;
    lastName: string;
    birthDate: string;
    sex: string;
    phoneNumber: number;
    email: string;
    city: string;
    postCode: string;
    address: string;
    pesel: number;
  };
};

export type IsolationType = {
  id: number;
  attributes: {
    reason: string;
    startDate: string;
    endDate: string;
    status: string;
    animal: AnimalType;
    description: string;
  };
};

export type PetDiseaseType = {
  id: number;
  attributes: {
    disease: DiseaseType;
    animal: AnimalType;
    startDate: string;
    endDate: string;
    symptoms: string;
    status: string;
  };
};

export type ResourceType = {
  id: number;
  name: string;
  type: string;
  subtype: string;
  quantity: number;
  unit: string;
  expirationDate?: string | null;
};

export type User = {
  attributes: {
    login: string;
    password: string;
  };
};

export type AdoptionType = {
  id: number;
  attributes: {
    status: string;
    date: string;
    adoptionDate: string;
    animal: AnimalType;
    guest: PersonType;
  };
};


export type Image = {
  id: number;
  url: string;
  alternativeText: string;
}

export type AnimalInfoType = {
    animal: AnimalType;
    diseases: DiseaseType[];
    isolations: IsolationType[];
    petDiseases: PetDiseaseType[];
}