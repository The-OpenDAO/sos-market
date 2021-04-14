import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BeproService } from 'services';

const initialState = {
  isLoggedIn: false,
  ethAddress: '',
  ethBalance: 0,
  portfolio: {}
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
    changePortfolio: (state, action: PayloadAction<Object>) => ({
      ...state,
      portfolio: action.payload
    })
  }
});

export default beproSlice.reducer;

const {
  changeIsLoggedIn,
  changeEthAddress,
  changeEthBalance,
  changePortfolio
} = beproSlice.actions;

// fetching initial wallet details
const fetchWallet = async (dispatch: any) => {
  const beproService = new BeproService();

  const isLoggedIn = await beproService.isLoggedIn();
  dispatch(changeIsLoggedIn(isLoggedIn));

  if (isLoggedIn) {
    await beproService.login();

    const address = await beproService.getAddress();
    dispatch(changeEthAddress(address));

    const balance = await beproService.getBalance();
    dispatch(changeEthBalance(balance));

    const portfolio = await beproService.getPortfolio();
    dispatch(changePortfolio(portfolio));
  }
};

export {
  changeIsLoggedIn,
  changeEthAddress,
  changeEthBalance,
  changePortfolio,
  fetchWallet
};
