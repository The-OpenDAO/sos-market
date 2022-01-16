import { Category } from 'models/category';

import {
  SoccerBallIcon,
  GamingConsoleIcon,
  WhiteHouseIcon,
  BitcoinIcon,
  ExploreIcon
} from 'assets/icons';

import { generateChartRandomData } from 'pages/Portfolio/utils';

const categories: Category[] = [
  {
    title: 'NFT',
    backgroundColor: 'blue',
    icon: <ExploreIcon />,
    chartData: generateChartRandomData(),
    change: {
      type: 'up',
      amount: 0
    }
  },
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
  }
];

function useCategories() {
  return categories;
}

export default useCategories;
