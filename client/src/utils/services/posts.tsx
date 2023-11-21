import {
  AnimalType,
  DiseaseType,
  IsolationType,
  PersonType,
  PetDiseaseType,
} from "../types/basicTypes";

import { APIurl } from "./url";
import Cookies from "js-cookie";
import axios from "axios";

export const createAnimal = async (animal: AnimalType) => {
  const authToken = Cookies.get("token");
  const response = await axios.post(
    `${APIurl}animals`,
    {
      data: {
        name: animal.attributes.name,
        race: animal.attributes.race,
        species: animal.attributes.species,
        sex: animal.attributes.sex,
        findPlace: animal.attributes.findPlace,
        birthDate: animal.attributes.birthDate,
        weight: animal.attributes.weight,
        isIll: animal.attributes.isIll,
        isIsolated: animal.attributes.isIsolated,
        toAdoption: animal.attributes.toAdoption,
        adopted: animal.attributes.adopted,
        description: animal.attributes.description,
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

export const createDisease = async (disease: DiseaseType) => {
  const authToken = Cookies.get("token");
  const response = await axios.post(
    `${APIurl}diseases`,
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

export const createIsolation = async (isolation: IsolationType) => {
  const authToken = Cookies.get("token");
  const response = await axios.post(
    `${APIurl}isolations/addIsolation`,
    {
      data: {
        startDate: isolation.attributes.startDate,
        endDate: isolation.attributes.endDate,
        reason: isolation.attributes.reason,
        description: isolation.attributes.description,
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

export const createAnimalDisease = async (animalDisease: PetDiseaseType) => {
  const authToken = Cookies.get("token");
  const response = await axios.post(
    `${APIurl}pet-diseases`,
    {
      data: {
        startDate: animalDisease.attributes.startDate,
        endDate: animalDisease.attributes.endDate,
        disease: animalDisease.attributes.disease.id,
        symptoms: animalDisease.attributes.symptoms,
        status: animalDisease.attributes.status,
        animal: animalDisease.attributes.animal.id,
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

export const createPerson = async (person: PersonType, type: string) => {
  const authToken = Cookies.get("token");
  const response = await axios.post(
    `${APIurl}${type}`,
    {
      data: {
        personData: {
          name: person.attributes.name,
          lastName: person.attributes.lastName,
          pesel: person.attributes.pesel,
          birthDate: person.attributes.birthDate,
          sex: person.attributes.sex,
          phoneNumber: person.attributes.phoneNumber,
          email: person.attributes.email,
          address: {
            city: person.attributes.city,
            postCode: person.attributes.postCode,
            address: person.attributes.address,
          },
        },
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

export const createAdoption = async (animalId: number, personId: number) => {
  const authToken = Cookies.get("token");
  const response = await axios.post(
    `${APIurl}adoptions`,
    {
      data: {
        animal: animalId,
        guest: personId,
        date: new Date(),
        status: "Oczekująca",
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

export const LogIn = async (login: string, password: string) => {
  const response = await axios.post(`${APIurl}auth/local`, {
    identifier: login,
    password: password,
  });


  if (response.status === 200) {
    Cookies.remove("token", {
      path: "/",
    });
    Cookies.set("token", response.data.jwt, {
      sameSite: "none",
      secure: true,
      expires: 2,
      path: "/",
    });
    Cookies.remove("id", {
      path: "/",
    });
    Cookies.set("id", response.data.user.id, {
      sameSite: "none",
      secure: true,
      expires: 2,
      path: "/",
    });
    return true;
  } else {
    return false;
  }
};
