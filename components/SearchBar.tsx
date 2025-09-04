'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { AssetHolding } from '@/lib/types';
import { mockAssets } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

interface SearchBarProps {
  onSearchResults?: (results: AssetHolding[]) => void;
}

export function SearchBar({ onSearchResults }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<AssetHolding[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim() === '') {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = mockAssets.filter(asset =>
      asset.assetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.assetSymbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.platform.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);
    setIsOpen(true);
    onSearchResults?.(filtered);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    onSearchResults?.([]);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search assets, platforms..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input pl-12 pr-12"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card border border-white border-opacity-20 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
          <div className="p-2">
            <div className="text-sm text-gray-400 px-3 py-2 border-b border-white border-opacity-10">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </div>
            {results.map((asset, index) => (
              <SearchResultItem key={index} asset={asset} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card border border-white border-opacity-20 rounded-lg shadow-xl z-50">
          <div className="p-4 text-center text-gray-400">
            No assets found for "{query}"
          </div>
        </div>
      )}
    </div>
  );
}

interface SearchResultItemProps {
  asset: AssetHolding;
}

function SearchResultItem({ asset }: SearchResultItemProps) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-white hover:bg-opacity-5 rounded-lg cursor-pointer transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-lg">
          {asset.logo}
        </div>
        <div>
          <div className="font-medium text-white">{asset.assetName}</div>
          <div className="text-sm text-gray-400">{asset.platform}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-medium text-white">{formatCurrency(asset.currentValue)}</div>
        <div className="text-sm text-gray-400">{asset.quantity} {asset.assetSymbol}</div>
      </div>
    </div>
  );
}
