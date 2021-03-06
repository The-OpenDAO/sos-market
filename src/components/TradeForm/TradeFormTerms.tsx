import { toggleAcceptOddChanges, toggleAcceptRules } from 'redux/ducks/trade';

import { useAppDispatch, useAppSelector } from 'hooks';

import Checkbox from '../Checkbox';

function TradeFormTerms() {
  const dispatch = useAppDispatch();

  const acceptRules = useAppSelector(state => state.trade.acceptRules);
  const acceptOddChanges = useAppSelector(
    state => state.trade.acceptOddChanges
  );

  function handleChangeAcceptRules() {
    dispatch(toggleAcceptRules(!acceptRules));
  }

  function handleChangeAcceptOddChanges() {
    dispatch(toggleAcceptOddChanges(!acceptOddChanges));
  }

  return (
    <div className="pm-c-trade-form-terms">
      <Checkbox
        label="Accept rules of the agreement"
        checked={acceptRules}
        onChange={handleChangeAcceptRules}
      />
      <Checkbox
        label="Accept any odd changes"
        checked={acceptOddChanges}
        onChange={handleChangeAcceptOddChanges}
      />
    </div>
  );
}

TradeFormTerms.displayName = 'TradeFormTerms';

export default TradeFormTerms;
