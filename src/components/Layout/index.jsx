import React from 'react';

import Navbar from 'components/Navbar';

import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <aside />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
