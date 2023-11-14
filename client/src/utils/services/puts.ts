import { APIurl } from "./url";
import { DiseaseType } from "../types/basicTypes";
import axios from "axios";

export const updateDisease = async (data:DiseaseType) => {
    const response = await axios.put(`${APIurl}diseases/${data.id}`, {
        "data":{
            "name": data.attributes.name,
            "description": data.attributes.description,
            "treatment":data.attributes.treatment
        }
    })
    if(response.status === 200){
        return true
    }else{
        return false
    }
}