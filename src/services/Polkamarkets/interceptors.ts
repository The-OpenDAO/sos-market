import { AxiosError, AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';

/**
 * Axios Response interceptor
 */
function onResponse(response: AxiosResponse) {
  response.data = camelizeKeys(response.data);

  return response;
}

/**
 * Axios Error interceptor
 */
function onError(error: AxiosError) {
  return error;
}

export { onResponse, onError };
