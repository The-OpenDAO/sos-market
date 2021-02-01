import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import MarketCard from '../MarketCard';

import styles from './MarketList.module.scss';

function MarketList({ markets }) {
  return (
    <div className={styles.container}>
      {!isEmpty(markets) &&
        markets.map(market => <MarketCard key={market.id} market={market} />)}
    </div>
  );
}

MarketList.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MarketList;
