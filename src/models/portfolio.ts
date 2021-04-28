export interface HoldingsChartPoint {
  value: number;
  timestamp: number;
  date: string;
}
export interface HoldingsPerformance {
  change: number;
  changePercent: number;
}

export interface Portfolio {
  address: string;
  holdingsValue: number;
  holdingsPerformance: HoldingsPerformance;
  holdingsChart: HoldingsChartPoint[];
  closedMarketsProfit: number;
  openPositions: number;
  liquidityProvided: number;
  liquidityFeesEarned: number;
}
