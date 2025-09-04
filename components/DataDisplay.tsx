'use client';

import { PortfolioMetrics } from '@/lib/types';
import { formatCurrency, formatPercentage, getChangeColor } from '@/lib/utils';
import { TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react';

interface DataDisplayProps {
  metrics: PortfolioMetrics;
  variant?: 'metric' | 'list';
}

export function DataDisplay({ metrics, variant = 'metric' }: DataDisplayProps) {
  const isPositive = metrics.totalChangePercent24h >= 0;

  if (variant === 'list') {
    return (
      <div className="space-y-4">
        <MetricCard
          icon={<DollarSign className="w-6 h-6" />}
          title="Total Value"
          value={formatCurrency(metrics.totalValue)}
          change={formatPercentage(metrics.totalChangePercent24h)}
          isPositive={isPositive}
        />
        <MetricCard
          icon={<PieChart className="w-6 h-6" />}
          title="Assets"
          value={metrics.assetCount.toString()}
          subtitle="Different tokens"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main Portfolio Value */}
      <div className="glass-card p-6 text-center animate-fade-in">
        <div className="mb-2">
          <span className="text-gray-400 text-sm">Total Portfolio Value</span>
        </div>
        <div className="text-4xl font-bold text-white mb-2">
          {formatCurrency(metrics.totalValue)}
        </div>
        <div className={`flex items-center justify-center space-x-2 ${getChangeColor(metrics.totalChangePercent24h)}`}>
          {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
          <span className="font-medium">
            {formatCurrency(metrics.totalChange24h)} ({formatPercentage(metrics.totalChangePercent24h)})
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-400 text-sm mb-1">Assets Count</div>
              <div className="text-2xl font-bold text-white">{metrics.assetCount}</div>
            </div>
            <div className="w-12 h-12 bg-purple-600 bg-opacity-30 rounded-lg flex items-center justify-center">
              <PieChart className="w-6 h-6 text-purple-300" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-400 text-sm mb-1">24h Change</div>
              <div className={`text-2xl font-bold ${getChangeColor(metrics.totalChangePercent24h)}`}>
                {formatPercentage(metrics.totalChangePercent24h)}
              </div>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isPositive ? 'bg-green-600 bg-opacity-30' : 'bg-red-600 bg-opacity-30'
            }`}>
              {isPositive ? 
                <TrendingUp className="w-6 h-6 text-green-300" /> : 
                <TrendingDown className="w-6 h-6 text-red-300" />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  subtitle?: string;
}

function MetricCard({ icon, title, value, change, isPositive, subtitle }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 bg-opacity-30 rounded-lg flex items-center justify-center text-purple-300">
            {icon}
          </div>
          <div>
            <div className="text-gray-400 text-sm">{title}</div>
            <div className="text-xl font-bold text-white">{value}</div>
            {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
          </div>
        </div>
        {change && (
          <div className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </div>
        )}
      </div>
    </div>
  );
}
