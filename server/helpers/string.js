const dayjs = require('dayjs');

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function formatMarketMetadata({ title, category, subcategory, expiresAt }) {
  return {
    title,
    description: `${capitalize(category)} / ${capitalize(
      subcategory
    )} - Market closes at ${dayjs(expiresAt).format('YYYY/MM/DD')} ${dayjs(
      expiresAt
    ).format('h:mm A')}`
  };
}

module.exports = {
  formatMarketMetadata
};
