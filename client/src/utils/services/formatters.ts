import { IsolationResponse, PersonsResponse, PetDiseasesResponse } from "../types/responseTypes";
import { IsolationType, PersonType, PetDiseaseType } from "../types/basicTypes";

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

export const createPerson = (person:PersonsResponse) => {
  const newPerson: PersonType = {
    id: person.id,
    attributes:{
      name: person.attributes.personData.name,
      lastName: person.attributes.personData.lastName,
      birthDate: person.attributes.personData.birthDate,
      sex: person.attributes.personData.sex,
      phoneNumber: person.attributes.personData.phoneNumber,
      email: person.attributes.personData.email,
      pesel: person.attributes.personData.pesel,
      city: person.attributes.personData.address.city,
      postCode: person.attributes.personData.address.postCode,
      address: person.attributes.personData.address.address,
    }
  }
  return newPerson;
}