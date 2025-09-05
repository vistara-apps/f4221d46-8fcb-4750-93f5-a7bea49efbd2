'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { PortfolioDashboard } from '@/components/PortfolioDashboard';
import { AssetList } from '@/components/AssetList';
import { WalletConnection } from '@/components/WalletConnection';
import { mockAssetHoldings } from '@/lib/mockData';
import { useAccount } from 'wagmi';

export default function HomePage() {
  const { isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<'portfolio' | 'assets'>(
    'portfolio'
  );

  return (
    <AppShell>
      {!isConnected ? (
        <div className="space-y-6">
          <WalletConnection />

          {/* Demo Preview */}
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">
              Preview: What You&apos;ll See
            </h3>
            <div className="space-y-4 opacity-60">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Portfolio Value</span>
                <span className="text-2xl font-bold text-white">
                  $22,825.00
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">24h Change</span>
                <span className="text-green-400">+5.18% (+$1,125.50)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Active Assets</span>
                <span className="text-white">5 assets</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex space-x-1 glass-card p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'portfolio'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('assets')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'assets'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Assets
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'portfolio' ? (
            <PortfolioDashboard />
          ) : (
            <AssetList assets={mockAssetHoldings} />
          )}
        </div>
      )}
    </AppShell>
  );
}
