import { Link, useHistory } from 'react-router-dom';

import {
  changeChartsVisibility,
  changePredictionsVisibility
} from 'redux/ducks/trade';

import { ArrowLeftIcon } from 'assets/icons';

import { Breadcrumb, Button, Text } from 'components';

import { useAppDispatch } from 'hooks';

type MarketHeadProps = {
  section: string;
  subsection: string;
  imageUrl: string;
  description: string;
};

const MarketHead = ({
  section,
  subsection,
  imageUrl,
  description
}: MarketHeadProps) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  function handleNavigation() {
    history.push('/home');
    dispatch(changeChartsVisibility(true));
    dispatch(changePredictionsVisibility(false));
  }

  return (
    <div className="market-head">
      <img className="market-head__image" alt="market head" src={imageUrl} />
      <div className="market-head__details">
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
      <div className="market-head__actions">
        <Button onClick={handleNavigation} aria-label="Back to Markets">
          <ArrowLeftIcon />
          <Text as="span" scale="caption" fontWeight="semibold">
            Back to Markets
          </Text>
        </Button>
      </div>
    </div>
  );
};

MarketHead.displayName = 'Market head';

export default MarketHead;
