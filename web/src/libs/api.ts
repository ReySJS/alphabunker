import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

/* export const useApi = () => ({
  signup: async (email: string)
}) */
