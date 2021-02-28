import React from 'react';

import {
  SoccerBallIcon,
  GamingConsoleIcon,
  WhiteHouseIcon,
  ChartGrowthIcon,
  BitcoinIcon,
  SunFogIcon
} from 'assets/icons';

const sidebarLinks = {
  markets: {
    title: 'Markets',
    items: [
      {
        name: 'Sports',
        count: 68,
        icon: <SoccerBallIcon />,
        to: 'sports'
      },
      {
        name: 'Gaming',
        count: 56,
        icon: <GamingConsoleIcon />,
        to: 'gaming'
      },
      {
        name: 'Politics',
        count: 39,
        icon: <WhiteHouseIcon />,
        to: 'politics'
      },
      {
        name: 'Finance',
        count: 27,
        icon: <ChartGrowthIcon />,
        to: 'finance'
      },
      {
        name: 'Crypto',
        count: 27,
        icon: <BitcoinIcon />,
        to: 'crypto'
      },
      {
        name: 'Weather',
        count: 9,
        icon: <SunFogIcon />,
        to: 'weather'
      }
    ]
  }
};

export default sidebarLinks;
