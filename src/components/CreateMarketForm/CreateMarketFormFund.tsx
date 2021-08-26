import { useField } from 'formik';
import { roundDown, roundNumber } from 'helpers/math';

import { InfoIcon } from 'assets/icons';

import { useAppSelector } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import { AlertMini } from '../Alert';
import AmountInput from '../AmountInput';
import Link from '../Link';
import Text from '../Text';
import Tooltip from '../Tooltip';

function CreateMarketFormFund() {
  const currency = useCurrency();
  const [field, meta, helpers] = useField('liquidity');

  const balance = useAppSelector(state => state.bepro.ethBalance);

  function handleChangeAmount(amount: number) {
    helpers.setValue(amount);
  }

  return (
    <div className="pm-c-create-market-form__card">
      <Text
        as="h5"
        scale="body"
        fontWeight="medium"
        className="pm-c-create-market-form__card-title"
      >
        Fund Market
      </Text>
      <AlertMini
        variant="information"
        styles="outline"
        description={
          <>
            {`Providing liquidity is risky and could result in near total loss. It is important to withdraw liquidity before the event occurs and to be aware the market could move abruptly at any time. `}
            <Link
              title="More Info"
              href="//www.polkamarkets.com"
              aria-label="More Info"
              target="_blank"
              rel="noreferrer"
              scale="tiny"
              fontWeight="medium"
            />
          </>
        }
      />
      <AmountInput
        label="Add Liquidity"
        max={roundDown(balance)}
        currency={currency}
        onChange={handleChangeAmount}
      />
      <div className="pm-c-create-market-form__card-liquidity-details">
        <div className="pm-c-create-market-form__card-liquidity-details__group">
          <div className="pm-c-create-market-form__card-liquidity-details__liquidity-value">
            <Text
              as="span"
              scale="caption"
              fontWeight="semibold"
              className="pm-c-create-market-form__card-liquidity-details__liquidity-value__title"
            >
              Liquidity Value
              <Tooltip text="Help text" position="top">
                <InfoIcon />
              </Tooltip>
            </Text>

            <Text
              as="span"
              scale="caption"
              fontWeight="semibold"
              className="pm-c-create-market-form__card-liquidity-details__liquidity-value__amount"
            >
              {`${roundNumber(0, 3)} ${currency.symbol}`}
            </Text>
          </div>
          <div className="pm-c-create-market-form__card-liquidity-details__shares-added">
            <Text
              as="span"
              scale="tiny"
              fontWeight="semibold"
              className="pm-c-create-market-form__card-liquidity-details__shares-added__title"
            >
              Est. Liquidity Shares Added
            </Text>

            <Text
              as="span"
              scale="tiny"
              fontWeight="semibold"
              className="pm-c-create-market-form__card-liquidity-details__shares-added__amount"
            >
              {roundNumber(0, 3)}
            </Text>
          </div>
        </div>
        <hr className="pm-c-create-market-form__card-liquidity-details__separator" />

        <div className="pm-c-create-market-form__card-liquidity-details__earn-trading-fee">
          <Text
            as="span"
            scale="caption"
            fontWeight="semibold"
            className="pm-c-create-market-form__card-liquidity-details__earn-trading-fee__title"
          >
            Earn Trading Fee
            <Tooltip text="Help text" position="top">
              <InfoIcon />
            </Tooltip>
          </Text>

          <Text
            as="span"
            scale="caption"
            fontWeight="semibold"
            className="pm-c-create-market-form__card-liquidity-details__earn-trading-fee__amount"
          >
            {`${roundNumber(0, 3)} %`}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default CreateMarketFormFund;
