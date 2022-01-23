import dayjs from 'dayjs';
import { roundNumber } from 'helpers/math';
import { Market } from 'models/market';

import Text from '../Text';

type MarketFooterStatsProps = {
  market: Market;
  ticker: string;
};

function MarketFooterStats({ market, ticker }: MarketFooterStatsProps) {
  const { id, volume, expiresAt, liquidity } = market;
  return (
    <div className="pm-c-market-footer__stats">
      {id && (
        <Text
          as="span"
          scale="tiny-uppercase"
          fontWeight="semibold"
          color="gray"
        >
          {`ID: `}
          <Text
            as="strong"
            scale="tiny-uppercase"
            fontWeight="semibold"
            color="lighter-gray"
          >
            {id}
          </Text>
        </Text>
      )}
      {volume ? (
        <Text
          as="span"
          scale="tiny-uppercase"
          fontWeight="semibold"
          color="gray"
        >
          {`Volume: `}
          <Text
            as="strong"
            scale="tiny-uppercase"
            fontWeight="semibold"
            color="lighter-gray"
          >
            {`${roundNumber(volume, 3)} ${ticker}`}
          </Text>
        </Text>
      ) : null}
      {expiresAt ? (
        <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
          {`Expiration: `}
          <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
            {dayjs(expiresAt).utc().format('YYYY-MM-DD HH:mm UTC')}
          </Text>
        </Text>
      ) : null}
      {liquidity ? (
        <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
          {`Liquidity: `}
          <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
            {`${roundNumber(liquidity, 3)} ${ticker}`}
          </Text>
        </Text>
      ) : null}
    </div>
  );
}

export default MarketFooterStats;
