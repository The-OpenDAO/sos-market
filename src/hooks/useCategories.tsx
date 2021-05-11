import { Category } from 'models/category';

import {
  SoccerBallIcon,
  GamingConsoleIcon,
  WhiteHouseIcon,
  BitcoinIcon,
  SunFogIcon
} from 'assets/icons';

import { generateChartRandomData } from 'pages/Portfolio/utils';

const categories: Category[] = [
  {
    title: 'Crypto',
    backgroundColor: 'yellow',
    icon: <BitcoinIcon />,
    chartData: generateChartRandomData(),
    change: {
      type: 'up',
      amount: 0
    }
  },
  {
    title: 'Gaming',
    backgroundColor: 'pink',
    icon: <GamingConsoleIcon />,
    chartData: generateChartRandomData(),
    change: {
      type: 'up',
      amount: 0
    }
  },
  {
    title: 'Sports',
    backgroundColor: 'orange',
    icon: <SoccerBallIcon />,
    chartData: generateChartRandomData(),
    change: {
      type: 'up',
      amount: 0
    }
  },
  {
    title: 'Politics',
    backgroundColor: 'green',
    icon: <WhiteHouseIcon />,
    chartData: generateChartRandomData(),
    change: {
      type: 'up',
      amount: 0
    }
  },
  {
    title: 'Weather',
    backgroundColor: 'blue',
    icon: <SunFogIcon />,
    chartData: generateChartRandomData(),
    change: {
      type: 'up',
      amount: 0
    }
  }
];

function useCategories() {
  return categories;
}

export default useCategories;
