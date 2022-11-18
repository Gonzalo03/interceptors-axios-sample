import axios from "axios";
import { isUnauthorized } from "./response";

const tokens = JSON.parse(localStorage.getItem("tokens"));

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokens?.token || ""}`
    },
});


axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {

        if(error.response.status === 401) {
            isUnauthorized(axiosInstance, tokens?.refreshToken)
            return
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;