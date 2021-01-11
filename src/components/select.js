import React from 'react';
import PropTypes, { element } from 'prop-types';

import 'styles/components/_select.scss';

const variants = {
  default: 'default',
  error: 'error',
  success: 'success'
};

function Select({ children, variant, label, name, description, disabled }) {
  return (
    <div className="select__group">
      <label htmlFor={name} className="select__label">
        {label}
      </label>
      <select
        className={variants[variant] || variants.default}
        name={name}
        disabled={disabled}
      >
        {children}
      </select>
      {description ? (
        <span className="select__description">{description}</span>
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
  children: PropTypes.arrayOf(element).isRequired,
  variant: PropTypes.oneOf(Object.values(variants)),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool
};

export default Select;
