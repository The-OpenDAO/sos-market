import {
  SoccerBallIcon,
  GamingConsoleIcon,
  WhiteHouseIcon,
  ExploreIcon,
  BitcoinIcon,
  TwitterIcon,
  MediumIcon,
  TelegramIcon,
  LinkedInIcon,
  GitHubIcon
} from 'assets/icons';

const navigationLinks = {
  markets: {
    title: 'Markets',
    items: [
      {
        name: 'Crypto',
        count: 27,
        icon: <BitcoinIcon />,
        to: 'crypto'
      },
      {
        name: 'Gaming',
        count: 56,
        icon: <GamingConsoleIcon />,
        to: 'gaming'
      },
      {
        name: 'Sports',
        count: 68,
        icon: <SoccerBallIcon />,
        to: 'sports'
      },
      {
        name: 'Politics',
        count: 39,
        icon: <WhiteHouseIcon />,
        to: 'politics'
      },
      {
        name: 'Other',
        count: 9,
        icon: <ExploreIcon />,
        to: 'other'
      }
    ]
  }
};

const footerLinks = [
  {
    name: 'Polkamarkets Twitter',
    url: 'https://twitter.com/polkamarkets',
    icon: <TwitterIcon />
  },
  {
    name: 'Polkamarkets Medium',
    url: 'https://polkamarkets.medium.com/',
    icon: <MediumIcon />
  },
  {
    name: 'Polkamarkets Telegram',
    url: 'https://t.me/polkamarkets',
    icon: <TelegramIcon />
  },
  {
    name: 'Polkamarkets LinkedIn',
    url: 'https://www.linkedin.com/company/polkamarkets',
    icon: <LinkedInIcon />
  },
  {
    name: 'Polkamarkets GitHub',
    url: 'https://github.com/Polkamarkets',
    icon: <GitHubIcon />
  }
];

export { navigationLinks, footerLinks };
