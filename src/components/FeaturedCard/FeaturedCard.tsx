import React from 'react';
import { Text } from 'components';

type Variant = 'yellow' | 'blue' | 'green' | 'pink' | 'orange';

interface Props {
  label: string;
  variant: Variant;
}

function FeaturedCard({ label, variant }: Props) {
  return (
    <div className={`featured-card--${variant}`}>
      <Text as="label" scale="body" fontWeight="semibold">
        {label}
      </Text>
    </div>
  );
}

export default FeaturedCard;
