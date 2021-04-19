export interface HoldingsChartPoint {
  value: number;
  timestamp: number;
  date: string;
}

export interface Portfolio {
  address: string;
  holdingsValue: number;
  holdingsChart: HoldingsChartPoint[];
  closedMarketsProfit: number;
  openPositions: number;
  liquidityProvided: number;
  liquidityFeesEarned: number;
}
