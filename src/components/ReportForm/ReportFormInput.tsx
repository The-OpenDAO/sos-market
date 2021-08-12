import { relativeTimeToX } from 'helpers/date';
import { Currency } from 'models/currency';

import { PolkamarketsIconSmall } from 'assets/icons';

import { useAppSelector } from 'hooks';

import { AmountInput } from '../Input';
import Text from '../Text';

const POLK: Currency = {
  name: 'Polkamarkets',
  ticker: 'POLK',
  icon: <PolkamarketsIconSmall />,
  symbol: 'P'
};

function ReportFormInput() {
  const { polkBalance } = useAppSelector(state => state.bepro);
  const { finalizeTs } = useAppSelector(state => state.market.market.question);

  const isValidTimestamp = new Date(finalizeTs * 1000).getTime() > new Date().getTime();
  const timeLeftUntilDecision = relativeTimeToX(finalizeTs * 1000);

  // TODO: fetch question if now > finalizeTs

  return (
    <AmountInput
      name="bond"
      label={isValidTimestamp ? 'Time left until market resolves' : ''}
      max={polkBalance}
      currency={POLK}
      customHeaderItem={
        isValidTimestamp ? (
          <div className="pm-c-report-form-input__header-time-left">
            {timeLeftUntilDecision.months > 0 ? (
              <Text as="strong">
                {timeLeftUntilDecision.months}
                <Text as="span">M</Text>
              </Text>
            ) : null}
            {timeLeftUntilDecision.days > 0 ? (
              <Text as="strong">
                {timeLeftUntilDecision.days}
                <Text as="span">D</Text>
              </Text>
            ) : null}
            <Text as="strong">
              {timeLeftUntilDecision.hours}
              <Text as="span">H</Text>
            </Text>
            <Text as="strong">
              {timeLeftUntilDecision.minutes}
              <Text as="span">M</Text>
            </Text>
          </div>
        ) : (
          <></>
        )
      }
    />
  );
}

export default ReportFormInput;
