import React from 'react';

import classNames from 'classnames';

type ButtonVariant = 'normal' | 'outline';
type ButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'noborder';
type ButtonSize = 'sm' | 'lg';

type ButtonProps = {
  /**
   * The variant to use
   * @default 'normal'
   */
  variant?: ButtonVariant;
  /**
   * The color of the component
   * @default 'default'
   */
  color?: ButtonColor;
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: ButtonSize;
};

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      variant = 'normal',
      color = 'default',
      size,
      children,
      onClick,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={classNames(
        `button-${variant}-${color}`,
        size && `button-${size}`
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
