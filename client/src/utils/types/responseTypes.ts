import { AnimalType } from "./basicTypes"

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