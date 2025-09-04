'use client';

import { mockChartData } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

export function PortfolioChart() {
  const maxValue = Math.max(...mockChartData.map(d => d.value));
  const minValue = Math.min(...mockChartData.map(d => d.value));
  const range = maxValue - minValue;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Portfolio Performance</h3>
          <p className="text-gray-400 text-sm">Last 6 months</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">Current</div>
          <div className="text-lg font-bold text-white">
            {formatCurrency(mockChartData[mockChartData.length - 1].value)}
          </div>
        </div>
      </div>

      {/* Simple Line Chart */}
      <div className="relative h-32 mb-4">
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Chart Line */}
          <polyline
            fill="none"
            stroke="rgb(168, 85, 247)"
            strokeWidth="2"
            points={mockChartData.map((point, index) => {
              const x = (index / (mockChartData.length - 1)) * 300;
              const y = 100 - ((point.value - minValue) / range) * 80;
              return `${x},${y}`;
            }).join(' ')}
          />
          
          {/* Chart Area */}
          <polygon
            fill="url(#chartGradient)"
            points={`0,100 ${mockChartData.map((point, index) => {
              const x = (index / (mockChartData.length - 1)) * 300;
              const y = 100 - ((point.value - minValue) / range) * 80;
              return `${x},${y}`;
            }).join(' ')} 300,100`}
          />
          
          {/* Data Points */}
          {mockChartData.map((point, index) => {
            const x = (index / (mockChartData.length - 1)) * 300;
            const y = 100 - ((point.value - minValue) / range) * 80;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill="rgb(168, 85, 247)"
                className="hover:r-4 transition-all"
              />
            );
          })}
        </svg>
      </div>

      {/* Chart Labels */}
      <div className="flex justify-between text-xs text-gray-400">
        {mockChartData.map((point, index) => (
          <span key={index}>{point.time}</span>
        ))}
      </div>
    </div>
  );
}
