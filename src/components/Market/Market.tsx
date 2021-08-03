import { Market as MarketInterface } from 'models/market';

import Breadcrumb from '../Breadcrumb';
import Text from '../Text';
import MarketFooter from './MarketFooter';
import MarketOutcomes from './MarketOutcomes';

type MarketCardProps = {
  market: MarketInterface;
};

function Market({ market }: MarketCardProps) {
  const { imageUrl, category, subcategory, title } = market;
  return (
    <div className="pm-c-market">
      <div className="pm-c-market__body">
        <img className="pm-c-market__body-image" src={imageUrl} alt="" />
        <div className="pm-c-market__body-details">
          <Breadcrumb>
            <Breadcrumb.Item>{`${category.toLowerCase()}`}</Breadcrumb.Item>
            <Breadcrumb.Item>{subcategory}</Breadcrumb.Item>
          </Breadcrumb>
          <Text as="p" scale="body" fontWeight="medium">
            {title}
          </Text>
        </div>
      </div>
    </div>
  );
}

Market.Outcomes = MarketOutcomes;
Market.Footer = MarketFooter;

export default Market;
