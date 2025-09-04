'use client';

import { PortfolioSummary } from '@/lib/types';
import { TrendingUp, TrendingDown, Wallet, PieChart } from 'lucide-react';

interface DataDisplayProps {
  summary: PortfolioSummary;
  variant?: 'metric' | 'list';
}

export function DataDisplay({ summary, variant = 'metric' }: DataDisplayProps) {
  const isPositive = summary.totalChangePercent24h >= 0;

  if (variant === 'list') {
    return (
      <div className="space-y-4">
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Wallet className="w-6 h-6 text-cyan-400" />
              <div>
                <h3 className="font-medium text-white">Total Portfolio</h3>
                <p className="text-gray-300 text-sm">All platforms</p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-white text-xl">${summary.totalValue.toLocaleString()}</div>
              <div className={`text-sm flex items-center justify-end ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                {Math.abs(summary.totalChangePercent24h).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <PieChart className="w-6 h-6 text-purple-400" />
              <div>
                <h3 className="font-medium text-white">Asset Count</h3>
                <p className="text-gray-300 text-sm">Unique tokens</p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-white text-xl">{summary.assetCount}</div>
              <div className="text-gray-300 text-sm">tokens</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="metric-card">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          ${summary.totalValue.toLocaleString()}
        </h2>
        <div className={`flex items-center justify-center space-x-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
          <span className="font-medium">
            ${Math.abs(summary.totalChange24h).toLocaleString()} ({Math.abs(summary.totalChangePercent24h).toFixed(2)}%)
          </span>
        </div>
        <p className="text-gray-300 text-sm mt-1">24h change</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{summary.assetCount}</div>
          <div className="text-gray-300 text-sm">Assets</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text">6</div>
          <div className="text-gray-300 text-sm">Platforms</div>
        </div>
      </div>
    </div>
  );
}
