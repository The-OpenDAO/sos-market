import isUndefined from 'lodash/isUndefined';
import { changeTransactionType } from 'redux/ducks/liquidity';

import { useAppDispatch } from 'hooks';

import ButtonGroup from '../ButtonGroup';

function LiquidityFormTypeSelector() {
  const dispatch = useAppDispatch();

  function handleChangeTransactionType(tradeType: string) {
    if (!isUndefined(tradeType)) {
      dispatch(changeTransactionType(tradeType));
    }
  }

  return (
    <ButtonGroup
      defaultActiveId="add"
      buttons={[
        { id: 'add', name: 'Add Liquidity', color: 'default' },
        { id: 'remove', name: 'Remove Liquidity', color: 'default' }
      ]}
      onChange={type => handleChangeTransactionType(type)}
    />
  );
}

LiquidityFormTypeSelector.displayName = 'LiquidityFormTypeSelector';

export default LiquidityFormTypeSelector;
