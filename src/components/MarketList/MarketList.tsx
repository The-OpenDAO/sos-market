import { useAppSelector } from 'hooks';

import PredictionCard from '../PredictionCard';

const MarketList = ({ markets }) => {
  const { isLoading } = useAppSelector(state => state.markets);

  if (isLoading)
    return (
      <div className="pm-market__loading" style={{ paddingTop: '5rem' }}>
        <span className="spinner--primary" />
      </div>
    );

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
