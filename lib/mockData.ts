import { AssetHolding, PortfolioMetrics, ChartDataPoint } from './types';

export const mockAssetHoldings: AssetHolding[] = [
  {
    userId: 'user1',
    assetSymbol: 'ETH',
    assetName: 'Ethereum',
    quantity: 2.5,
    currentValue: 8750.00,
    platform: 'MetaMask',
    lastUpdated: new Date(),
    priceChange24h: 5.2,
    logo: '🔷'
  },
  {
    userId: 'user1',
    assetSymbol: 'BTC',
    assetName: 'Bitcoin',
    quantity: 0.15,
    currentValue: 6450.00,
    platform: 'Coinbase',
    lastUpdated: new Date(),
    priceChange24h: -2.1,
    logo: '₿'
  },
  {
    userId: 'user1',
    assetSymbol: 'USDC',
    assetName: 'USD Coin',
    quantity: 5000,
    currentValue: 5000.00,
    platform: 'Uniswap',
    lastUpdated: new Date(),
    priceChange24h: 0.1,
    logo: '💵'
  },
  {
    userId: 'user1',
    assetSymbol: 'LINK',
    assetName: 'Chainlink',
    quantity: 150,
    currentValue: 2100.00,
    platform: 'Aave',
    lastUpdated: new Date(),
    priceChange24h: 8.7,
    logo: '🔗'
  },
  {
    userId: 'user1',
    assetSymbol: 'UNI',
    assetName: 'Uniswap',
    quantity: 75,
    currentValue: 525.00,
    platform: 'Uniswap',
    lastUpdated: new Date(),
    priceChange24h: -1.5,
    logo: '🦄'
  }
];

export const mockPortfolioMetrics: PortfolioMetrics = {
  totalValue: 22825.00,
  totalChange24h: 1125.50,
  totalChangePercent24h: 5.18,
  assetCount: 5
};

export const mockChartData: ChartDataPoint[] = [
  { time: '00:00', value: 21500 },
  { time: '04:00', value: 21800 },
  { time: '08:00', value: 22100 },
  { time: '12:00', value: 22400 },
  { time: '16:00', value: 22200 },
  { time: '20:00', value: 22600 },
  { time: '24:00', value: 22825 }
];
