import { Text, CreateMarketForm } from 'components';

import CreateMarketBuyPolk from './CreateMarketBuyPolk';

function CreateMarket() {
  return (
    <div className="pm-p-create-market">
      <div className="pm-p-create-market__header">
        <Text
          as="h4"
          scale="heading"
          fontWeight="semibold"
          className="pm-p-create-market__header-title"
        >
          Create New Market
        </Text>
      </div>
      <CreateMarketBuyPolk requiredPolkBalance={50} />
      <CreateMarketForm />
    </div>
  );
}

export default CreateMarket;
