import React from 'react';

import cx from 'classnames';

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'noborder';

type Position = 'center' | 'left' | 'right';

type ButtonProps = {
  variant?: Variant;
  icon?: React.ReactNode | any;
  iconPosition?: Position;
};

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    { variant = 'default', icon, iconPosition = 'center', children, onClick },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={`button--${variant}`}
      onClick={onClick}
    >
      {children}
      {icon ? (
        <figure className={cx('button__icon', iconPosition)}>{icon}</figure>
      ) : null}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
