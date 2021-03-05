/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Text } from 'components';

interface Props {
  previous: string;
  actual: string;
}

const Breadcrumb = ({ previous, actual }: Props) => {
  return (
    <div className="breadcrumb">
      <a className="breadcrumb__link tiny-uppercase semibold" href={previous}>
        {previous}
      </a>
      <div className="breadcrumb__separator tiny-uppercase semibold">{` / `}</div>
      <Text as="span" scale="tiny-uppercase" fontWeight="semibold">
        {actual}
      </Text>
    </div>
  );
};

export default Breadcrumb;
