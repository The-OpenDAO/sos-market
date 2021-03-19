import React from 'react';

type Variant = 'default';

type SelectProps = {
  variant?: Variant | string;
  label: string;
  name: string;
  description?: string;
  disabled: boolean;
  children: React.ReactNode | any;
};

const Select = ({
  variant = 'default',
  label,
  name,
  description,
  disabled,
  children
}: SelectProps) => {
  return (
    <div className="select-group">
      <label htmlFor={name} className="select-label">
        {label}
      </label>
      <select className={`select--${variant}`} name={name} disabled={disabled}>
        {children}
      </select>
      {description ? (
        <span className="select-description">{description}</span>
      ) : null}
    </div>
  );
};

Select.displayName = 'Select';

export default Select;
