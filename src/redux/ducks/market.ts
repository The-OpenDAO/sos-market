import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Market } from 'models/market';
import * as marketService from 'services/Polkamarkets/market';

export interface MarketIntialState {
  market: Market;
  selectedOutcomeId: string | number | undefined;
  isLoading: boolean;
  error: any;
}

const initialState: MarketIntialState = {
  market: {
    id: '',
    category: '',
    subcategory: '',
    imageUrl: '',
    title: '',
    volume: 0,
    shares: 0,
    liquidity: 0,
    expiresAt: '',
    outcomes: [
      {
        id: '',
        marketId: '',
        price: 0,
        title: ''
      },
      {
        id: '',
        marketId: '',
        price: 0,
        title: ''
      }
    ]
  },
  selectedOutcomeId: undefined,
  isLoading: false,
  error: null
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    request: state => ({
      ...state,
      isLoading: true
    }),
    success: (state, action: PayloadAction<Market>) => ({
      ...state,
      market: action.payload,
      isLoading: false,
      selectedOutcomeId: action.payload.outcomes[0].id
    }),
    error: (state, action) => ({
      ...state,
      market: initialState.market,
      isLoading: false,
      error: action.payload
    }),
    outcomeSelected: (state, action: PayloadAction<string>) => ({
      ...state,
      selectedOutcomeId: action.payload
    })
  }
});

export default marketSlice.reducer;

const { request, success, error, outcomeSelected } = marketSlice.actions;

export function getMarket(marketId: string) {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await marketService.getMarket(marketId);
      const { data } = response;
      dispatch(success(data));
    } catch (err) {
      dispatch(error(err));
    }
  };
}

export function selectOutcome(outcomeId: string) {
  return async dispatch => {
    dispatch(outcomeSelected(outcomeId));
  };
}
