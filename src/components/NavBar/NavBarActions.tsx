import { fetchWallet } from 'redux/ducks/bepro';
import { BeproService } from 'services';

import { AddIcon, MetaMaskIcon } from 'assets/icons';

import { useAppDispatch, useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import { Button } from '../Button';
import Tooltip from '../Tooltip';
import WalletInfo from '../WalletInfo';

function NavBarActions() {
  const { icon } = useCurrency();
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
      <Tooltip text="Create market">
        <Button color="default" aria-label="Settings">
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  );
}

NavBarActions.displayName = 'NavBarActions';

export default NavBarActions;
