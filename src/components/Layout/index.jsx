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
      <main className={styles.main}>
        <section className={styles.vertical}>
          <SideBar />
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
