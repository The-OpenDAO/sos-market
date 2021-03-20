import { CaretUpIcon, CaretDownIcon } from 'assets/icons';

import { Label, Text } from 'components';

type Variant = 'yellow' | 'blue' | 'green' | 'pink' | 'orange';

type Change = {
  type: 'up' | 'down' | string;
  value: number | string;
};

type PortfolioCardProps = {
  title: string;
  value: number | string;
  change: Change;
  variant: Variant | string;
};

const PortfolioCard = ({
  title,
  value,
  change,
  variant
}: PortfolioCardProps) => {
  return (
    <div className={`portfolio-card--${variant}`}>
      <div className="portfolio-card__header">
        <Text
          className="portfolio-card__header-title"
          as="h5"
          scale="tiny-uppercase"
          fontWeight="bold"
        >
          {title}
        </Text>

        <Label
          variant={change.type === 'up' ? 'success' : 'danger'}
          icon={change.type === 'up' ? <CaretUpIcon /> : <CaretDownIcon />}
          iconPosition="left"
        >
          {`${change.value}%`}
        </Label>
      </div>

      <div className="portfolio-card__content">
        <Text
          className="portfolio-card__content-value"
          as="span"
          scale="body"
          fontWeight="semibold"
        >
          {value}
        </Text>
      </div>
    </div>
  );
};

PortfolioCard.displayName = 'Portfolio Card';

export default PortfolioCard;
