'use client';

import { useState, useEffect } from 'react';
import { AssetHolding, PortfolioSummary } from '@/lib/types';
import { mockAssets, mockPortfolioSummary } from '@/lib/mockData';
import { DataDisplay } from './DataDisplay';
import { AssetCard } from './AssetCard';
import { SearchBar } from './SearchBar';
import { RefreshCw, Filter } from 'lucide-react';

export function PortfolioDashboard() {
  const [assets, setAssets] = useState<AssetHolding[]>(mockAssets);
  const [filteredAssets, setFilteredAssets] = useState<AssetHolding[]>(mockAssets);
  const [summary, setSummary] = useState<PortfolioSummary>(mockPortfolioSummary);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'value' | 'change' | 'name'>('value');

  const handleSearchResults = (results: AssetHolding[]) => {
    if (results.length === 0) {
      setFilteredAssets(assets);
    } else {
      setFilteredAssets(results);
    }
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const sortedAssets = [...filteredAssets].sort((a, b) => {
    switch (sortBy) {
      case 'value':
        return b.currentValue - a.currentValue;
      case 'change':
        return (b.priceChange24h || 0) - (a.priceChange24h || 0);
      case 'name':
        return a.assetName.localeCompare(b.assetName);
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Portfolio Summary */}
      <DataDisplay metrics={summary} variant="metric" />

      {/* Search and Controls */}
      <div className="space-y-4">
        <SearchBar onSearchResults={handleSearchResults} />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSortBy('value')}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                sortBy === 'value' ? 'bg-purple-500 text-white' : 'glass-card text-gray-300'
              }`}
            >
              Value
            </button>
            <button
              onClick={() => setSortBy('change')}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                sortBy === 'change' ? 'bg-purple-500 text-white' : 'glass-card text-gray-300'
              }`}
            >
              Change
            </button>
            <button
              onClick={() => setSortBy('name')}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                sortBy === 'name' ? 'bg-purple-500 text-white' : 'glass-card text-gray-300'
              }`}
            >
              Name
            </button>
          </div>
          
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="glass-card p-2 rounded-lg hover:bg-opacity-20 transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 text-white ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Assets List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Your Assets</h3>
          <span className="text-gray-300 text-sm">{sortedAssets.length} assets</span>
        </div>
        
        {sortedAssets.length === 0 ? (
          <div className="metric-card text-center py-8">
            <div className="text-gray-400 mb-2">No assets found</div>
            <div className="text-gray-500 text-sm">Try adjusting your search terms</div>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedAssets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} variant="compact" />
            ))}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card text-center">
          <div className="text-xl font-bold gradient-text">65.9%</div>
          <div className="text-gray-300 text-sm">This Month</div>
        </div>
        <div className="metric-card text-center">
          <div className="text-xl font-bold text-green-400">+$2.4K</div>
          <div className="text-gray-300 text-sm">All Time</div>
        </div>
      </div>
    </div>
  );
}
