import axios from 'axios';
import useRefreshToken from '../hooks/useRefreshToken';
import { useAuth } from '../hooks/useAuth';

// Create an instance of Axios for private requests
const axiosPrivate = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your API base URL
  withCredentials: true, // This ensures that cookies are sent with requests
});

// Add a request interceptor to attach the access token to requests
axiosPrivate.interceptors.request.use(
  async (config) => {
    const { auth } = useAuth();
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle 401 errors and refresh the token
axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;
    if (error.response?.status === 401 && !prevRequest._retry) {
      prevRequest._retry = true;
      const refresh = useRefreshToken();
      const newAccessToken = await refresh();
      prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      return axiosPrivate(prevRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
