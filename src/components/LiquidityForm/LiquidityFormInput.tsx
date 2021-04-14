import { changeAmount } from 'redux/ducks/liquidity';

import { useAppDispatch, useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import AmountInput from '../AmountInput';

function LiquidityFormInput() {
  const dispatch = useAppDispatch();
  const transactionType = useAppSelector(
    state => state.liquidity.transactionType
  );
  const marketId = useAppSelector(state => state.market.market.id);

  // buy and sell have different maxes
  const balance = useAppSelector(state => state.bepro.ethBalance);
  const portfolio = useAppSelector(state => state.bepro.portfolio);
  const currency = useCurrency();

  function max() {
    let maxAmount = 0;

    // max for buy actions - eth balance
    if (transactionType === 'add') {
      maxAmount = balance;
    }
    // max for sell actions - number of outcome shares
    else if (transactionType === 'remove') {
      maxAmount = portfolio[marketId]?.liquidityShares || 0;
    }

    // rounding (down) to 5 decimals
    return Math.floor(maxAmount * 1e5) / 1e5;
  }

  // TODO: improve this
  function currentCurrency() {
    return transactionType === 'add'
      ? currency
      : { name: 'Shares', ticker: 'Shares' };
  }

  function handleChangeAmount(amount: number) {
    dispatch(changeAmount(amount));
  }

  return (
    <AmountInput
      label="Liquidity Amount"
      max={max()}
      onChange={amount => handleChangeAmount(amount)}
      currency={currentCurrency()}
    />
  );
}

LiquidityFormInput.displayName = 'LiquidityFormInput';

export default LiquidityFormInput;
