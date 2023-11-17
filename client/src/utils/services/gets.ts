import { IsolationResponse, PetDiseasesResponse } from "../types/responseTypes";
import { createIsolation, createPetDisease } from "./formatters";

import { APIurl } from "./url";
import Cookies from "js-cookie";
import { IsolationType } from "../types/basicTypes";
import axios from "axios";

export const getAnimals = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  console.log(authToken)
  const response = await axios(
    `${APIurl}animals?pagination[page]=${page}&pagination[pageSize]=${pagination}`,
    {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (response.status === 200) {
    const data = response.data;
    return data;
  }
};

export const getAnimal = async (id: string) => {
  const authToken = Cookies.get("token");
  const response = await axios(`${APIurl}animals/${id}`, {
    headers: {
      authorization: `Bearer ${authToken}`,
    },
  });
  if (response.status === 200) {
    const data = response.data.data;
    return data;
  }
};

export const getDiseases = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
  const response = await axios(
    `${APIurl}diseases?pagination[page]=${page}&pagination[pageSize]=${pagination}`,
    {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (response.status === 200) {
    const data = response.data;
    return data;
  }
};

export const getDisease = async (id: string) => {
  const authToken = Cookies.get("token");
  const response = await axios(`${APIurl}diseases/${id}`, {
    headers: {
      authorization: `Bearer ${authToken}`,
    },
  });
  if (response.status === 200) {
    const data = response.data.data;
    return data;
  }
};

export const getIsolations = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
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
};

export const getIsolation = async (id: string) => {
  const authToken = Cookies.get("token");
  const response = await axios(`${APIurl}isolations/${id}?populate=deep`, {
    headers: {
      authorization: `Bearer ${authToken}`,
    },
  });
  if (response.status === 200) {
    const newIsolation: IsolationType = createIsolation(response.data.data);
    return newIsolation;
  }
};

export const getAnimalIsolations = async (id: string) => {
  const authToken = Cookies.get("token");
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
};

export const getAnimalsDiseases = async (page: number, pagination: number) => {
  const authToken = Cookies.get("token");
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
};

export const getAnimalDisease = async (id: string) => {
  const authToken = Cookies.get("token");
  const response = await axios(`${APIurl}pet-diseases/${id}?populate=deep`, {
    headers: {
      authorization: `Bearer ${authToken}`,
    },
  });
  if (response.status === 200) {
    const newPetDisease = createPetDisease(response.data.data);
    return newPetDisease;
  }
};

export const getAnimalDiseases = async (id: string) => {
  const authToken = Cookies.get("token");
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
};
