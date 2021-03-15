import React from 'react';

import ToggleButton from '../ToggleButton';
import AmountInput from '../AmountInput';
import MiniTable from '../MiniTable';

import { toggleButtonItems, miniTableItems } from './mock';

function QuickTrade() {
  return (
    <div className="quick-trade">
      <ToggleButton buttons={toggleButtonItems} />
      <AmountInput label="Buy Fractions" max={0.0104} />
      <MiniTable items={miniTableItems} />
    </div>
  );
}

export default QuickTrade;
