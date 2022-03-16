import axios from 'axios';
import store from '@/store';
import router from '@/router';

export const defaultClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-Type": "application/json" },
});

export const setAuthHeader = (authHeader) => {
  defaultClient.defaults.headers.common["Authorization"] = authHeader
};

export const removeAuthHeader = () => {
    delete defaultClient.defaults.headers.common["Authorization"]
};

defaultClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response.status === 401){
            store.dispatch("logout");
            router.push({name: 'Login'})
        }
        return Promise.reject(error)
    }
)