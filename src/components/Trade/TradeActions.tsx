import {
  changeTradeVisibility,
  setSelectedPrediction,
  setSelectedMarket
} from 'redux/ducks/trade';
import { TradingService } from 'services';

import { useAppDispatch, useAppSelector } from 'hooks';

import { Button } from '../Button';

function TradeActions() {
  const dispatch = useAppDispatch();
  const showCharts = useAppSelector(state => state.trade.showCharts);
  const type = useAppSelector(state => state.trade.type);
  const marketId = useAppSelector(state => state.trade.selectedMarketId);
  const predictionId = useAppSelector(
    state => state.trade.selectedPredictionId
  );
  const amount = useAppSelector(state => state.trade.amount);

  function handleCancel() {
    dispatch(changeTradeVisibility(false));
    dispatch(setSelectedPrediction(''));
    dispatch(setSelectedMarket(''));
  }

  async function handleBuy() {
    const tradingService = new TradingService();
    tradingService.buy(marketId, predictionId, amount);
  }

  async function handleSell() {
    const tradingService = new TradingService();
    tradingService.sell(marketId, predictionId, amount);
  }

  return (
    <div className="trade-actions">
      {showCharts ? (
        <Button variant="dark" color="default" size="lg" onClick={handleCancel}>
          Cancel
        </Button>
      ) : null}
      {type === 'buy' ? (
        <Button size="lg" color="success" onClick={handleBuy}>
          Buy
        </Button>
      ) : null}
      {type === 'sell' ? (
        <Button size="lg" color="danger" onClick={handleSell}>
          Sell
        </Button>
      ) : null}
    </div>
  );
}

TradeActions.displayName = 'TradeActions';

export default TradeActions;
