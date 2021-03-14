import React from 'react';

import ToggleButton from '../ToggleButton';
import AmountInput from '../AmountInput';
import MiniTable from '../MiniTable';

import tableItems from './mock';

function QuickTrade() {
  return (
    <div className="quick-trade">
      <ToggleButton />
      <AmountInput label="Buy Fractions" max={0.0104} />
      <MiniTable items={tableItems} />
    </div>
  );
}

export default QuickTrade;
