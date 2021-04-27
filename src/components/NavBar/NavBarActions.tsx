import { useEffect } from 'react';

import { login, fetchAditionalData } from 'redux/ducks/bepro';
import { BeproService } from 'services';

import { AddIcon, MetaMaskIcon } from 'assets/icons';

import { useAppDispatch, useAppSelector } from 'hooks';
import useAlertNotification from 'hooks/useAlertNotification';
import useCurrency from 'hooks/useCurrency';
import useNetwork from 'hooks/useNetwork';

import AlertNotification from '../AlertNotification';
import { Button } from '../Button';
import NetworkInfo from '../NetworkInfo';
import Tooltip from '../Tooltip';
import WalletInfo from '../WalletInfo';

function NavBarActions() {
  const { show } = useAlertNotification();
  const { icon } = useCurrency();
  const dispatch = useAppDispatch();
  const network = useNetwork();

  const beproService = new BeproService();

  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);
  const walletAddress = useAppSelector(state => state.bepro.ethAddress);
  const walletBalance = useAppSelector(state => state.bepro.ethBalance);

  // Example
  useEffect(() => {
    show('beta-testing');
  }, [show, walletConnected]);

  const handleConnectWallet = async () => {
    await beproService.login();
    await login(dispatch);
    await fetchAditionalData(dispatch);
  };

  return (
    <div className="pm-c-navbar__actions">
      <AlertNotification
        id="beta-testing"
        variant="warning"
        description="You’re part of our Beta Testing users. You’re on Kovan Test Network and you’re predicting with test ETH."
      />

      {network ? <NetworkInfo name={network.name} slug={network.key} /> : null}

      {walletConnected ? (
        <WalletInfo
          balance={walletBalance}
          currencyIcon={icon}
          address={walletAddress}
        />
      ) : (
        <Button
          color="default"
          aria-label="Connect Wallet"
          onClick={handleConnectWallet}
        >
          <MetaMaskIcon />
          Connect Wallet
        </Button>
      )}
      <Tooltip text="Create Market" position="bottom">
        <a
          className="button-normal--default pm-c-navbar__actions-create-market"
          aria-label="Create market"
          target="_blank"
          href="https://www.google.com/forms/about"
          rel="noreferrer"
        >
          <AddIcon />
        </a>
      </Tooltip>
    </div>
  );
}

NavBarActions.displayName = 'NavBarActions';

export default NavBarActions;
