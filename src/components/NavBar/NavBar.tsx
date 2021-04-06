import { Link } from 'react-router-dom';

import { PolkamarketsIcon, MetaMaskIcon, SettingsIcon } from 'assets/icons';

import Button from '../Button';
import Menu from '../Menu';
import SearchBar from '../SearchBar';

function NavBar() {
  return (
    <nav className="navbar sticky">
      <Link to="/home" aria-label="Polkamarkets home">
        <figure className="navbar__icon">
          <PolkamarketsIcon />
        </figure>
      </Link>
      <SearchBar />
      <Menu>
        <Menu.Item key="howitworks">
          <Link to="/howitworks">How It Works</Link>
        </Menu.Item>
        <Menu.Item key="faq">
          <Link to="/faq">FAQ</Link>
        </Menu.Item>
      </Menu>
      <div className="navbar__actions">
        <Button color="default" aria-label="Connect Wallet">
          <MetaMaskIcon />
          Connect Wallet
        </Button>
        <Button color="default" aria-label="Settings">
          <SettingsIcon />
        </Button>
      </div>
    </nav>
  );
}

NavBar.displayName = 'NavBar';

export default NavBar;
