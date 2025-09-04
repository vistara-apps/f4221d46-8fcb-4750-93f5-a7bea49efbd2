'use client';

import { useState, useEffect } from 'react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { Wallet as WalletIcon, Plus } from 'lucide-react';

export function WalletConnection() {
  const { setFrameReady } = useMiniKit();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <div className="space-y-4">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Connected Wallets</h3>
          <button className="p-2 bg-purple-600 bg-opacity-30 hover:bg-opacity-50 rounded-lg transition-colors">
            <Plus className="w-5 h-5 text-purple-300" />
          </button>
        </div>

        <Wallet>
          <ConnectWallet>
            <div className="flex items-center space-x-3 p-4 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
              <WalletIcon className="w-6 h-6 text-purple-300" />
              <div>
                <div className="text-white font-medium">Connect Wallet</div>
                <div className="text-gray-400 text-sm">Link your crypto wallet</div>
              </div>
            </div>
          </ConnectWallet>
        </Wallet>

        {isConnected && (
          <div className="mt-4 p-4 bg-green-600 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8" />
              <div>
                <Name className="text-white font-medium" />
                <div className="text-green-400 text-sm">Connected</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mock Connected Wallets */}
      <div className="space-y-3">
        <WalletItem name="MetaMask" address="0x1234...5678" balance="$89,250" />
        <WalletItem name="Coinbase Wallet" address="0x9876...4321" balance="$63,000" />
      </div>
    </div>
  );
}

interface WalletItemProps {
  name: string;
  address: string;
  balance: string;
}

function WalletItem({ name, address, balance }: WalletItemProps) {
  return (
    <div className="glass-card p-4 hover:bg-opacity-15 transition-colors cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
            <WalletIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-medium text-white">{name}</div>
            <div className="text-sm text-gray-400">{address}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-medium text-white">{balance}</div>
          <div className="text-sm text-green-400">Connected</div>
        </div>
      </div>
    </div>
  );
}
