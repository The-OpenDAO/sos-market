import dayjs from 'dayjs';
import reverse from 'lodash/reverse';
import times from 'lodash/times';

import { markets } from './mock';

type Market = typeof markets[0];

function formatMarketAnalytics(market: Market, colored: boolean) {
  const marketAnalytics = [
    {
      title: 'Liquidity',
      value: `${market?.liquidity || 0} DOT`,
      color: colored ? 'yellow' : 'default'
    },
    {
      title: 'Volume (24H)',
      value: `${market?.volume || 0} DOT`,
      color: colored ? 'blue' : 'default'
    },
    {
      title: 'Fractions',
      value: `${market?.fractions || 0}`,
      color: colored ? 'pink' : 'default'
    },
    {
      title: 'Expiration',
      value: market?.expiration || '',
      color: colored ? 'orange' : 'default'
    }
  ];

  return marketAnalytics;
}

function generateRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

function formatMarketHead(market: Market) {
  const marketHead = {
    imageUrl: `../${market?.imageUrl}` || '',
    section: market?.section || '',
    subsection: market?.subsection || '',
    description: market?.description || ''
  };

  return marketHead;
}

function generateMarketChartRandomData(size: number) {
  let currentIndex = 0;

  const data = times(size, () => {
    const currentTime = dayjs().subtract(currentIndex, 'minute');
    const currentValue = generateRandomNumberBetween(1.0, 1.5);

    const currentEvent = {
      x: currentTime,
      y: [
        currentValue,
        currentValue + 1,
        currentValue - 1,
        currentValue + Math.round(Math.random()) * 2 - 1
      ]
    };
    currentIndex += 1;

    return currentEvent;
  });

  return reverse(data);
}

export {
  formatMarketAnalytics,
  formatMarketHead,
  generateMarketChartRandomData
};
