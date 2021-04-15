import { useState } from 'react';

import { closeTradeForm } from 'redux/ducks/ui';
import { BeproService, PolkamarketsApiService } from 'services';

import { useAppDispatch, useAppSelector } from 'hooks';
import useToastNotification from 'hooks/useToastNotification';

import { Button, ButtonText } from '../Button';
import Toast from '../Toast';
import ToastNotification from '../ToastNotification';

function TradeFormActions() {
  const dispatch = useAppDispatch();
  const showCharts = useAppSelector(state => state.trade.showCharts);
  const type = useAppSelector(state => state.trade.type);
  const marketId = useAppSelector(state => state.trade.selectedMarketId);
  const predictionId = useAppSelector(state => state.trade.selectedOutcomeId);
  const amount = useAppSelector(state => state.trade.amount);

  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionSuccessHash, setTransactionSuccessHash] = useState(
    undefined
  );

  const { show, close } = useToastNotification();

  function handleCancel() {
    dispatch(closeTradeForm());
  }

  async function handleBuy() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();
    // performing buy action on smart contract
    const response = await beproService.buy(marketId, predictionId, amount);
    const { status, transactionHash } = response;

    if (status && transactionHash) {
      setTransactionSuccess(status);
      setTransactionSuccessHash(transactionHash);
      show(type);
    }

    // triggering cache reload action on api
    await new PolkamarketsApiService().reloadMarket(marketId);
  }

  async function handleSell() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();
    // performing sell action on smart contract
    const response = await beproService.sell(marketId, predictionId, amount);
    const { status, transactionHash } = response;

    if (status && transactionHash) {
      setTransactionSuccess(status);
      setTransactionSuccessHash(transactionHash);
      show(type);
    }

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

      {transactionSuccess && transactionSuccessHash ? (
        <ToastNotification id={type} duration={10000}>
          <Toast
            variant="success"
            title="Success"
            description="Your transaction is completed!"
          >
            <Toast.Actions>
              <a
                target="_blank"
                href={`https://etherscan.io/tx/${transactionSuccessHash}`}
                rel="noreferrer"
              >
                <Button color="success">View on Etherscan</Button>
              </a>
              <ButtonText color="white" onClick={() => close(type)}>
                Dismiss
              </ButtonText>
            </Toast.Actions>
          </Toast>
        </ToastNotification>
      ) : null}
    </div>
  );
}

TradeFormActions.displayName = 'TradeFormActions';

export default TradeFormActions;
