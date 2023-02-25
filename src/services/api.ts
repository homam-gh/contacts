import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { configs } from "../config";

const api = axios.create({
  baseURL: configs.APIURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
      //   toast.error(`Error: ${status} - ${data}`);
    } else {
      //   toast.error("Network error");
    }
    return Promise.reject(error);
  }
);

export function get<T>(url: string, config?: AxiosRequestConfig) {
  return api.get<T>(url, config);
}

// export function post<T>(url: string, data: any, config?: AxiosRequestConfig) {
//   return api.post<T>(url, data, config);
// }

// export function put<T>(url: string, data: any, config?: AxiosRequestConfig) {
//   return api.put<T>(url, data, config);
// }

// export function del<T>(url: string, config?: AxiosRequestConfig) {
//   return api.delete<T>(url, config);
// }
