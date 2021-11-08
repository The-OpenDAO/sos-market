const { camelizeKeys } = require('humps');

function onResponse(response) {
  response.data = camelizeKeys(response.data);

  return response;
}

function onError(error) {
  return Promise.reject(error);
}

module.exports = { onResponse, onError };
