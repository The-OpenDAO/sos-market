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
        icon: <SoccerBallIcon />
      },
      {
        name: 'Gaming',
        count: 56,
        icon: <GamingConsoleIcon />
      },
      {
        name: 'Politics',
        count: 39,
        icon: <WhiteHouseIcon />
      },
      {
        name: 'Finance',
        count: 27,
        icon: <ChartGrowthIcon />
      },
      {
        name: 'Crypto',
        count: 27,
        icon: <BitcoinIcon />
      },
      {
        name: 'Weather',
        count: 9,
        icon: <SunFogIcon />
      }
    ]
  }
};

export default sidebarLinks;
