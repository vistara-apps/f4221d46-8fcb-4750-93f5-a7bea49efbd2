# AssetSync - Base Mini App

A unified crypto portfolio dashboard for Farcaster users built with Next.js 15 and OnchainKit.

## Features

- **Unified Portfolio Dashboard**: View all your crypto assets in one place
- **Universal Asset Search**: Find any asset across all connected platforms
- **Real-time Portfolio Tracking**: See current values and 24h changes
- **Multi-platform Support**: Aggregates assets from various exchanges and DeFi protocols
- **Beautiful UI**: Modern glass-morphism design with smooth animations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety
- **Mini App**: Farcaster Frame integration

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
│   ├── page.tsx           # Main page component
│   ├── providers.tsx      # MiniKit and OnchainKit providers
│   └── globals.css        # Global styles and design tokens
├── components/            # Reusable UI components
│   ├── AppShell.tsx       # Main app layout
│   ├── AssetCard.tsx      # Individual asset display
│   ├── DataDisplay.tsx    # Portfolio metrics
│   ├── PortfolioDashboard.tsx # Main dashboard
│   └── SearchBar.tsx      # Universal search
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript interfaces
│   └── mockData.ts        # Sample data for demo
└── README.md
```

## Design System

The app uses a custom design system with:

- **Colors**: Purple/pink gradient theme with glass-morphism effects
- **Typography**: Inter font with semantic text sizes
- **Spacing**: Consistent spacing scale (sm: 8px, md: 12px, lg: 20px)
- **Animations**: Smooth transitions with 250ms duration
- **Components**: Modular, reusable UI components

## API Integration

Currently uses mock data for demonstration. Ready for integration with:

- **Airstack**: For on-chain asset data
- **Neynar**: For Farcaster user authentication
- **WalletConnect**: For wallet connections
- **Reservoir**: For NFT data (future feature)

## Deployment

The app is optimized for deployment on Vercel or similar platforms that support Next.js 15.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.
