import React from 'react';

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="pm-c-tooltip">
      {children}
      <span className="pm-c-tooltip__text">{text}</span>
    </div>
  );
}

Tooltip.displayName = 'Tooltip';

export default Tooltip;
