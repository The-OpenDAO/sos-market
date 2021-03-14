import React, { useState } from 'react';

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
    </form>
  );
};

export default AmountInput;
