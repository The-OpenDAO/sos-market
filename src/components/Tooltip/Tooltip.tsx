import React from 'react';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

type TooltipProps = {
  position?: TooltipPosition;
  text: string;
  children: React.ReactNode;
};

function Tooltip({ position = 'top', text, children }: TooltipProps) {
  return (
    <div className={`pm-c-tooltip--${position}`}>
      {children}
      <span className="pm-c-tooltip__text">{text}</span>
    </div>
  );
}

Tooltip.displayName = 'Tooltip';

export default Tooltip;
