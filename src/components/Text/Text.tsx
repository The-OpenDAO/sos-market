import React, { CSSProperties } from 'react';
import cx from 'classnames';

type TextTag =
  | 'p'
  | 'span'
  | 'br'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'em'
  | 'blockquote'
  | 'q'
  | 'hr'
  | 'code'
  | 'pre'
  | 'mark'
  | 'ins'
  | 'del'
  | 'sup'
  | 'sub'
  | 'small'
  | 'label'
  | 'i'
  | 'b';

type TextSize = 'regular' | 'lg' | 'xs';

type FontWeight = 'regular' | 'medium' | 'bold' | 'semibold';
interface Props {
  as?: TextTag;
  size?: TextSize;
  fontWeight?: FontWeight;
  style?: CSSProperties;
  children?: React.ReactNode | any;
}

const Text = ({
  as = 'p',
  size = 'regular',
  fontWeight = 'regular',
  style,
  children
}: Props) => {
  const Tag = as;

  return (
    <Tag className={cx(`text-${size}`, `font-${fontWeight}`)} style={style}>
      {children}
    </Tag>
  );
};

Text.displayName = 'Text';

export default Text;
