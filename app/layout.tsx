import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://assetsync-base-miniapp.vercel.app'),
  title: 'AssetSync - Unify Your Crypto Portfolio',
  description:
    'Unify your crypto assets, see your whole portfolio at a glance.',
  openGraph: {
    title: 'AssetSync - Unify Your Crypto Portfolio',
    description:
      'Unify your crypto assets, see your whole portfolio at a glance.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
