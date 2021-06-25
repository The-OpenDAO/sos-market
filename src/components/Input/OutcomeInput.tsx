import React from 'react';

import Badge, { BadgeColor } from '../Badge';

type InputProps = {
  name: string;
  badgeColor?: BadgeColor;
};

const OutcomeInput = React.forwardRef<
  HTMLInputElement,
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ name, badgeColor = 'default', ...props }, ref) => (
  <div className="pm-c-outcome-input__wrapper">
    <Badge color={badgeColor} />
    <input ref={ref} className="pm-c-outcome-input" id={name} {...props} />
  </div>
));

OutcomeInput.displayName = 'OutcomeInput';

export default OutcomeInput;
