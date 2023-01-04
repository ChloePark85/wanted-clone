import {axiosInstance} from "./index";

export const usersApi = () => axiosInstance.post('/users')
export const userLoginApi = () => axiosInstance.post('/users/logIn')
export const userPwdApi = (userIdx) => axiosInstance.patch(`/users/${userIdx}/pwd`)
export const userPhoneApi = (userIdx) => axiosInstance.patch(`/users/${userIdx}/phone`)
export const userNameApi = (userIdx) => axiosInstance.patch(`/users/${userIdx}/name`)
export const userProfileApi = (userIdx) => axiosInstance.get(`/users/my-profile/${userIdx}`)
export const useMailcheckApi = () => axiosInstance.get('/users/sign-up')