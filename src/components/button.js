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

const placement = {
  left: 'left',
  right: 'right'
};

function Button({ children, variant, disabled, icon, iconPlacement }) {
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
            placement[iconPlacement] || placement.right
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
  iconPlacement: 'right'
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  variant: PropTypes.oneOf(Object.values(variants)),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  iconPlacement: PropTypes.oneOf(Object.values(placement))
};

export default Button;
