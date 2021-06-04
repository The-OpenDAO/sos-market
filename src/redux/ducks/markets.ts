import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import orderBy from 'lodash/orderBy';
import { Category } from 'models/category';
import { Market } from 'models/market';
import * as marketService from 'services/Polkamarkets/market';

export interface MarketsIntialState {
  markets: Market[];
  isLoading: boolean;
  error: any;
  filter: string;
  sorter: {
    value: string;
    sortBy: any | undefined;
  };
}

const initialState: MarketsIntialState = {
  markets: [],
  isLoading: false,
  error: null,
  filter: '',
  sorter: {
    value: 'featured',
    sortBy: undefined
  }
};

const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    request: state => ({
      ...state,
      isLoading: true
    }),
    success: (state, action: PayloadAction<Market[]>) => ({
      ...state,
      markets: action.payload,
      isLoading: false,
      error: null
    }),
    error: (state, action) => ({
      ...state,
      markets: [],
      isLoading: false,
      error: action.payload
    }),
    setFilter: (state, action: PayloadAction<string>) => ({
      ...state,
      filter: action.payload
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
    })
  }
});

export default marketsSlice.reducer;

const {
  request,
  success,
  error,
  setFilter,
  setSorter,
  changeMarketOutcomePrice
} = marketsSlice.actions;

export { setFilter, setSorter, changeMarketOutcomePrice };

export const filteredMarketsSelector = (
  state: MarketsIntialState,
  categories: Category[]
) => {
  const regExpFromFilter = new RegExp(state.filter, 'i');
  const regExpFullFilter = new RegExp(`^${state.filter}$`, 'i');

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
    ({ category, subcategory, title }) =>
      category.match(regExpFromFilter) ||
      subcategory.match(regExpFromFilter) ||
      title.match(regExpFromFilter)
  );

  if (state.sorter.value === 'featured') return filteredMarkets;

  return sorted(filteredMarkets);
};

export function getMarkets() {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await marketService.getMarkets();
      const { data } = response;
      dispatch(success(data));
    } catch (err) {
      dispatch(error(err));
    }
  };
}
