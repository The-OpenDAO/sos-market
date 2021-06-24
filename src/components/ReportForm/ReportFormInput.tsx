import { useField } from 'formik';
import { Currency } from 'models/currency';

import { PolkamarketsIconSmall } from 'assets/icons';

import { useAppSelector } from 'hooks';

import AmountInput from '../AmountInput';

const POLK: Currency = {
  name: 'Polkamarkets',
  ticker: 'POLK',
  icon: <PolkamarketsIconSmall />,
  symbol: 'P'
};

function ReportFormInput() {
  const [field, meta, helpers] = useField('bond');
  const { polkBalance } = useAppSelector(state => state.bepro);

  function handleChangeAmount(amount: number) {
    helpers.setValue(amount);
  }

  return (
    <AmountInput
      label="Time left until decision"
      max={polkBalance}
      currency={POLK}
      onChange={handleChangeAmount}
    />
  );
}

export default ReportFormInput;
