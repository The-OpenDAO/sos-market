import React from 'react';

import Navbar from 'components/Navbar';
import Categories from 'components/Categories';

import styles from './Layout.module.scss';

const popularCategories = [
  {
    name: 'Sports',
    amount: 125
  },
  {
    name: 'eSports',
    amount: 112
  },
  {
    name: 'Politics',
    amount: 108
  },
  {
    name: 'Entertaiment',
    amount: 95
  },
  {
    name: 'Finance',
    amount: 85
  },
  {
    name: 'Crypto',
    amount: 74
  }
];

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <aside>
        <Categories title="Popular Categories" items={popularCategories} />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
