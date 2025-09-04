'use client';

import { AssetHolding } from '@/lib/types';
import { formatCurrency, formatPercentage, getChangeColor } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AssetCardProps {
  asset: AssetHolding;
  variant?: 'default' | 'compact';
}

export function AssetCard({ asset, variant = 'default' }: AssetCardProps) {
  const isPositive = (asset.priceChange24h || 0) >= 0;

  if (variant === 'compact') {
    return (
      <div className="glass-card p-4 hover:bg-opacity-15 transition-all duration-250 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm">
              {asset.logo}
            </div>
            <div>
              <div className="font-medium text-white text-sm">{asset.assetSymbol}</div>
              <div className="text-xs text-gray-400">{asset.platform}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-white text-sm">{formatCurrency(asset.currentValue)}</div>
            {asset.priceChange24h && (
              <div className={`text-xs flex items-center ${getChangeColor(asset.priceChange24h)}`}>
                {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {formatPercentage(asset.priceChange24h)}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 hover:bg-opacity-15 transition-all duration-250 cursor-pointer animate-slide-up">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xl">
            {asset.logo}
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">{asset.assetName}</h3>
            <p className="text-gray-400">{asset.assetSymbol}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-white text-xl">{formatCurrency(asset.currentValue)}</div>
          {asset.priceChange24h && (
            <div className={`flex items-center justify-end ${getChangeColor(asset.priceChange24h)}`}>
              {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              {formatPercentage(asset.priceChange24h)}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="text-gray-400">Quantity: </span>
          <span className="text-white font-medium">{asset.quantity.toLocaleString()}</span>
        </div>
        <div className="px-3 py-1 bg-purple-600 bg-opacity-30 rounded-full text-purple-300 text-xs">
          {asset.platform}
        </div>
      </div>
    </div>
  );
}
