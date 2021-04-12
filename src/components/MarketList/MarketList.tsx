import { createContext, useContext } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

import isEmpty from 'lodash/isEmpty';
import { Market } from 'models/market';

import PredictionCard from '../PredictionCard';

const MarketsContext = createContext({});

const Item = ({ index, style }: ListChildComponentProps) => {
  const markets = useContext(MarketsContext);
  const market = markets[index];

  return (
    <li
      className="market-list__item"
      style={{
        ...style,
        top: (style.top as number) + 5,
        bottom: (style.bottom as number) + 5
      }}
    >
      <PredictionCard market={market} />
    </li>
  );
};

type MarketListProps = {
  markets: Market[];
};

const MarketList = ({ markets }: MarketListProps) => {
  if (isEmpty(markets)) return null;

  return (
    <MarketsContext.Provider value={markets}>
      <ul className="market-list">
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              itemCount={markets.length}
              itemSize={168}
            >
              {Item}
            </List>
          )}
        </AutoSizer>
      </ul>
    </MarketsContext.Provider>
  );
};

export default MarketList;
