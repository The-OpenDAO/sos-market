import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import bepro from './ducks/bepro';
import markets from './ducks/markets';
import trade from './ducks/trade';

const store = configureStore({
  reducer: {
    trade,
    markets,
    bepro
  },
  middleware: [thunkMiddleware],
  devTools: true
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | Dispatch<any>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
