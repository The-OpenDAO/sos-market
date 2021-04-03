import { Link } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb';
import Text from '../Text';

type PredictionCardDetailsProps = {
  imageUrl: string;
  section: string;
  subsection: string;
  description: string;
};

function PredictionCardDetails({
  imageUrl,
  section,
  subsection,
  description
}: PredictionCardDetailsProps) {
  return (
    <div className="prediction-card-details">
      <img
        className="prediction-card-details__image"
        alt="prediction card"
        src={imageUrl}
      />
      <div className="prediction-card-details__description">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={`/${section}`}>{section}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{subsection}</Breadcrumb.Item>
        </Breadcrumb>
        <Text as="p" scale="body" fontWeight="medium">
          {description}
        </Text>
      </div>
    </div>
  );
}

PredictionCardDetails.displayName = 'PredictionCardDetails';

export default PredictionCardDetails;
