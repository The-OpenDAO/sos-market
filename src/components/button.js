import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/_button.scss';

const variants = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
};

const positions = {
  left: 'left',
  right: 'right'
};

function Button({ children, variant, disabled, icon, iconPosition }) {
  return (
    <button
      type="button"
      className={variants[variant] || variants.default}
      disabled={disabled}
    >
      {children}
      {icon ? (
        <div
          className={`button__icon ${
            positions[iconPosition] || positions.right
          }`}
        >
          {{ icon }}
        </div>
      ) : null}
    </button>
  );
}

Button.defaultProps = {
  variant: variants.default,
  disabled: false,
  icon: undefined,
  iconPosition: 'right'
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  variant: PropTypes.oneOf(Object.values(variants)),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(Object.values(positions))
};

export default Button;
