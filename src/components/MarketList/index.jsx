import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import styles from 'styles/components/MarketList.module.scss';

import MarketCard from '../MarketCard';
import Modal from '../Modal';

function MarketList({ markets }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Modal open={open} handleClose={() => setOpen(false)} />
      {!isEmpty(markets) &&
        markets.map(market => (
          <MarketCard
            key={market.id}
            market={market}
            onClick={() => setOpen(true)}
          />
        ))}
    </div>
  );
}

MarketList.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MarketList;
