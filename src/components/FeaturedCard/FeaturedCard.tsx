import React from 'react';

import { CaretUpIcon, CaretDownIcon } from 'assets/icons';

import { Label, Text } from 'components';

type Variant = 'yellow' | 'blue' | 'green' | 'pink' | 'orange';

interface FeaturedCardProps {
  label: string;
  value: number;
  positive: boolean;
  variant: Variant | string;
}

const FeaturedCard = ({
  label,
  value,
  positive,
  variant
}: FeaturedCardProps) => {
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
};

FeaturedCard.displayName = 'Featured Card';

export default FeaturedCard;
