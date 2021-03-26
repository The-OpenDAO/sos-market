import React from 'react';

type CheckboxProps = {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = ({
  label,
  ...props
}: CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="checkbox caption medium" htmlFor={label}>
      {label}
      <input id={label} type="checkbox" {...props} />
      <span className="checkmark" />
    </label>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
