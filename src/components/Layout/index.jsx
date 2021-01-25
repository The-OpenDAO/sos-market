import React from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import LandingHeader from 'components/LandingHeader';

import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <LandingHeader />
      <aside>
        <SideBar />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
