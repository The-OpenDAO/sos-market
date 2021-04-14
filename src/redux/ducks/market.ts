import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Market } from 'models/market';
import * as marketService from 'services/Polkamarkets/market';

export interface MarketInitialState {
  market: Market;
  selectedOutcomeId: string | number;
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
    outcomes: [
      {
        id: '',
        marketId: '',
        title: '',
        price: 0,
        change: {
          type: '',
          chartData: []
        }
      },
      {
        id: '',
        marketId: '',
        title: '',
        price: 0,
        change: {
          type: '',
          chartData: []
        }
      }
    ]
  },
  selectedOutcomeId: '',
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
        isLoading: false,
        selectedOutcomeId:
          state.market.id !== action.payload.id
            ? action.payload.outcomes[0].id
            : state.selectedOutcomeId
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
    },
    outcomeSelected: (state, action: PayloadAction<string | number>) => ({
      ...state,
      selectedOutcomeId: action.payload
    })
  }
});

export default marketSlice.reducer;

const {
  request,
  success,
  error,
  marketSelected,
  outcomeSelected
} = marketSlice.actions;

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

export function selectOutcome(market: Market, outcomeId: string | number) {
  return async dispatch => {
    dispatch(marketSelected(market));
    dispatch(outcomeSelected(outcomeId));
  };
}
