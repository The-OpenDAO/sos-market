import React from 'react';

import classNames from 'classnames';

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'noborder';

type Size = 'sm' | 'lg';

type ButtonProps = {
  variant?: Variant;
  size?: Size;
};

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ variant = 'default', size, children, onClick, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={classNames(`button--${variant}`, size && `button-${size}`)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = 'Button';

export default Button;
