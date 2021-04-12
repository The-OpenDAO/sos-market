import isUndefined from 'lodash/isUndefined';
import { changeTradeType } from 'redux/ducks/trade';

import { useAppDispatch } from 'hooks';

import ButtonGroup from '../ButtonGroup';

function TradeTypeSelector() {
  const dispatch = useAppDispatch();

  function handleChangeTradeType(tradeType: string) {
    if (!isUndefined(tradeType)) {
      dispatch(changeTradeType(tradeType));
    }
  }

  return (
    <div className="trade-type-selector">
      <ButtonGroup
        defaultActiveId="buy"
        buttons={[
          { id: 'buy', name: 'Buy', color: 'success' },
          { id: 'sell', name: 'Sell', color: 'danger' }
        ]}
        onChange={tradeType => handleChangeTradeType(tradeType)}
      />
    </div>
  );
}

TradeTypeSelector.displayName = 'TradeTypeSelector';

export default TradeTypeSelector;
