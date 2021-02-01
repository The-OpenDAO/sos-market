import React from 'react';
import { NavLink } from 'react-router-dom';

import { PolkamarketsLogo, MetaMaskIcon, SettingsIcon } from 'assets/icons';

import Button from '../Button';

import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <PolkamarketsLogo />
      </div>
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
        <div className={styles.actions}>
          <Button
            variant="secondary"
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
            aria-label="Settings"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
