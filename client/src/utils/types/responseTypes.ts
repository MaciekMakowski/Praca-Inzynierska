import {
  AnimalType,
  DiseaseType,
  IsolationType,
  PetDiseaseType,
} from "./basicTypes";

export type IsolationResponse = {
  id: number;
  attributes: {
    reason: string;
    startDate: string;
    endDate: string;
    status: string;
    description: string;
    animal: {
      data: AnimalType;
    };
  };
};

export type PetDiseasesResponse = {
  id: number;
  attributes: {
    symptoms: string;
    startDate: string;
    endDate: string;
    status: string;
    animal: {
      data: AnimalType;
    };
    disease: {
      data: DiseaseType;
    };
  };
};

export type PersonsResponse = {
  id: number;
  attributes: {
    personData: {
      name: string;
      lastName: string;
      birthDate: string;
      sex: string;
      phoneNumber: number;
      email: string;
      pesel: number;
      address: {
        city: string;
        postCode: string;
        address: string;
        pesel: number;
      };
    };
  };
};

export type AdoptionResponse = {
  id: number;
  attributes: {
    status: string;
    date: string;
    adoptionDate: string;
    animal: {
      data: AnimalType;
    };
    guest: {
      data: PersonsResponse;
    };
  };
};

export type AnimalResponse = {
  id: number;
  attributes: Omit<AnimalType["attributes"], "images"> & {
    images: {
      data: ImageResponse[];
    };
  };
};

export type ImageResponse = {
  id: number;
  attributes: {
    url: string;
    alternativeText: string;
  };
};

export type AnimalInfoResponse = {
    animal: {
      data:AnimalResponse
    };
    diseases: {
      data: DiseaseType[];
    };
    isolations: {
      data: IsolationResponse[];
    };
    petDiseases: {
      data: PetDiseasesResponse[];
    };
};
