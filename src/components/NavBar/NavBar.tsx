import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { PolkamarketsIcon, MetaMaskIcon, SettingsIcon } from 'assets/icons';

import Button from '../Button';
import InterfaceSettings from '../InterfaceSettings';
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
      <ul className="navbar-menu">
        <li className="navbar-menu__item">
          <NavLink exact to="/howitworks">
            How It Works
          </NavLink>
        </li>
        <li className="navbar-menu__item">
          <NavLink to="/faq">FAQ</NavLink>
        </li>
      </ul>
      <div className="navbar-menu__actions">
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
