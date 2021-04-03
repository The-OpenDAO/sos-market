const categories = [
  {
    title: 'Crypto',
    change: {
      type: 'up',
      percentage: 2.58
    },
    color: 'yellow'
  },
  {
    title: 'Sports',
    change: {
      type: 'up',
      percentage: 2.58
    },
    color: 'blue'
  },
  {
    title: 'Finance',
    change: {
      type: 'down',
      percentage: 2.58
    },
    color: 'green'
  },
  {
    title: 'eSports',
    change: {
      type: 'up',
      percentage: 2.58
    },
    color: 'pink'
  },
  {
    title: 'Tech',
    change: {
      type: 'down',
      percentage: 2.58
    },
    color: 'orange'
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
        }
      },
      {
        id: '11fewrf',
        name: 'Astralis',
        odd: 0.26,
        oddChange: {
          type: 'down'
        }
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
        }
      },
      {
        id: '12aSASas',
        name: 'No',
        odd: 0.26,
        oddChange: {
          type: 'up'
        }
      }
    ]
  },
  {
    id: 2,
    section: 'Crypto',
    subsection: 'ALTS',
    imageUrl: 'images/image03.png',
    description:
      'Which project will have a higher market cap by February 26th 12pm UTC? ADA or DOT?',
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
        }
      },
      {
        id: '13asadada',
        name: 'DOT',
        odd: 0.26,
        oddChange: {
          type: 'down'
        }
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
        }
      },
      {
        id: '14asdewqref',
        name: 'Gane',
        odd: 0.26,
        oddChange: {
          type: 'down'
        }
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
        }
      },
      {
        id: '15adacAA',
        name: 'No',
        odd: 0.26,
        oddChange: {
          type: 'up'
        }
      }
    ]
  }
];

export { categories, markets };
