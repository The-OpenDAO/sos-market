import { InfoIcon } from 'assets/icons';

import useCurrency from 'hooks/useCurrency';

import Text from '../Text';
import Tooltip from '../Tooltip';

function LiquidityFormDetails() {
  const currency = useCurrency();

  const totalStake = 10;
  const liquidityValue = 5.11;
  const liquiditySharesAdded = 5.86;
  const outcome = 'Manchester City';
  const outcomeSharesValue = 5.11;
  const outcomeSharesReceived = 5.86;

  const outcomeColorCondition = true;

  return (
    <div className="pm-c-liquidity-form__details">
      <div className="pm-c-liquidity-form__details-total-stake">
        <Text
          as="span"
          scale="body"
          fontWeight="semibold"
          color="lighter-gray-50"
        >
          Total Stake
        </Text>

        <Text
          as="span"
          scale="body"
          fontWeight="semibold"
          color="lighter-gray-50"
        >
          {`${totalStake} ${currency.symbol}`}
        </Text>
      </div>

      <hr className="pm-c-liquidity-form__details-separator" />

      <div className="pm-c-liquidity-form__details-group">
        <div className="pm-c-liquidity-form__details-liquidity-value">
          <Text
            as="span"
            scale="caption"
            fontWeight="semibold"
            color="lighter-gray-50"
          >
            Liquidity Value
            <Tooltip text="Example" position="top">
              <InfoIcon />
            </Tooltip>
          </Text>

          <Text
            as="span"
            scale="body"
            fontWeight="semibold"
            color="lighter-gray-50"
          >
            {`${liquidityValue} ${currency.symbol}`}
          </Text>
        </div>
        <div className="pm-c-liquidity-form__details-shares-added">
          <Text as="span" scale="tiny" fontWeight="semibold" color="gray">
            Est. Liquidity Shares Added
          </Text>

          <Text as="span" scale="tiny" fontWeight="semibold" color="gray">
            {liquiditySharesAdded}
          </Text>
        </div>
      </div>

      <hr className="pm-c-liquidity-form__details-separator" />

      <div className="pm-c-liquidity-form__details-outcome">
        <Text
          as="span"
          scale="caption"
          fontWeight="semibold"
          color="lighter-gray-50"
        >
          Outcome
        </Text>

        <Text
          as="span"
          scale="caption"
          fontWeight="semibold"
          color="lighter-gray-50"
        >
          <div
            className={`pm-c-liquidity-form__details-outcome-marker--${
              outcomeColorCondition ? 'primary' : 'secondary'
            }`}
          />
          {outcome}
        </Text>
      </div>

      <div className="pm-c-liquidity-form__details-group">
        <div className="pm-c-liquidity-form__details-outcome-shares-value">
          <Text
            as="span"
            scale="caption"
            fontWeight="semibold"
            color="lighter-gray-50"
          >
            Outcome Shares Value
            <Tooltip text="Example" position="top">
              <InfoIcon />
            </Tooltip>
          </Text>

          <Text
            as="span"
            scale="body"
            fontWeight="semibold"
            color="lighter-gray-50"
          >
            {`${outcomeSharesValue} ${currency.symbol}`}
          </Text>
        </div>
        <div className="pm-c-liquidity-form__details-shares-received">
          <Text as="span" scale="tiny" fontWeight="semibold" color="gray">
            Est. Outcome Shares Received
          </Text>

          <Text as="span" scale="tiny" fontWeight="semibold" color="gray">
            {outcomeSharesReceived}
          </Text>
        </div>
      </div>
    </div>
  );
}

LiquidityFormDetails.displayName = 'LiquidityFormDetails';

export default LiquidityFormDetails;
