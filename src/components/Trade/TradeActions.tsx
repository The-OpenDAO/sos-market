import {
  changeTradeVisibility,
  setSelectedPrediction
} from 'redux/ducks/trade';

import { useAppDispatch, useAppSelector } from 'hooks';

import Button from '../Button';

function TradeActions() {
  const dispatch = useAppDispatch();
  const showCharts = useAppSelector(state => state.trade.showCharts);
  const type = useAppSelector(state => state.trade.type);

  function handleCancel() {
    dispatch(changeTradeVisibility(false));
    dispatch(setSelectedPrediction(''));
  }

  return (
    <div className="trade-actions">
      {showCharts ? (
        <Button variant="dark" color="default" size="lg" onClick={handleCancel}>
          Cancel
        </Button>
      ) : null}
      {type === 'buy' ? (
        <Button size="lg" color="success">
          Buy
        </Button>
      ) : null}
      {type === 'sell' ? (
        <Button size="lg" color="danger">
          Sell
        </Button>
      ) : null}
    </div>
  );
}

TradeActions.displayName = 'TradeActions';

export default TradeActions;
