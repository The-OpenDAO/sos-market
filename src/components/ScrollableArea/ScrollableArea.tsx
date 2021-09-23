import { CSSProperties, ReactNode } from 'react';

type ScrollbarSize = 'normal' | 'sm';

type ScrollableAreaProps = {
  /**
   * Size of the scrollbar
   * @default 'normal'
   */
  scrollbarSize?: ScrollbarSize;
  /**
   * Optional CSS inline styles
   */
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * Scrollable area
 */
function ScrollableArea({
  scrollbarSize = 'normal',
  style,
  children
}: ScrollableAreaProps) {
  return (
    <div className={`pm-c-scrollable-area--${scrollbarSize}`}>
      <div className="pm-c-scrollable-area__content" style={style}>
        {children}
      </div>
    </div>
  );
}

export default ScrollableArea;
