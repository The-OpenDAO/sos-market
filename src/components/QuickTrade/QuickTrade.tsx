import React, { useState } from 'react';

import ToggleButton from '../ToggleButton';
import AmountInput from '../AmountInput';
import MiniTable from '../MiniTable';
import Checkbox from '../Checkbox';

import tableItems from './mock';

function QuickTrade() {
  // eslint-disable-next-line no-unused-vars
  const [checked, setChecked] = useState(true);

  return (
    <div className="quick-trade">
      <ToggleButton />
      <AmountInput label="Buy Fractions" max={0.0104} />
      <MiniTable items={tableItems} />

      <br />
      <Checkbox
        label="Accept rules of the agreement"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
}

export default QuickTrade;
