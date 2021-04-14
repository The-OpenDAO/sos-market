import { Market } from 'models/market';

import Text from '../Text';

type MarketFooterProps = {
  market: Market;
  ticker: string;
};

function MarketFooter({ market, ticker }: MarketFooterProps) {
  const { volume, expiresAt, liquidity } = market;
  return (
    <div className="pm-c-market-footer">
      <div className="pm-c-market-footer__stats">
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
              {`${volume} ${ticker}`}
            </Text>
          </Text>
        ) : null}
        {expiresAt ? (
          <Text
            as="span"
            scale="tiny-uppercase"
            fontWeight="semibold"
            color="gray"
          >
            {`Expiration: `}
            <Text
              as="strong"
              scale="tiny-uppercase"
              fontWeight="semibold"
              color="lighter-gray"
            >
              {expiresAt}
            </Text>
          </Text>
        ) : null}
        {liquidity ? (
          <Text
            as="span"
            scale="tiny-uppercase"
            fontWeight="semibold"
            color="gray"
          >
            {`Liquidity: `}
            <Text
              as="strong"
              scale="tiny-uppercase"
              fontWeight="semibold"
              color="lighter-gray"
            >
              {`${liquidity} ${ticker}`}
            </Text>
          </Text>
        ) : null}
      </div>
    </div>
  );
}

MarketFooter.displayName = 'MarketFooter';

export default MarketFooter;
