import { AnimalType, DiseaseType } from "./basicTypes";

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
    contractSigned: boolean;
    adoptionFeePaid: boolean;
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
    data: AnimalResponse;
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

export type ResourceTypeResponse = {
  id: number;
  attributes: {
    name: string;
    resource_subtypes: {
      data: ResourceSubtypeResponse[];
    };
  };
};

export type ResourceSubtypeResponse = {
  id: number;
  attributes: {
    name: string;
  };
};

export type ResourceResponse = {
  id: number;
  attributes: {
    name: string;
    quantity: number;
    unit: string;
    expirationDate: string | null;
    resources_type: {
      data: ResourceTypeResponse;
    };
    resource_subtype: {
      data: ResourceSubtypeResponse;
    };
    status: "Dostępne" | "Przeterminowane" | "Zużyte" | "W użyciu";
  };
};

export type VisitResponse = {
  id: number;
  attributes: {
    person: {
      data: PersonsResponse;
    };
    visit: {
      date: string;
      enterTime: string;
      exitTime: string;
    };
  };
};

export type MeetingResponse = {
  id: number;
  attributes: {
    guest: {
      data: PersonsResponse;
    };
    volunteer: {
      data: PersonsResponse;
    };
    date: string;
    status: string;
  };
};
