import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PolkamarketsIcon, MetaMaskIcon, SettingsIcon } from 'assets/icons';
import { SearchBar, Button, InterfaceSettings } from 'components';

const NavBar = () => {
  const [showInterfaceSettings, setShowInterfaceSettings] = useState(false);

  function toggleInterfaceSettings() {
    setShowInterfaceSettings(!showInterfaceSettings);
  }

  return (
    <nav className="navbar">
      <figure className="navbar__icon">
        <PolkamarketsIcon />
      </figure>
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
        <Button variant="default" icon={<MetaMaskIcon />} iconPosition="left">
          Connect Wallet
        </Button>
        <Button
          variant="default"
          icon={<SettingsIcon />}
          iconPosition="center"
          onClick={() => toggleInterfaceSettings()}
        />
      </div>
    </nav>
  );
};

export default NavBar;
