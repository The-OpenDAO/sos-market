import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/_label.scss';

const variants = {
  default: 'default',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
};

const positions = {
  left: 'left',
  right: 'right'
};

function Label({ children, variant, icon, iconPosition }) {
  return (
    <div className={variants[variant] || variants.default}>
      {children}
      {icon ? (
        <div
          className={`label__icon ${
            positions[iconPosition] || positions.right
          }`}
        >
          {{ icon }}
        </div>
      ) : null}
    </div>
  );
}

Label.defaultProps = {
  variant: variants.default,
  icon: undefined,
  iconPosition: 'right'
};

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  variant: PropTypes.oneOf(Object.values(variants)),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(Object.values(positions))
};

export default Label;
