import React from 'react';

import classNames from 'classnames';

type ButtonVariant = 'normal' | 'dark' | 'outline';

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
   * Variant to use
   * @default 'normal'
   */
  variant?: ButtonVariant;
  /**
   * Color of the component
   * @default 'default'
   */
  color?: ButtonColor;
  /**
   * Size of the component
   * @default 'medium'
   */
  size?: ButtonSize;
};

/**
 * Button to trigger an operation
 */
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
        `button-${variant}--${color}`,
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
