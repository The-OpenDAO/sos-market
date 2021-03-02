import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import styles from 'styles/components/MarketList.module.scss';

import PredictionCard from '../PredictionCard';
import Modal from '../Modal';

function MarketList({ markets }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Modal open={open} handleClose={() => setOpen(false)} />
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
