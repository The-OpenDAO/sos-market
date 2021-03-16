const markets = [
  {
    id: 0,
    section: 'Esports',
    subsection: 'CS:GO',
    label: {
      enabled: true,
      title: 'Trending',
      variant: 'pink'
    },
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
        id: 0,
        name: 'Virtus.pro',
        odd: 0.26,
        positive: true
      },
      {
        id: 1,
        name: 'Astralis',
        odd: 0.26,
        positive: false
      }
    ]
  },
  {
    id: 1,
    section: 'Crypto',
    subsection: 'BITCOIN',
    label: {
      enabled: false
    },
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
        id: 0,
        name: 'Yes',
        odd: 0.26,
        positive: false
      },
      {
        id: 1,
        name: 'No',
        odd: 0.26,
        positive: true
      }
    ]
  },
  {
    id: 2,
    section: 'Crypto',
    subsection: 'ALTS',
    label: {
      enabled: true,
      title: 'Ends Soon',
      variant: 'warning'
    },
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
        id: 0,
        name: 'ADA',
        odd: 0.26,
        positive: true
      },
      {
        id: 1,
        name: 'DOT',
        odd: 0.26,
        positive: false
      }
    ]
  },
  {
    id: 3,
    section: 'Esports',
    subsection: 'APEX LEGENDS',
    label: {
      enabled: false
    },
    imageUrl: 'images/image04.png',
    description: 'Who will win February 28th UFC Fight Night in Las Vegas?',
    volume: 125,
    expiration: 'Feb 26, 2021 - 12:00PM UTC',
    liquidity: 428,
    fractions: 458,
    favorite: true,
    options: [
      {
        id: 0,
        name: 'Rozenstruik',
        odd: 0.26,
        positive: true
      },
      {
        id: 1,
        name: 'Gane',
        odd: 0.26,
        positive: false
      }
    ]
  },
  {
    id: 4,
    section: 'Esports',
    subsection: 'APEX LEGENDS',
    label: {
      enabled: false
    },
    imageUrl: 'images/image05.png',
    description: 'Will CES be virtual again in 2022?',
    volume: 6.143,
    expiration: 'Feb 26, 2021 - 12:00PM UTC',
    liquidity: 428,
    fractions: 458,
    favorite: true,
    options: [
      {
        id: 0,
        name: 'Yes',
        odd: 0.26,
        positive: false
      },
      {
        id: 1,
        name: 'No',
        odd: 0.26,
        positive: true
      }
    ]
  }
];

export default markets;
