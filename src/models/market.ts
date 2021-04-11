export interface Market {
  id: string | number;
  category: string;
  subcategory: string;
  imageUrl: string;
  title: string;
  volume: number;
  shares: number;
  liquidity: number;
  expiresAt: string;
}
