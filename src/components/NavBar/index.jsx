import React from 'react';
import { NavLink } from 'react-router-dom';

import { PolkamarketsLogo, MetaMaskIcon, SettingsIcon } from 'assets/icons';

import Button from '../Button';
import SearchBar from '../SearchBar';

import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.container}>
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
    </nav>
  );
}

export default NavBar;
