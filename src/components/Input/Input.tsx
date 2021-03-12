/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

type Variant = 'default' | 'success' | 'error';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  label: string;
  name: string;
  description?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ variant = 'default', label, name, description, ...props }, ref) => (
    <div className="input__group">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input ref={ref} className={`input--${variant}`} name={name} {...props} />
      {description ? (
        <span className="input__description">{description}</span>
      ) : null}
    </div>
  )
);

Input.displayName = 'Input';

export default Input;
