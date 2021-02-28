import React from 'react';

import NavBar from 'components/NavBar';
import Sidebar from 'components/Sidebar';
import LandingHeader from 'components/LandingHeader';

import styles from 'styles/components/Layout.module.scss';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <LandingHeader />
      <main className={styles.main}>
        <section className={styles.vertical}>
          <Sidebar />
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
