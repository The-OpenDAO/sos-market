import { createContext, useReducer } from 'react';

import { ETH } from 'hooks/useCurrency/currencies';

const CurrencyContext = createContext({});
const CurrencyDispatchContext = createContext({});

const initalState = ETH;

const actions = {
  CURRENCY_SELECTED: 'currency/selected'
};

function currencyReducer(state, action) {
  switch (action.type) {
    case actions.CURRENCY_SELECTED: {
      const { name, ticker, icon } = action.payload;
      return { name, ticker, icon };
    }
    default: {
      return state;
    }
  }
}

// eslint-disable-next-line react/prop-types
const CurrencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(currencyReducer, initalState);
  return (
    <CurrencyContext.Provider value={state}>
      <CurrencyDispatchContext.Provider value={dispatch}>
        {children}
      </CurrencyDispatchContext.Provider>
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;

export { actions, CurrencyContext, CurrencyDispatchContext };
