import axios, {AxiosResponse} from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const sendRequest = (value: boolean) => {
    return axiosInstance.post<RequestBodyType, AxiosResponse<ResponseType>>('auth/test', {success: value})
}

type RequestBodyType = {
    success: boolean
}

type ResponseType = {
    errorText: string
    info: string
    yourBody: RequestBodyType
    yourQuery: {}
}