import dayjs from 'dayjs';

import { Card, MiniAreaChart, Text } from 'components';

type PriceEvent = {
  x: dayjs.Dayjs;
  y: number;
};

type MarketStatsProps = {
  price: number;
  dayChangePercentage: number;
  weekChangePercentage: number;
  lastWeekPrices: PriceEvent[];
};

function MarketStats({
  price,
  dayChangePercentage,
  weekChangePercentage,
  lastWeekPrices
}: MarketStatsProps) {
  return (
    <div className="pm-market__stats">
      <Card
        className="pm-market__stats-item"
        size="lg"
        title={
          <Text
            as="label"
            scale="tiny-uppercase"
            fontWeight="bold"
            color="gray"
          >
            Price
          </Text>
        }
      >
        <Text as="p" scale="body" fontWeight="semibold" color="light">
          {`$ ${price}`}
        </Text>
      </Card>
      <Card
        className="pm-market__stats-item"
        size="lg"
        title={
          <Text
            as="label"
            scale="tiny-uppercase"
            fontWeight="bold"
            color="gray"
          >
            24H %
          </Text>
        }
      >
        <Text as="p" scale="body" fontWeight="semibold" color="danger">
          {`${dayChangePercentage}%`}
        </Text>
      </Card>
      <Card
        className="pm-market__stats-item"
        size="lg"
        title={
          <Text
            as="label"
            scale="tiny-uppercase"
            fontWeight="bold"
            color="gray"
          >
            7D %
          </Text>
        }
      >
        <Text as="p" scale="body" fontWeight="semibold" color="success">
          {`${weekChangePercentage}%`}
        </Text>
      </Card>
      <Card
        className="pm-market__stats-item"
        size="lg"
        title={
          <Text
            as="label"
            scale="tiny-uppercase"
            fontWeight="bold"
            color="gray"
          >
            Last 7 days
          </Text>
        }
        bodyJustify="flex-end"
      >
        <MiniAreaChart serie={lastWeekPrices} height={30} />
      </Card>
    </div>
  );
}

MarketStats.displayName = 'MarketStats';

export default MarketStats;
