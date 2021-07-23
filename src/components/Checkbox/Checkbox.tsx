import React from 'react';

type CheckboxProps = {
  /**
   * The label property of input[type="checkbox"]
   */
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

/**
 *
 *  Used for selecting multiple values from several options
 */
function Checkbox({
  label,
  ...props
}: CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="pm-c-checkbox caption medium" htmlFor={label}>
      {label}
      <input id={label} type="checkbox" {...props} />
      <span className="pm-c-checkbox__checkmark" />
    </label>
  );
}

Checkbox.displayName = 'Checkbox';

export default Checkbox;
