import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
      isLoading: false
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
    })
  }
});

export default marketsSlice.reducer;

const { request, success, error, setFilter } = marketsSlice.actions;

export { setFilter };

export const filteredMarketsSelector = (state: MarketsIntialState) => {
  const regExpFromFilter = new RegExp(state.filter, 'i');

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
