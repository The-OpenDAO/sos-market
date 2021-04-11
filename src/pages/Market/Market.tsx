import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  changePredictionsVisibility,
  changeTradeVisibility,
  setPredictions,
  setSelectedPrediction,
  setSelectedMarket
} from 'redux/ducks/trade';

import { Tabs, Table, Text } from 'components';

import { useAppDispatch } from 'hooks';

import {
  PolkamarketsApiService,
  PolkamarketsApiMappingService
} from '../../services';
import MarketAnalytics from './MarketAnalytics';
import MarketChart from './MarketChart';
import MarketHead from './MarketHead';
import MarketStats from './MarketStats';
import { tableItems } from './mock';
import { formatMarketHead, generateMarketChartRandomData } from './utils';

type Params = {
  marketId: string;
};

const Market = () => {
  const dispatch = useAppDispatch();
  const { marketId } = useParams<Params>();
  const [market, setMarket] = useState<any | undefined>();

  const loadMarket = async () => {
    let apiMarket = await new PolkamarketsApiService().getMarket(marketId);
    apiMarket = apiMarket
      ? PolkamarketsApiMappingService.mapMarket(apiMarket)
      : null;

    dispatch(changeTradeVisibility(true));
    dispatch(setPredictions(apiMarket?.options));
    dispatch(setSelectedPrediction(apiMarket?.options[0]?.id));
    dispatch(setSelectedMarket(apiMarket?.id));
    dispatch(changePredictionsVisibility(true));
    setMarket(apiMarket);
  };

  useEffect(() => {
    loadMarket();
  }, [marketId, dispatch]);

  if (!market) return null;

  const marketHead = formatMarketHead(market);
  const marketLastWeek = generateMarketChartRandomData(10);

  return (
    <div className="market-page">
      <MarketAnalytics
        liquidity={market.liquidity}
        volume={market.volume}
        expiration={market.expiration}
      />
      <MarketHead
        section={marketHead.section}
        subsection={marketHead.subsection}
        imageUrl={marketHead.imageUrl}
        description={marketHead.description}
      />
      <div className="market-page__stats">
        <MarketChart />
        <MarketStats
          price={2.55}
          dayChangePercentage={10}
          weekChangePercentage={2}
          lastWeekPrices={marketLastWeek}
        />
      </div>
      <Text
        as="p"
        scale="tiny"
        fontWeight="semibold"
        style={{ margin: '0.8rem 0rem', alignSelf: 'center' }}
        color="lighter-gray"
      >
        {`Resolution source: `}
        <a
          href="https://www.google.com/finance"
          className="tiny semibold text-primary"
        >
          google.com/finance
        </a>
      </Text>
      <Tabs defaultActiveId="positions">
        <Tabs.TabPane tab="Positions" id="positions">
          <Table columns={tableItems.columns} rows={tableItems.rows} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="About market" id="about">
          <Text as="p" scale="body" fontWeight="medium" color="light">
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
