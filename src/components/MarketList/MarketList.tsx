import { useAppSelector } from 'hooks';

import PredictionCard from '../PredictionCard';

const MarketList = ({ markets }) => {
  const { isLoading, error } = useAppSelector(state => state.markets);

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
