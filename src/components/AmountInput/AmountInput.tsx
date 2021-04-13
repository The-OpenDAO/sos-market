import React, { useState } from 'react';

import { WalletIcon } from 'assets/icons';

import useCurrency from 'hooks/useCurrency';

// import StepSlider from '../StepSlider';
import Text from '../Text';

type AmountInputProps = {
  label: string;
  max: number;
};

function AmountInput({ label, max }: AmountInputProps) {
  const [amount, setAmount] = useState(max);
  const { name, ticker, icon } = useCurrency();

  function round(value) {
    return Math.floor(value * 1e5) / 1e5;
  }

  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    let { value }: any = event.currentTarget;
    value = parseFloat(value) || 0;

    setAmount(round(value));
  }

  function handleSetMaxAmount() {
    setAmount(round(max));
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
            {ticker}
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
            <figure aria-label={name}>{icon}</figure>
            <Text as="span" scale="caption" fontWeight="bold">
              {ticker}
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
