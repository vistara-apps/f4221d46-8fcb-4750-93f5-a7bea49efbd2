export interface User {
  farcasterId: string;
  connectedWallets: string[];
  createdAt: Date;
}

export interface AssetHolding {
  userId: string;
  assetSymbol: string;
  assetName: string;
  quantity: number;
  currentValue: number;
  platform: string;
  lastUpdated: Date;
  priceChange24h?: number;
  logo?: string;
}

export interface PortfolioMetrics {
  totalValue: number;
  totalChange24h: number;
  totalChangePercent24h: number;
  assetCount: number;
}

export interface ChartDataPoint {
  time: string;
  value: number;
}
