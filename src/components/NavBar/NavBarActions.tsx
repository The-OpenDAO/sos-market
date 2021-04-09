import { MetaMaskIcon, PolkadotIcon, SettingsIcon } from 'assets/icons';

import { Button } from '../Button';
import WalletInfo from '../WalletInfo';

function NavBarActions() {
  const walletConnected = true;

  return (
    <div className="navbar__actions">
      {walletConnected ? (
        <WalletInfo
          balance={0}
          currencyIcon={<PolkadotIcon />}
          address="0xC857Bd392eE052E31Ce89F50aFB8315839D1dF43"
        />
      ) : (
        <Button color="default" aria-label="Connect Wallet">
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
