import { useAppSelector } from 'hooks';

import Button from '../Button';

function TradeActions() {
  const showCharts = useAppSelector(state => state.trade.showCharts);
  const type = useAppSelector(state => state.trade.type);

  return (
    <div className="trade-actions">
      {!showCharts ? <Button size="lg">Cancel</Button> : null}
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
