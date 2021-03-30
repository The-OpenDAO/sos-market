import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Tabs, Table, Text } from 'components';

import MarketAnalytics from './MarketAnalytics';
import MarketChart from './MarketChart';
import MarketHead from './MarketHead';
import { markets, tableItems } from './mock';
import { formatMarketAnalytics, formatMarketHead } from './utils';

type Params = {
  marketId: string;
};

const Market = () => {
  const { marketId } = useParams<Params>();
  const [market, setMarket] = useState<typeof markets[0] | undefined>();

  useEffect(() => {
    const currentMarket = markets.find(m => m.id === parseInt(marketId, 10));

    setMarket(currentMarket);
  }, [marketId]);

  if (!market) return null;

  const headerMarketAnalytics = formatMarketAnalytics(market, true);
  const marketHead = formatMarketHead(market);
  const graphMarketAnalytics = formatMarketAnalytics(market, false);

  return (
    <div className="market-page">
      <MarketAnalytics direction="row" items={headerMarketAnalytics} />
      <MarketHead
        section={marketHead.section}
        subsection={marketHead.subsection}
        imageUrl={marketHead.imageUrl}
        description={marketHead.description}
      />
      <div className="market-page__stats">
        <MarketChart />
        <MarketAnalytics direction="column" items={graphMarketAnalytics} />
      </div>
      <Text
        as="p"
        scale="tiny"
        fontWeight="semibold"
        style={{ margin: '0.8rem 0rem' }}
      >
        {`Resolution source: `}
        <a href="https://www.google.com/finance" className="tiny semibold">
          google.com/finance
        </a>
      </Text>
      <Tabs defaultActiveId="positions">
        <Tabs.TabPane tab="Positions" id="positions">
          <Table columns={tableItems.columns} rows={tableItems.rows} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="About market" id="about">
          <Text as="p" scale="body" fontWeight="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            vitae arcu morbi ultrices mollis tortor ac. Natoque interdum non
            iaculis lacinia ultricies et. Facilisi dui consequat iaculis
            facilisis feugiat vitae, urna. Sapien lorem turpis id lacus odio
            risus morbi cursus morbi. Imperdiet nunc, neque, tellus, id
            pellentesque sagittis. Porttitor blandit sem felis sed. At nunc,
            pellentesque vel morbi sed tristique aliquam. At urna erat augue
            quis consequat neque, accumsan. Mauris cras porta...
          </Text>
        </Tabs.TabPane>
        <Tabs.TabPane tab="News" id="news" />
      </Tabs>
    </div>
  );
};

Market.displayName = 'Market';

export default Market;
