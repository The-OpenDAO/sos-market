import dayjs from 'dayjs';
import { Market, Outcome } from 'models/market';

function generateRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

function generateChartRandomData(reverse = false) {
  let currentIndex = 0;

  let values = [3, 4, 4.5, 6, 8, 8.1, 10, 11, 12, 13.5, 14].map(
    x => x * generateRandomNumberBetween(2, 12)
  );

  if (reverse) {
    values = values
      .reverse()
      .map(x => x / generateRandomNumberBetween(2, values.length));
  }

  const data = values.map(value => {
    const currentTime = dayjs().add(currentIndex, 'minute');

    const currentEvent = {
      x: currentTime,
      y: value / 10
    };
    currentIndex += 1;

    return currentEvent;
  });

  return data;
}

function formatMarketPositions(portfolio: Object, markets: Market[]) {
  const headers = [
    'Market',
    'Outcome',
    'Price (24h)',
    'Profit/Loss',
    'Value',
    'Shares',
    'Max. Payout',
    ''
  ];

  const rows: any[] = [];

  // looping through outcomes array and showing positions where user holds shares
  markets.forEach((market: Market) => {
    market.outcomes.forEach((outcome: Outcome) => {
      if (portfolio[market.id]?.outcomeShares[outcome.id]) {
        const price = {
          value: outcome.price,
          change: {
            type: 'up',
            value: 2.8
          }
        };
        const profit = {
          value: 'TO DO',
          change: {
            type: 'down',
            value: 2.8
          }
        };
        const value =
          portfolio[market.id]?.outcomeShares[outcome.id] * outcome.price;
        const shares = portfolio[market.id]?.outcomeShares[outcome.id];
        const maxPayout = portfolio[market.id]?.outcomeShares[outcome.id];
        const result = { type: 'pending' };

        rows.push({
          market,
          outcome,
          price,
          value,
          profit,
          shares,
          maxPayout,
          result
        });
      }
    });
  });

  return { headers, rows };
}

function formatLiquidityPositions(portfolio: Object, markets: Market[]) {
  const headers = [
    'Market',
    'Shares',
    'Value',
    'Pool Share',
    'Fees Earned',
    ''
  ];

  const rows: any[] = [];

  // looping through outcomes array and showing positions where user holds shares
  markets.forEach((market: Market) => {
    if (portfolio[market.id]?.liquidityShares) {
      const value = {
        value: 'TO DO',
        change: {
          type: 'down',
          value: 2.8
        }
      };
      const shares = portfolio[market.id]?.liquidityShares;
      const poolShare = shares / market.liquidity;
      const feesEarned = 'In Progress';
      const result = { type: 'pending' };

      rows.push({
        market,
        value,
        shares,
        poolShare,
        feesEarned,
        result
      });
    }
  });

  return { headers, rows };
}

export {
  formatMarketPositions,
  formatLiquidityPositions,
  generateRandomNumberBetween,
  generateChartRandomData
};
