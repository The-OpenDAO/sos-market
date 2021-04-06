import { useState, useEffect } from 'react';

import classNames from 'classnames';

import MiniTable from '../MiniTable';
import Text from '../Text';

type Market = {
  prediction: string;
  odd: number;
  tableItems: {
    key: string;
    title: string;
    value: number | string;
  }[];
};

type MarketSelectProps = {
  markets: Market[];
};

const MarketSelect = ({ markets }: MarketSelectProps) => {
  const [selectedMarket, setSelectedMarket] = useState<Market | undefined>(
    undefined
  );

  useEffect(() => {
    const market = markets[0];

    if (market) {
      setSelectedMarket(market);
    }
  }, [markets]);

  if (!selectedMarket) return null;

  function handleChangeSelectedMarket(market: Market) {
    setSelectedMarket(market);
  }

  return (
    <div className="market-select">
      {markets?.map((market, index) => (
        <div
          key={market.prediction}
          className={classNames({
            'market-select__item': true,
            active: market.prediction === selectedMarket.prediction
          })}
          role="button"
          tabIndex={index}
          onClick={() => handleChangeSelectedMarket(market)}
          onKeyPress={() => handleChangeSelectedMarket(market)}
        >
          <div className="market-select__item-prediction">
            <Text as="p" fontWeight="bold">
              {market.prediction}
            </Text>
            <Text as="span" fontWeight="bold">
              {`ODD `}
              <Text as="strong" fontWeight="bold">
                {market.odd}
              </Text>
            </Text>
          </div>
          <MiniTable rows={market.tableItems} />
        </div>
      ))}
    </div>
  );
};

export default MarketSelect;
