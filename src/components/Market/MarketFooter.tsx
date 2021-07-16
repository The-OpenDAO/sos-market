import dayjs from 'dayjs';
import { roundNumber } from 'helpers/math';
import inRange from 'lodash/inRange';
import { Market } from 'models/market';

import Pill, { PillColor, PillVariant } from '../Pill';
import Text from '../Text';

type MarketState = {
  copy: 'Awaiting Resolution' | 'Ending Soon' | 'New' | 'Resolved';
  color: PillColor;
  colorVariant: PillVariant;
};

type MarketStates = {
  [key: string]: MarketState;
};

const marketStates: MarketStates = {
  awaitingResolution: {
    copy: 'Awaiting Resolution',
    color: 'warning',
    colorVariant: 'normal'
  },
  endingSoon: { copy: 'Ending Soon', color: 'danger', colorVariant: 'subtle' },
  new: { copy: 'New', color: 'success', colorVariant: 'subtle' },
  resolved: { copy: 'Resolved', color: 'success', colorVariant: 'normal' }
};

type MarketFooterProps = {
  market: Market;
  ticker: string;
};

function MarketFooter({ market, ticker }: MarketFooterProps) {
  const { volume, createdAt, expiresAt, liquidity, state } = market;

  const isAwaitingResolution = state === 'closed';
  const isEndingSoon = inRange(dayjs().diff(dayjs(expiresAt), 'hours'), -24, 1);
  const isNew = inRange(dayjs(createdAt).diff(dayjs(), 'hours'), -24, 1);
  const isResolved = state === 'resolved';

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
              {`${roundNumber(volume, 3)} ${ticker}`}
            </Text>
          </Text>
        ) : null}
        {expiresAt ? (
          <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
            {`Expiration: `}
            <Text as="strong" scale="tiny-uppercase" fontWeight="semibold">
              {dayjs(expiresAt).format('YYYY-MM-DD')}
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
      <div className="pm-c-market-footer__actions">
        {isAwaitingResolution ? (
          <Pill
            color={marketStates.awaitingResolution.color}
            variant={marketStates.awaitingResolution.colorVariant}
            badge
          >
            {marketStates.awaitingResolution.copy}
          </Pill>
        ) : null}
        {isEndingSoon ? (
          <Pill
            color={marketStates.endingSoon.color}
            variant={marketStates.endingSoon.colorVariant}
            badge
          >
            {marketStates.endingSoon.copy}
          </Pill>
        ) : null}
        {isNew ? (
          <Pill
            color={marketStates.new.color}
            variant={marketStates.new.colorVariant}
            badge
          >
            {marketStates.new.copy}
          </Pill>
        ) : null}
        {isResolved ? (
          <Pill
            color={marketStates.resolved.color}
            variant={marketStates.resolved.colorVariant}
            badge
          >
            {marketStates.resolved.copy}
          </Pill>
        ) : null}
      </div>
    </div>
  );
}

MarketFooter.displayName = 'MarketFooter';

export default MarketFooter;
