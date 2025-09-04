'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Eye, EyeOff } from 'lucide-react';
import { mockPortfolioMetrics, mockChartData } from '@/lib/mockData';
import { formatCurrency, formatPercentage, getChangeColor } from '@/lib/utils';
import { PortfolioChart } from './PortfolioChart';

export function PortfolioDashboard() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const metrics = mockPortfolioMetrics;

  return (
    <div className="space-y-6">
      {/* Total Portfolio Value */}
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300 text-sm">Total Portfolio Value</span>
          <button
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            {isBalanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
        </div>
        
        <div className="flex items-end space-x-4">
          <h2 className="text-3xl font-bold text-white">
            {isBalanceVisible ? formatCurrency(metrics.totalValue) : '••••••'}
          </h2>
          <div className={`flex items-center space-x-1 ${getChangeColor(metrics.totalChangePercent24h)}`}>
            {metrics.totalChangePercent24h >= 0 ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {formatPercentage(metrics.totalChangePercent24h)}
            </span>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mt-1">
          {formatPercentage(metrics.totalChangePercent24h)} ({formatCurrency(metrics.totalChange24h)}) today
        </p>
      </div>

      {/* Portfolio Chart */}
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Portfolio Performance</h3>
          <div className="flex space-x-2">
            <button className="text-xs px-3 py-1 bg-purple-500 text-white rounded-full">24H</button>
            <button className="text-xs px-3 py-1 text-gray-400 hover:text-white transition-colors duration-200">7D</button>
            <button className="text-xs px-3 py-1 text-gray-400 hover:text-white transition-colors duration-200">30D</button>
          </div>
        </div>
        <PortfolioChart data={mockChartData} />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Assets</span>
          </div>
          <p className="text-2xl font-bold text-white">{metrics.assetCount}</p>
          <p className="text-gray-400 text-xs">Active positions</p>
        </div>
        
        <div className="metric-card">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">24h Change</span>
          </div>
          <p className={`text-2xl font-bold ${getChangeColor(metrics.totalChangePercent24h)}`}>
            {formatPercentage(metrics.totalChangePercent24h)}
          </p>
          <p className="text-gray-400 text-xs">Portfolio change</p>
        </div>
      </div>
    </div>
  );
}
