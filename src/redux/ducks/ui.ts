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
      tradeForm: {
        visible: false
      },
      liquidityForm: {
        visible: true
      }
    }),
    closeLiquidityForm: state => ({
      ...state,
      liquidityForm: {
        visible: false
      },
      tradeForm: {
        visible: true
      }
    })
  }
});

export default uiSlice.reducer;

const {
  openTradeForm,
  closeTradeForm,
  openLiquidityForm,
  closeLiquidityForm
} = uiSlice.actions;

export { openTradeForm, closeTradeForm, openLiquidityForm, closeLiquidityForm };
