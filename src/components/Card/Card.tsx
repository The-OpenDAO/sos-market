import React from 'react';

import classNames from 'classnames';

import Text from '../Text';

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
  title: string;
  extra?: React.ReactNode;
  backgroundColor?: CardBackgroundColor;
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
      className={
        (classNames(`card--${backgroundColor}`), size && `card-${size}`)
      }
      style={style}
    >
      <div className="card__header">
        <Text
          className="card__header-title"
          as="label"
          scale="tiny-uppercase"
          fontWeight="bold"
        >
          {title}
        </Text>
        {extra ? <div className="card__header-extra">{extra}</div> : null}
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
}

Card.displayName = 'Card';

export default Card;
