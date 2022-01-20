const { api } = require('./index');

async function getMarket(marketSlug) {
  const url = `${process.env.REACT_APP_SOSMARKET_API_URL}/markets/${marketSlug}`;
  return api.get(url);
}

module.exports = {
  getMarket
};
