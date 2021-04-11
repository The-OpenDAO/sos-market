import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  bepro: false,
  isLoggedIn: false,
  ethAddress: '',
  ethBalance: 0,
  marketBalances: {}
};

const beproSlice = createSlice({
  name: 'bepro',
  initialState,
  reducers: {
    changeIsLoggedIn: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoggedIn: action.payload
    }),
    changeEthAddress: (state, action: PayloadAction<string>) => ({
      ...state,
      ethAddress: action.payload
    }),
    changeEthBalance: (state, action: PayloadAction<number>) => ({
      ...state,
      ethBalance: action.payload
    }),
    changeMarketBalances: (state, action: PayloadAction<Object>) => ({
      ...state,
      marketBalances: action.payload
    })
  }
});

export default beproSlice.reducer;

const {
  changeIsLoggedIn,
  changeEthAddress,
  changeEthBalance,
  changeMarketBalances
} = beproSlice.actions;

export {
  changeIsLoggedIn,
  changeEthAddress,
  changeEthBalance,
  changeMarketBalances
};
