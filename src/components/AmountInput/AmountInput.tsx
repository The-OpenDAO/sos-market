import React, { useState, useEffect } from 'react';

import { WalletIcon } from 'assets/icons';

// import StepSlider from '../StepSlider';
import Text from '../Text';

type AmountInputProps = {
  label: string;
  max: number;
  onChange: (value: number) => void;
  currency: any;
};

function round(value) {
  return Math.floor(value * 1e5) / 1e5;
}

function AmountInput({ label, max, onChange, currency }: AmountInputProps) {
  const [amount, setAmount] = useState(max);

  useEffect(() => {
    onChange(max);
    setAmount(max);
  }, [max, onChange]);

  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { value } = event.currentTarget;

    const roundedAmount = round(parseFloat(value) || 0);

    setAmount(roundedAmount);
    onChange(roundedAmount);
  }

  function handleSetMaxAmount() {
    const roundedMax = round(max);

    setAmount(roundedMax);
    onChange(roundedMax);
  }

  // function handleChangeSlider(value: number) {
  //   const percentage = value / 100;

  //   setAmount(round(percentage * amount));
  // }

  return (
    <form className="pm-c-amount-input">
      <div className="pm-c-amount-input__header">
        <label className="tiny semibold text-light-gray" htmlFor={label}>
          {label}
        </label>
        <div className="pm-c-amount-input__header-wallet">
          <figure aria-label="Wallet">
            <WalletIcon />
          </figure>
          <Text as="strong" scale="tiny" fontWeight="semibold" color="light">
            {max}
          </Text>
          <Text as="span" scale="tiny" fontWeight="semibold" color="gray">
            {currency.ticker}
          </Text>
        </div>
      </div>
      <div className="pm-c-amount-input__group">
        <input
          className="pm-c-amount-input__input"
          type="number"
          id={label}
          value={amount}
          step=".0001"
          min={0}
          max={max}
          onChange={event => handleChangeAmount(event)}
        />
        <div className="pm-c-amount-input__actions">
          <button type="button" onClick={handleSetMaxAmount}>
            <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
              Max
            </Text>
          </button>
          <div className="pm-c-amount-input__logo">
            {currency.icon ? (
              <figure aria-label={currency.name}>{currency.icon}</figure>
            ) : null}
            <Text as="span" scale="caption" fontWeight="bold">
              {currency.ticker}
            </Text>
          </div>
        </div>
      </div>
      {/* <StepSlider onChange={value => handleChangeSlider(value)} /> */}
    </form>
  );
}

AmountInput.displayName = 'AmountInput';

export default AmountInput;
