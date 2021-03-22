import React from 'react';

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'noborder';

type ButtonProps = {
  variant?: Variant;
};

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ variant = 'default', children, onClick, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={`button--${variant}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = 'Button';

export default Button;
