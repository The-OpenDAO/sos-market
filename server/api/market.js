const { api } = require('./index');

async function getMarket(marketSlug) {
  const url = `${process.env.REACT_APP_POLKAMARKETS_API_URL}/markets/${marketSlug}`;
  return api.get(url);
}

module.exports = {
  getMarket
};
