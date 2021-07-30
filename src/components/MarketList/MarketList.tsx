import isEmpty from 'lodash/isEmpty';
import { Market } from 'models/market';

import { InfoIcon } from 'assets/icons';

import PredictionCard from '../PredictionCard';
import Text from '../Text';

type MarketListProps = {
  markets: Market[];
};

const MarketList = ({ markets }: MarketListProps) => {
  if (isEmpty(markets)) {
    return (
      <div className="pm-c-market-list__empty-state">
        <div className="pm-c-market-list__empty-state__body">
          <InfoIcon />
          <Text
            as="p"
            scale="tiny"
            fontWeight="semibold"
            className="pm-c-market-list__empty-state__body-description"
          >
            There are no available markets for this category.
          </Text>
        </div>
      </div>
    );
  }

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
