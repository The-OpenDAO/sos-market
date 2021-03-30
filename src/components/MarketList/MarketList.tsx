import { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

import isEmpty from 'lodash/isEmpty';

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
      <Link to={`/markets/${market.id}`}>
        <PredictionCard market={market} />
      </Link>
    </li>
  );
};

type MarketListProps = {
  markets: any[];
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
