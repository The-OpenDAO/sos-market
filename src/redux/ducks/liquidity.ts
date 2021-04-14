import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TransactionType = 'add' | 'remove' | string;

export interface LiquidityInitialState {
  transactionType: TransactionType;
  amount: number;
  acceptedTerms: boolean;
}

const initialState: LiquidityInitialState = {
  transactionType: 'add',
  amount: 0,
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
  toggleAcceptedTerms,
  reset
} = liquiditySlice.actions;

export { changeTransactionType, changeAmount, toggleAcceptedTerms, reset };
