import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Market } from 'models/market';
import * as marketService from 'services/Polkamarkets/market';

export interface MarketsIntialState {
  markets: Market[];
  isLoading: boolean;
  error: any;
}

const initialState: MarketsIntialState = {
  markets: [],
  isLoading: false,
  error: null
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
    error: (_state, action) => ({
      markets: [],
      isLoading: false,
      error: action.payload
    })
  }
});

export default marketsSlice.reducer;

const { request, success, error } = marketsSlice.actions;

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
