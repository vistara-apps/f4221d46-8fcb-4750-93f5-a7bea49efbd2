'use client';

import { ReactNode } from 'react';
import { Search, Home, TrendingUp, Wallet, Settings2 } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-xl font-bold text-white">AssetSync</h1>
          </div>
          <button className="glass-card p-2 rounded-lg hover:bg-opacity-20 transition-all duration-200">
            <Settings2 className="w-5 h-5 text-white" />
          </button>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-30 backdrop-blur-md border-t border-white border-opacity-10">
          <div className="max-w-lg mx-auto px-4 py-3">
            <div className="flex items-center justify-around">
              <button className="flex flex-col items-center space-y-1 text-purple-400">
                <Home className="w-5 h-5" />
                <span className="text-xs">Portfolio</span>
              </button>
              <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200">
                <Search className="w-5 h-5" />
                <span className="text-xs">Search</span>
              </button>
              <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs">Analytics</span>
              </button>
              <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200">
                <Wallet className="w-5 h-5" />
                <span className="text-xs">Wallets</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
