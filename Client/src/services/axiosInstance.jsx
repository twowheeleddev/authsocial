import axios from 'axios';

// Creating an axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    //** Add token or other custom headers here if needed */
    //** config.headers.Authoriation = `Bearer ${token}`; */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    //** Handle global response errors here */
    return Promise.reject(error);
  }
);

export default axiosInstance;