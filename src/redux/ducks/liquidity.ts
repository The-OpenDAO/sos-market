import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Outcome } from 'models/market';

type TransactionType = 'add' | 'remove' | string;

export interface LiquidityDetails {
  liquidityShares: number;
  liquidityStake: number;
  totalStake: number;
  outcomeDetails: {
    outcome: Outcome;
    shares: number;
    stake: number;
  }[];
}

export interface LiquidityInitialState {
  transactionType: TransactionType;
  amount: number;
  maxAmount: number;
  acceptedTerms: boolean;
  liquidityDetails: LiquidityDetails;
}

const initialState: LiquidityInitialState = {
  transactionType: 'add',
  amount: 0,
  maxAmount: 0,
  acceptedTerms: false,
  liquidityDetails: {
    liquidityShares: 0,
    liquidityStake: 0,
    totalStake: 0,
    outcomeDetails: []
  }
};

const liquiditySlice = createSlice({
  name: 'liquidity',
  initialState,
  reducers: {
    changeTransactionType: (state, action: PayloadAction<TransactionType>) => ({
      ...state,
      transactionType: action.payload
    }),
    changeAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      amount: action.payload
    }),
    changeMaxAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      maxAmount: action.payload
    }),
    setLiquidityDetails: (state, action: PayloadAction<LiquidityDetails>) => ({
      ...state,
      liquidityDetails: action.payload
    }),
    toggleAcceptedTerms: (state, action: PayloadAction<boolean>) => ({
      ...state,
      acceptedTerms: action.payload
    }),
    reset: () => ({
      ...initialState
    })
  }
});

export default liquiditySlice.reducer;

const {
  changeTransactionType,
  changeAmount,
  changeMaxAmount,
  setLiquidityDetails,
  toggleAcceptedTerms,
  reset
} = liquiditySlice.actions;

export {
  changeTransactionType,
  changeAmount,
  changeMaxAmount,
  setLiquidityDetails,
  toggleAcceptedTerms,
  reset
};
