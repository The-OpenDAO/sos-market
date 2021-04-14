import { closeLiquidityForm } from 'redux/ducks/ui';

import { useAppDispatch, useAppSelector } from 'hooks';

import { Button } from '../Button';

function LiquidityFormActions() {
  const dispatch = useAppDispatch();
  const transactionType = useAppSelector(
    state => state.liquidity.transactionType
  );

  function handleCancel() {
    dispatch(closeLiquidityForm());
  }

  function handleAddliquidity() {}

  function handleRemoveLiquidity() {}

  return (
    <div className="pm-c-liquidity-form__actions">
      <Button variant="dark" color="default" size="lg" onClick={handleCancel}>
        Cancel
      </Button>

      {transactionType === 'add' ? (
        <Button size="lg" color="primary" onClick={handleAddliquidity}>
          Add Liquidity
        </Button>
      ) : null}

      {transactionType === 'remove' ? (
        <Button size="lg" color="primary" onClick={handleRemoveLiquidity}>
          Remove Liquidity
        </Button>
      ) : null}
    </div>
  );
}

LiquidityFormActions.displayName = 'LiquidityFormActions';

export default LiquidityFormActions;
