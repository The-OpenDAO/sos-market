import {
  SoccerBallIcon,
  GamingConsoleIcon,
  WhiteHouseIcon,
  ChartGrowthIcon,
  BitcoinIcon,
  SunFogIcon,
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
        name: 'Sports',
        count: 68,
        icon: <SoccerBallIcon />,
        to: 'sports'
      },
      {
        name: 'Gaming',
        count: 56,
        icon: <GamingConsoleIcon />,
        to: 'gaming'
      },
      {
        name: 'Politics',
        count: 39,
        icon: <WhiteHouseIcon />,
        to: 'politics'
      },
      {
        name: 'Finance',
        count: 27,
        icon: <ChartGrowthIcon />,
        to: 'finance'
      },
      {
        name: 'Crypto',
        count: 27,
        icon: <BitcoinIcon />,
        to: 'crypto'
      },
      {
        name: 'Weather',
        count: 9,
        icon: <SunFogIcon />,
        to: 'weather'
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
