'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '@/lib/types';

interface PortfolioChartProps {
  data: ChartDataPoint[];
}

export function PortfolioChart({ data }: PortfolioChartProps) {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
          />
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#gradient)"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4, fill: '#8B5CF6' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
