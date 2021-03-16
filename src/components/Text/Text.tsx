import React from 'react';

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

type TextProps = {
  as?: TextTag;
  scale?: TextScale;
  fontWeight?: FontWeight;
  className?: string;
  children?: React.ReactNode | any;
};

const Text = ({
  as = 'p',
  scale = 'body',
  fontWeight = 'regular',
  className,
  children
}: TextProps) => {
  const Tag = as;

  return <Tag className={cx(className, scale, fontWeight)}>{children}</Tag>;
};

Text.displayName = 'Text';

export default Text;
