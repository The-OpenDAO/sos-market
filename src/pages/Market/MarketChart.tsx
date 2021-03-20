import React, { useState, useMemo } from 'react';

import clx from 'classnames';

import { CandleStickChartIcon, LineChartIcon } from 'assets/icons';

import { CandleStickChart, Text } from 'components';

import { generateMarketChartRandomData } from './utils';

const intervalsInMinutes = {
  '1H': 60,
  '12H': 120,
  '1D': 120,
  '1M': 120
};

const views = [
  {
    name: 'candlestick',
    icon: <CandleStickChartIcon />
  },
  {
    name: 'line',
    icon: <LineChartIcon />
  }
];

const MarketChart = () => {
  const [interval, setInterval] = useState('1H');
  const [view, setView] = useState('candlestick');

  const randomMarketChartData = useMemo(
    () => generateMarketChartRandomData(intervalsInMinutes[interval]),
    [interval]
  );

  function handleChangeInterval(event: React.MouseEvent<HTMLButtonElement>) {
    const { value } = event.currentTarget;

    setInterval(value);
  }

  function handleChangeView(event: React.MouseEvent<HTMLButtonElement>) {
    const { value } = event.currentTarget;

    setView(value);
  }

  return (
    <div className="market-chart">
      <div className="market-chart__header">
        <Text
          className="market-chart__header-title"
          as="h2"
          scale="body"
          fontWeight="semibold"
        >
          Market Overview
        </Text>
        <div className="market-chart__header-actions">
          <div className="market-chart__header-actions__interval">
            {Object.keys(intervalsInMinutes).map(key => (
              <button
                key={key}
                className={clx({
                  'market-chart__header-actions__interval-item': true,
                  active: key === interval
                })}
                type="button"
                value={key}
                onClick={event => handleChangeInterval(event)}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="market-chart__header-actions__view">
            {views.map(key => (
              <button
                key={key.name}
                className={clx({
                  'market-chart__header-actions__view-item': true,
                  active: key.name === view
                })}
                type="button"
                value={key.name}
                onClick={event => handleChangeView(event)}
              >
                {key.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="market-chart__view">
        <CandleStickChart serie={randomMarketChartData} height={288} />
      </div>
    </div>
  );
};

export default MarketChart;
