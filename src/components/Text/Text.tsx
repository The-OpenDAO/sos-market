import React from 'react';

import cx from 'classnames';

type TextType =
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

type TextFontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type TextProps = {
  /**
   * HTML text element
   * @default 'p'
   */
  as?: TextType;
  /**
   * Scale of the text
   * @default 'body'
   */
  scale?: TextScale;
  /**
   * Font weight of the text
   * @default 'regular'
   */
  fontWeight?: TextFontWeight;
  /**
   * Aditional class name
   */
  className?: string;
  /**
   * Aditional CSS inline style
   */
  style?: React.CSSProperties;
  children?: React.ReactNode | any;
};

/**
 * Basic text writing, including headings, body text, and more
 */
const Text = ({
  as = 'p',
  scale = 'body',
  fontWeight = 'regular',
  className,
  style,
  children
}: TextProps) => {
  return React.createElement(
    as,
    { className: cx(className, scale, fontWeight), style },
    children
  );
};

Text.displayName = 'Text';

export default Text;
