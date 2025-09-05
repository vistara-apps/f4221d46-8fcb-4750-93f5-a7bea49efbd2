'use client';

import { useEffect } from 'react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { Wallet as WalletIcon, Link } from 'lucide-react';

export function WalletConnection() {
  const { setFrameReady } = useMiniKit();

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center space-x-3 mb-4">
        <WalletIcon className="w-6 h-6 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">
          Connect Your Wallet
        </h3>
      </div>

      <p className="text-gray-300 text-sm mb-6">
        Connect your wallet to view your complete crypto portfolio across all
        platforms.
      </p>

      <Wallet>
        <ConnectWallet className="btn-primary w-full justify-center">
          <div className="flex items-center space-x-2">
            <Link className="w-4 h-4" />
            <span>Connect Wallet</span>
          </div>
        </ConnectWallet>

        <div className="mt-4 flex items-center space-x-3">
          <Avatar className="w-8 h-8" />
          <Name className="text-white" />
        </div>
      </Wallet>
    </div>
  );
}
