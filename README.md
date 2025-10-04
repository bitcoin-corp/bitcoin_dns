# Bitcoin DNS 🌐

**Decentralized Domain Name System on Bitcoin SV Blockchain**

Bitcoin DNS enables companies to create blockchain-governed versions of their websites through `b.subdomain.com` addresses with tokenized ownership, shareholder voting, and X402 micropayment revenue distribution.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Bitcoin SV](https://img.shields.io/badge/Bitcoin%20SV-Blockchain-orange)](https://bitcoinsv.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/bitcoin-corp/bitcoin_dns.git
cd bitcoin_dns

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to access the Bitcoin DNS portal.

## 🎯 What is Bitcoin DNS?

Bitcoin DNS revolutionizes domain ownership by creating blockchain-governed alternatives to traditional websites:

- **`b.company.com`** - Blockchain version of `company.com`
- **Tokenized Ownership** - Domain shares as NFTs with democratic control
- **Threshold Governance** - 51% shareholder approval for major decisions
- **X402 Revenue** - Automatic micropayment distribution to shareholders
- **BSV Integration** - Immutable records and smart contract execution

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Bitcoin DNS Ecosystem                    │
├─────────────────────────────────────────────────────────────┤
│  Portal (Next.js)     │  Smart Contracts  │  DNS Resolver   │
│  - Company Setup     │  - Governance     │  - b.* Routing  │
│  - Share Management  │  - Voting         │  - Cache Layer  │
│  - Analytics         │  - Revenue Split  │  - Fallback     │
├─────────────────────────────────────────────────────────────┤
│              Bitcoin SV Blockchain Layer                   │
│  - NFT Containers    │  X402 Payments    │  Domain Records │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 Core Features

### 1. **Portal Interface** (`/portal`)
- 4-step company subdomain setup wizard
- Share structure configuration (total shares, voting thresholds)
- Revenue distribution settings (shareholders/development/operations)
- Real-time deployment cost estimation

### 2. **Smart Contract Governance**
- Proposal system for content updates and configuration changes
- Threshold signature voting (default 51% approval required)
- Automated execution of approved proposals
- NFT container integration for tokenized shares

### 3. **X402 Revenue Distribution**
- Micropayment tracking from DNS queries and subdomain visits
- Automatic revenue distribution based on shareholder percentages
- Analytics dashboard with revenue sources and trends
- Gas-optimized batch payments

### 4. **DNS Resolution Service**
- `b.subdomain.com` routing with blockchain integration
- 5-minute cache layer for performance optimization
- Fallback to traditional DNS when subdomain not configured
- Governance-based DNS record updates

## 📁 Project Structure

```
bitcoin_dns/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── portal/             # Company setup portal
│   │   ├── token/              # $BDNS token economics
│   │   ├── contracts/          # Development contracts
│   │   ├── docs/               # Documentation
│   │   ├── tasks/              # Community tasks
│   │   └── contributions/      # Contribution tracking
│   ├── components/             # React components
│   │   ├── DevLayout.tsx       # Developer sidebar layout
│   │   ├── DevSidebar.tsx      # GitHub integration sidebar
│   │   ├── PocBar.tsx          # Proof of concept banner
│   │   └── Taskbar.tsx         # Navigation taskbar
│   ├── lib/
│   │   ├── contracts/          # Smart contract interfaces
│   │   │   └── DomainGovernance.ts
│   │   ├── payments/           # X402 revenue system
│   │   │   └── X402Revenue.ts
│   │   ├── dns/                # DNS resolution service
│   │   │   └── SubdomainResolver.ts
│   │   └── utils/              # Utility functions
│   └── styles/                 # Tailwind CSS styles
├── docs/                       # Additional documentation
├── contracts/                  # Development contracts
└── issues/                     # GitHub issues templates
```

## 🌟 Use Cases

### **For Companies:**
1. **Brand Protection** - Secure blockchain version of company domain
2. **Community Engagement** - Shareholders participate in content decisions
3. **Revenue Sharing** - Distribute profits to stakeholders automatically
4. **Governance Innovation** - Democratic control over digital assets

### **For Investors:**
1. **Domain Ownership** - Buy shares in valuable internet properties
2. **Revenue Participation** - Earn from domain traffic and services
3. **Voting Rights** - Influence content and strategic decisions
4. **Liquid Assets** - Trade domain shares on BSV marketplace

### **For Developers:**
1. **Integration Opportunities** - Build on Bitcoin DNS infrastructure
2. **Token Rewards** - Earn $BDNS for contributions
3. **Smart Contract Development** - Create domain governance solutions
4. **DNS Innovation** - Pioneer blockchain-based internet protocols

## 💰 Token Economics ($BDNS)

- **Total Supply:** 1,000,000,000 $BDNS
- **Development Allocation:** 100,000,000 $BDNS (10%)
- **Company Reserves:** 300,000,000 $BDNS (30%)
- **Community Rewards:** 400,000,000 $BDNS (40%)
- **Ecosystem Growth:** 200,000,000 $BDNS (20%)

### Revenue Streams:
- Domain registration fees
- DNS service charges
- Governance transaction fees
- Share trading commissions
- Premium features and analytics

## 🛠️ Development

### Prerequisites
- Node.js 18+ and npm
- Bitcoin SV wallet for testing
- Git for version control

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build
```

### Environment Variables
Create a `.env.local` file:
```env
BSV_RPC_ENDPOINT=https://api.whatsonchain.com/v1/bsv/main
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_REPO=bitcoin-corp/bitcoin_dns
```

## 🤝 Contributing

We welcome contributions! See our [Development Contracts](./contracts/) for token-incentivized tasks.

### Quick Contributing Steps:
1. Check [GitHub Issues](https://github.com/bitcoin-corp/bitcoin_dns/issues) for available tasks
2. Review corresponding [Development Contract](./contracts/) for $BDNS rewards
3. Fork the repository and create a feature branch
4. Implement changes with tests and documentation
5. Submit a Pull Request referencing the issue

### Contribution Rewards:
- **Critical Features:** 1,000,000 - 5,000,000 $BDNS
- **Major Enhancements:** 500,000 - 1,000,000 $BDNS  
- **Bug Fixes:** 50,000 - 200,000 $BDNS
- **Documentation:** 25,000 - 100,000 $BDNS

## 📋 Roadmap

### **Phase 1: Foundation (Q1 2025)**
- ✅ Core portal interface
- ✅ Smart contract governance framework
- ✅ X402 revenue distribution system
- ✅ Basic DNS resolver service
- 🔄 BSV blockchain integration
- 🔄 NFT container implementation

### **Phase 2: Production (Q2 2025)**
- 📋 Mainnet smart contract deployment
- 📋 DNS infrastructure scaling
- 📋 Security audits and testing
- 📋 Company onboarding program
- 📋 Mobile-responsive interface

### **Phase 3: Ecosystem (Q3 2025)**
- 📋 Secondary marketplace for domain shares
- 📋 Advanced analytics dashboard
- 📋 API for third-party integrations
- 📋 Multi-chain support exploration
- 📋 Enterprise features and SLA

### **Phase 4: Scale (Q4 2025)**
- 📋 Global DNS infrastructure
- 📋 Institutional partnerships
- 📋 Advanced governance features
- 📋 Cross-domain interoperability
- 📋 Decentralized autonomous operation

## 🔗 Links

- **Website:** [Coming Soon]
- **Documentation:** [./docs/](./docs/)
- **GitHub:** [bitcoin-corp/bitcoin_dns](https://github.com/bitcoin-corp/bitcoin_dns)
- **Twitter:** [@BitcoinDNS](https://twitter.com/BitcoinDNS)
- **Discord:** [Bitcoin DNS Community](https://discord.gg/bitcoin-dns)

## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚨 Disclaimer

Bitcoin DNS is experimental technology. Use at your own risk. This is not financial advice. Cryptocurrency investments are volatile and risky.

---

**Built with ❤️ on Bitcoin SV blockchain**

*Democratizing domain ownership, one subdomain at a time.*
