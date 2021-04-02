import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TradeType = 'buy' | 'sell' | string;

type Prediction = {
  id: string;
  name: string;
  odd: number;
  pricePerFraction: number;
};

type PredictionDetails = {
  fractionsBought: number;
  currentROI: number;
  totalStake: number;
  potentialReturns: number;
  lossAmount: number;
};

const initialState = {
  visible: true,
  showCharts: false,
  showPredictions: false,
  type: 'buy',
  selectedPredictionId: '',
  predictions: [
    {
      id: '',
      name: '',
      odd: 0,
      pricePerFraction: 0
    },
    {
      id: '',
      name: '',
      odd: 0,
      pricePerFraction: 0
    }
  ],
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
    changeTradeVisibility: (state, action: PayloadAction<boolean>) => ({
      ...state,
      visible: action.payload
    }),
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
    setSelectedPrediction: (state, action: PayloadAction<string>) => ({
      ...state,
      selectedPredictionId: action.payload
    }),
    setPredictions: (state, action: PayloadAction<Prediction[]>) => ({
      ...state,
      predictions: action.payload
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
  changeTradeVisibility,
  changeChartsVisibility,
  changePredictionsVisibility,
  changeTradeType,
  setSelectedPrediction,
  setPredictionDetails,
  toggleAcceptRules,
  toggleAcceptOddChanges
} = tradeSlice.actions;

export {
  changeTradeVisibility,
  changeChartsVisibility,
  changePredictionsVisibility,
  changeTradeType,
  setSelectedPrediction,
  setPredictionDetails,
  toggleAcceptRules,
  toggleAcceptOddChanges
};
