import { closeLiquidityForm } from 'redux/ducks/ui';
import { BeproService, PolkamarketsApiService } from 'services';

import { useAppDispatch, useAppSelector } from 'hooks';

import { Button } from '../Button';

function LiquidityFormActions() {
  const dispatch = useAppDispatch();
  const transactionType = useAppSelector(
    state => state.liquidity.transactionType
  );
  const marketId = useAppSelector(state => state.market.market.id);
  const amount = useAppSelector(state => state.liquidity.amount);

  function handleCancel() {
    dispatch(closeLiquidityForm());
  }

  async function handleAddliquidity() {
    const beproService = new BeproService();

    // performing buy action on smart contract
    await beproService.addLiquidity(marketId, amount);

    // triggering cache reload action on api
    await new PolkamarketsApiService().reloadMarket(marketId);
  }

  async function handleRemoveLiquidity() {
    const beproService = new BeproService();

    // performing buy action on smart contract
    await beproService.removeLiquidity(marketId, amount);

    // triggering cache reload action on api
    await new PolkamarketsApiService().reloadMarket(marketId);
  }

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
