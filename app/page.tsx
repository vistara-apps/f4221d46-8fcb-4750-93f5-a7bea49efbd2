'use client';

import { useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';
import { AppShell } from '@/components/AppShell';
import { PortfolioDashboard } from '@/components/PortfolioDashboard';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="glass-card p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold gradient-text mb-2">
            Welcome to AssetSync
          </h2>
          <p className="text-gray-300 mb-4">
            Unify your crypto assets, see your whole portfolio at a glance.
          </p>
          
          <Wallet>
            <ConnectWallet className="btn-primary">
              <Name />
            </ConnectWallet>
          </Wallet>
        </div>

        {/* Portfolio Dashboard */}
        <PortfolioDashboard />
      </div>
    </AppShell>
  );
}
