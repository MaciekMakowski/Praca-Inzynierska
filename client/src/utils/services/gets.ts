import { APIurl } from './url';
import axios from 'axios';

export const getAnimals = async (page:number, pagination:number) => {
    const response = await axios(`${APIurl}animals?pagination[page]=${page}&pagination[pageSize]=${pagination}`);
    const data = response.data;
    return data;
}

export const getAnimal = async (id: string) => {
    const response = await axios(`${APIurl}animals/${id}`);
    const data = response.data.data;
    return data;
}

export const getDiseases = async (page:number, pagination:number) => {
    const response = await axios(`${APIurl}diseases?pagination[page]=${page}&pagination[pageSize]=${pagination}`);
    const data = response.data;
    return data;
}

export const getDisease = async (id: string) => {
    const response = await axios(`${APIurl}diseases/${id}`);
    const data = response.data.data;
    return data;
}