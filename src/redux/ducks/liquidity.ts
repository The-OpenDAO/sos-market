import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { changeTradeVisibility } from './trade';

type TransactionType = 'add' | 'remove' | string;

export interface LiquidityInitialState {
  isVisible: boolean;
  transactionType: TransactionType;
  amount: number;
  acceptedTerms: boolean;
}

const initialState: LiquidityInitialState = {
  isVisible: false,
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
      isVisible: action.payload
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
    }),
    reset: () => ({
      ...initialState
    })
  }
});

export default liquiditySlice.reducer;

const {
  changeVisibility,
  changeTransactionType,
  changeAmount,
  toggleAcceptedTerms,
  reset
} = liquiditySlice.actions;

export {
  changeVisibility,
  changeTransactionType,
  changeAmount,
  toggleAcceptedTerms,
  reset
};

export function openForm() {
  return dispatch => {
    dispatch(changeTradeVisibility(false));
    dispatch(changeVisibility(true));
  };
}

export function closeForm() {
  return dispatch => {
    dispatch(changeVisibility(false));
    dispatch(reset());
    dispatch(changeTradeVisibility(true));
  };
}
