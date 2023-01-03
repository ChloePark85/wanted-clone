import {axiosInstance} from "./index";

export const mainBannerApi = () => axiosInstance.get(`/banners/main`)
export const jobBannerApi = () => axiosInstance.get(`/banners/job`)