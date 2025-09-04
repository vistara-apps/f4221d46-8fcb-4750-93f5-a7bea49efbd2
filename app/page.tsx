'use client';

import { useState } from 'react';
import { Wallet as WalletIcon } from 'lucide-react';
import { AppShell } from '@/components/AppShell';
import { SearchBar } from '@/components/SearchBar';
import { AssetCard } from '@/components/AssetCard';
import { DataDisplay } from '@/components/DataDisplay';
import { PortfolioChart } from '@/components/PortfolioChart';
import { WalletConnection } from '@/components/WalletConnection';
import { mockAssets, mockMetrics } from '@/lib/mock-data';
import { AssetHolding } from '@/lib/types';

export default function HomePage() {
  const [searchResults, setSearchResults] = useState<AssetHolding[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchResults = (results: AssetHolding[]) => {
    setSearchResults(results);
    setIsSearching(results.length > 0);
  };

  const displayAssets = isSearching ? searchResults : mockAssets;

  return (
    <AppShell>
      <div className="space-y-6 pb-20 lg:pb-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-display gradient-text mb-2">AssetSync</h1>
            <p className="text-gray-400">Unify your crypto assets, see your whole portfolio at a glance.</p>
          </div>
          <div className="lg:w-96">
            <SearchBar onSearchResults={handleSearchResults} />
          </div>
        </div>

        {!isSearching && (
          <>
            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <DataDisplay metrics={mockMetrics} variant="metric" />
              </div>
              <div>
                <WalletConnection />
              </div>
            </div>

            {/* Portfolio Chart */}
            <PortfolioChart />
          </>
        )}

        {/* Assets Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              {isSearching ? `Search Results (${displayAssets.length})` : 'Your Assets'}
            </h2>
            {!isSearching && (
              <div className="text-sm text-gray-400">
                {mockAssets.length} assets across {new Set(mockAssets.map(a => a.platform)).size} platforms
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayAssets.map((asset, index) => (
              <AssetCard key={index} asset={asset} />
            ))}
          </div>

          {displayAssets.length === 0 && !isSearching && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-600 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                <WalletIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No Assets Found</h3>
              <p className="text-gray-400 mb-4">Connect your wallet to start tracking your portfolio</p>
              <WalletConnection />
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
