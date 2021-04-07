/* eslint-disable react/jsx-wrap-multilines */
import { CaretUpIcon, CaretDownIcon } from 'assets/icons';

import Card from '../Card';
import Label from '../Label';
import Text from '../Text';

type Variant = 'yellow' | 'blue' | 'green' | 'pink' | 'orange';
type Change = 'up' | 'down';

type FeaturedCardProps = {
  title: string;
  change: {
    type: Change | string;
    percentage: number;
  };
  color: Variant | string;
};

const FeaturedCard = ({ title, change, color }: FeaturedCardProps) => {
  return (
    <Card
      title={
        <Text
          className="featured-card__title"
          as="label"
          scale="body"
          fontWeight="semibold"
        >
          {title}
        </Text>
      }
      extra={
        <Label color={change.type === 'up' ? 'success' : 'danger'}>
          {change.type === 'up' ? <CaretUpIcon /> : <CaretDownIcon />}
          {`${change.percentage}%`}
        </Label>
      }
      backgroundColor={`gradient-${color}`}
      style={{ height: '9.6rem' }}
    />
  );
};

FeaturedCard.displayName = 'Featured Card';

export default FeaturedCard;
