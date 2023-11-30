import { APIurl } from "./url";
import Cookies from "js-cookie";
import axios from "axios";

export const deleteResourceType = async (resourceTypeId: number) => {
    const authToken = Cookies.get("token");
    try{
        const response = await axios.delete(`${APIurl}resources-types/${resourceTypeId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        if(response.status === 200){
            return true;
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteResourceSubtype = async (subtype: number) => {
    const authToken = Cookies.get("token");
    try{
        const response = await axios.delete(`${APIurl}resource-subtypes/${subtype}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        if(response.status === 200){
            return true;
        }
    } catch (error) {
        console.log(error);
    }
}