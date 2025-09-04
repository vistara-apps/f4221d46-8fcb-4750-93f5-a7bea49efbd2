'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { AssetHolding } from '@/lib/types';
import { mockAssets } from '@/lib/mockData';

interface SearchBarProps {
  onSearchResults?: (results: AssetHolding[]) => void;
}

export function SearchBar({ onSearchResults }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [results, setResults] = useState<AssetHolding[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim() === '') {
      setResults([]);
      onSearchResults?.([]);
      return;
    }

    const filteredAssets = mockAssets.filter(asset =>
      asset.assetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.assetSymbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.platform.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredAssets);
    onSearchResults?.(filteredAssets);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsActive(false);
    onSearchResults?.([]);
  };

  return (
    <div className="relative">
      <div className={`glass-card p-4 rounded-lg transition-all duration-250 ${isActive ? 'bg-opacity-20' : ''}`}>
        <div className="flex items-center space-x-3">
          <Search className="w-5 h-5 text-gray-300" />
          <input
            type="text"
            placeholder="Search assets, platforms..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setTimeout(() => setIsActive(false), 200)}
            className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="p-1 hover:bg-white hover:bg-opacity-10 rounded transition-all"
            >
              <X className="w-4 h-4 text-gray-300" />
            </button>
          )}
        </div>
      </div>

      {/* Search Results */}
      {isActive && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-lg p-2 z-50 animate-slide-up">
          <div className="space-y-2">
            {results.map((asset) => (
              <div
                key={asset.id}
                className="flex items-center justify-between p-3 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer transition-all"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{asset.logo}</span>
                  <div>
                    <div className="font-medium text-white">{asset.assetSymbol}</div>
                    <div className="text-sm text-gray-300">{asset.platform}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-white">{asset.quantity}</div>
                  <div className="text-sm text-gray-300">${asset.currentValue.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
