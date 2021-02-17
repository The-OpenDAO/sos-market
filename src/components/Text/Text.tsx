import React, { CSSProperties } from 'react';

import styles from './Text.module.scss';

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
  | 'i'
  | 'b';

type Variant =
  | 'regular'
  | 'medium'
  | 'bold'
  | 'semibold'
  | 'lg-regular'
  | 'lg-medium'
  | 'lg-bold'
  | 'xs-regular'
  | 'xs-medium'
  | 'xs-bold';

interface Props {
  as?: TextTag;
  variant?: Variant;
  style?: CSSProperties;
  children?: React.ReactNode | any;
}

const Text = ({ as = 'p', variant = 'regular', style, children }: Props) => {
  const Tag = as;

  return (
    <Tag className={styles[variant]} style={style}>
      {children}
    </Tag>
  );
};

export default Text;
