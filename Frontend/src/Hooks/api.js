import axios from "axios"
import { AccessToken } from "../AuthConstants"
const auth_api = axios.create({
    baseURL : 'http://127.0.0.1:8000/api',
    headers: {
        "Content-Type":'application/json'
    }
})

auth_api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem(AccessToken)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config

    },
    (error)=> {
        return Promise.reject(error)
    }

)
export default auth_api