import React from 'react';

type CheckboxProps = {
  label: string;
};

const Checkbox = ({
  label,
  checked,
  onChange
}: CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="checkbox" htmlFor={label}>
      {label}
      <input
        type="checkbox"
        name={label}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkmark" />
    </label>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
