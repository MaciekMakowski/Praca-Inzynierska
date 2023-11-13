import { APIurl } from "./url";
import { AnimalType } from "../types/basicTypes";
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
            }
        }
     );
    if(response.status === 201) {
        return console.log(response.data.data);
    }
    else {
        return console.log(response);
    }
};
