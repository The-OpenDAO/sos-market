import React from 'react';

import Text from '../Text';

type PillVariant = 'normal' | 'subtle';

type PillColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'pink'
  | 'blue'
  | 'purple';

type PillProps = {
  variant?: PillVariant | string;
  color?: PillColor | string;
  badge?: boolean;
  children: React.ReactNode;
};

function Pill({
  variant = 'normal',
  color = 'default',
  badge = false,
  children
}: PillProps) {
  return (
    <span className={`pm-c-pill-${variant}--${color}`}>
      {badge ? <div className="pm-c-pill__badge" /> : null}
      <Text className="pm-c-pill__text" as="span">
        {children}
      </Text>
    </span>
  );
}

Pill.displayName = 'Pill';

export default Pill;
