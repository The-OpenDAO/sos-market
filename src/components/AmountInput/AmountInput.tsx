import React, { useState } from 'react';

import { WalletIcon, PolkadotIcon } from 'assets/icons';

import Text from '../Text';

type AmountInputProps = {
  label: string;
  max: number;
};

const AmountInput = ({ label, max }: AmountInputProps) => {
  const [amount, setAmount] = useState(max);

  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    setAmount(parseFloat(value) || 0);
  }

  function handleSetMaxAmount() {
    setAmount(max);
  }

  return (
    <form className="amount-input">
      <div className="amount-input__header">
        <label className="amount-input__header-label" htmlFor={label}>
          {label}
        </label>
        <div className="amount-input__header-wallet">
          <figure aria-label="Wallet icon">
            <WalletIcon />
          </figure>
          <Text as="strong" scale="tiny" fontWeight="semibold">
            {max}
          </Text>
          <Text as="span" scale="tiny" fontWeight="semibold">
            DOT
          </Text>
        </div>
      </div>
      <div className="amount-input__group">
        <input
          className="amount-input__input"
          type="number"
          id={label}
          value={amount}
          step=".0001"
          min={0}
          max={max}
          onChange={event => handleChangeAmount(event)}
        />
        <div className="amount-input__actions">
          <button type="button" onClick={() => handleSetMaxAmount()}>
            <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
              Max
            </Text>
          </button>
          <div className="amount-input__logo">
            <figure aria-label="Polkadot logo">
              <PolkadotIcon />
            </figure>
            <Text as="span" scale="caption" fontWeight="bold">
              DOT
            </Text>
          </div>
        </div>
      </div>
    </form>
  );
};

AmountInput.displayName = 'Amount input';

export default AmountInput;
