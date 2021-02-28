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
        title: 'Sports',
        count: 68,
        icon: <SoccerBallIcon />
      },
      {
        title: 'Gaming',
        count: 56,
        icon: <GamingConsoleIcon />
      },
      {
        title: 'Politics',
        count: 39,
        icon: <WhiteHouseIcon />
      },
      {
        title: 'Finance',
        count: 27,
        icon: <ChartGrowthIcon />
      },
      {
        title: 'Crypto',
        count: 27,
        icon: <BitcoinIcon />
      },
      {
        title: 'Weather',
        count: 9,
        icon: <SunFogIcon />
      }
    ]
  }
};

export default sidebarLinks;
