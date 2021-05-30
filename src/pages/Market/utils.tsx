/* eslint-disable react/display-name */
import React from 'react';

import dayjs from 'dayjs';
import { fromTimestampToDate } from 'helpers/date';
import { roundNumber } from 'helpers/math';
import reverse from 'lodash/reverse';
import times from 'lodash/times';
import { Market } from 'models/market';

import { ShareIcon } from 'assets/icons';

import { Badge, Pill, Text } from 'components';

function generateRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

function generateMarketChartRandomData(size: number) {
  let currentIndex = 0;

  const data = times(size, () => {
    const currentTime = dayjs().subtract(currentIndex, 'minute');
    const currentValue = generateRandomNumberBetween(1.0, 1.5);

    const currentEvent = {
      x: currentTime,
      y: currentValue
    };
    currentIndex += 1;

    return currentEvent;
  });

  return reverse(data);
}

type ItemAlign = 'left' | 'center' | 'right';

type Column = {
  title: string;
  key: string;
  align: ItemAlign;
};

type Row = {
  key: string;
  outcome: { value: React.ReactNode; align: ItemAlign };
  date: { value: React.ReactNode; align: ItemAlign };
  price: { value: React.ReactNode; align: ItemAlign };
  shares: { value: number; align: ItemAlign };
  value: { value: React.ReactNode; align: ItemAlign };
  tradeType: { value: React.ReactNode; align: ItemAlign };
  transactionHash: { value: React.ReactNode; align: ItemAlign };
};

function formatMarketPositions(actions: [], market: Market, ticker: string) {
  const columns: Column[] = [
    { title: 'Outcome', key: 'outcome', align: 'left' },
    { title: 'Date', key: 'date', align: 'right' },
    { title: 'Price', key: 'price', align: 'right' },
    { title: 'Shares', key: 'shares', align: 'right' },
    { title: 'Total Value', key: 'value', align: 'right' },
    { title: 'Trade Type', key: 'tradeType', align: 'center' },
    { title: 'TX', key: 'transactionHash', align: 'right' }
  ];

  const actionColorReducer = action => {
    switch (action) {
      case 'Buy':
        return { color: 'success', variant: 'subtle' };
      case 'Sell':
        return { color: 'danger', variant: 'subtle' };
      case 'Add Liquidity':
        return { color: 'primary', variant: 'subtle' };
      case 'Remove Liquidity':
        return { color: 'primary', variant: 'subtle' };
      case 'Claim Winnings':
        return { color: 'success', variant: 'normal' };
      default:
        return { color: 'default', variant: 'normal' };
    }
  };

  const rows: Row[] = actions.reverse().map((action: any, index: number) => {
    const key = index.toString();
    const outcome =
      action.action === 'Buy' ||
      action.action === 'Sell' ||
      action.action === 'Claim Winnings'
        ? market.outcomes[action.outcomeId]?.title
        : null;
    const date = fromTimestampToDate(action.timestamp * 1000).format(
      'YYYY/MM/DD'
    );
    const utcTime = fromTimestampToDate(action.timestamp * 1000).format(
      'h:mm A'
    );
    const actionColor = actionColorReducer(action.action);
    const price = `${roundNumber(action.value / action.shares, 3)}`;
    const shares = roundNumber(action.shares, 3);
    const value = `${roundNumber(action.value, 3)}`;
    const tradeType = action.action;
    const { transactionHash } = action;

    return {
      key,
      outcome: {
        value: outcome ? (
          <Badge
            color={
              market.outcomes[0].id === action.outcomeId ? 'purple' : 'pink'
            }
            label={`${outcome}`}
          />
        ) : null,
        align: 'center'
      },
      date: {
        value: (
          <Text
            as="span"
            scale="caption"
            fontWeight="semibold"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {date}
            <Text as="strong" scale="caption" fontWeight="semibold">
              {utcTime}
            </Text>
          </Text>
        ),
        align: 'right'
      },
      price: {
        value: (
          <Text as="span" scale="caption" fontWeight="semibold">
            {price}
            <Text as="strong" scale="caption" fontWeight="semibold">
              {` ${ticker}`}
            </Text>
          </Text>
        ),
        align: 'right'
      },
      shares: {
        value: shares,
        align: 'right'
      },
      value: {
        value: (
          <Text as="span" scale="caption" fontWeight="semibold">
            {value}
            <Text as="strong" scale="caption" fontWeight="semibold">
              {` ${ticker}`}
            </Text>
          </Text>
        ),
        align: 'right'
      },
      tradeType: {
        value: (
          <Pill color={actionColor.color} variant={actionColor.variant}>
            {tradeType}
          </Pill>
        ),
        align: 'center'
      },
      transactionHash: {
        value: (
          <a
            target="_blank"
            href={`https://kovan.etherscan.io/tx/${transactionHash}`}
            rel="noreferrer"
          >
            <ShareIcon />
          </a>
        ),
        align: 'right'
      }
    };
  });

  return { columns, rows };
}

export { formatMarketPositions, generateMarketChartRandomData };
