/* eslint-disable import/no-cycle */
import { useContext } from 'react';

import uniq from 'lodash/uniq';
import without from 'lodash/without';

import { FavoriteMarketsContext } from 'contexts/favoriteMarkets';

function useFavoriteMarkets() {
  const { favoriteMarkets, setFavoriteMarkets } = useContext(
    FavoriteMarketsContext
  );

  function addFavoriteMarket(marketId: string) {
    setFavoriteMarkets(uniq([...favoriteMarkets, marketId]));
  }

  function removeFavoriteMarket(marketId: string) {
    setFavoriteMarkets(without(favoriteMarkets, marketId));
  }

  return { favoriteMarkets, addFavoriteMarket, removeFavoriteMarket };
}

export default useFavoriteMarkets;
