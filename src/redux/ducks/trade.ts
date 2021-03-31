import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TradeType = 'Buy' | 'Sell';

type PredictionDetails = {
  pricePerFraction: number;
  fractionsBought: number;
  totalStake: number;
  potentialReturns: number;
  lossAmount: number;
};

const initialState = {
  showSidebar: false,
  showCharts: false,
  showOptions: false,
  type: 'Buy',
  prediction: null,
  pricePerFraction: 0,
  fractionsBought: 0,
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
    changeSidebarVisibility: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showSidebar: action.payload
    }),
    changeChartsVisibility: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showCharts: action.payload
    }),
    changeOptionsVisibility: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showOptions: action.payload
    }),
    changeTradeType: (state, action: PayloadAction<TradeType>) => ({
      ...state,
      type: action.payload
    }),
    setPrediction: (state, action) => ({
      ...state,
      prediction: action.payload
    }),
    setPredictionDetails: (
      state,
      action: PayloadAction<PredictionDetails>
    ) => ({
      ...state,
      pricePerFraction: action.payload.pricePerFraction,
      fractionsBought: action.payload.fractionsBought,
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
  changeSidebarVisibility,
  changeChartsVisibility,
  changeOptionsVisibility,
  changeTradeType,
  setPrediction,
  setPredictionDetails,
  toggleAcceptRules,
  toggleAcceptOddChanges
} = tradeSlice.actions;

export {
  changeSidebarVisibility,
  changeChartsVisibility,
  changeOptionsVisibility,
  changeTradeType,
  setPrediction,
  setPredictionDetails,
  toggleAcceptRules,
  toggleAcceptOddChanges
};
