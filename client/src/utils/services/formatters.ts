import { AdoptionResponse, AnimalResponse, ImageResponse, IsolationResponse, PersonsResponse, PetDiseasesResponse } from "../types/responseTypes";
import { AdoptionType, AnimalType, Image, IsolationType, PersonType, PetDiseaseType } from "../types/basicTypes";

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


export const createAdoption = (adoption: AdoptionResponse) => {
  const newAdoption:AdoptionType = {
    id: adoption.id,
    attributes: {
      status: adoption.attributes.status,
      date: adoption.attributes.date,
      adoptionDate: adoption.attributes.adoptionDate,
      animal: adoption.attributes.animal.data,
      guest: createPerson(adoption.attributes.guest.data),
    }
  }
  return newAdoption;
}

export const createAnimal = (animal: AnimalResponse) => {
  let newImages: Image[] | null = null;
  if(
    animal.attributes.images.data !== null
  ){
    newImages = animal.attributes.images.data.map((image:ImageResponse) => {
      return(
        createImage(image)
      )
    })
  }
  const newAnimal: AnimalType = {
    id: animal.id,
    attributes:{
      name: animal.attributes.name,
      findPlace: animal.attributes.findPlace,
      race:animal.attributes.race,
      weight: animal.attributes.weight,
      species: animal.attributes.species,
      birthDate: animal.attributes.birthDate,
      sex: animal.attributes.sex,
      description: animal.attributes.description,
      isIll: animal.attributes.isIll,
      isIsolated: animal.attributes.isIsolated,
      toAdoption: animal.attributes.toAdoption,
      adopted: animal.attributes.adopted,
      images: newImages
    }
  }
  return newAnimal
}

const createImage = (image: ImageResponse) => {
  const newImage:Image = {
      url: image.attributes.url,
      alternativeText: image.attributes.alternativeText,
    }
  return newImage;
}