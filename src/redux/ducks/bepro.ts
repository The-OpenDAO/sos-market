import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TradingService } from 'services';

const initialState = {
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

// fetching initial wallet details
const fetchWallet = async (dispatch: any) => {
  const tradingService = new TradingService();

  const isLoggedIn = await tradingService.isLoggedIn();
  dispatch(changeIsLoggedIn(isLoggedIn));

  if (isLoggedIn) {
    await tradingService.login();

    const address = await tradingService.getAddress();
    dispatch(changeEthAddress(address));

    const balance = await tradingService.getBalance();
    dispatch(changeEthBalance(balance));
  }
};

export {
  changeIsLoggedIn,
  changeEthAddress,
  changeEthBalance,
  changeMarketBalances,
  fetchWallet
};
