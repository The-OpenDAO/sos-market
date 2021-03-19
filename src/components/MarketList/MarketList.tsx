import React, { useState } from 'react';

import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import markets from '../Market/mock';
import PredictionCard from '../PredictionCard';

type Market = typeof markets[0];

type MarketListProps = {
  markets: Market[];
};

// eslint-disable-next-line no-shadow
function MarketList({ markets }: MarketListProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="market-list">
      {!isEmpty(markets) &&
        markets.map(market => (
          <PredictionCard key={market.id} market={market} />
        ))}
    </div>
  );
}

MarketList.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MarketList;
