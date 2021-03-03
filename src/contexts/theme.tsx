import React, { createContext, useReducer } from 'react';

const ThemeContext = createContext({});
const ThemeDispatchContext = createContext({});

const actions = {
  SET_THEME: 'theme/set'
};

type State = {
  theme: string;
};

type Action = { type: string; payload: string };

function themeReducer(state: State, action: Action) {
  switch (action.type) {
    case actions.SET_THEME: {
      return { theme: action.payload };
    }
    default: {
      return state;
    }
  }
}

interface Props {
  children: React.ReactNode | any;
}

const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: 'light'
  });
  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export { actions, ThemeContext, ThemeDispatchContext };
