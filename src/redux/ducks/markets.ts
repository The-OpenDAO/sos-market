import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from 'models/category';
import { Market } from 'models/market';
import * as marketService from 'services/Polkamarkets/market';

export interface MarketsIntialState {
  markets: Market[];
  isLoading: boolean;
  error: any;
  filter: string;
}

const initialState: MarketsIntialState = {
  markets: [],
  isLoading: false,
  error: null,
  filter: ''
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
  changeMarketOutcomePrice
} = marketsSlice.actions;

export { setFilter, changeMarketOutcomePrice };

export const filteredMarketsSelector = (
  state: MarketsIntialState,
  categories: Category[]
) => {
  const regExpFromFilter = new RegExp(state.filter, 'i');
  const regExpFullFilter = new RegExp(`^${state.filter}$`, 'i');

  if (categories.some(category => category.title.match(regExpFullFilter))) {
    // filter fully matches category, filtering by category
    return state.markets.filter(({ category }) =>
      category.match(regExpFullFilter)
    );
  }

  return state.markets.filter(
    ({ category, subcategory, title }) =>
      category.match(regExpFromFilter) ||
      subcategory.match(regExpFromFilter) ||
      title.match(regExpFromFilter)
  );
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
