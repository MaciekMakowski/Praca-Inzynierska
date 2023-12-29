import {
  AnimalType,
  DiseaseType,
  IsolationType,
  PersonType,
  PetDiseaseType,
  ResourceType,
  VisitType,
} from "../types/basicTypes";

import axios from "axios";
import Cookies from "js-cookie";
import { APIurl } from "./url";

export const updateDisease = async (disease: DiseaseType) => {
  const authToken = Cookies.get("token");
  try {
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
  } catch (err) {
    console.log(err);
  }
};

export const updateAnimal = async (animal: AnimalType) => {
  const authToken = Cookies.get("token");
  try {
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
  } catch (err) {
    console.log(err);
  }
};

export const uppdateIsolation = async (isolation: IsolationType) => {
  const authToken = Cookies.get("token");
  try {
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
  } catch (err) {
    console.log(err);
  }
};

export const updatePetDisease = async (petDisease: PetDiseaseType) => {
  const authToken = Cookies.get("token");
  try {
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
  } catch (err) {
    console.log(err);
  }
};

export const updatePerson = async (person: PersonType, type: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.put(
      `${APIurl}${type}/${person.id}`,
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
  } catch (err) {
    console.log(err);
  }
};

export const updateResource = async (resource: ResourceType) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.put(
      `${APIurl}resources/${resource.id}`,
      {
        data: {
          name: resource.attributes.name,
          quantity: resource.attributes.quantity,
          unit: resource.attributes.unit,
          resources_type: resource.attributes.type.id,
          resource_subtype: resource.attributes.subtype
            ? resource.attributes.subtype.id
            : null,
          expirationDate: resource.attributes.expirationDate,
          status: resource.attributes.status,
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
  } catch (err) {
    console.log(err);
  }
};

export const endVisit = async (
  visit: VisitType,
  type: "guest" | "volunteer",
  time: string
) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.put(
      `${APIurl}${type}-visits/${visit.id}`,
      {
        data: {
          visit: {
            enterTime: visit.attributes.enterTime,
            exitTime: time.concat(":00.00"),
            date: visit.attributes.date,
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
  } catch (err) {
    console.log(err);
  }
};

export const updateMeetingStatus = async (
  meetingId: number,
  status: string
) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.put(
      `${APIurl}meetings/${meetingId}`,
      {
        data: {
          status: status,
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
  } catch (err) {
    console.log(err);
  }
};

export const changeAdoptionStatus = async (
  adoptionId: number,
  status: string
) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.put(
      `${APIurl}adoptions/${adoptionId}`,
      {
        data: {
          status: status,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log("err", err);
  }
};
