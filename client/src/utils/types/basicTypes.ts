

export type DiseaseType = {
    name: string,
    description: string,
    treatment: string,
}

export type AnimalType = {
    name:string,
    findPlace:string,
    race:string,
    number:number,
    species:string,
    weight:number,
    sex:string,
    birthDate:string
    desc:string,
    isIll:boolean,
    isIsolated:boolean,
    status:string,
}

export type PersonType = {
    number:number,
    name:string,
    lastName:string,
    birthDate:string,
    sex:string,
    phoneNumber:number,
    email:string,
    city:string,
    postCode:string,
    address:string,
    pesel:number,
}

export type PetManagementProps = {
    data:AnimalType
  }