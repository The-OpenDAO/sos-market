import { openForm } from 'redux/ducks/liquidity';

import { InfoIcon } from 'assets/icons';

import { useAppDispatch } from 'hooks';

import { Button } from '../Button';

function TradeFormLiquidity() {
  const dispatch = useAppDispatch();

  function handleAddLiquidity() {
    dispatch(openForm());
  }

  return (
    <div className="pm-c-trade-form-liquidity">
      <Button variant="dark" size="sm" fullWidth onClick={handleAddLiquidity}>
        <span>Add Liquidity</span>
        <InfoIcon />
      </Button>
    </div>
  );
}

TradeFormLiquidity.displayName = 'TradeFormLiquidity';

export default TradeFormLiquidity;
