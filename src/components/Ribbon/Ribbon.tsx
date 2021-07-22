import { ReactNode } from 'react';

import Text from '../Text';

export type RibbonColor = 'pink' | 'blue' | 'purple';

type RibbonProps = {
  color?: RibbonColor;
  icon?: ReactNode;
  text: string;
};

function Ribbon({ color = 'pink', icon, text }: RibbonProps) {
  return (
    <div className={`pm-c-ribbon--${color}`}>
      {icon || null}
      <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
        {text}
      </Text>
    </div>
  );
}

export default Ribbon;
