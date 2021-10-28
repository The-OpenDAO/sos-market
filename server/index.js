/* eslint-disable import-helpers/order-imports */
require('dotenv').config();
const express = require('express');

const app = express();
const port = 5000;
const fs = require('fs');
const path = require('path');

const { getMarket } = require('./api/market');
const {
  formatMarketMetadata,
  replaceToMetadataTemplate
} = require('./helpers/string');

const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');

const defaultMetadata = {
  title: 'Polkamarkets - Gamified Prediction Markets',
  description:
    'Polkamarkets is a DeFi-Powered Prediction Market built for cross-chain information exchange, based on Polkadot.',
  image: '/polkamarkets_meta.jpg'
};

const defaultMetadataTemplate = (request, htmlData) => {
  return replaceToMetadataTemplate({
    htmlData,
    url: `${request.headers['x-forwarded-proto'] || 'http'}://${
      request.headers.host
    }${request.url}`,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    image: defaultMetadata.image
  });
};

app.get('/', (request, response) => {
  fs.readFile(indexPath, 'utf8', async (error, htmlData) => {
    if (error) {
      return response.status(404).end();
    }

    return response.send(defaultMetadataTemplate(request, htmlData));
  });
});

app.get('/portfolio', (request, response) => {
  fs.readFile(indexPath, 'utf8', async (error, htmlData) => {
    if (error) {
      return response.status(404).end();
    }

    return response.send(defaultMetadataTemplate(request, htmlData));
  });
});

app.get('/market/create', (request, response) => {
  fs.readFile(indexPath, 'utf8', async (error, htmlData) => {
    if (error) {
      return response.status(404).end();
    }

    return response.send(defaultMetadataTemplate(request, htmlData));
  });
});

app.get('/markets/:slug', async (request, response) => {
  fs.readFile(indexPath, 'utf8', async (error, htmlData) => {
    if (error) {
      return response.status(404).end();
    }

    const marketSlug = request.params.slug;

    try {
      const market = await getMarket(marketSlug);
      const { title, category, subcategory, expiresAt, bannerUrl } =
        market.data;

      const marketMetadata = formatMarketMetadata({
        title,
        category,
        subcategory,
        expiresAt,
        bannerUrl
      });

      return response.send(
        replaceToMetadataTemplate({
          htmlData,
          url: `${request.headers['x-forwarded-proto'] || 'http'}://${
            request.headers.host
          }/markets/${request.params.slug}`,
          title: marketMetadata.title || defaultMetadata.title,
          description:
            marketMetadata.description || defaultMetadata.description,
          image: marketMetadata.bannerUrl || defaultMetadata.image
        })
      );
    } catch (e) {
      return response.sendFile(indexPath);
    }
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (_request, response) => {
  response.sendFile(indexPath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
