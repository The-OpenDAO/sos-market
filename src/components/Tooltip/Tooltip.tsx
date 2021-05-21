import React from 'react';

import classnames from 'classnames';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

type TooltipProps = {
  position?: TooltipPosition;
  text: string;
  children: React.ReactNode;
  disabled?: boolean;
};

function Tooltip({
  position = 'top',
  text,
  children,
  disabled = false
}: TooltipProps) {
  return (
    <div
      className={classnames({
        [`pm-c-tooltip--${position}`]: true,
        'pm-c-tooltip--disabled': disabled
      })}
    >
      {children}
      <span className="pm-c-tooltip__text">{text}</span>
    </div>
  );
}

Tooltip.displayName = 'Tooltip';

export default Tooltip;
