import React from 'react';

import Navbar from 'components/Navbar';
import Categories from 'components/Categories';

import {
  SoccerBallIcon,
  GamingConsoleIcon,
  WhiteHouseIcon,
  PopcornIcon,
  ChartGrowthIcon,
  BitcoinIcon
} from 'assets/icons';

import styles from './Layout.module.scss';

const popularCategories = [
  {
    name: 'Sports',
    amount: 125,
    icon: <SoccerBallIcon />,
    active: false
  },
  {
    name: 'eSports',
    amount: 112,
    icon: <GamingConsoleIcon />,
    active: true
  },
  {
    name: 'Politics',
    amount: 108,
    icon: <WhiteHouseIcon />,
    active: false
  },
  {
    name: 'Entertaiment',
    amount: 95,
    icon: <PopcornIcon />,
    active: false
  },
  {
    name: 'Finance',
    amount: 85,
    icon: <ChartGrowthIcon />,
    active: false
  },
  {
    name: 'Crypto',
    amount: 74,
    icon: <BitcoinIcon />,
    active: false
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
