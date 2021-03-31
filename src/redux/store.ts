import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import trade from './ducks/trade';

const store = configureStore({
  reducer: {
    trade
  },
  middleware: [thunkMiddleware],
  devTools: true
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
