import React from 'react';

import isEmpty from 'lodash/isEmpty';

import Text from '../Text';

type ColorVariant = 'yellow' | 'blue' | 'green' | 'pink' | 'orange';

type DirectionVariant = 'row' | 'column';

type AnalyticsItem = {
  title: string;
  value: string | number;
  color: ColorVariant | string;
};

type MarketAnalyticsProps = {
  direction?: DirectionVariant;
  items: AnalyticsItem[];
};

const MarketAnalytics = ({
  direction = 'row',
  items
}: MarketAnalyticsProps) => {
  if (isEmpty(items)) return null;

  return (
    <div className="market-analytics">
      <ul className={`market-analytics__group--${direction}`}>
        {items?.map(item => (
          <li
            key={item.title}
            className={`market-analytics__item--${item.color}`}
          >
            <Text
              className="market-analytics__item-title"
              as="h2"
              scale="tiny-uppercase"
              fontWeight="bold"
            >
              {item.title}
            </Text>
            <Text
              className="market-analytics__item-value"
              as="p"
              scale="body"
              fontWeight="semibold"
            >
              {item.value}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

MarketAnalytics.displayName = 'Market analytics';

export default MarketAnalytics;
