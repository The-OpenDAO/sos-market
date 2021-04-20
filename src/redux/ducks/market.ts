import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Market } from 'models/market';
import * as marketService from 'services/Polkamarkets/market';

export interface MarketInitialState {
  market: Market;
  isLoading: boolean;
  error: any;
}

const initialState: MarketInitialState = {
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
    state: 'open',
    resolvedOutcomeId: -1,
    outcomes: [
      {
        id: '-1',
        marketId: '',
        title: '',
        price: 0,
        change: {
          type: '',
          chartData: []
        },
        priceCharts: []
      },
      {
        id: '-2',
        marketId: '',
        title: '',
        price: 0,
        change: {
          type: '',
          chartData: []
        },
        priceCharts: []
      }
    ]
  },
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
    success: {
      reducer: (state, action: PayloadAction<Market>) => ({
        ...state,
        market: action.payload,
        isLoading: false
      }),
      prepare: (market: Market) => {
        return {
          payload: {
            ...market,
            outcomes: market.outcomes.map(outcome => ({
              ...outcome,
              price: Number(outcome.price.toFixed(3))
            }))
          }
        };
      }
    },
    error: (state, action) => ({
      ...state,
      market: initialState.market,
      isLoading: false,
      error: action.payload
    }),
    marketSelected: {
      reducer: (state, action: PayloadAction<Market>) => ({
        ...state,
        market: action.payload
      }),
      prepare: (market: Market) => {
        return {
          payload: {
            ...market,
            outcomes: market.outcomes.map(outcome => ({
              ...outcome,
              price: Number(outcome.price.toFixed(3))
            }))
          }
        };
      }
    }
  }
});

export default marketSlice.reducer;

const { request, success, error, marketSelected } = marketSlice.actions;

export { marketSelected };

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
