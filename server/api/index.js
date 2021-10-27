import { onResponse, onError } from './interceptors';

const axios = require('axios');

const api = axios.create();

api.interceptors.response.use(
  response => onResponse(response),
  error => onError(error)
);

module.exports = {
  api
};
