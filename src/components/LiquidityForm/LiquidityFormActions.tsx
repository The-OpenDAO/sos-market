import { useState } from 'react';

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

  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionSuccessHash, setTransactionSuccessHash] = useState(
    undefined
  );

  const { show, close } = useToastNotification();

  function handleCancel() {
    dispatch(closeLiquidityForm());
  }

  async function handleAddliquidity() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();

    // performing buy action on smart contract
    const response = await beproService.addLiquidity(marketId, amount);
    const { status, transactionHash } = response;

    if (status && transactionHash) {
      setTransactionSuccess(status);
      setTransactionSuccessHash(transactionHash);
      show(transactionType);
    }

    // triggering cache reload action on api
    await new PolkamarketsApiService().reloadMarket(marketId);
  }

  async function handleRemoveLiquidity() {
    setTransactionSuccess(false);
    setTransactionSuccessHash(undefined);

    const beproService = new BeproService();

    // performing buy action on smart contract
    const response = await beproService.removeLiquidity(marketId, amount);
    const { status, transactionHash } = response;

    if (status && transactionHash) {
      setTransactionSuccess(status);
      setTransactionSuccessHash(transactionHash);
      show(transactionType);
    }

    // triggering cache reload action on api
    await new PolkamarketsApiService().reloadMarket(marketId);
  }

  return (
    <div className="pm-c-liquidity-form__actions">
      <Button variant="dark" color="default" size="lg" onClick={handleCancel}>
        Cancel
      </Button>

      {transactionType === 'add' ? (
        <Button size="lg" color="primary" onClick={handleAddliquidity}>
          Add Liquidity
        </Button>
      ) : null}

      {transactionType === 'remove' ? (
        <Button size="lg" color="primary" onClick={handleRemoveLiquidity}>
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
                href={`https://etherscan.io/tx/${transactionSuccessHash}`}
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
