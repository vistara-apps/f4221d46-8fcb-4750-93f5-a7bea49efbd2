'use client';

import { ReactNode } from 'react';
import { Search, Wallet, TrendingUp } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-500">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 glass-card mx-4 mt-4 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold gradient-text">AssetSync</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="glass-card p-2 rounded-lg hover:bg-opacity-20 transition-all">
              <Search className="w-5 h-5 text-white" />
            </button>
            <button className="glass-card p-2 rounded-lg hover:bg-opacity-20 transition-all">
              <Wallet className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-6 max-w-lg">
        {children}
      </main>
    </div>
  );
}
