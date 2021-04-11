import { fetchWallet } from 'redux/ducks/bepro';
import { BeproService } from 'services';

import { MetaMaskIcon, PolkadotIcon, SettingsIcon } from 'assets/icons';

import { useAppDispatch, useAppSelector } from 'hooks';

import { Button } from '../Button';
import WalletInfo from '../WalletInfo';

function NavBarActions() {
  const dispatch = useAppDispatch();
  const beproService = new BeproService();

  const walletConnected = useAppSelector(state => state.bepro.isLoggedIn);
  const walletAddress = useAppSelector(state => state.bepro.ethAddress);
  const walletBalance = useAppSelector(state => state.bepro.ethBalance);

  const handleConnectWallet = async () => {
    await beproService.login();
    fetchWallet(dispatch);
  };

  return (
    <div className="navbar__actions">
      {walletConnected ? (
        <WalletInfo
          balance={walletBalance}
          currencyIcon={<PolkadotIcon />}
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

      <Button color="default" aria-label="Settings">
        <SettingsIcon />
      </Button>
    </div>
  );
}

NavBarActions.displayName = 'NavBarActions';

export default NavBarActions;
