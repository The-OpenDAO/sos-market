import { Text, CreateMarketForm } from 'components';

import { useAppSelector } from 'hooks';

import CreateMarketBuyPolk from './CreateMarketBuyPolk';

function CreateMarket() {
  const polkBalance = useAppSelector(state => state.bepro.polkBalance);
  const requiredPolkBalance = 50;

  const needsBuyPolk = polkBalance < requiredPolkBalance;

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
      <div className="pm-p-create-market__notification-wrapper">
        {needsBuyPolk ? (
          <div className="pm-p-create-market__notification-overlay">
            <CreateMarketBuyPolk requiredPolkBalance={50} />
          </div>
        ) : null}
        <CreateMarketForm />
      </div>
    </div>
  );
}

export default CreateMarket;
