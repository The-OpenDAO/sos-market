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
    <nav className="navbar">
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
        <Button
          variant="default"
          icon={<MetaMaskIcon />}
          iconPosition="left"
          aria-label="Connect Wallet"
        >
          Connect Wallet
        </Button>
        <Button
          variant="default"
          icon={<SettingsIcon />}
          iconPosition="center"
          onClick={() => toggleInterfaceSettings()}
          aria-label="Settings"
        />
      </div>
    </nav>
  );
};

NavBar.displaName = 'NavBar';

export default NavBar;
