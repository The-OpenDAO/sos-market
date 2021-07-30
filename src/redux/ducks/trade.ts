import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TradeType = 'buy' | 'sell' | string;

export interface TradeDetails {
  shares: number;
  price: number;
  maxROI: number;
  totalStake: number;
  maxStake: number;
  fee: number;
}

const initialState = {
  showCharts: false,
  showPredictions: false,
  type: 'buy',
  selectedMarketId: '',
  selectedOutcomeId: '',
  amount: 0,
  maxAmount: 0,
  shares: 0,
  price: 0,
  maxROI: 0,
  totalStake: 0,
  maxStake: 0,
  fee: 0,
  acceptRules: false,
  acceptOddChanges: false
};

const tradeSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    changeChartsVisibility: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showCharts: action.payload
    }),
    changePredictionsVisibility: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showPredictions: action.payload
    }),
    changeTradeType: (state, action: PayloadAction<TradeType>) => ({
      ...state,
      type: action.payload
    }),
    setTradeAmount: (state, action) => ({
      ...state,
      amount: action.payload
    }),
    setMaxAmount: (state, action) => ({
      ...state,
      maxAmount: action.payload
    }),
    outcomeSelected: (state, action) => ({
      ...state,
      selectedMarketId: action.payload.marketId,
      selectedOutcomeId: action.payload.outcomeId
    }),
    setTradeDetails: (state, action: PayloadAction<TradeDetails>) => ({
      ...state,
      shares: action.payload.shares,
      price: action.payload.price,
      maxROI: action.payload.maxROI,
      totalStake: action.payload.totalStake,
      maxStake: action.payload.maxStake,
      fee: action.payload.fee
    }),
    toggleAcceptRules: (state, action: PayloadAction<boolean>) => ({
      ...state,
      acceptRules: action.payload
    }),
    toggleAcceptOddChanges: (state, action: PayloadAction<boolean>) => ({
      ...state,
      acceptOddChanges: action.payload
    }),
    reset: () => ({
      ...initialState
    })
  }
});

export default tradeSlice.reducer;

const {
  changeChartsVisibility,
  changePredictionsVisibility,
  changeTradeType,
  outcomeSelected,
  setTradeDetails,
  setTradeAmount,
  setMaxAmount,
  toggleAcceptRules,
  toggleAcceptOddChanges,
  reset
} = tradeSlice.actions;

export {
  changeChartsVisibility,
  changePredictionsVisibility,
  changeTradeType,
  outcomeSelected,
  setTradeDetails,
  setTradeAmount,
  setMaxAmount,
  toggleAcceptRules,
  toggleAcceptOddChanges,
  reset
};

export function selectOutcome(marketId: string, outcomeId: string | number) {
  return async dispatch => {
    dispatch(outcomeSelected({ marketId, outcomeId }));
  };
}
