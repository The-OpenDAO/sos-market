import React from 'react';

import { Label, Text } from 'components';
import { CaretUpIcon, CaretDownIcon } from 'assets/icons';

type Variant = 'yellow' | 'blue' | 'green' | 'pink' | 'orange';

interface Props {
  label: string;
  value: number;
  positive: boolean;
  variant: Variant;
}

function FeaturedCard({ label, value, positive, variant }: Props) {
  return (
    <div className={`featured-card--${variant}`}>
      <Text as="label" scale="body" fontWeight="semibold">
        {label}
      </Text>
      <Label
        variant={positive ? 'success' : 'danger'}
        icon={positive ? <CaretUpIcon /> : <CaretDownIcon />}
        iconPosition="left"
      >
        {`${value}%`}
      </Label>
    </div>
  );
}

export default FeaturedCard;
