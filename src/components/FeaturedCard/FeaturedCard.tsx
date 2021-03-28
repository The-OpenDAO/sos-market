import { CaretUpIcon, CaretDownIcon } from 'assets/icons';

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
    <div className={`featured-card--${color}`}>
      <Text as="label" scale="body" fontWeight="semibold">
        {title}
      </Text>
      <Label color={change.type === 'up' ? 'success' : 'danger'}>
        {change.type === 'up' ? <CaretUpIcon /> : <CaretDownIcon />}
        {`${change.percentage}%`}
      </Label>
    </div>
  );
};

FeaturedCard.displayName = 'Featured Card';

export default FeaturedCard;
