import React, { useState } from 'react';

import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import PredictionCard from '../PredictionCard';

function MarketList({ markets }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="market-list">
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
