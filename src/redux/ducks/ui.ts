import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebar: {
    collapsed: true
  },
  rightSidebar: {
    visible: false
  },
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
    openSidebar: state => ({
      ...state,
      sidebar: {
        collapsed: false
      },
      rightSidebar: {
        visible: false
      }
    }),
    closeSidebar: state => ({
      ...state,
      sidebar: {
        collapsed: true
      },
      rightSidebar: {
        visible: !!(state.tradeForm.visible || state.liquidityForm.visible)
      }
    }),
    closeRightSidebar: state => ({
      ...state,
      rightSidebar: {
        visible: false
      }
    }),
    openTradeForm: state => ({
      ...state,
      sidebar: {
        collapsed: true
      },
      rightSidebar: {
        visible: true
      },
      tradeForm: {
        visible: true
      }
    }),
    closeTradeForm: state => ({
      ...state,
      tradeForm: {
        visible: false
      },
      rightSidebar: {
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
  openSidebar,
  closeSidebar,
  closeRightSidebar,
  openTradeForm,
  closeTradeForm,
  openLiquidityForm,
  closeLiquidityForm
} = uiSlice.actions;

export {
  openSidebar,
  closeSidebar,
  closeRightSidebar,
  openTradeForm,
  closeTradeForm,
  openLiquidityForm,
  closeLiquidityForm
};
