import React from 'react';

import Text from '../Text';

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black'
  | 'white';

type Position = 'left' | 'right';

type LabelProps = {
  variant?: Variant;
  icon?: React.ReactNode | any;
  iconPosition?: Position;
  children: React.ReactNode | any;
};

const Label = ({
  variant = 'default',
  icon,
  iconPosition,
  children
}: LabelProps) => {
  return (
    <div className={`label--${variant}`}>
      {icon && iconPosition === 'left' ? icon : null}
      <Text as="label" scale="tiny" fontWeight="semibold">
        {children}
      </Text>
      {icon && iconPosition === 'right' ? icon : null}
    </div>
  );
};

Label.displayName = 'Label';

export default Label;
