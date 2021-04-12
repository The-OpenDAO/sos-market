import isEmpty from 'lodash/isEmpty';
import { Market } from 'models/market';

import PredictionCard from '../PredictionCard';

type MarketListProps = {
  markets: Market[];
};

const MarketList = ({ markets }: MarketListProps) => {
  if (isEmpty(markets)) return null;

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
