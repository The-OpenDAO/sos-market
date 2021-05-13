import dayjs from 'dayjs';
import { fromTimestampToDate } from 'helpers/date';
import { roundNumber } from 'helpers/math';
import reverse from 'lodash/reverse';
import times from 'lodash/times';
import { Market } from 'models/market';

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

function formatMarketActions(actions: [], market: Market, ticker: string) {
  const columns = [
    { title: 'Date', key: 'date' },
    { title: 'Outcome', key: 'outcome' },
    { title: 'Trade Type', key: 'tradeType' },
    { title: 'Shares', key: 'shares' },
    { title: 'Price', key: 'price' },
    { title: 'Value', key: 'value' }
  ];

  const rows = actions.reverse().map((action: any, index: number) => {
    const key = index.toString();
    const date = fromTimestampToDate(action.timestamp * 1000).format(
      'YYYY-MM-DD'
    );
    const outcome =
      action.action === 'Buy' ||
      action.action === 'Sell' ||
      action.action === 'Claim Winnings'
        ? market.outcomes[action.outcomeId]?.title
        : null;
    const tradeType = action.action;
    const shares = roundNumber(action.shares, 3);
    const price = `${roundNumber(action.value / action.shares, 3)} ${ticker}`;
    const value = `${roundNumber(action.value, 3)} ${ticker}`;

    return {
      key,
      date,
      outcome,
      tradeType,
      shares,
      price,
      value
    };
  });

  return { columns, rows };
}

export { formatMarketActions, generateMarketChartRandomData };
