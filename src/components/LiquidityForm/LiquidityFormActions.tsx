import { useState } from 'react';

import { fetchWallet } from 'redux/ducks/bepro';
import { closeLiquidityForm } from 'redux/ducks/ui';
import { BeproService, PolkamarketsApiService } from 'services';

import { useAppDispatch, useAppSelector } from 'hooks';
import useToastNotification from 'hooks/useToastNotification';

import { Button, ButtonText } from '../Button';
import Toast from '../Toast';
import ToastNotification from '../ToastNotification';

function LiquidityFormActions() {
  const dispatch = useAppDispatch();
  const transactionType = useAppSelector(
    state => state.liquidity.transactionType
  );
  const marketId = useAppSelector(state => state.market.market.id);
  const amount = useAppSelector(state => state.liquidity.amount);
  const maxAmount = useAppSelector(state => state.liquidity.maxAmount);

  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionSuccessHash, setTransactionSuccessHash] = useState(
    undefined
  );

  const acceptedTerms = useAppSelector(state => state.liquidity.acceptedTerms);

  const [isLoading, setIsLoading] = useState(false);
  const { show, close } = useToastNotification();

  function handleCancel() {
    dispatch(closeLiquidityForm());
  }

  async function handleAddliquidity() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();

    // performing buy action on smart contract
    setIsLoading(true);
    const response = await beproService.addLiquidity(marketId, amount);
    setIsLoading(false);

    const { status, transactionHash } = response;

    if (status && transactionHash) {
      setTransactionSuccess(status);
      setTransactionSuccessHash(transactionHash);
      show(transactionType);
    }

    // triggering cache reload action on api
    new PolkamarketsApiService().reloadMarket(marketId);

    // updating wallet
    await fetchWallet(dispatch);
  }

  async function handleRemoveLiquidity() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();

    // performing buy action on smart contract
    setIsLoading(true);
    const response = await beproService.removeLiquidity(marketId, amount);
    setIsLoading(false);

    const { status, transactionHash } = response;

    if (status && transactionHash) {
      setTransactionSuccess(status);
      setTransactionSuccessHash(transactionHash);
      show(transactionType);
    }

    // triggering cache reload action on api
    new PolkamarketsApiService().reloadMarket(marketId);

    // updating wallet
    await fetchWallet(dispatch);
  }

  const isValidAmount = amount > 0 && amount <= maxAmount;

  return (
    <div className="pm-c-liquidity-form__actions">
      <Button variant="dark" color="default" size="lg" onClick={handleCancel}>
        Cancel
      </Button>

      {transactionType === 'add' ? (
        <Button
          size="lg"
          color="primary"
          onClick={handleAddliquidity}
          disabled={!isValidAmount || !acceptedTerms || isLoading}
        >
          Add Liquidity
        </Button>
      ) : null}

      {transactionType === 'remove' ? (
        <Button
          size="lg"
          color="primary"
          onClick={handleRemoveLiquidity}
          disabled={!isValidAmount || !acceptedTerms || isLoading}
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
                href={`https://kovan.etherscan.io/tx/${transactionSuccessHash}`}
                rel="noreferrer"
              >
                <Button color="success">View on Etherscan</Button>
              </a>
              <ButtonText color="white" onClick={() => close(transactionType)}>
                Dismiss
              </ButtonText>
            </Toast.Actions>
          </Toast>
        </ToastNotification>
      ) : null}
    </div>
  );
}

LiquidityFormActions.displayName = 'LiquidityFormActions';

export default LiquidityFormActions;
