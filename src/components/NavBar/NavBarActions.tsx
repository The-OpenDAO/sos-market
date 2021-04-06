import { MetaMaskIcon, SettingsIcon } from 'assets/icons';

import Button from '../Button';

function NavBarActions() {
  return (
    <div className="navbar__actions">
      <Button color="default" aria-label="Connect Wallet">
        <MetaMaskIcon />
        Connect Wallet
      </Button>
      <Button color="default" aria-label="Settings">
        <SettingsIcon />
      </Button>
    </div>
  );
}

NavBarActions.displayName = 'NavBarActions';

export default NavBarActions;
