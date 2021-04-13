import {
  changeTradeVisibility,
  setSelectedPrediction,
  setSelectedMarket
} from 'redux/ducks/trade';
import { BeproService, PolkamarketsApiService } from 'services';

import { useAppDispatch, useAppSelector } from 'hooks';

import { Button } from '../Button';

function TradeFormActions() {
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
    const beproService = new BeproService();
    // performing buy action on smart contract
    await beproService.buy(marketId, predictionId, amount);

    // triggering cache reload action on api
    await new PolkamarketsApiService().reloadMarket(marketId);
  }

  async function handleSell() {
    const beproService = new BeproService();
    // performing sell action on smart contract
    await beproService.sell(marketId, predictionId, amount);

    // triggering cache reload action on api
    await new PolkamarketsApiService().reloadMarket(marketId);
  }

  return (
    <div className="pm-c-trade-form-actions">
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

TradeFormActions.displayName = 'TradeFormActions';

export default TradeFormActions;
