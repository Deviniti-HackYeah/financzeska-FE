import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://version-vault.com/',
  // baseURL: 'http://38.242.133.226:8080/',
});

httpClient.interceptors.request.use(
  (config) => {
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
