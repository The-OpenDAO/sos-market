import React from 'react';

import Categories from 'components/Categories';

import {
  SoccerBallIcon,
  GamingConsoleIcon,
  WhiteHouseIcon,
  PopcornIcon,
  ChartGrowthIcon,
  BitcoinIcon,
  AlienIcon,
  SunFogIcon,
  UsersIcon,
  TwitterIcon,
  LaptopIcon
} from 'assets/icons';

import styles from 'styles/components/SideBar.module.scss';

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

const allCategories = [
  {
    name: 'Space',
    amount: 68,
    icon: <AlienIcon />,
    active: false
  },
  {
    name: 'Weather',
    amount: 56,
    icon: <SunFogIcon />,
    active: false
  },
  {
    name: 'Celebrities',
    amount: 39,
    icon: <UsersIcon />,
    active: false
  },
  {
    name: 'Twitter',
    amount: 27,
    icon: <TwitterIcon />,
    active: false
  },
  {
    name: 'Tech',
    amount: 9,
    icon: <LaptopIcon />,
    active: false
  },
  {
    name: '+ SHOW MORE (24)',
    amount: '',
    icon: null,
    active: false
  }
];

function SideBar() {
  return (
    <div className={styles.container}>
      <Categories title="Popular Categories" items={popularCategories} />
      <Categories title="All Categories" items={allCategories} />
    </div>
  );
}

export default SideBar;
