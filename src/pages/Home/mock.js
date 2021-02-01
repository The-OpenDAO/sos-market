const tabs = [
  { name: 'Open', content: null },
  { name: 'In-Reporting', content: null },
  { name: 'Resolved', content: null }
];

const markets = [
  {
    id: 0,
    section: 'Politics',
    subsection: 'USA',
    label: {
      enabled: true,
      title: 'Trending',
      variant: 'pink'
    },
    imageUrl: 'images/image01.png',
    description:
      'Will Joe Biden be inaugurated as President of the USA on January 20th, 2021?',
    volume: 23.045,
    expiration: 'March 2, 2021',
    liked: false
  },
  {
    id: 1,
    section: 'Politics',
    subsection: 'USA',
    label: {
      enabled: false
    },
    imageUrl: 'images/image02.png',
    description: 'Which party will control the senate?',
    volume: 9.025,
    expiration: 'August 11, 2021',
    liked: false
  },
  {
    id: 2,
    section: 'Politics',
    subsection: 'USA',
    label: {
      enabled: true,
      title: 'Ends Soon',
      variant: 'warning'
    },
    imageUrl: 'images/image03.png',
    description:
      'Will an official Presidential inauguration take place in-person outside the US Capitol on January 20th, 2021?',
    volume: 73.055,
    expiration: 'April 24, 2021',
    liked: true
  },
  {
    id: 3,
    section: 'Politics',
    subsection: 'USA',
    label: {
      enabled: false
    },
    imageUrl: 'images/image04.png',
    description: 'Will Donald Trump pardon Julian Assange?',
    volume: 23.045,
    expiration: 'June 3, 2021',
    liked: false
  },
  {
    id: 3,
    section: 'Politics',
    subsection: 'USA',
    label: {
      enabled: false
    },
    imageUrl: 'images/image05.png',
    description: 'Will Trump Pardon Himself in His First Term?',
    volume: 23.045,
    expiration: 'October 14, 2021',
    liked: false
  }
];

export { tabs, markets };
