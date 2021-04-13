import { changeAmount } from 'redux/ducks/liquidity';

import { useAppDispatch } from 'hooks';

import AmountInput from '../AmountInput';

function LiquidityFormInput() {
  const dispatch = useAppDispatch();

  function handleChangeAmount(amount: number) {
    dispatch(changeAmount(amount));
  }

  return (
    <AmountInput
      label="Liquidity Amount"
      max={1}
      onChange={amount => handleChangeAmount(amount)}
    />
  );
}

LiquidityFormInput.displayName = 'LiquidityFormInput';

export default LiquidityFormInput;
