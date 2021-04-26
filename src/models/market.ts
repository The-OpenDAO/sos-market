export interface PriceChartPoint {
  value: number;
  timestamp: number;
  date: string;
}

export interface PriceChart {
  timeframe: string;
  changePercent: number;
  prices: PriceChartPoint[];
}

export interface Outcome {
  id: number | string;
  marketId: number | string;
  price: number;
  title: string;
  change: {
    type: string;
    chartData: any[];
  };
  priceCharts: PriceChart[];
  shares: number;
}

export interface Market {
  id: string;
  category: string;
  subcategory: string;
  imageUrl: string;
  title: string;
  volume: number;
  shares: number;
  liquidity: number;
  liquidityPrice: number;
  expiresAt: string;
  state: string;
  resolvedOutcomeId: number;
  outcomes: Outcome[];
}
