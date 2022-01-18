import axios, {AxiosRequestConfig} from "axios";

export const api = axios.create({
    baseURL:  'https://labs-api.testing.it-kamasutra.com/api/',
    headers: {
         'FRIEND-TOKEN': '123',
    }
});

export const getCreator = (params: AxiosRequestConfig) => (url: string) => {
    return api.get(url, params)
}
export const postCreator = (params: AxiosRequestConfig) => (url: string, data: any) => {
    return api.post(url, data, params)
}

//сделать и для put
// и delete

export const deleteCreator = (params: AxiosRequestConfig) => (url: string) => {
    return api.delete(url, params)
}
export const putCreator = (params: AxiosRequestConfig) => (url: string, data: any) => {
    return api.put(url, data, params)
}
