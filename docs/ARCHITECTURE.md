# Bitcoin DNS Architecture

## System Overview

Bitcoin DNS is a decentralized domain name system built on Bitcoin SV blockchain that enables democratic governance of internet domains through tokenized ownership and smart contracts.

## Architecture Layers

### 1. Frontend Layer (Next.js Portal)

**Location:** `src/app/`

The frontend provides user interfaces for:
- Company subdomain registration (`/portal`)
- Token economics overview (`/token`)
- Development contracts (`/contracts`)
- Community documentation (`/docs`)
- Task management (`/tasks`)
- Contribution tracking (`/contributions`)

**Key Components:**
- `DevLayout.tsx` - Main layout with developer sidebar
- `Taskbar.tsx` - Navigation with Bitcoin Apps suite integration
- `PocBar.tsx` - Proof of concept banner
- `DevSidebar.tsx` - GitHub integration and live stats

### 2. Smart Contract Layer

**Location:** `src/lib/contracts/DomainGovernance.ts`

Handles blockchain governance through:

```typescript
interface DomainContract {
  domain: string;
  totalShares: number;
  shareholders: Map<string, number>;
  minApprovalThreshold: number; // 51% default
  activeProposals: GovernanceProposal[];
  contractAddress: string;
  nftContainerId: string;
}
```

**Governance Flow:**
1. Shareholder creates proposal (`content_update`, `subdomain_config`, `revenue_split`, `ownership_transfer`)
2. Other shareholders vote with their share weight
3. Once 51% threshold reached, proposal auto-executes
4. Changes recorded immutably on BSV blockchain

### 3. Payment Layer (X402)

**Location:** `src/lib/payments/X402Revenue.ts`

Manages micropayments and revenue distribution:

```typescript
interface X402Payment {
  id: string;
  domain: string;
  amount: number; // satoshis
  source: 'dns_query' | 'subdomain_visit' | 'premium_service' | 'governance_fee';
  timestamp: number;
  txId: string;
  distributed: boolean;
}
```

**Revenue Sources:**
- DNS query fees (1-5 satoshis per query)
- Subdomain visit micropayments
- Premium DNS service subscriptions
- Governance transaction fees

**Distribution Process:**
1. Payments accumulate until threshold (1000 satoshis) or 24-hour timeout
2. Revenue split according to configured percentages:
   - Shareholders: 70% (default)
   - Development fund: 20% 
   - Operations: 10%
3. Individual shareholder amounts calculated by ownership percentage
4. Batch payments executed to minimize transaction fees

### 4. DNS Resolution Layer

**Location:** `src/lib/dns/SubdomainResolver.ts`

Resolves `b.subdomain.com` addresses through:

```typescript
interface SubdomainConfig {
  domain: string;
  subdomain: string;
  contractAddress: string;
  contentHash: string;
  dnsRecords: DNSRecord[];
  governanceEnabled: boolean;
  lastUpdated: number;
  updateTxId: string;
}
```

**Resolution Process:**
1. Parse `b.company.com` format to extract "company"
2. Check 5-minute cache for existing configuration
3. Query BSV blockchain for domain smart contract
4. Retrieve current DNS records from contract state
5. Return records with appropriate TTL or fallback to portal

### 5. Blockchain Layer (Bitcoin SV)

**Integration Points:**
- Smart contract deployment and execution
- NFT containers for tokenized domain shares
- X402 micropayment protocol
- Immutable domain record storage
- Governance vote recording

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        User Journey                            │
└─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Portal Interface                           │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │  Company Setup  │ │  Share Config   │ │ Revenue Split   │   │
│  │  - Domain name  │ │  - Total shares │ │ - Percentages   │   │
│  │  - Subdomain    │ │  - Voting %     │ │ - Addresses     │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Smart Contract Deployment                    │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │ Governance      │ │ NFT Container   │ │ Revenue Split   │   │
│  │ Contract        │ │ Creation        │ │ Configuration   │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Operational Phase                           │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │ DNS Resolution  │ │ Payment Collection│ │ Governance     │   │
│  │ - Query routing │ │ - X402 tracking │ │ - Proposals     │   │
│  │ - Cache layer   │ │ - Auto-distribute│ │ - Voting        │   │
│  │ - Fallback      │ │ - Analytics     │ │ - Execution     │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Security Architecture

