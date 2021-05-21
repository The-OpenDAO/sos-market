import isEmpty from 'lodash/isEmpty';
import { getMarkets } from 'redux/ducks/markets';
import { useAppDispatch } from 'redux/store';

import { InfoIcon } from 'assets/icons';

import { Button } from 'components/Button';

import { useAppSelector } from 'hooks';

import PredictionCard from '../PredictionCard';
import Text from '../Text';

const MarketList = ({ markets }) => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(state => state.markets);

  function refreshMarkets() {
    dispatch(getMarkets());
  }

  if (isLoading)
    return (
      <div className="pm-market__loading" style={{ paddingTop: '5rem' }}>
        <span className="spinner--primary" />
      </div>
    );

  if (error) {
    return (
      <div className="pm-c-market-list__error">
        <div className="pm-c-market-list__error__body">
          <InfoIcon />
          <Text
            as="p"
            scale="tiny"
            fontWeight="semibold"
            color="lighter-gray-50"
          >
            Error fetching markets
          </Text>
        </div>
        <div className="pm-c-market-list__error__actions">
          <Button color="primary" size="sm" onClick={refreshMarkets}>
            Try again
          </Button>
        </div>
      </div>
    );
  }

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
