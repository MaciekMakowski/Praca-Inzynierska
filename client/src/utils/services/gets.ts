import { APIurl } from './url';
import axios from 'axios';

export const getAnimals = async () => {
    const response = await axios(`${APIurl}animals`);
    const data = response.data.data;
    return data;
}

export const getAnimal = async (id: string) => {
    const response = await axios(`${APIurl}animals/${id}`);
    const data = response.data.data;
    console.log(data);
    return data;
}

export const getDiseases = async () => {
    const response = await axios(`${APIurl}diseases`);
    const data = response.data.data;
    return data;
}

export const getDisease = async (id: string) => {
    const response = await axios(`${APIurl}diseases/${id}`);
    const data = response.data.data;
    return data;
}