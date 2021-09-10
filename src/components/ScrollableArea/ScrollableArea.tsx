import { CSSProperties, ReactNode } from 'react';

type ScrollableAreaProps = {
  style?: CSSProperties;
  children: ReactNode;
};

function ScrollableArea({ style, children }: ScrollableAreaProps) {
  return (
    <div className="pm-c-scrollable-area" style={style}>
      <div className="pm-c-scrollable-area__content">{children}</div>
    </div>
  );
}

export default ScrollableArea;
