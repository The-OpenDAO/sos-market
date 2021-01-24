import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from 'styles/layout/Navbar.module.scss';

import { Button, SearchBar } from 'components/base';
import { PolkamarketsLogo, MetaMaskIcon } from 'assets/icons';

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
    </div>
  );
}

export default Navbar;
