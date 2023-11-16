import { IsolationResponse, PetDiseasesResponse } from "../types/responseTypes";
import { IsolationType, PetDiseaseType } from "../types/basicTypes";

export const createIsolation = (isolation: IsolationResponse) => {
    const newIsolation: IsolationType = {
        id: isolation.id,
        attributes: {
          reason: isolation.attributes.reason,
          startDate: isolation.attributes.startDate,
          endDate: isolation.attributes.endDate,
          status: isolation.attributes.status,
          animal: isolation.attributes.animal.data,
          description: isolation.attributes.description,
        },
      };
      return newIsolation;
}


export const createPetDisease = (petDisease: PetDiseasesResponse) => {
  const newPetDisease: PetDiseaseType = {
      id: petDisease.id,
      attributes: {
        startDate: petDisease.attributes.startDate,
        endDate: petDisease.attributes.endDate,
        status: petDisease.attributes.status,
        animal: petDisease.attributes.animal.data,
        symptoms: petDisease.attributes.symptoms,
        disease: petDisease.attributes.disease.data,
      },
    };
    return newPetDisease;
}