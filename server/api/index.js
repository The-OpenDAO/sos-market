const axios = require('axios');

const { onResponse, onError } = require('./interceptors');

const api = axios.create();

api.interceptors.response.use(
  response => onResponse(response),
  error => onError(error)
);

module.exports = {
  api
};
