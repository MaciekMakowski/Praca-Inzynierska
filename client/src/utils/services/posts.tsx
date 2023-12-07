import {
  AnimalType,
  DiseaseType,
  IsolationType,
  MeetingType,
  PersonType,
  PetDiseaseType,
  ResourceSubtypeType,
  ResourceType,
  VisitType,
} from "../types/basicTypes";

import axios from "axios";
import Cookies from "js-cookie";
import { APIurl } from "./url";

export const createAnimal = async (animal: AnimalType) => {
  const authToken = Cookies.get("token");
  try {
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
          dateOfAdmission: animal.attributes.dateOfAdmission,
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
  } catch (error) {
    console.log(error);
  }
};

export const updateAnimalImages = async (formData: FormData) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.post(`${APIurl}upload`, formData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
export const deleteImageFromAnimal = async (
  formData: FormData,
  imageId: number
) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.delete(`${APIurl}upload/files/${imageId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createDisease = async (disease: DiseaseType) => {
  const authToken = Cookies.get("token");
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const createIsolation = async (isolation: IsolationType) => {
  const authToken = Cookies.get("token");
  try {
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
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const createAnimalDisease = async (animalDisease: PetDiseaseType) => {
  const authToken = Cookies.get("token");
  try {
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
  } catch (error) {
    return false;
  }
};

export const createPerson = async (person: PersonType, type: string) => {
  const authToken = Cookies.get("token");
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const createAdoption = async (animalId: number, personId: number) => {
  const authToken = Cookies.get("token");
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const createAdoptionByGuest = async (
  animalId: string,
  person: PersonType
) => {
  try {
    const response = await axios.post(
      `${APIurl}adoptions/createAdoptionByGuest`,
      {
        data: {
          animal: animalId,
          guest: {
            id: person.id,
            attributes: {
              name: person.attributes.name,
              lastName: person.attributes.lastName,
              pesel: person.attributes.pesel,
              sex: person.attributes.sex,
              birthDate: person.attributes.birthDate,
              phoneNumber: person.attributes.phoneNumber,
              email: person.attributes.email,
              city: person.attributes.city,
              postCode: person.attributes.postCode,
              address: person.attributes.address,
            },
          },
          date: new Date(),
          status: "Oczekująca",
        },
      }
    );
    if (response.status === 200) {
      return {
        animal: response.data.animal.name,
        id: response.data.id,
      };
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createResourceType = async (
  resource: ResourceSubtypeType,
  category: number
) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.post(
      `${APIurl}resources-types`,
      {
        data: {
          name: resource.attributes.name,
          categoryId: category,
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
  } catch (error) {
    console.log(error);
  }
};

export const createResource = async (resource: ResourceType) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.post(
      `${APIurl}resources`,
      {
        data: {
          name: resource.attributes.name,
          resources_type: resource.attributes.type.id,
          resource_subtype:
            resource.attributes.subtype && resource.attributes.subtype.id,
          quantity: resource.attributes.quantity,
          unit: resource.attributes.unit,
          expirationDate: resource.attributes.expirationDate,
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
  } catch (error) {
    console.log(error);
  }
};

export const createVisit = async (
  visit: VisitType,
  type: "guest" | "volunteer"
) => {
  const authToken = Cookies.get("token");
  if (visit.attributes.person === null) return false;
  try {
    const response = await axios.post(
      `${APIurl}${type}-visits`,
      {
        data: {
          person: visit.attributes.person.id,
          visit: {
            date: visit.attributes.date,
            enterTime: visit.attributes.enterTime.concat(":00.00"),
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
  } catch (error) {
    console.log(error);
  }
};

export const createMeeting = async (meeting: MeetingType) => {
  const authToken = Cookies.get("token");
  try {
    if (meeting.attributes.guest === null) return false;
    const response = await axios.post(
      `${APIurl}meetings`,
      {
        data: {
          date: meeting.attributes.date,
          status: meeting.attributes.status,
          guest: meeting.attributes.guest.id,
          volunteer: meeting.attributes.volunteer.id,
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
  } catch (error) {
    console.log(error);
  }
};

export const LogIn = async (login: string, password: string) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};
