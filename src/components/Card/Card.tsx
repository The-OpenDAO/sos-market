import React from 'react';

import classNames from 'classnames';

type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between';

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
  titleJustify?: JustifyContent;
  extra?: React.ReactNode;
  bodyJustify?: JustifyContent;
  backgroundColor?: CardBackgroundColor | string;
  size?: CardSize;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

function Card({
  title,
  titleJustify = 'center',
  extra,
  bodyJustify = 'center',
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
      <div className="card__header" style={{ justifyContent: titleJustify }}>
        <div className="card__header-title">{title}</div>
        {extra ? <div className="card__header-extra">{extra}</div> : null}
      </div>
      <div className="card__body" style={{ alignItems: bodyJustify }}>
        {children}
      </div>
    </div>
  );
}

Card.displayName = 'Card';

export default Card;
