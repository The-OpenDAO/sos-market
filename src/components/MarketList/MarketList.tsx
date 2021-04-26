import { useEffect } from 'react';

import { getMarkets } from 'redux/ducks/markets';

import { useAppDispatch, useAppSelector } from 'hooks';

import PredictionCard from '../PredictionCard';

const MarketList = () => {
  const dispatch = useAppDispatch();
  const { markets, isLoading, error } = useAppSelector(state => state.markets);

  useEffect(() => {
    dispatch(getMarkets());
  }, [dispatch]);

  if (isLoading) return null;

  return (
    <ul className="market-list">
      {markets.map(market => (
        <li className="market-list__item" key={market.id}>
          <PredictionCard market={market} />
        </li>
      ))}
    </ul>
  );
};

export default MarketList;
