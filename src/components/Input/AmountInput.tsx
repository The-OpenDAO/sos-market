/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useField, useFormikContext } from 'formik';

import { WalletIcon } from 'assets/icons';

import StepSlider from '../StepSlider';
import Text from '../Text';

type AmountInputProps = {
  name: string;
  label: string;
  max: number;
  currency: any;
  customHeaderItem?: React.ReactNode;
};

type AmountInputContext = {
  amount: number;
};

function round(value) {
  return Math.floor(value * 1e5) / 1e5;
}

const AmountInput = React.forwardRef<
  HTMLInputElement,
  AmountInputProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ name, label, max, currency, customHeaderItem, ...props }, ref) => {
  const [stepAmount, setStepAmount] = useState<number>(0);
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext<AmountInputContext>();

  useEffect(() => {
    setFieldValue(name, meta.initialValue);
    setStepAmount(meta.initialValue);
  }, [max]);

  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { value } = event.currentTarget;

    const newAmount = value ? parseFloat(value) : undefined;

    setFieldValue(name, newAmount || 0);
    setStepAmount(100 * ((newAmount || 0) / max));
  }

  function handleSetMaxAmount() {
    const roundedMax = round(max);

    setFieldValue(name, roundedMax);
    setStepAmount(100);
  }

  function handleChangeSlider(value: number) {
    const percentage = value / 100;

    const newAmount = round(max * percentage);

    setFieldValue(name, newAmount);
    setStepAmount(value);
  }

  return (
    <form className="pm-c-amount-input">
      <div className="pm-c-amount-input__header">
        <label className="pm-c-amount-input__header-title" htmlFor={label}>
          {label}
        </label>
        {customHeaderItem || (
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
        )}
      </div>
      <div className="pm-c-amount-input__group">
        <input
          className="pm-c-amount-input__input"
          type="number"
          ref={ref}
          id={label}
          step=".0001"
          value={field.value}
          min={0}
          max={max}
          onChange={event => handleChangeAmount(event)}
          onWheel={event => event.currentTarget.blur()}
          {...props}
        />
        <div className="pm-c-amount-input__actions">
          <button type="button" onClick={handleSetMaxAmount}>
            Max
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
      <StepSlider
        currentValue={stepAmount}
        onChange={value => handleChangeSlider(value)}
      />
    </form>
  );
});

AmountInput.displayName = 'Amount input';

export default AmountInput;
