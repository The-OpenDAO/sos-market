import isUndefined from 'lodash/isUndefined';
import { changeTradeType } from 'redux/ducks/trade';

import { useAppDispatch } from 'hooks';

import ButtonGroup from '../ButtonGroup';

function TradeFormTypeSelector() {
  const dispatch = useAppDispatch();

  function handleChangeTradeType(tradeType: string) {
    if (!isUndefined(tradeType)) {
      dispatch(changeTradeType(tradeType));
    }
  }

  return (
    <div className="pm-c-trade-form-type-selector">
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

TradeFormTypeSelector.displayName = 'TradeFormTypeSelector';

export default TradeFormTypeSelector;
