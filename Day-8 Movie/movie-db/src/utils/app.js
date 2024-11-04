import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const Token = import.meta.env.VITE_API_KEY

const headers = {
    Authorization: "bearer " + Token,
    "Content-Type":"application/json"
};

export const fetchDataFromApi = async (url, params="") => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};