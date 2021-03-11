import React from 'react';

import MiniTable from '../MiniTable';

import tableItems from './mock';

function QuickTrade() {
  return (
    <div className="quick-trade">
      <MiniTable items={tableItems} />
    </div>
  );
}

export default QuickTrade;
