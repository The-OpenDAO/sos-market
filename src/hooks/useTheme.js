/* eslint-disable import/no-cycle */
import React from 'react';

import { actions, ThemeContext, ThemeDispatchContext } from 'contexts/theme';

function useTheme() {
  const { theme } = React.useContext(ThemeContext);
  const dispatch = React.useContext(ThemeDispatchContext);

  function setTheme(newTheme) {
    dispatch({ type: actions.SET_THEME, payload: newTheme });
  }

  return { theme, setTheme };
}

export default useTheme;
