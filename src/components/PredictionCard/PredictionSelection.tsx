import React from 'react';

import { Text } from 'components';
import { ArrowUpIcon, ArrowDownIcon } from 'assets/icons';

interface Props {
  name: string;
  odd: number;
  positive: boolean;
}

const PredictionSelection = ({ name, odd, positive }: Props) => {
  return (
    <div className="prediction-selection" role="button">
      <Text as="p" scale="caption" fontWeight="semibold">
        {name}
      </Text>
      <div className="prediction-selection__odd">
        <Text as="p" scale="tiny-uppercase" fontWeight="bold">
          ODD
        </Text>
        <Text as="span" scale="tiny" fontWeight="bold">
          {odd}
        </Text>
        {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
    </div>
  );
};

export default PredictionSelection;
