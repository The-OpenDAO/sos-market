import dayjs from 'dayjs';
import { useField } from 'formik';
import { relativeTimeFromNow } from 'helpers/date';
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

  const decisionAt = '2021-06-30T16:00:00.000+00:00';

  // TO DO: create helper to format as 'dd mm ss'
  const timeLeftUntilDecision = relativeTimeFromNow(
    dayjs(decisionAt).valueOf()
  );

  return (
    <AmountInput
      name="bond"
      label="Time left until decision"
      max={polkBalance}
      currency={POLK}
      customHeaderItem={
        <Text as="strong" className="pm-c-report-form-input__header-time-left">
          {timeLeftUntilDecision}
        </Text>
      }
    />
  );
}

export default ReportFormInput;
