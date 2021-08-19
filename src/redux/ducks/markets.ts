import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';
import { Category } from 'models/category';
import { Market } from 'models/market';
import * as marketService from 'services/Polkamarkets/market';

import { MarketState } from '../../services/Polkamarkets/market';

export interface MarketsIntialState {
  markets: Market[];
  isLoading: {
    open: boolean;
    closed: boolean;
    resolved: boolean;
    favorites: boolean;
  };
  error: {
    open: any;
    closed: any;
    resolved: any;
    favorites: any;
  };
  filter: string;
  filterByVerified: boolean;
  sorter: {
    value: string;
    sortBy: any | undefined;
  };
}

const initialState: MarketsIntialState = {
  markets: [],
  isLoading: {
    open: false,
    closed: false,
    resolved: false,
    favorites: false
  },
  error: {
    open: null,
    closed: null,
    resolved: null,
    favorites: null
  },
  filter: '',
  filterByVerified: false,
  sorter: {
    value: 'featured',
    sortBy: undefined
  }
};

const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    request: (state, action) => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        [action.payload]: true
      }
    }),
    success: (
      state,
      action: PayloadAction<{ type: MarketState | string; data: Market[] }>
    ) => ({
      ...state,
      markets: uniqBy([...state.markets, ...action.payload.data], 'id'),
      isLoading: {
        ...state.isLoading,
        [action.payload.type]: false
      },
      error: {
        ...state.error,
        [action.payload.type]: null
      }
    }),
    error: (state, action) => ({
      ...state,
      markets: [],
      isLoading: {
        open: false,
        closed: false,
        resolved: false,
        favorites: false
      },
      error: {
        ...state.error,
        [action.payload.type]: action.payload.error
      }
    }),
    setFilter: (state, action: PayloadAction<string>) => ({
      ...state,
      filter: action.payload
    }),
    setFilterByVerified: (state, action: PayloadAction<boolean>) => ({
      ...state,
      filterByVerified: action.payload
    }),
    setSorter: (state, action) => ({
      ...state,
      sorter: {
        value: action.payload.value,
        sortBy: action.payload.sortBy
      }
    }),
    changeMarketOutcomePrice: (state, action) => ({
      ...state,
      markets: state.markets.map(market =>
        market.id === action.payload.marketId
          ? {
              ...market,
              outcomes: market.outcomes.map((outcome, outcomeIndex) =>
                outcomeIndex === action.payload.outcomeId
                  ? { ...outcome, price: action.payload.outcomePrice }
                  : outcome
              )
            }
          : market
      )
    }),
    changeMarketQuestion: (state, action) => ({
      ...state,
      markets: state.markets.map(market =>
        market.id === action.payload.marketId
          ? {
              ...market,
              question: action.payload.question
            }
          : market
      )
    })
  }
});

export default marketsSlice.reducer;

const {
  request,
  success,
  error,
  setFilter,
  setFilterByVerified,
  setSorter,
  changeMarketOutcomePrice,
  changeMarketQuestion
} = marketsSlice.actions;

export {
  setFilter,
  setFilterByVerified,
  setSorter,
  changeMarketOutcomePrice,
  changeMarketQuestion
};

export const filteredMarketsSelector = (
  state: MarketsIntialState,
  categories: Category[]
) => {
  const regExpFromFilter = new RegExp(state.filter, 'i');
  const regExpFullFilter = new RegExp(`^${state.filter}$`, 'i');
  const verifiedFilter = verified =>
    state.filterByVerified ? state.filterByVerified && verified : true;

  function sorted(markets) {
    if (state.sorter.sortBy) {
      return orderBy(markets, [state.sorter.value], [state.sorter.sortBy]);
    }

    return markets;
  }

  if (categories.some(category => category.title.match(regExpFullFilter))) {
    // filter fully matches category, filtering by category
    return sorted(
      state.markets.filter(({ category }) => category.match(regExpFullFilter))
    );
  }

  const filteredMarkets = state.markets.filter(
    ({ category, subcategory, title, verified }) =>
      (category.match(regExpFromFilter) ||
        subcategory.match(regExpFromFilter) ||
        title.match(regExpFromFilter)) &&
      verifiedFilter(verified)
  );

  if (state.sorter.value === 'featured') return filteredMarkets;

  return sorted(filteredMarkets);
};

export function getMarkets(marketState: MarketState) {
  return async dispatch => {
    dispatch(request(marketState));
    try {
      const response = await marketService.getMarkets({ state: marketState });
      const { data } = response;
      dispatch(success({ type: marketState, data }));
    } catch (err) {
      dispatch(error({ type: marketState, error: err }));
    }
  };
}

export function getFavoriteMarkets(ids: string[]) {
  return async dispatch => {
    dispatch(request('favorites'));
    try {
      const response = await marketService.getMarketsByIds(ids);
      const { data } = response;
      dispatch(success({ type: 'favorites', data }));
    } catch (err) {
      dispatch(error({ type: 'favorites', error: err }));
    }
  };
}
