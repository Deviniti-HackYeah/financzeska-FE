import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
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

httpClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
