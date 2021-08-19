import { useEffect } from 'react';

import { formatNumberToString } from 'helpers/math';
import { login } from 'redux/ducks/bepro';
import { BeproService } from 'services';

import {
  EthereumIcon,
  MetaMaskIconSmall,
  PolkamarketsIconSmall
} from 'assets/icons';

import { useAppDispatch, useAppSelector } from 'hooks';
import useAlertNotification from 'hooks/useAlertNotification';
import useNetwork, { defaultNetwork } from 'hooks/useNetwork';

import { AlertInline } from '../Alert';
import { Button } from '../Button';
import Link from '../Link';
import NetworkInfo from '../NetworkInfo';
import WalletInfo from '../WalletInfo';

function NavBarActions() {
  const { show } = useAlertNotification();
  const dispatch = useAppDispatch();
  const network = useNetwork() || defaultNetwork();

  const beproService = new BeproService();

  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);
  const ethBalance = useAppSelector(state => state.bepro.ethBalance);
  const polkBalance = useAppSelector(state => state.bepro.polkBalance);
  const walletAddress = useAppSelector(state => state.bepro.ethAddress);

  // Example
  useEffect(() => {
    show('beta-testing');
  }, [show, walletConnected]);

  const handleConnectWallet = async () => {
    await beproService.login();
    await login(dispatch);
  };

  return (
    <div className="pm-l-navbar__actions">
      <AlertInline
        id="beta-testing"
        variant="warning"
        description={
          <>
            {`Welcome to Polkamarkets! You’re on ${network.name} and placing predictions with ${network.currency}. Your `}
            <Link
              title="feedback"
              target="_blank"
              href="//discord.gg/Szjn2EEf7w"
              rel="noreferrer"
              variant="warning"
            />
            {` is highly appreciated 🎉`}
          </>
        }
      />
      {network ? <NetworkInfo name={network.name} slug={network.key} /> : null}
      {walletConnected ? (
        <WalletInfo
          wallets={[
            {
              id: 'eth',
              balance: ethBalance.toFixed(4),
              currencyIcon: <EthereumIcon />
            },
            {
              id: 'polk',
              balance: formatNumberToString(polkBalance),
              currencyIcon: <PolkamarketsIconSmall />
            }
          ]}
          address={walletAddress}
        />
      ) : (
        <Button
          variant="outline"
          color="default"
          size="sm"
          aria-label="Connect MetaMask"
          onClick={handleConnectWallet}
        >
          <MetaMaskIconSmall />
          Connect MetaMask
        </Button>
      )}
    </div>
  );
}

export default NavBarActions;
