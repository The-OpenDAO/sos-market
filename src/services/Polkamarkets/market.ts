import { Market } from 'models/market';

import api, { polkamarketsApiUrl } from './api';

async function getMarket(marketSlug: string) {
  const url = `${polkamarketsApiUrl}/markets/${marketSlug}`;
  return api.get<Market>(url);
}

export type MarketState = 'open' | 'closed' | 'resolved';

type MarketsFilters = {
  state: MarketState;
};

async function getMarkets({ state }: MarketsFilters) {
  const url = `${polkamarketsApiUrl}/markets`;
  return api.get<Market[]>(url, {
    params: {
      state
    }
  });
}

async function getMarketsByIds(ids: string[]) {
  const url = `${polkamarketsApiUrl}/markets`;
  return api.get<Market[]>(url, {
    params: {
      id: ids.join(',')
    }
  });
}

async function reloadMarket(marketSlug: string) {
  const url = `${polkamarketsApiUrl}/markets/${marketSlug}/reload`;
  return api.post(url);
}

export { getMarkets, getMarket, getMarketsByIds, reloadMarket };
