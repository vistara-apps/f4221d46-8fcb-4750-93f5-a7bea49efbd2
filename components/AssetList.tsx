'use client';

import { useState } from 'react';
import { AssetHolding } from '@/lib/types';
import { AssetCard } from './AssetCard';
import { SearchBar } from './SearchBar';

interface AssetListProps {
  assets: AssetHolding[];
  title?: string;
}

export function AssetList({ assets, title = 'Your Assets' }: AssetListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAssets, setFilteredAssets] = useState(assets);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredAssets(assets);
      return;
    }

    const filtered = assets.filter(
      (asset) =>
        asset.assetName.toLowerCase().includes(query.toLowerCase()) ||
        asset.assetSymbol.toLowerCase().includes(query.toLowerCase()) ||
        asset.platform.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAssets(filtered);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <span className="text-sm text-gray-400">
          {filteredAssets.length} asset{filteredAssets.length !== 1 ? 's' : ''}
        </span>
      </div>

      <SearchBar onSearch={handleSearch} placeholder="Search your assets..." />

      {filteredAssets.length === 0 ? (
        <div className="glass-card p-8 rounded-lg text-center">
          <p className="text-gray-400">
            {searchQuery
              ? 'No assets found matching your search.'
              : 'No assets found.'}
          </p>
          {searchQuery && (
            <button
              onClick={() => handleSearch('')}
              className="mt-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAssets.map((asset, index) => (
            <AssetCard
              key={`${asset.assetSymbol}-${index}`}
              asset={asset}
              variant="compact"
            />
          ))}
        </div>
      )}
    </div>
  );
}
