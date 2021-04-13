import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TransactionType = 'add' | 'remove' | string;

export interface LiquidityInitialState {
  visible: boolean;
  transactionType: TransactionType;
  amount: number;
  acceptedTerms: boolean;
}

const initialState: LiquidityInitialState = {
  visible: false,
  transactionType: 'add',
  amount: 0,
  acceptedTerms: false
};

const liquiditySlice = createSlice({
  name: 'liquidity',
  initialState,
  reducers: {
    changeVisibility: (state, action: PayloadAction<boolean>) => ({
      ...state,
      visible: action.payload
    }),
    changeTransactionType: (state, action: PayloadAction<TransactionType>) => ({
      ...state,
      transactionType: action.payload
    }),
    changeAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      amount: action.payload
    }),
    toggleAcceptedTerms: (state, action: PayloadAction<boolean>) => ({
      ...state,
      acceptedTerms: action.payload
    })
  }
});

export default liquiditySlice.reducer;

const {
  changeVisibility,
  changeTransactionType,
  changeAmount,
  toggleAcceptedTerms
} = liquiditySlice.actions;

export {
  changeVisibility,
  changeTransactionType,
  changeAmount,
  toggleAcceptedTerms
};
