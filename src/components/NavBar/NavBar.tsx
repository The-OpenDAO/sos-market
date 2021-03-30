import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { PolkamarketsIcon, MetaMaskIcon, SettingsIcon } from 'assets/icons';

import Button from '../Button';
import InterfaceSettings from '../InterfaceSettings';
import Menu from '../Menu';
import SearchBar from '../SearchBar';

const NavBar = () => {
  const [showInterfaceSettings, setShowInterfaceSettings] = useState(false);

  function toggleInterfaceSettings() {
    setShowInterfaceSettings(!showInterfaceSettings);
  }

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
        <InterfaceSettings open={showInterfaceSettings} />
        <Button color="default" aria-label="Connect Wallet">
          <MetaMaskIcon />
          Connect Wallet
        </Button>
        <Button
          color="default"
          onClick={() => toggleInterfaceSettings()}
          aria-label="Settings"
        >
          <SettingsIcon />
        </Button>
      </div>
    </nav>
  );
};

NavBar.displaName = 'NavBar';

export default NavBar;
