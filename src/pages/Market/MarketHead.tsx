import { Breadcrumb, Text } from 'components';

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
  return (
    <div className="market-head">
      <img className="market-head__image" alt="market head" src={imageUrl} />
      <div className="market-head__details">
        <Breadcrumb>
          <Breadcrumb.Item>{section}</Breadcrumb.Item>
          <Breadcrumb.Item>{subsection}</Breadcrumb.Item>
        </Breadcrumb>
        <Text as="p" scale="body" fontWeight="medium">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default MarketHead;
