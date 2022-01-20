import { Portfolio } from 'models/portfolio';

import api, { sosmarketApiUrl } from './api';

async function getPortfolio(address: string) {
  const url = `${sosmarketApiUrl}/portfolios/${address}`;
  return api.get<Portfolio>(url);
}

async function reloadPortfolio(address: string) {
  const url = `${sosmarketApiUrl}/portfolios/${address}/reload`;
  return api.post(url);
}

export { getPortfolio, reloadPortfolio };
