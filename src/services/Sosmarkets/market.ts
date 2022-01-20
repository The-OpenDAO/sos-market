import { Market } from 'models/market';

import api, { sosmarketApiUrl } from './api';

async function getMarket(marketSlug: string) {
  const url = `${sosmarketApiUrl}/markets/${marketSlug}`;
  return api.get<Market>(url);
}

export type MarketState = 'open' | 'closed' | 'resolved';

type MarketsFilters = {
  state: MarketState;
};

async function getMarkets({ state }: MarketsFilters) {
  const url = `${sosmarketApiUrl}/markets`;
  return api.get<Market[]>(url, {
    params: {
      state
    }
  });
}

async function getMarketsByIds(ids: string[]) {
  const url = `${sosmarketApiUrl}/markets`;
  return api.get<Market[]>(url, {
    params: {
      id: ids.join(',')
    }
  });
}

async function reloadMarket(marketSlug: string) {
  const url = `${sosmarketApiUrl}/markets/${marketSlug}/reload`;
  return api.post(url);
}

async function createMarket(marketId: string) {
  const url = `${sosmarketApiUrl}/markets/`;
  return api.post(url, { id: marketId });
}

export { getMarkets, getMarket, getMarketsByIds, reloadMarket, createMarket };
