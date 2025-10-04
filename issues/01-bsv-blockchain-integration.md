# BSV Blockchain Integration

**Labels:** `enhancement`, `blockchain`, `critical`, `phase-1`  
**Milestone:** Phase 1 - Foundation  
**Assignee:** TBD  
**Estimated Effort:** 4-6 weeks  
**Token Reward:** 3,000,000 $BDNS  

## Summary

Integrate Bitcoin SV blockchain for real smart contract deployment, replacing mock implementations with actual on-chain governance and payment systems.

## Description

Currently, the Bitcoin DNS platform uses mock implementations for blockchain interactions. This issue covers implementing real BSV blockchain integration including smart contract deployment, wallet connectivity, and transaction handling.

## Acceptance Criteria

### Smart Contract Deployment
- [ ] Deploy DomainGovernance contracts to BSV mainnet
- [ ] Implement contract factory for domain registration
- [ ] Set up contract upgrade mechanisms with timelock
- [ ] Create contract verification and monitoring tools

### Wallet Integration
- [ ] Integrate with popular BSV wallets (HandCash, RelayX, Yours)
- [ ] Implement wallet connection UI in portal
- [ ] Handle wallet switching and account management
- [ ] Support hardware wallet integration (Ledger, Trezor)

### Transaction Management
- [ ] Replace mock blockchain calls with real BSV API
- [ ] Implement transaction queuing and retry logic
- [ ] Add transaction status tracking and notifications
- [ ] Optimize gas usage for batch operations

### Testing Infrastructure
- [ ] Set up BSV testnet integration for development
- [ ] Create comprehensive test suite for contract interactions
- [ ] Implement end-to-end testing with real transactions
- [ ] Add performance testing for transaction throughput

## Technical Requirements

### Smart Contracts
```javascript
// Required contract interfaces
interface DomainRegistryContract {
  registerDomain(subdomain: string, config: DomainConfig): Promise<string>;
  updateDomainConfig(domain: string, config: DomainConfig): Promise<string>;
  getDomainInfo(domain: string): Promise<DomainInfo>;
}

interface GovernanceContract {
  createProposal(proposalData: ProposalData): Promise<string>;
  vote(proposalId: string, vote: Vote): Promise<string>;
  executeProposal(proposalId: string): Promise<string>;
}
```

### API Integration
- WhatsOnChain API for transaction queries
- BSV RPC endpoints for contract interaction
- Real-time transaction monitoring
- Error handling and retry mechanisms

### Environment Configuration
```env
BSV_NETWORK=mainnet
BSV_RPC_ENDPOINT=https://api.whatsonchain.com/v1/bsv/main
CONTRACT_FACTORY_ADDRESS=1ABC...
GOVERNANCE_CONTRACT_ADDRESS=1DEF...
```

## Dependencies

- `bsv` npm package for blockchain interaction
- Wallet integration SDKs
- Contract deployment scripts
- Testing framework for blockchain interactions

## Definition of Done

- [ ] All smart contracts deployed to BSV mainnet
- [ ] Portal successfully creates real blockchain transactions
- [ ] Governance voting works with actual token balances
- [ ] Revenue distribution executes real BSV payments
- [ ] DNS resolver reads from actual contract state
- [ ] Full test coverage with BSV testnet
- [ ] Documentation updated with BSV integration guide
- [ ] Security audit completed for all contracts

## Files to Modify

- `src/lib/contracts/DomainGovernance.ts` - Add real BSV integration
- `src/lib/payments/X402Revenue.ts` - Implement real payment execution
- `src/lib/dns/SubdomainResolver.ts` - Query actual contract state
- `src/app/portal/page.tsx` - Add wallet connection UI
- New files for wallet integration and contract deployment

## Related Issues

- Issue #2: NFT Container Implementation (depends on this)
- Issue #3: Mainnet Smart Contract Deployment (depends on this)
- Issue #5: Security Audits and Testing (depends on this)

## Resources

- [BSV Documentation](https://docs.bitcoinsv.com/)
- [WhatsOnChain API](https://developers.whatsonchain.com/)
- [BSV Smart Contracts Guide](https://scrypt.io/)
- [Bitcoin SV Academy](https://bitcoinsv.academy/)

---

**Contract Details:**
- **Reward:** 3,000,000 $BDNS tokens
- **Payment Schedule:** 30% on milestone completion, 70% on final delivery
- **Vesting:** 6-month linear vesting after completion
- **KPI Bonus:** Additional 500,000 $BDNS if delivered 2+ weeks early