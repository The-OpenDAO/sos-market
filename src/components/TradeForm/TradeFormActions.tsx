import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { login, fetchAditionalData } from 'redux/ducks/bepro';
import { changeOutcomePrice } from 'redux/ducks/market';
import { changeMarketOutcomePrice } from 'redux/ducks/markets';
import { selectOutcome } from 'redux/ducks/trade';
import { closeTradeForm } from 'redux/ducks/ui';
import { BeproService, PolkamarketsApiService } from 'services';

import { useAppDispatch, useAppSelector, useNetwork } from 'hooks';
import useToastNotification from 'hooks/useToastNotification';

import { Button } from '../Button';
import Toast from '../Toast';
import ToastNotification from '../ToastNotification';

function TradeFormActions() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const network = useNetwork();

  const type = useAppSelector(state => state.trade.type);
  const marketId = useAppSelector(state => state.trade.selectedMarketId);
  const marketSlug = useAppSelector(state => state.market.market.slug);
  const predictionId = useAppSelector(state => state.trade.selectedOutcomeId);
  const { amount, shares, totalStake, fee } = useAppSelector(
    state => state.trade
  );
  const maxAmount = useAppSelector(state => state.trade.maxAmount);
  const acceptRules = useAppSelector(state => state.trade.acceptRules);
  const acceptOddChanges = useAppSelector(
    state => state.trade.acceptOddChanges
  );
  const ethAddress = useAppSelector(state => state.bepro.ethAddress);

  const isMarketPage = location.pathname === `/markets/${marketSlug}`;

  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionSuccessHash, setTransactionSuccessHash] =
    useState(undefined);

  const [isLoading, setIsLoading] = useState(false);
  const { show, close } = useToastNotification();

  function handleCancel() {
    dispatch(selectOutcome('', ''));
    dispatch(closeTradeForm());
  }

  async function reloadMarketPrices() {
    const marketPrices = await new BeproService().getMarketPrices(marketId);

    Object.keys(marketPrices.outcomes).forEach(key => {
      const outcomeId = Number(key);
      const outcomePrice = marketPrices.outcomes[outcomeId];

      // updating both market/markets redux
      dispatch(changeMarketOutcomePrice({ marketId, outcomeId, outcomePrice }));
      dispatch(changeOutcomePrice({ outcomeId, outcomePrice }));
    });
  }

  async function handleBuy() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();

    setIsLoading(true);

    try {
      // TODO: get values from smart contract
      const minShares = shares * 0.999;
      // performing buy action on smart contract
      const response = await beproService.buy(
        marketId,
        predictionId,
        amount,
        minShares
      );

      setIsLoading(false);

      const { status, transactionHash } = response;

      if (status && transactionHash) {
        setTransactionSuccess(status);
        setTransactionSuccessHash(transactionHash);
        show(type);
      }

      // triggering market prices redux update
      reloadMarketPrices();

      // triggering cache reload action on api
      new PolkamarketsApiService().reloadMarket(marketSlug);
      new PolkamarketsApiService().reloadPortfolio(ethAddress);

      // updating wallet
      await login(dispatch);
      await fetchAditionalData(dispatch);
    } catch (error) {
      setIsLoading(false);
    }
  }

  async function handleSell() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();

    setIsLoading(true);

    try {
      // TODO: get values from smart contract
      const ethAmount = (totalStake - fee) * 0.9999;
      // performing sell action on smart contract
      const response = await beproService.sell(
        marketId,
        predictionId,
        ethAmount,
        shares
      );

      setIsLoading(false);

      const { status, transactionHash } = response;

      if (status && transactionHash) {
        setTransactionSuccess(status);
        setTransactionSuccessHash(transactionHash);
        show(type);
      }

      // triggering market prices redux update
      reloadMarketPrices();

      // triggering cache reload action on api
      new PolkamarketsApiService().reloadMarket(marketSlug);
      new PolkamarketsApiService().reloadPortfolio(ethAddress);

      // updating wallet
      await login(dispatch);
      await fetchAditionalData(dispatch);
    } catch (error) {
      setIsLoading(false);
    }
  }

  const isValidAmount = amount > 0 && amount <= maxAmount;
  // terms currently disabled
  const hasAcceptedTerms = true;

  return (
    <div className="pm-c-trade-form-actions">
      {!isMarketPage ? (
        <Button variant="subtle" color="default" onClick={handleCancel}>
          Cancel
        </Button>
      ) : null}
      {type === 'buy' ? (
        <Button
          color="success"
          fullwidth
          onClick={handleBuy}
          disabled={!isValidAmount || !hasAcceptedTerms || isLoading}
          loading={isLoading}
        >
          Buy
        </Button>
      ) : null}
      {type === 'sell' ? (
        <Button
          color="danger"
          fullwidth
          onClick={handleSell}
          disabled={!isValidAmount || !hasAcceptedTerms || isLoading}
          loading={isLoading}
        >
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
                href={`${network.explorerURL}/tx/${transactionSuccessHash}`}
                rel="noreferrer"
              >
                <Button size="sm" color="success">
                  View on Explorer
                </Button>
              </a>
              <Button size="sm" variant="ghost" onClick={() => close(type)}>
                Dismiss
              </Button>
            </Toast.Actions>
          </Toast>
        </ToastNotification>
      ) : null}
    </div>
  );
}

TradeFormActions.displayName = 'TradeFormActions';

export default TradeFormActions;
