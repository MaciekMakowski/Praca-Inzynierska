import { AnimalType, DiseaseType } from "./basicTypes"

export type IsolationResponse = {
    id:number,
    attributes:{
        reason:string,
        startDate:string,
        endDate:string,
        status:string,
        description:string,
        animal:{
            data:AnimalType
        }
    }
}

export type PetDiseasesResponse = {
    id:number,
    attributes:{
        symptoms:string,
        startDate:string,
        endDate:string,
        status:string,
        animal:{
            data:AnimalType
        }
        disease:{
            data:DiseaseType
        }
    }
}