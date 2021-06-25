import React from 'react';

type Variant = 'default' | 'success' | 'error';

type InputProps = {
  variant?: Variant;
  label: string;
  name: string;
  description?: string;
};

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ variant = 'default', label, name, description, ...props }, ref) => (
  <div className="pm-c-input__group">
    <label htmlFor={name} className={`pm-c-input__label--${variant}`}>
      {label}
    </label>
    <input
      ref={ref}
      className={`pm-c-input--${variant}`}
      id={name}
      {...props}
    />
    {description ? (
      <span className={`pm-c-input__description--${variant}`}>
        {description}
      </span>
    ) : null}
  </div>
));

Input.displayName = 'Input';

export default Input;
