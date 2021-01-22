import React from 'react';

import styles from 'styles/layout/Navbar.module.scss';

import PolkamarketsLogo from 'assets/icons';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <PolkamarketsLogo />
      </div>
    </div>
  );
}

export default Navbar;
