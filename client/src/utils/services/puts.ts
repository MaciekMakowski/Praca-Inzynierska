import {
  AnimalType,
  DiseaseType,
  IsolationType,
  PetDiseaseType,
} from "../types/basicTypes";

import { APIurl } from "./url";
import Cookies from "js-cookie";
import axios from "axios";

export const updateDisease = async (disease: DiseaseType) => {
  const authToken = Cookies.get("token");
  const response = await axios.put(
    `${APIurl}diseases/${disease.id}`,
    {
      data: {
        name: disease.attributes.name,
        description: disease.attributes.description,
        treatment: disease.attributes.treatment,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};

export const updateAnimal = async (animal: AnimalType) => {
  const authToken = Cookies.get("token");
  const response = await axios.put(
    `${APIurl}animals/${animal.id}`,
    {
      data: {
        name: animal.attributes.name,
        race: animal.attributes.race,
        species: animal.attributes.species,
        sex: animal.attributes.sex,
        findPlace: animal.attributes.findPlace,
        description: animal.attributes.description,
        birthDate: animal.attributes.birthDate,
        weight: animal.attributes.weight,
        isIll: animal.attributes.isIll,
        isIsolated: animal.attributes.isIsolated,
        toAdoption: animal.attributes.toAdoption,
        adopted: animal.attributes.adopted,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};

export const uppdateIsolation = async (isolation: IsolationType) => {
  const authToken = Cookies.get("token");
  const response = await axios.put(
    `${APIurl}isolations/${isolation.id}`,
    {
      data: {
        startDate: isolation.attributes.startDate,
        endDate: isolation.attributes.endDate,
        reason: isolation.attributes.reason,
        status: isolation.attributes.status,
        animal: isolation.attributes.animal.id,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};

export const updatePetDisease = async (petDisease: PetDiseaseType) => {
  const authToken = Cookies.get("token");
  const response = await axios.put(
    `${APIurl}pet-diseases/${petDisease.id}`,
    {
      data: {
        startDate: petDisease.attributes.startDate,
        endDate: petDisease.attributes.endDate,
        symptoms: petDisease.attributes.symptoms,
        status: petDisease.attributes.status,
        animal: petDisease.attributes.animal.id,
        disease: petDisease.attributes.disease.id,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
};
