import { generateChartRandomData } from 'pages/Portfolio/utils';

const categories = [
  {
    title: 'Crypto',
    route: 'crypto',
    change: {
      type: 'up',
      amount: 2.58
    },
    backgroundColor: 'yellow',
    chartData: generateChartRandomData()
  },
  {
    title: 'Gaming',
    route: 'gaming',
    change: {
      type: 'down',
      amount: 2.58
    },
    backgroundColor: 'pink',
    chartData: generateChartRandomData()
  }
];

const categoriesDisabled = [
  {
    title: 'Sports'
  },
  {
    title: 'Politics',
    info: 'Coming Soon'
  },
  {
    title: 'Tech'
  }
];

const markets = [
  {
    id: 0,
    section: 'Esports',
    subsection: 'CS:GO',
    imageUrl: 'images/image01.png',
    description:
      'Who will win CS:GO Intel Extreme Masters - Katowice 2021 Quarter-final?',
    volume: 9.025,
    expiration: 'Feb 26, 2021 - 12:00PM UTC',
    liquidity: 428,
    fractions: 458,
    favorite: false,
    options: [
      {
        id: '01asa',
        name: 'Virtus.pro',
        odd: 0.26,
        oddChange: {
          type: 'up'
        },
        pricePerFraction: 0
      },
      {
        id: '11fewrf',
        name: 'Astralis',
        odd: 0.26,
        oddChange: {
          type: 'down'
        },
        pricePerFraction: 0
      }
    ]
  },
  {
    id: 1,
    section: 'Crypto',
    subsection: 'BITCOIN',
    imageUrl: 'images/image02.png',
    description:
      'Will Bitcoin price close above $50K by February 26th 12pm UTC?',
    volume: 10.589,
    expiration: 'Feb 26, 2021 - 12:00PM UTC',
    liquidity: 428,
    fractions: 458,
    favorite: true,
    options: [
      {
        id: '02fsdfsda',
        name: 'Yes',
        odd: 0.26,
        oddChange: {
          type: 'down'
        },
        pricePerFraction: 0
      },
      {
        id: '12aSASas',
        name: 'No',
        odd: 0.26,
        oddChange: {
          type: 'up'
        },
        pricePerFraction: 0
      }
    ]
  },
  {
    id: 2,
    section: 'Crypto',
    subsection: 'ALTS',
    imageUrl: 'images/image03.png',
    description:
      'Which project will have a higher market cap by February 26th 12pm UTC? ADA or ETH?',
    volume: 509,
    expiration: 'Feb 26, 2021 - 12:00PM UTC',
    liquidity: 428,
    fractions: 458,
    favorite: false,
    options: [
      {
        id: '0313w121',
        name: 'ADA',
        odd: 0.26,
        oddChange: {
          type: 'up'
        },
        pricePerFraction: 0
      },
      {
        id: '13asadada',
        name: 'ETH',
        odd: 0.26,
        oddChange: {
          type: 'down'
        },
        pricePerFraction: 0
      }
    ]
  },
  {
    id: 3,
    section: 'Esports',
    subsection: 'APEX LEGENDS',
    imageUrl: 'images/image04.png',
    description: 'Who will win February 28th UFC Fight Night in Las Vegas?',
    volume: 125,
    expiration: 'Feb 26, 2021 - 12:00PM UTC',
    liquidity: 428,
    fractions: 458,
    favorite: true,
    options: [
      {
        id: '04therge',
        name: 'Rozenstruik',
        odd: 0.26,
        oddChange: {
          type: 'up'
        },
        pricePerFraction: 0
      },
      {
        id: '14asdewqref',
        name: 'Gane',
        odd: 0.26,
        oddChange: {
          type: 'down'
        },
        pricePerFraction: 0
      }
    ]
  },
  {
    id: 4,
    section: 'Esports',
    subsection: 'APEX LEGENDS',
    imageUrl: 'images/image05.png',
    description: 'Will CES be virtual again in 2022?',
    volume: 6.143,
    expiration: 'Feb 26, 2021 - 12:00PM UTC',
    liquidity: 428,
    fractions: 458,
    favorite: true,
    options: [
      {
        id: '05q2eqdsad',
        name: 'Yes',
        odd: 0.26,
        oddChange: {
          type: 'down'
        },
        pricePerFraction: 0
      },
      {
        id: '15adacAA',
        name: 'No',
        odd: 0.26,
        oddChange: {
          type: 'up'
        },
        pricePerFraction: 0
      }
    ]
  }
];

export { categories, categoriesDisabled, markets };
