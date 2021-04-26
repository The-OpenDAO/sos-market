/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';

import Text from '../Text';

function TradeFormClosed() {
  return (
    <div className="pm-c-trade-form-liquidity">
      <Text as="i" color="lighter-gray">
        This market is closed. If you have any winnings to claim please check
        your <Link to="/portfolio">portfolio</Link>
      </Text>
    </div>
  );
}

TradeFormClosed.displayName = 'TradeFormClosed';

export default TradeFormClosed;
