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

type TextScale = 'heading' | 'body' | 'caption' | 'tiny' | 'tiny-uppercase';
type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';
interface Props {
  as?: TextTag;
  scale?: TextScale;
  fontWeight?: FontWeight;
  style?: CSSProperties;
  children?: React.ReactNode | any;
}

const Text = ({
  as = 'p',
  scale = 'body',
  fontWeight = 'regular',
  style,
  children
}: Props) => {
  const Tag = as;

  return (
    <Tag className={cx(scale, fontWeight)} style={style}>
      {children}
    </Tag>
  );
};

Text.displayName = 'Text';

export default Text;
