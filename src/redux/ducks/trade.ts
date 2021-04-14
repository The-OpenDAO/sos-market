import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TradeType = 'buy' | 'sell' | string;

type PredictionDetails = {
  fractionsBought: number;
  currentROI: number;
  totalStake: number;
  potentialReturns: number;
  lossAmount: number;
};

const initialState = {
  showCharts: false,
  showPredictions: false,
  type: 'buy',
  selectedMarketId: '',
  selectedOutcomeId: '',
  amount: 0,
  fractionsBought: 0,
  currentROI: 0,
  totalStake: 0,
  potentialReturns: 0,
  lossAmount: 0,
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
    outcomeSelected: (state, action) => ({
      ...state,
      selectedMarketId: action.payload.marketId,
      selectedOutcomeId: action.payload.outcomeId
    }),
    setPredictionDetails: (
      state,
      action: PayloadAction<PredictionDetails>
    ) => ({
      ...state,
      fractionsBought: action.payload.fractionsBought,
      currentROI: action.payload.currentROI,
      totalStake: action.payload.totalStake,
      potentialReturns: action.payload.potentialReturns,
      lossAmount: action.payload.lossAmount
    }),
    toggleAcceptRules: (state, action: PayloadAction<boolean>) => ({
      ...state,
      acceptRules: action.payload
    }),
    toggleAcceptOddChanges: (state, action: PayloadAction<boolean>) => ({
      ...state,
      acceptOddChanges: action.payload
    })
  }
});

export default tradeSlice.reducer;

const {
  changeChartsVisibility,
  changePredictionsVisibility,
  changeTradeType,
  outcomeSelected,
  setPredictionDetails,
  setTradeAmount,
  toggleAcceptRules,
  toggleAcceptOddChanges
} = tradeSlice.actions;

export {
  changeChartsVisibility,
  changePredictionsVisibility,
  changeTradeType,
  outcomeSelected,
  setPredictionDetails,
  setTradeAmount,
  toggleAcceptRules,
  toggleAcceptOddChanges
};

export function selectOutcome(marketId: string, outcomeId: string | number) {
  return async dispatch => {
    dispatch(outcomeSelected({ marketId, outcomeId }));
  };
}
