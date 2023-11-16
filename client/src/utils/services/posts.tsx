import { AnimalType, DiseaseType, IsolationType } from "../types/basicTypes";

import { APIurl } from "./url";
import axios from "axios";

export const createAnimal = async (animal: AnimalType) => {
    const response = await axios.post(`${APIurl}animals`,
        {
            "data":{
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
                description:animal.attributes.description,
            }
        }
     );
    if(response.status === 200) {
        return true
    }
    else {
        return false
    }
};

export const createDisease = async (disease: DiseaseType) => {
    const response = await axios.post(`${APIurl}diseases`,
        {
            "data":{
                name: disease.attributes.name,
                description: disease.attributes.description,
                treatment: disease.attributes.treatment,
            }
        }
     );
    if(response.status === 200) {
        return true
    }
    else {
        return false
    }
}


export const createIsolation = async (isolation: IsolationType) => {
    const response = await axios.post(`${APIurl}isolations`,
        {
            "data":{
                startDate: isolation.attributes.startDate,
                endDate: isolation.attributes.endDate,
                reason: isolation.attributes.reason,
                description: isolation.attributes.description,
                status: isolation.attributes.status,
                animal: isolation.attributes.animal.id,
            }
        }
     );
    if(response.status === 200) {
        return true
    }
    else {
        return false
    }
}