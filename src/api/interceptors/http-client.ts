import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://38.242.133.226:8080/',
});

httpClient.interceptors.request.use(
  (config) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsImxvZ2luIjoidGVzdCIsInJvbGUiOiJhZG1pbiJ9.e30.TQNZ_11jhK7lx6Q1kI-SUATthbATIU7CnNufoUVJnEU';
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
