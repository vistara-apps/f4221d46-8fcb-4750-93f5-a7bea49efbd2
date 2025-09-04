# AssetSync - Base Mini App

Unify your crypto assets, see your whole portfolio at a glance.

## Features

- **Unified Portfolio Dashboard**: Aggregates all cryptocurrency holdings from connected wallets and exchanges into a single view
- **Universal Asset Search**: Find any specific asset across all aggregated accounts
- **Real-time Portfolio Tracking**: Monitor asset values, P&L, and overall portfolio allocation
- **Multi-platform Support**: Connect wallets from MetaMask, Coinbase, and other providers
- **Mobile-first Design**: Optimized for Farcaster frames and mobile usage

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base network integration via OnchainKit
- **Wallet**: MiniKit for Farcaster integration
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/products/onchainkit)

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main portfolio page
│   ├── providers.tsx      # MiniKit and OnchainKit providers
│   └── globals.css        # Global styles and Tailwind
├── components/            # Reusable UI components
│   ├── AppShell.tsx       # Main app layout and navigation
│   ├── AssetCard.tsx      # Individual asset display
│   ├── SearchBar.tsx      # Universal asset search
│   ├── DataDisplay.tsx    # Portfolio metrics display
│   ├── PortfolioChart.tsx # Performance visualization
│   └── WalletConnection.tsx # Wallet connection UI
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript interfaces
│   ├── mock-data.ts       # Demo portfolio data
│   └── utils.ts           # Helper functions
```

## Design System

The app uses a custom design system with:

- **Colors**: Purple/blue gradient theme with glass morphism effects
- **Typography**: Clean, modern font hierarchy
- **Components**: Modular, reusable UI components
- **Responsive**: Mobile-first design optimized for Farcaster frames

## API Integration

Ready for integration with:

- **Airstack**: On-chain asset and transaction data
- **Neynar**: Farcaster user authentication and data
- **WalletConnect**: Multi-wallet connection support
- **Reservoir**: NFT and marketplace data (future expansion)

## Deployment

The app is optimized for deployment on Vercel or similar platforms that support Next.js 15.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
