/* eslint-disable no-param-reassign */
/* eslint-disable import-helpers/order-imports */
const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

const { getMarket } = require('./api/market');
const { formatMarketMetadata } = require('./helpers/string');

const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');

app.get('/home', (request, response) => {
  console.log('Home page visited!');
  response.sendFile(indexPath);
});

app.get('/portfolio', (request, response) => {
  console.log('Portfolio page visited!');
});

app.get('/markets/:slug', async (request, response) => {
  console.log('Market page visited!');
});

app.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

app.get('*', (_request, response) => {
  response.sendFile(indexPath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
