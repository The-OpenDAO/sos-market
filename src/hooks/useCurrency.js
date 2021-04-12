import { useContext } from 'react';

import {
  actions,
  CurrencyContext,
  CurrencyDispatchContext
} from 'contexts/currency';

function useCurrency() {
  const { name, ticker, icon } = useContext(CurrencyContext);
  const dispatch = useContext(CurrencyDispatchContext);

  function selectCurrency(currency) {
    dispatch({ type: actions.CURRENCY_SELECTED, payload: currency });
  }

  return { name, ticker, icon, selectCurrency };
}

export default useCurrency;
