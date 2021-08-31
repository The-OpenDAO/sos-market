import { useState } from 'react';

import { TwarningIcon } from 'assets/icons';

import { Text, ProgressBar, Button } from 'components';

import { useAppSelector } from 'hooks';

type CreateMarketBuyPolkProps = {
  requiredPolkBalance: number;
};

function CreateMarketBuyPolk({
  requiredPolkBalance
}: CreateMarketBuyPolkProps) {
  const [isLoadingBuyPolk, setIsLoadingBuyPolk] = useState(false);

  const polkBalance = useAppSelector(state => state.bepro.polkBalance);

  async function handleBuyPolk() {
    setIsLoadingBuyPolk(true);

    const buyPolkUrl = `//app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_ERC20_CONTRACT_ADDRESS}&inputCurrency=ETH`;
    window.open(buyPolkUrl, '_blank');

    setIsLoadingBuyPolk(false);
  }

  return (
    <div className="pm-p-create-market-buy-polk">
      <div className="pm-p-create-market-buy-polk__group--column">
        <TwarningIcon className="pm-p-create-market-buy-polk__icon" />
        <Text
          as="p"
          scale="body"
          fontWeight="semibold"
          className="pm-p-create-market-buy-polk__title"
        >
          <>
            {`You need an additional `}
            <Text
              as="strong"
              scale="body"
              fontWeight="semibold"
              className="pm-p-create-market-buy-polk__amount"
            >
              {`${requiredPolkBalance - polkBalance} POLK`}
            </Text>
            {` to create markets.`}
          </>
        </Text>
      </div>
      <ProgressBar
        min={0}
        max={requiredPolkBalance}
        percent={(polkBalance / requiredPolkBalance) * 100}
        color="warning"
      />
      <Button
        size="sm"
        color="warning"
        fullwidth
        onClick={handleBuyPolk}
        loading={isLoadingBuyPolk}
      >
        Buy $POLK
      </Button>
    </div>
  );
}

export default CreateMarketBuyPolk;
