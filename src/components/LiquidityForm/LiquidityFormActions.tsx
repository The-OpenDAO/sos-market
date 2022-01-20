import { useState } from 'react';

import { login, fetchAditionalData } from 'redux/ducks/bepro';
import { reset } from 'redux/ducks/liquidity';
import { closeLiquidityForm } from 'redux/ducks/ui';
import { BeproService, SosmarketsApiService } from 'services';

import { useAppDispatch, useAppSelector, useNetwork } from 'hooks';
import useToastNotification from 'hooks/useToastNotification';

import { Button } from '../Button';
import Toast from '../Toast';
import ToastNotification from '../ToastNotification';

function LiquidityFormActions() {
  const dispatch = useAppDispatch();
  const transactionType = useAppSelector(
    state => state.liquidity.transactionType
  );
  const marketId = useAppSelector(state => state.market.market.id);
  const marketSlug = useAppSelector(state => state.market.market.slug);
  const amount = useAppSelector(state => state.liquidity.amount);
  const maxAmount = useAppSelector(state => state.liquidity.maxAmount);

  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionSuccessHash, setTransactionSuccessHash] =
    useState(undefined);

  // terms currently disabled
  const acceptedTerms = true;
  const ethAddress = useAppSelector(state => state.bepro.ethAddress);

  const [isLoading, setIsLoading] = useState(false);
  const { show, close } = useToastNotification();
  const network = useNetwork();

  function handleCancel() {
    dispatch(closeLiquidityForm());
    dispatch(reset());
  }

  async function handleAddliquidity() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();

    setIsLoading(true);

    try {
      // performing buy action on smart contract
      const response = await beproService.addLiquidity(marketId, amount);

      setIsLoading(false);

      const { status, transactionHash } = response;

      if (status && transactionHash) {
        setTransactionSuccess(status);
        setTransactionSuccessHash(transactionHash);
        show(transactionType);
      }

      // triggering cache reload action on api
      new SosmarketsApiService().reloadMarket(marketSlug);
      new SosmarketsApiService().reloadPortfolio(ethAddress);

      // updating wallet
      await login(dispatch);
      await fetchAditionalData(dispatch);
    } catch (error) {
      setIsLoading(false);
    }
  }

  async function handleRemoveLiquidity() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();

    setIsLoading(true);

    try {
      // performing buy action on smart contract
      const response = await beproService.removeLiquidity(marketId, amount);

      setIsLoading(false);

      const { status, transactionHash } = response;

      if (status && transactionHash) {
        setTransactionSuccess(status);
        setTransactionSuccessHash(transactionHash);
        show(transactionType);
      }

      // triggering cache reload action on api
      new SosmarketsApiService().reloadMarket(marketSlug);
      new SosmarketsApiService().reloadPortfolio(ethAddress);

      // updating wallet
      await login(dispatch);
      await fetchAditionalData(dispatch);
    } catch (error) {
      setIsLoading(false);
    }
  }

  const isValidAmount = amount > 0 && amount <= maxAmount;

  return (
    <div className="pm-c-liquidity-form__actions">
      <Button variant="subtle" color="default" onClick={handleCancel}>
        Cancel
      </Button>

      {transactionType === 'add' ? (
        <Button
          color="primary"
          fullwidth
          onClick={handleAddliquidity}
          disabled={!isValidAmount || !acceptedTerms || isLoading}
          loading={isLoading}
        >
          Add Liquidity
        </Button>
      ) : null}

      {transactionType === 'remove' ? (
        <Button
          color="primary"
          fullwidth
          onClick={handleRemoveLiquidity}
          disabled={!isValidAmount || !acceptedTerms || isLoading}
          loading={isLoading}
        >
          Remove Liquidity
        </Button>
      ) : null}

      {transactionSuccess && transactionSuccessHash ? (
        <ToastNotification id={transactionType} duration={10000}>
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
              <Button
                size="sm"
                variant="ghost"
                onClick={() => close(transactionType)}
              >
                Dismiss
              </Button>
            </Toast.Actions>
          </Toast>
        </ToastNotification>
      ) : null}
    </div>
  );
}

LiquidityFormActions.displayName = 'LiquidityFormActions';

export default LiquidityFormActions;
