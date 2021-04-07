import React from 'react';

import classNames from 'classnames';

type RowProps = {
  /**
   * Aditional CSS inline style
   */
  style?: React.CSSProperties;
  /**
   * Aditional class name
   */
  className?: string;
  children?: React.ReactNode;
};

/**
 * Row
 */
function Row({ style, className, children }: RowProps) {
  return (
    <div className={classNames('row', className)} style={style}>
      {children}
    </div>
  );
}

type ColProps = {
  /**
   * Mumber of cells to occupy
   */
  span?: number;
  /**
   * Aditional CSS inline style
   */
  style?: React.CSSProperties;
  /**
   * Aditional class name
   */
  className?: string;
  children?: React.ReactNode;
};

/**
 * Col
 */
function Col({ span, style, className, children }: ColProps) {
  return (
    <div
      className={classNames(span ? `col-${span}` : 'col', className)}
      style={style}
    >
      {children}
    </div>
  );
}

type GridProps = {
  fluid?: boolean;
  children?: React.ReactNode;
};

/**
 * Grid with 24 cells
 */
function Grid({ fluid = true, children }: GridProps) {
  return <div className={classNames('grid', fluid && 'fluid')}>{children}</div>;
}

Grid.Row = Row;
Grid.Col = Col;

Grid.displayName = 'Grid';

export default Grid;
