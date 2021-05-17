import isEmpty from 'lodash/isEmpty';

import { InfoIcon } from 'assets/icons';

import { useAppSelector } from 'hooks';

import PredictionCard from '../PredictionCard';
import Text from '../Text';

const MarketList = ({ markets }) => {
  const { isLoading } = useAppSelector(state => state.markets);

  if (isLoading)
    return (
      <div className="pm-market__loading" style={{ paddingTop: '5rem' }}>
        <span className="spinner--primary" />
      </div>
    );

  if (isEmpty(markets)) {
    return (
      <div className="pm-c-market-list__empty-state">
        <div className="pm-c-market-list__empty-state__body">
          <InfoIcon />
          <Text
            as="p"
            scale="tiny"
            fontWeight="semibold"
            color="lighter-gray-50"
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
