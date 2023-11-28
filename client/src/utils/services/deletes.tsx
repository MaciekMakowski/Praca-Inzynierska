import { APIurl } from "./url";
import Cookies from "js-cookie";
import axios from "axios";

export const deleteResourceType = async (resourceId: number) => {
    const authToken = Cookies.get("token");
    try{
        const response = await axios.delete(`${APIurl}resources-types/${resourceId}`, {
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