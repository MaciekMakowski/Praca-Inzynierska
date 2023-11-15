import { AnimalType, DiseaseType, IsolationType } from "../types/basicTypes";

import { APIurl } from "./url";
import axios from "axios";

export const updateDisease = async (disease:DiseaseType) => {
    const response = await axios.put(`${APIurl}diseases/${disease.id}`, {
        "data":{
            "name": disease.attributes.name,
            "description": disease.attributes.description,
            "treatment":disease.attributes.treatment
        }
    })
    if(response.status === 200){
        return true
    }else{
        return false
    }
}

export const updateAnimal = async (animal:AnimalType) => {
    const response = await axios.put(`${APIurl}animals/${animal.id}`, {
        "data":{
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
        }
    })
    if(response.status === 200){
        return true
    }else{
        return false
    }
}


export const uppdateIsolation = async (isolation:IsolationType) => {
    const response = await axios.put(`${APIurl}isolations/${isolation.id}`, {
        "data":{
            "startDate": isolation.attributes.startDate,
            "endDate": isolation.attributes.endDate,
            "reason": isolation.attributes.reason,
            "status": isolation.attributes.status,
            "animal": isolation.attributes.animal.id,
        }
    })
    if(response.status === 200){
        return true
    }else{
        return false
    }
}