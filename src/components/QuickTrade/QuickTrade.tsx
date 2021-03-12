import React from 'react';

import ToggleButton from '../ToggleButton';
import MiniTable from '../MiniTable';

import tableItems from './mock';

function QuickTrade() {
  return (
    <div className="quick-trade">
      <ToggleButton variant="danger" />
      <MiniTable items={tableItems} />
    </div>
  );
}

export default QuickTrade;
