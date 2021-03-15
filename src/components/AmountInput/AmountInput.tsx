import React, { useState } from 'react';

import { PolkadotIcon } from 'assets/icons';

import Text from '../Text';
import Button from '../Button';

interface Props {
  label: string;
  max: number;
}

const AmountInput = ({ label, max }: Props) => {
  const [amount, setAmount] = useState(max);

  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    setAmount(parseFloat(value) || 0);
  }

  return (
    <form className="amount-input">
      <label className="amount-input__label" htmlFor={label}>
        {label}
      </label>
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
          onError={event => console.error(event)}
        />
        <div className="amount-input__actions">
          <button type="button">
            <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
              Max
            </Text>
          </button>
          <Button
            variant="noborder"
            icon={<PolkadotIcon />}
            iconPosition="left"
          >
            <Text as="span" scale="caption" fontWeight="bold">
              DOT
            </Text>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AmountInput;
