import React from 'react';

import classNames from 'classnames';

type CardBackgroundColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'gradient-yellow'
  | 'gradient-blue'
  | 'gradient-green'
  | 'gradient-pink'
  | 'gradient-orange';

type CardSize = 'lg';

type CardProps = {
  title: React.ReactNode;
  extra?: React.ReactNode;
  backgroundColor?: CardBackgroundColor | string;
  size?: CardSize;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

function Card({
  title,
  extra,
  backgroundColor = 'default',
  size,
  style,
  children
}: CardProps) {
  return (
    <div
      className={classNames(`card--${backgroundColor}`, size && `card-${size}`)}
      style={style}
    >
      <div className="card__header">
        <div className="card__header-title">{title}</div>
        {extra ? <div className="card__header-extra">{extra}</div> : null}
      </div>
      <div className="card__body">{children}</div>
    </div>
  );
}

Card.displayName = 'Card';

export default Card;
