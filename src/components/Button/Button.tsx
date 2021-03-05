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

interface Props {
  variant?: Variant;
  icon?: React.ReactNode | any;
  iconPosition?: Position;
  disabled?: boolean;
  children?: React.ReactNode | any;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = 'default',
      icon,
      iconPosition = 'center',
      disabled = false,
      children,
      onClick
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={`btn--${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {icon ? (
        <figure className={cx('btn__icon', iconPosition)}>{icon}</figure>
      ) : null}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
