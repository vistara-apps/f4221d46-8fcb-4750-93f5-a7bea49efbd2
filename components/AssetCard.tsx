'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { AssetHolding } from '@/lib/types';
import { formatCurrency, formatPercentage, getChangeColor } from '@/lib/utils';

interface AssetCardProps {
  asset: AssetHolding;
  variant?: 'default' | 'compact';
}

export function AssetCard({ asset, variant = 'default' }: AssetCardProps) {
  const isPositive = (asset.priceChange24h || 0) >= 0;

  if (variant === 'compact') {
    return (
      <div className="glass-card p-4 rounded-lg hover:bg-opacity-15 transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg">
              {asset.logo}
            </div>
            <div>
              <h3 className="font-semibold text-white">{asset.assetSymbol}</h3>
              <p className="text-sm text-gray-400">{asset.platform}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-white">
              {formatCurrency(asset.currentValue)}
            </p>
            <div
              className={`flex items-center space-x-1 ${getChangeColor(asset.priceChange24h || 0)}`}
            >
              {isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span className="text-xs">
                {formatPercentage(asset.priceChange24h || 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 rounded-lg hover:bg-opacity-15 transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl">
            {asset.logo}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {asset.assetName}
            </h3>
            <p className="text-sm text-gray-400">{asset.assetSymbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-white">
            {formatCurrency(asset.currentValue)}
          </p>
          <div
            className={`flex items-center space-x-1 ${getChangeColor(asset.priceChange24h || 0)}`}
          >
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm">
              {formatPercentage(asset.priceChange24h || 0)}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Quantity</span>
          <span className="text-white">{asset.quantity.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Platform</span>
          <span className="text-white">{asset.platform}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Last Updated</span>
          <span className="text-white">
            {asset.lastUpdated.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}
