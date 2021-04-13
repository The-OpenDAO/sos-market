import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tradeForm: {
    visible: false
  },
  liquidityForm: {
    visible: false
  }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openTradeForm: state => ({
      ...state,
      tradeForm: {
        visible: true
      }
    }),
    closeTradeForm: state => ({
      ...state,
      tradeForm: {
        visible: false
      }
    }),
    openLiquidityForm: state => ({
      ...state,
      liquidityForm: {
        visible: true
      }
    }),
    closeLiquidtyForm: state => ({
      ...state,
      liquidityForm: {
        visible: false
      }
    })
  }
});

export default uiSlice.reducer;

const {
  openTradeForm,
  closeTradeForm,
  openLiquidityForm,
  closeLiquidtyForm
} = uiSlice.actions;

export { openTradeForm, closeTradeForm, openLiquidityForm, closeLiquidtyForm };
