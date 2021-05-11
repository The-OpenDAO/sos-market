import dayjs from 'dayjs';
import { roundNumber } from 'helpers/math';
import { Market, Outcome } from 'models/market';
import { Portfolio } from 'models/portfolio';

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
    'Shares',
    'Value',
    'Max. Payout',
    ''
  ];

  const rows: any[] = [];

  // looping through outcomes array and showing positions where user holds shares
  markets.forEach((market: Market) => {
    market.outcomes.forEach((outcome: Outcome) => {
      if (portfolio[market.id]?.outcomes[outcome.id]?.shares) {
        const priceChart = outcome.priceCharts.find(
          chart => chart.timeframe === '24h'
        );
        const shares = portfolio[market.id]?.outcomes[outcome.id]?.shares;
        const price = {
          value: outcome.price,
          change: {
            type:
              !priceChart?.changePercent || priceChart?.changePercent > 0
                ? 'up'
                : 'down',
            value: roundNumber(
              Math.abs(priceChart?.changePercent || 0) * 100,
              2
            )
          }
        };
        const buyPrice = portfolio[market.id]?.outcomes[outcome.id]?.price;
        const profit = {
          value: (outcome.price - buyPrice) * shares,
          change: {
            type: buyPrice <= outcome.price ? 'up' : 'down',
            // eslint-disable-next-line prettier/prettier
            value: roundNumber(
              (Math.abs(outcome.price - buyPrice) / buyPrice) * 100,
              2
            )
          }
        };
        const value =
          portfolio[market.id]?.outcomes[outcome.id]?.shares * outcome.price;
        const maxPayout = portfolio[market.id]?.outcomes[outcome.id]?.shares;
        let result = { type: 'pending' };
        if (market.state === 'closed') {
          result = { type: 'awaiting_resolution' };
        } else if (
          // user holds shares of winning outcome
          market.state === 'resolved' &&
          portfolio[market.id]?.claimStatus.winningsToClaim &&
          !portfolio[market.id]?.claimStatus.winningsClaimed
        ) {
          // user already claimed winnings of winning outcome
          result = { type: 'awaiting_claim' };
        } else if (
          // user holds shares of winning outcome
          market.state === 'resolved' &&
          portfolio[market.id]?.claimStatus.winningsClaimed
        ) {
          result = { type: 'claimed' };
        } else if (
          // user holds shares of winning outcome
          market.state === 'resolved' &&
          !portfolio[market.id]?.claimStatus.winningsToClaim
        ) {
          result = { type: 'lost' };
        }

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
    if (portfolio[market.id]?.liquidity?.shares) {
      const shares = portfolio[market.id]?.liquidity?.shares;
      const buyPrice = portfolio[market.id]?.liquidity?.price;
      const poolShare = shares / market.liquidity;
      const feesEarned = 'In Progress';
      let result = { type: 'pending' };
      const value = {
        value: shares * market.liquidityPrice,
        change: {
          type: buyPrice <= market.liquidityPrice ? 'up' : 'down',
          value: Math.abs(market.liquidityPrice - buyPrice) / buyPrice
        }
      };
      if (market.state === 'closed') {
        result = { type: 'awaiting_resolution' };
      } else if (
        // user holds shares of winning outcome
        market.state === 'resolved' &&
        portfolio[market.id]?.claimStatus.liquidityToClaim &&
        !portfolio[market.id]?.claimStatus.liquidityClaimed
      ) {
        // user already claimed winnings of winning outcome
        result = { type: 'awaiting_claim' };
      } else if (
        // user holds shares of winning outcome
        market.state === 'resolved' &&
        portfolio[market.id]?.claimStatus.liquidityClaimed
      ) {
        result = { type: 'claimed' };
      }

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

function formatPortfolioAnalytics(portfolio: Portfolio, ticker: string) {
  return [
    {
      title: 'Total earnings',
      value: `${roundNumber(portfolio.closedMarketsProfit, 3)} ${ticker}`,
      change: {
        type: 'up',
        amount: 2.58
      },
      backgroundColor: 'yellow',
      chartData: generateChartRandomData()
    },
    {
      title: 'Open positions',
      value: portfolio.openPositions,
      change: {
        type: 'down',
        amount: 2.58
      },
      backgroundColor: 'blue',
      chartData: generateChartRandomData()
    },
    {
      title: 'Liquidity provided',
      value: `${roundNumber(portfolio.liquidityProvided, 3)} ${ticker}`,
      change: {
        type: 'up',
        amount: 2.58
      },
      backgroundColor: 'pink',
      chartData: generateChartRandomData()
    },
    {
      title: 'Liquidity earnings',
      value: 'In Progress',
      change: {
        type: 'up',
        amount: 2.58
      },
      backgroundColor: 'orange',
      chartData: generateChartRandomData()
    }
  ];
}

export {
  formatMarketPositions,
  formatLiquidityPositions,
  formatPortfolioAnalytics,
  generateRandomNumberBetween,
  generateChartRandomData
};
