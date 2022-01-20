import axios, { AxiosError, AxiosResponse } from 'axios';

import { onResponse, onError } from './interceptors';

const api = axios.create();

api.interceptors.response.use(
  (response: AxiosResponse) => onResponse(response),
  (error: AxiosError) => onError(error)
);

export default api;

const { REACT_APP_SOSMARKET_API_URL } = process.env;

export { REACT_APP_SOSMARKET_API_URL as sosmarketApiUrl };
