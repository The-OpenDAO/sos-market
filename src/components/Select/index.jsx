import React from 'react';

import PropTypes from 'prop-types';

const variants = {
  default: 'default'
};

// eslint-disable-next-line react/prop-types
function Select({ variant, label, name, description, disabled, children }) {
  return (
    <div className="select-group">
      <label htmlFor={name} className="select-label">
        {label}
      </label>
      <select
        className={`select--${variants[variant]}`}
        name={name}
        disabled={disabled}
      >
        {children}
      </select>
      {description ? (
        <span className="select-description">{description}</span>
      ) : null}
    </div>
  );
}

Select.defaultProps = {
  variant: variants.default,
  description: undefined,
  disabled: false
};

Select.propTypes = {
  variant: PropTypes.oneOf(Object.values(variants)),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool
};

export default Select;
