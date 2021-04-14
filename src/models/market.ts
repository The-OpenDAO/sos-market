export interface Outcome {
  id: number | string;
  marketId: number | string;
  price: number;
  title: string;
  change: {
    type: string;
    chartData: any[];
  };
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
  expiresAt: string;
  outcomes: Outcome[];
}
