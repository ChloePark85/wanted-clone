import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://seolki.shop",
    // params: {
    //     api_key: "3fee7c006ede37defab8ec4d139a8381",
    //     language: 'ko-KR'
    // }
});

export default axiosInstance;