import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TransactionType = 'add' | 'remove' | string;

export interface LiquidityInitialState {
  transactionType: TransactionType;
  amount: number;
  maxAmount: number;
  acceptedTerms: boolean;
}

const initialState: LiquidityInitialState = {
  transactionType: 'add',
  amount: 0,
  maxAmount: 0,
  acceptedTerms: false
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
  toggleAcceptedTerms,
  reset
} = liquiditySlice.actions;

export {
  changeTransactionType,
  changeAmount,
  changeMaxAmount,
  toggleAcceptedTerms,
  reset
};
