export interface Outcome {
  id: number | string;
  marketId: number | string;
  price: number;
  title: string;
}

export interface Market {
  id: number | string;
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
