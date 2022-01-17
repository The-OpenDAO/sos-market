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
        name: 'NFT',
        count: 9,
        icon: <ExploreIcon />,
        to: 'nft'
      },
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
      }
    ]
  }
};

const footerLinks = [
  {
    name: 'SOSMarket Twitter',
    url: 'https://twitter.com/SOSMarket',
    icon: <TwitterIcon />
  },
  {
    name: 'SOSMarket Medium',
    url: 'https://SOSMarket.medium.com/',
    icon: <MediumIcon />
  },
  // {
  //   name: 'SOSMarket Telegram',
  //   url: 'https://t.me/SOSMarket',
  //   icon: <TelegramIcon />
  // },
  // {
  //   name: 'SOSMarket LinkedIn',
  //   url: 'https://www.linkedin.com/company/SOSMarket',
  //   icon: <LinkedInIcon />
  // },
  {
    name: 'SOSMarket GitHub',
    url: 'https://github.com/The-OpenDAO',
    icon: <GitHubIcon />
  }
];

export { navigationLinks, footerLinks };
