import { generateChartRandomData } from './utils';

const portfolioAnalytics = [
  {
    title: 'Total earnings',
    value: '23.485 ETH',
    change: {
      type: 'up',
      amount: 2.58
    },
    backgroundColor: 'yellow',
    chartData: generateChartRandomData()
  },
  {
    title: 'Open positions',
    value: 12,
    change: {
      type: 'down',
      amount: 2.58
    },
    backgroundColor: 'blue',
    chartData: generateChartRandomData()
  },
  {
    title: 'Liquidity provided',
    value: '42.058 ETH',
    change: {
      type: 'up',
      amount: 2.58
    },
    backgroundColor: 'pink',
    chartData: generateChartRandomData()
  },
  {
    title: 'Liquidity earnings',
    value: '2.485 ETH',
    change: {
      type: 'up',
      amount: 2.58
    },
    backgroundColor: 'orange',
    chartData: generateChartRandomData()
  }
];

const balance = {
  total: 48.485,
  change: {
    type: 'up',
    percentage: 8.91,
    amount: '+2.498'
  }
};

const markets = [
  {
    id: '0',
    imageUrl: 'images/image01.png',
    description:
      'Who will win CS:GO Intel Extreme Masters - Katowice 2021 Quarter-final?',
    price: {
      value: '1.248 ETH',
      change: {
        type: 'up',
        value: 2.8
      }
    },
    profit: {
      value: '0.126 ETH',
      change: {
        type: 'down',
        value: 0.24
      }
    },
    fractions: 389,
    maxPayout: '2.584 ETH',
    result: {
      type: 'lost'
    }
  },
  {
    id: '1',
    imageUrl: 'images/image02.png',
    description:
      'Will Bitcoin price close above $50K by February 26th 12pm UTC?',
    price: {
      value: '1.248 ETH',
      change: {
        type: 'up',
        value: 2.8
      }
    },
    profit: {
      value: '0.126 ETH',
      change: {
        type: 'down',
        value: 0.24
      }
    },
    fractions: 389,
    maxPayout: '2.584 ETH',
    result: {
      type: 'won'
    }
  },
  {
    id: '2',
    imageUrl: 'images/image03.png',
    description:
      'Which project will have a higher market cap by February 26th 12pm UTC? ADA or ETH?',
    price: {
      value: '1.248 ETH',
      change: {
        type: 'up',
        value: 2.8
      }
    },
    profit: {
      value: '0.126 ETH',
      change: {
        type: 'down',
        value: 0.24
      }
    },
    fractions: 389,
    maxPayout: '2.584 ETH',
    result: {
      type: 'lost'
    }
  },
  {
    id: '3',
    imageUrl: 'images/image04.png',
    description: 'Who will win February 28th UFC Fight Night in Las Vegas?',
    price: {
      value: '1.248 ETH',
      change: {
        type: 'up',
        value: 2.8
      }
    },
    profit: {
      value: '0.126 ETH',
      change: {
        type: 'down',
        value: 0.24
      }
    },
    fractions: 389,
    maxPayout: '2.584 ETH',
    result: {
      type: 'pending'
    }
  },
  {
    id: '4',
    imageUrl: 'images/image05.png',
    description:
      'Will Bitcoin price close above $50K by February 26th 12pm UTC?',
    price: {
      value: '1.248 ETH',
      change: {
        type: 'up',
        value: 2.8
      }
    },
    profit: {
      value: '0.126 ETH',
      change: {
        type: 'down',
        value: 0.24
      }
    },
    fractions: 389,
    maxPayout: '2.584 ETH',
    result: {
      type: 'pending'
    }
  }
];

export { portfolioAnalytics, balance, markets };
