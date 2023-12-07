import { AnimalInfoType, IsolationType } from "../types/basicTypes";
import {
  AdoptionResponse,
  AnimalResponse,
  IsolationResponse,
  MeetingResponse,
  PersonsResponse,
  PetDiseasesResponse,
  ResourceResponse,
  ResourceTypeResponse,
  VisitResponse,
} from "../types/responseTypes";
import {
  createAdoption,
  createAnimal,
  createAnimalInfo,
  createIsolation,
  createMeeting,
  createPerson,
  createPetDisease,
  createResource,
  createVisit,
} from "./formatters";

import axios from "axios";
import Cookies from "js-cookie";
import { createResourceType } from "./formatters";
import { APIurl } from "./url";

export const getAnimals = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(
      `${APIurl}animals?pagination[page]=${page}&pagination[pageSize]=${pagination}&populate=deep`
    );
    if (response.status === 200) {
      const newAnimalList = response.data.data.map((animal: AnimalResponse) => {
        return createAnimal(animal);
      });
      const clearResponse = {
        data: newAnimalList,
        meta: response.data.meta,
      };
      return clearResponse;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAnimal = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(`${APIurl}animals/${id}?populate=deep`);
    if (response.status === 200) {
      const data = createAnimal(response.data.data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAnimalInfo = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(`${APIurl}animals/info/${id}?populate=deep`);
    if (response.status === 200) {
      const data: AnimalInfoType = createAnimalInfo(response.data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getDiseases = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  try {
    let response;
    if (page > 0 && pagination > 0) {
      response = await axios(
        `${APIurl}diseases?pagination[page]=${page}&pagination[pageSize]=${pagination}`,
        {
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      );
    } else {
      response = await axios(`${APIurl}diseases`, {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
    }
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getDisease = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(`${APIurl}diseases/${id}`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      const data = response.data.data;
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getIsolations = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(
      `${APIurl}isolations?populate=deep&pagination[page]=${page}&pagination[pageSize]=${pagination}`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const newIsolationList = response.data.data.map(
        (isolation: IsolationResponse) => {
          return createIsolation(isolation);
        }
      );
      const clearResponse = {
        data: newIsolationList,
        meta: response.data.meta,
      };
      return clearResponse;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getIsolation = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(`${APIurl}isolations/${id}?populate=deep`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      const newIsolation: IsolationType = createIsolation(response.data.data);
      return newIsolation;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAnimalIsolations = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(
      `${APIurl}isolations?filters[animal][id]=${id}&populate=deep`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const newIsolationList = response.data.data.map(
        (isolation: IsolationResponse) => {
          return createIsolation(isolation);
        }
      );
      const clearResponse = {
        data: newIsolationList,
        meta: response.data.meta,
      };
      return clearResponse;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAnimalsDiseases = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(
      `${APIurl}pet-diseases?populate=deep&pagination[page]=${page}&pagination[pageSize]=${pagination}`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const newPetDiseases = response.data.data.map(
        (disease: PetDiseasesResponse) => {
          return createPetDisease(disease);
        }
      );
      const clearResponse = {
        data: newPetDiseases,
        meta: response.data.meta,
      };
      return clearResponse;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAnimalDisease = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(`${APIurl}pet-diseases/${id}?populate=deep`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      const newPetDisease = createPetDisease(response.data.data);
      return newPetDisease;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAnimalDiseases = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(
      `${APIurl}pet-diseases?filters[animal][id]=${id}&populate=deep`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const newPetDiseases = response.data.data.map(
        (disease: PetDiseasesResponse) => {
          return createPetDisease(disease);
        }
      );
      const clearResponse = {
        data: newPetDiseases,
        meta: response.data.meta,
      };
      return clearResponse;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPeople = async (
  type: string,
  page: number,
  pagination: number
) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.get(
      `${APIurl}${type}s?pagination[page]=${page}&pagination[pageSize]=${pagination}&populate=deep`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const newPersons = response.data.data.map((person: PersonsResponse) => {
        return createPerson(person);
      });
      const clearResponse = {
        data: newPersons,
        meta: response.data.meta,
      };
      return clearResponse;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPerson = async (type: string, id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.get(`${APIurl}${type}s/${id}?populate=deep`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      const newPerson = createPerson(response.data.data);
      return newPerson;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAdoptions = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.get(
      `${APIurl}adoptions?pagination[page]=${page}&pagination[pageSize]=${pagination}&populate=deep`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );

    if (response.status === 200) {
      const newAdoptions = response.data.data.map(
        (adoption: AdoptionResponse) => {
          return createAdoption(adoption);
        }
      );
      const clearResponse = {
        data: newAdoptions,
        meta: response.data.meta,
      };
      return clearResponse;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getResourcesTypes = async () => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(`${APIurl}resources-types?populate=deep`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      const data = response.data.data.map(
        (resourceType: ResourceTypeResponse) => {
          return createResourceType(resourceType);
        }
      );
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
export const getResources = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(
      `${APIurl}resources/?pagination[page]=${page}&pagination[pageSize]=${pagination}&populate=deep`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const data = response.data.data.map((resource: ResourceResponse) => {
        return createResource(resource);
      });
      const clearResponse = {
        data: data,
        meta: response.data.meta,
      };
      return clearResponse;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getResource = async (id: number) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios(`${APIurl}resources/${id}?populate=deep`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      const data = createResource(response.data.data);
      return data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAdoption = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.get(`${APIurl}adoptions/${id}?populate=deep`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      const data = createAdoption(response.data.data);
      return data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPersonVisits = async (
  id: number,
  type: "guest" | "volunteer"
) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.get(
      `${APIurl}${type}-visits/?filters[person][id]=${id}&populate=deep`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const data = response.data.data.map((visit: VisitResponse) => {
        return createVisit(visit);
      });
      return data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllMeetings = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.get(
      `${APIurl}meetings/?pagination[page]=${page}&pagination[pageSize]=${pagination}&populate=deep`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const data = response.data.data.map((meeting: MeetingResponse) => {
        return createMeeting(meeting);
      });
      const clearResponse = {
        data: data,
        meta: response.data.meta,
      };
      return clearResponse;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getMeeting = async (id: string) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.get(`${APIurl}meetings/${id}?populate=deep`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    if (response.status === 200) {
      const data = createMeeting(response.data.data);
      return data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getVolunteerMeetings = async (
  id: string,
  page: number,
  pagination: number
) => {
  const authToken = Cookies.get("token");
  try {
    const response = await axios.get(
      `${APIurl}meetings/?filters[volunteer][id]=${id}&pagination[page]=${page}&pagination[pageSize]=${pagination}&populate=deep`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (response.status === 200) {
      const data = response.data.data.map((meeting: MeetingResponse) => {
        return createMeeting(meeting);
      });
      const clearResponse = {
        data: data,
        meta: response.data.meta,
      };
      return clearResponse;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
