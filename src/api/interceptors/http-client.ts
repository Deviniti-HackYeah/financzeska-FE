import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = 'testToken';
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
