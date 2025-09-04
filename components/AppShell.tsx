'use client';

import { ReactNode } from 'react';
import { Menu, Home, Search, BarChart3, Wallet } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b border-white border-opacity-20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">AssetSync</h1>
        </div>
        <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 min-h-screen border-r border-white border-opacity-20 bg-black bg-opacity-20">
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">AssetSync</h1>
            </div>
          </div>
          
          <nav className="flex-1 px-4 space-y-2">
            <NavItem icon={<Home className="w-5 h-5" />} label="Portfolio" active />
            <NavItem icon={<Search className="w-5 h-5" />} label="Search" />
            <NavItem icon={<BarChart3 className="w-5 h-5" />} label="Analytics" />
            <NavItem icon={<Wallet className="w-5 h-5" />} label="Wallets" />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black bg-opacity-40 backdrop-blur-lg border-t border-white border-opacity-20">
        <div className="flex items-center justify-around py-2">
          <NavItem icon={<Home className="w-5 h-5" />} label="Portfolio" active mobile />
          <NavItem icon={<Search className="w-5 h-5" />} label="Search" mobile />
          <NavItem icon={<BarChart3 className="w-5 h-5" />} label="Analytics" mobile />
          <NavItem icon={<Wallet className="w-5 h-5" />} label="Wallets" mobile />
        </div>
      </nav>
    </div>
  );
}

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  mobile?: boolean;
}

function NavItem({ icon, label, active = false, mobile = false }: NavItemProps) {
  const baseClasses = mobile
    ? "flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors"
    : "flex items-center space-x-3 p-3 rounded-lg transition-colors";
    
  const activeClasses = active
    ? "bg-purple-600 bg-opacity-30 text-purple-300"
    : "text-gray-400 hover:text-white hover:bg-white hover:bg-opacity-10";

  return (
    <button className={`${baseClasses} ${activeClasses}`}>
      {icon}
      <span className={mobile ? "text-xs" : "text-sm font-medium"}>{label}</span>
    </button>
  );
}
