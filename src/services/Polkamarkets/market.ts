import { Market } from 'models/market';

import api, { polkamarketsApiUrl } from './api';

async function getMarket(marketId: string) {
  const url = `${polkamarketsApiUrl}/markets/${marketId}`;
  return api.get<Market>(url);
}

async function getMarkets() {
  const url = `${polkamarketsApiUrl}/markets`;
  return api.get<Market[]>(url);
}

async function reloadMarket(marketId: string) {
  const url = `${polkamarketsApiUrl}/markets/${marketId}/reload`;
  return api.post(url);
}

export { getMarkets, getMarket, reloadMarket };
