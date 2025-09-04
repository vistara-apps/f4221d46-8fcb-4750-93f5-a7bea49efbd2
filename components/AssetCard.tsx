'use client';

import { AssetHolding } from '@/lib/types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AssetCardProps {
  asset: AssetHolding;
  variant?: 'default' | 'compact';
}

export function AssetCard({ asset, variant = 'default' }: AssetCardProps) {
  const isPositive = (asset.priceChange24h || 0) >= 0;
  
  if (variant === 'compact') {
    return (
      <div className="asset-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{asset.logo}</span>
            <div>
              <div className="font-medium text-white">{asset.assetSymbol}</div>
              <div className="text-sm text-gray-300">{asset.platform}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-white">${asset.currentValue.toLocaleString()}</div>
            <div className={`text-sm flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
              {Math.abs(asset.priceChange24h || 0).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="asset-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{asset.logo}</span>
          <div>
            <h3 className="font-bold text-white text-lg">{asset.assetSymbol}</h3>
            <p className="text-gray-300 text-sm">{asset.assetName}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-white text-lg">${asset.currentValue.toLocaleString()}</div>
          <div className={`text-sm flex items-center justify-end ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {Math.abs(asset.priceChange24h || 0).toFixed(1)}%
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="text-gray-300">Quantity: </span>
          <span className="text-white font-medium">{asset.quantity.toLocaleString()}</span>
        </div>
        <div className="glass-card px-3 py-1 rounded-full">
          <span className="text-gray-300 text-xs">{asset.platform}</span>
        </div>
      </div>
    </div>
  );
}
