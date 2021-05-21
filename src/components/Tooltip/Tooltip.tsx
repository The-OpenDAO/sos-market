import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

type TooltipPosition =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

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
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({ placement: position });
  return (
    <>
      <div ref={setTriggerRef}>{children}</div>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: disabled ? 'pm-c-tooltip--disabled' : 'pm-c-tooltip'
          })}
        >
          <div
            {...getArrowProps({
              className: 'pm-c-tooltip-arrow'
            })}
          />
          {text}
        </div>
      )}
    </>
  );
}

Tooltip.displayName = 'Tooltip';

export default Tooltip;
