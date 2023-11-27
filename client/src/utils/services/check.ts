import { APIurl } from "./url";
import Cookies from "js-cookie";
import axios from "axios";

export const checkIfUserIsLoggedIn = async () => {
    const token = Cookies.get('token');
    const userId = Cookies.get('id');
    const response = await axios.get(`${APIurl}users/${userId}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`,

        },
    });
    if(response.status === 200) {
        return true;
    } else {
        return false;
    }
}

export const LogOut = () => {
    Cookies.remove('token');
    Cookies.remove('id');
    sessionStorage.removeItem("isLogged");
}