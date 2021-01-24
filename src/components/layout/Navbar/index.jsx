import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, SearchBar } from 'components/base';
import { PolkamarketsLogo, MetaMaskIcon, SettingsIcon } from 'assets/icons';

import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <PolkamarketsLogo />
      </div>
      <SearchBar />
      <div className={styles.header}>
        <ul className={styles.menu}>
          <li>
            <NavLink className={styles.item} exact to="/markets">
              Markets
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.item} to="/portfolio">
              Porfolio
            </NavLink>
          </li>
          <div className={styles.separator} />
          <ul className={styles.menu}>
            <li>
              <NavLink className={styles.item} exact to="/howitworks">
                How It Works
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.item} to="/faq">
                FAQ
              </NavLink>
            </li>
          </ul>
        </ul>
      </div>
      <Button variant="default" icon={<MetaMaskIcon />} iconPosition="left">
        Connect Wallet
      </Button>
      <Button
        variant="secondary"
        icon={<SettingsIcon />}
        iconPosition="center"
      />
    </div>
  );
}

export default Navbar;
