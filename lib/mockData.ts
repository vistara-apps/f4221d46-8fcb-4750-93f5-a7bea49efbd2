import { AssetHolding, PortfolioSummary } from './types';

export const mockAssets: AssetHolding[] = [
  {
    id: '1',
    userId: 'user1',
    assetSymbol: 'ETH',
    assetName: 'Ethereum',
    quantity: 2.5,
    currentValue: 5750.25,
    platform: 'MetaMask',
    lastUpdated: new Date(),
    priceChange24h: 3.2,
    logo: '🔷'
  },
  {
    id: '2',
    userId: 'user1',
    assetSymbol: 'BTC',
    assetName: 'Bitcoin',
    quantity: 0.15,
    currentValue: 6420.50,
    platform: 'Coinbase',
    lastUpdated: new Date(),
    priceChange24h: -1.8,
    logo: '₿'
  },
  {
    id: '3',
    userId: 'user1',
    assetSymbol: 'USDC',
    assetName: 'USD Coin',
    quantity: 1500,
    currentValue: 1500.00,
    platform: 'Uniswap',
    lastUpdated: new Date(),
    priceChange24h: 0.1,
    logo: '💵'
  },
  {
    id: '4',
    userId: 'user1',
    assetSymbol: 'LINK',
    assetName: 'Chainlink',
    quantity: 100,
    currentValue: 1420.00,
    platform: 'Aave',
    lastUpdated: new Date(),
    priceChange24h: 5.7,
    logo: '🔗'
  },
  {
    id: '5',
    userId: 'user1',
    assetSymbol: 'UNI',
    assetName: 'Uniswap',
    quantity: 50,
    currentValue: 425.50,
    platform: 'Uniswap',
    lastUpdated: new Date(),
    priceChange24h: 2.1,
    logo: '🦄'
  },
  {
    id: '6',
    userId: 'user1',
    assetSymbol: 'MATIC',
    assetName: 'Polygon',
    quantity: 800,
    currentValue: 648.00,
    platform: 'Polygon',
    lastUpdated: new Date(),
    priceChange24h: -0.5,
    logo: '🟣'
  }
];

export const mockPortfolioSummary: PortfolioSummary = {
  totalValue: 16164.25,
  totalChange24h: 245.80,
  totalChangePercent24h: 1.54,
  assetCount: 6,
  platformCount: 5
};
