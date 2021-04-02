import isUndefined from 'lodash/isUndefined';
import { changeTradeType } from 'redux/ducks/trade';

import { useAppDispatch } from 'hooks';

import ToggleButton from '../ToggleButton';

function TradeActions() {
  const dispatch = useAppDispatch();

  function handleChangeTradeType(tradeType: string | undefined) {
    if (!isUndefined(tradeType)) {
      dispatch(changeTradeType(tradeType));
    }
  }

  return (
    <div className="trade-actions">
      <ToggleButton
        defaultActiveId="buy"
        buttons={[
          { id: 'buy', name: 'Buy', variant: 'success' },
          { id: 'sell', name: 'Sell', variant: 'danger' }
        ]}
        onChange={tradeType => handleChangeTradeType(tradeType)}
      />
    </div>
  );
}

export default TradeActions;