### Smart Contract Security
- **Threshold Signatures:** 51% shareholder approval required for critical changes
- **Time Locks:** Governance proposals have 7-day voting periods
- **Access Control:** Only token holders can vote, weighted by ownership
- **Immutable Records:** All governance actions recorded on blockchain

### DNS Security
- **Cache Validation:** DNS records verified against blockchain state
- **Fallback Protection:** Invalid or missing subdomains redirect to portal
- **DoS Protection:** Rate limiting and caching prevent abuse
- **Integrity Checks:** Content hashes validate data authenticity

### Payment Security
- **Micropayment Validation:** All X402 payments verified on-chain
- **Distribution Auditing:** Revenue splits tracked and auditable
- **Gas Optimization:** Batch payments minimize transaction costs
- **Automatic Execution:** No manual intervention in revenue distribution

## Scalability Considerations

### DNS Performance
- **5-minute cache TTL** balances freshness with performance
- **Hierarchical caching** with CDN integration planned
- **Load balancing** across multiple resolver instances
- **Background updates** keep cache warm

### Blockchain Efficiency
- **Batch operations** reduce transaction costs
- **State compression** minimizes on-chain storage
- **Event-driven updates** only when necessary
- **Layer 2 solutions** for high-frequency operations

### Payment Processing
- **Threshold batching** (1000 satoshis minimum)
- **Time-based triggers** (24-hour maximum delay)
- **Gas price optimization** for cost efficiency
- **Parallel processing** for multiple domains

## Integration Points

### External APIs
- **BSV Blockchain:** WhatsOnChain API for transaction queries
- **IPFS/BSV:** Content storage and retrieval
- **Traditional DNS:** Fallback resolution
- **GitHub API:** Development workflow integration

### Development Tools
- **Next.js 15:** React framework with App Router
- **TypeScript:** Type safety and developer experience
- **Tailwind CSS:** Utility-first styling
- **ESLint/Prettier:** Code quality and formatting

### Deployment Architecture

```
Production Environment:
┌─────────────────────────────────────────────────────────────────┐
│                         CDN Layer                               │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │    Cloudflare   │ │     AWS         │ │    Regional     │   │
│  │    Global CDN   │ │   CloudFront    │ │    Edge Nodes   │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Application Layer                          │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │    Next.js      │ │    API Routes   │ │   Static Site   │   │
│  │    Server       │ │    Serverless   │ │   Generation    │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Service Layer                             │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │  DNS Resolver   │ │  Payment        │ │  Smart Contract │   │
│  │  Microservice   │ │  Processor      │ │  Interface      │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Blockchain Layer                           │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │   Bitcoin SV    │ │   Smart         │ │   X402 Payment  │   │
│  │   Mainnet       │ │   Contracts     │ │   Channels      │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Performance Metrics

### Target Performance
- **DNS Resolution:** < 50ms average response time
- **Portal Loading:** < 2s Time to Interactive
- **Payment Processing:** < 1 minute for revenue distribution
- **Governance Voting:** Real-time vote counting and display

### Monitoring
- **Uptime:** 99.9% availability target
- **Error Rates:** < 0.1% transaction failures
- **Cache Hit Ratio:** > 90% for DNS queries
- **User Experience:** Core Web Vitals optimization

## Development Workflow

### Code Organization
```
src/
├── app/                 # Next.js pages and routing
├── components/          # Reusable React components
├── lib/
│   ├── contracts/       # Smart contract interfaces
│   ├── payments/        # X402 payment system
│   ├── dns/            # DNS resolution logic
│   └── utils/          # Shared utilities
├── types/              # TypeScript type definitions
└── styles/             # Global CSS and Tailwind config
```

### Testing Strategy
- **Unit Tests:** Jest for individual component testing
- **Integration Tests:** Playwright for end-to-end workflows
- **Contract Tests:** BSV testnet for smart contract validation
- **Performance Tests:** Lighthouse CI for web vitals

### Deployment Pipeline
1. **Development:** Local development with hot reloading
2. **Testing:** Automated test suite on feature branches
3. **Staging:** Full environment testing with BSV testnet
4. **Production:** Gradual rollout with monitoring and rollback capability

## Future Architecture Considerations

### Multi-chain Support
- Abstract blockchain interface for other networks
- Cross-chain bridge for asset portability
- Unified governance across chains

### Decentralized Infrastructure
- IPFS integration for content storage
- Distributed DNS resolver network
- Peer-to-peer governance coordination

### Advanced Features
- Machine learning for domain valuation
- Automated governance decisions
- Cross-domain interoperability protocols