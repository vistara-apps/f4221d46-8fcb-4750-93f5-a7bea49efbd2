import { AssetHolding, PortfolioMetrics } from './types';

export const mockAssets: AssetHolding[] = [
  {
    userId: 'user1',
    assetSymbol: 'ETH',
    assetName: 'Ethereum',
    quantity: 12.5,
    currentValue: 31250,
    platform: 'MetaMask',
    lastUpdated: new Date(),
    priceChange24h: 5.2,
    logo: '🔷'
  },
  {
    userId: 'user1',
    assetSymbol: 'BTC',
    assetName: 'Bitcoin',
    quantity: 0.75,
    currentValue: 52500,
    platform: 'Coinbase',
    lastUpdated: new Date(),
    priceChange24h: -2.1,
    logo: '₿'
  },
  {
    userId: 'user1',
    assetSymbol: 'USDC',
    assetName: 'USD Coin',
    quantity: 15000,
    currentValue: 15000,
    platform: 'Uniswap',
    lastUpdated: new Date(),
    priceChange24h: 0.1,
    logo: '💵'
  },
  {
    userId: 'user1',
    assetSymbol: 'LINK',
    assetName: 'Chainlink',
    quantity: 2500,
    currentValue: 37500,
    platform: 'Aave',
    lastUpdated: new Date(),
    priceChange24h: 8.7,
    logo: '🔗'
  },
  {
    userId: 'user1',
    assetSymbol: 'UNI',
    assetName: 'Uniswap',
    quantity: 1200,
    currentValue: 9600,
    platform: 'Uniswap',
    lastUpdated: new Date(),
    priceChange24h: -1.5,
    logo: '🦄'
  },
  {
    userId: 'user1',
    assetSymbol: 'MATIC',
    assetName: 'Polygon',
    quantity: 8000,
    currentValue: 6400,
    platform: 'Polygon',
    lastUpdated: new Date(),
    priceChange24h: 12.3,
    logo: '🟣'
  }
];

export const mockMetrics: PortfolioMetrics = {
  totalValue: 152250,
  totalChange24h: 3250,
  totalChangePercent24h: 2.18,
  assetCount: 6
};

export const mockChartData = [
  { time: 'Jan', value: 145000 },
  { time: 'Feb', value: 148000 },
  { time: 'Mar', value: 142000 },
  { time: 'Apr', value: 155000 },
  { time: 'May', value: 149000 },
  { time: 'Jun', value: 152250 }
];
