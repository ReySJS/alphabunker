import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    withCredentials: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  });
  
