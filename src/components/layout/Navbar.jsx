import React from 'react';

import styles from 'styles/layout/Navbar.module.scss';

import { PolkamarketsLogo } from 'assets/icons';

import { SearchBar } from 'components/base';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <PolkamarketsLogo />
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;
