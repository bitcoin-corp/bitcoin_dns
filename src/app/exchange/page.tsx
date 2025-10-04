'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  DollarSign, 
  Users, 
  ArrowUpDown, 
  Plus, 
  Minus,
  Target,
  Globe,
  Vote,
  Coins,
  BarChart3,
  Wallet,
  Shield,
  Zap,
  Link,
  Info
} from 'lucide-react';

// BRC-100 Protocol Types
interface DomainToken {
  ticker: string;
  domain: string;
  totalSupply: number;
  marketCap: number;
  price: number;
  priceChange24h: number;
  volume24h: number;
  holders: number;
  governanceWeight: number;
  lastUpdate: number;
}

interface BRC102Pool {
  ticker: string;
  domain: string;
  reserves: {
    token: number;
    btc: number;
  };
  totalLiquidity: number;
  feeRate: number;
  apy: number;
  participants: number;
  volume24h: number;
}

interface Trade {
  id: string;
  type: 'buy' | 'sell';
  ticker: string;
  amount: number;
  price: number;
  total: number;
  timestamp: number;
  status: 'pending' | 'completed' | 'failed';
}

interface GovernanceProposal {
  id: string;
  ticker: string;
  domain: string;
  title: string;
  description: string;
  type: 'content_update' | 'subdomain_config' | 'revenue_split' | 'ownership_transfer';
  proposer: string;
  votes: {
    yes: number;
    no: number;
    abstain: number;
  };
  quorum: number;
  threshold: number;
  endTime: number;
  status: 'active' | 'passed' | 'failed' | 'executed';
}

const ExchangePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trading');
  const [selectedToken, setSelectedToken] = useState<DomainToken | null>(null);
  const [tradeAmount, setTradeAmount] = useState('');
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock data for demonstration
  const domainTokens: DomainToken[] = [
    {
      ticker: 'BDNS-COCA-COLA',
      domain: 'coca-cola.bdns',
      totalSupply: 1000000,
      marketCap: 250000000,
      price: 250,
      priceChange24h: 5.2,
      volume24h: 125000,
      holders: 1247,
      governanceWeight: 0.15,
      lastUpdate: Date.now()
    },
    {
      ticker: 'BDNS-GOOGLE',
      domain: 'google.bdns',
      totalSupply: 2000000,
      marketCap: 800000000,
      price: 400,
      priceChange24h: -2.1,
      volume24h: 287000,
      holders: 3421,
      governanceWeight: 0.28,
      lastUpdate: Date.now()
    },
    {
      ticker: 'BDNS-MICROSOFT',
      domain: 'microsoft.bdns',
      totalSupply: 1500000,
      marketCap: 600000000,
      price: 400,
      priceChange24h: 3.7,
      volume24h: 156000,
      holders: 2187,
      governanceWeight: 0.22,
      lastUpdate: Date.now()
    }
  ];

  const liquidityPools: BRC102Pool[] = [
    {
      ticker: 'BDNS-COCA-COLA',
      domain: 'coca-cola.bdns',
      reserves: {
        token: 45000,
        btc: 11250000
      },
      totalLiquidity: 67500000,
      feeRate: 0.3,
      apy: 24.5,
      participants: 156,
      volume24h: 125000
    },
    {
      ticker: 'BDNS-GOOGLE',
      domain: 'google.bdns',
      reserves: {
        token: 78000,
        btc: 31200000
      },
      totalLiquidity: 124800000,
      feeRate: 0.3,
      apy: 18.7,
      participants: 287,
      volume24h: 287000
    }
  ];

  const governanceProposals: GovernanceProposal[] = [
    {
      id: 'prop-001',
      ticker: 'BDNS-COCA-COLA',
      domain: 'coca-cola.bdns',
      title: 'Update Brand Assets and Content',
      description: 'Proposal to update the official brand assets, logos, and promotional content for the Coca-Cola domain to reflect the new campaign.',
      type: 'content_update',
      proposer: '1A2B3C...',
      votes: {
        yes: 125000,
        no: 23000,
        abstain: 5000
      },
      quorum: 100000,
      threshold: 0.51,
      endTime: Date.now() + 86400000 * 3,
      status: 'active'
    },
    {
      id: 'prop-002',
      ticker: 'BDNS-GOOGLE',
      domain: 'google.bdns',
      title: 'Adjust Revenue Distribution',
      description: 'Proposal to modify the revenue distribution model to allocate 40% to token holders, 30% to liquidity providers, and 30% to development fund.',
      type: 'revenue_split',
      proposer: '4D5E6F...',
      votes: {
        yes: 234000,
        no: 187000,
        abstain: 12000
      },
      quorum: 200000,
      threshold: 0.51,
      endTime: Date.now() + 86400000 * 5,
      status: 'active'
    }
  ];

  const recentTrades: Trade[] = [
    {
      id: 'trade-001',
      type: 'buy',
      ticker: 'BDNS-COCA-COLA',
      amount: 100,
      price: 250,
      total: 25000,
      timestamp: Date.now() - 300000,
      status: 'completed'
    },
    {
      id: 'trade-002',
      type: 'sell',
      ticker: 'BDNS-GOOGLE',
      amount: 50,
      price: 400,
      total: 20000,
      timestamp: Date.now() - 600000,
      status: 'completed'
    }
  ];

  const formatPrice = (satoshis: number): string => {
    return (satoshis / 100000000).toFixed(8) + ' BTC';
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getTimeRemaining = (endTime: number): string => {
    const diff = endTime - Date.now();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return `${days}d ${hours}h`;
  };

  if (!mounted) {
    return (
      <div className="container mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Bitcoin DNS Exchange
          </h1>
          <p className="text-gray-600 mt-2">
            Trade domain tokens, provide liquidity, and participate in governance using the BRC-100 protocol stack
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Activity className="w-4 h-4" />
          <span>BRC-100 Protocol Active</span>
        </div>
      </div>

      {/* Protocol Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Market Cap</p>
                <p className="text-2xl font-bold">₿{(domainTokens.reduce((sum, token) => sum + token.marketCap, 0) / 100000000).toFixed(2)}</p>
              </div>
              <DollarSign className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">24h Volume</p>
                <p className="text-2xl font-bold">₿{(domainTokens.reduce((sum, token) => sum + token.volume24h, 0) / 100000000).toFixed(2)}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Domains</p>
                <p className="text-2xl font-bold">{domainTokens.length}</p>
              </div>
              <Globe className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Holders</p>
                <p className="text-2xl font-bold">{formatNumber(domainTokens.reduce((sum, token) => sum + token.holders, 0))}</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Exchange Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trading">Trading</TabsTrigger>
          <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        </TabsList>

        <TabsContent value="trading" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Token List */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="w-5 h-5" />
                  Domain Tokens
                </CardTitle>
                <CardDescription>
                  BRC-100 tokenized domains available for trading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {domainTokens.map((token) => (
                    <div
                      key={token.ticker}
                      className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedToken?.ticker === token.ticker 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedToken(token)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
                          {token.domain.split('.')[0].charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold">{token.ticker}</p>
                          <p className="text-sm text-gray-600">{token.domain}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{formatPrice(token.price)}</p>
                        <div className="flex items-center gap-1">
                          {token.priceChange24h > 0 ? (
                            <TrendingUp className="w-3 h-3 text-green-500" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-500" />
                          )}
                          <span className={`text-sm ${token.priceChange24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {Math.abs(token.priceChange24h)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trading Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUpDown className="w-5 h-5" />
                  Trade
                  {selectedToken && (
                    <Badge variant="outline">{selectedToken.ticker}</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!selectedToken ? (
                  <div className="text-center py-8 text-gray-500">
                    <Target className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a domain token to start trading</p>
                  </div>
                ) : (
                  <>
                    <div className="flex space-x-2">
                      <Button
                        variant={tradeType === 'buy' ? 'default' : 'outline'}
                        onClick={() => setTradeType('buy')}
                        className="flex-1"
                      >
                        Buy
                      </Button>
                      <Button
                        variant={tradeType === 'sell' ? 'default' : 'outline'}
                        onClick={() => setTradeType('sell')}
                        className="flex-1"
                      >
                        Sell
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Amount</label>
                      <input
                        type="number"
                        value={tradeAmount}
                        onChange={(e) => setTradeAmount(e.target.value)}
                        placeholder="0"
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Price</label>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold">{formatPrice(selectedToken.price)}</p>
                        <p className="text-sm text-gray-600">Current market price</p>
                      </div>
                    </div>

                    {tradeAmount && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Total</label>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="font-semibold">
                            {formatPrice(selectedToken.price * parseFloat(tradeAmount))}
                          </p>
                        </div>
                      </div>
                    )}

                    <Button 
                      className="w-full" 
                      disabled={!tradeAmount || parseFloat(tradeAmount) <= 0}
                    >
                      {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedToken.ticker}
                    </Button>

                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                        <div className="text-sm text-blue-700">
                          <p className="font-medium">BRC-102 AMM Pricing</p>
                          <p>Trades execute via automated market maker using constant product formula (x*y=k)</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Trades */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentTrades.map((trade) => (
                  <div key={trade.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Badge variant={trade.type === 'buy' ? 'default' : 'secondary'}>
                        {trade.type.toUpperCase()}
                      </Badge>
                      <span className="font-medium">{trade.ticker}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{trade.amount} tokens</p>
                      <p className="text-sm text-gray-600">@ {formatPrice(trade.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="liquidity" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liquidityPools.map((pool) => (
              <Card key={pool.ticker}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-bold">
                        {pool.domain.split('.')[0].charAt(0).toUpperCase()}
                      </div>
                      {pool.ticker}
                    </div>
                    <Badge variant="outline">{pool.apy}% APY</Badge>
                  </CardTitle>
                  <CardDescription>{pool.domain}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Token Reserves</p>
                      <p className="font-semibold">{formatNumber(pool.reserves.token)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">BTC Reserves</p>
                      <p className="font-semibold">{formatPrice(pool.reserves.btc)}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Liquidity</span>
                      <span>{formatPrice(pool.totalLiquidity)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>24h Volume</span>
                      <span>{formatPrice(pool.volume24h)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>LP Providers</span>
                      <span>{pool.participants}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Fee Rate</span>
                      <span>{pool.feeRate}%</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Liquidity
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Minus className="w-4 h-4 mr-2" />
                      Remove
                    </Button>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-green-500 mt-0.5" />
                      <div className="text-sm text-green-700">
                        <p className="font-medium">BRC-102 Automated Rewards</p>
                        <p>Earn trading fees automatically distributed to LP token holders</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="governance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="w-5 h-5" />
                Active Proposals
              </CardTitle>
              <CardDescription>
                BRC-101 token-weighted voting for domain governance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {governanceProposals.map((proposal) => (
                <div key={proposal.id} className="border rounded-lg p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{proposal.title}</h3>
                        <Badge variant="outline">{proposal.ticker}</Badge>
                        <Badge variant={proposal.status === 'active' ? 'default' : 'secondary'}>
                          {proposal.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{proposal.description}</p>
                      <p className="text-sm text-gray-500">
                        Proposed by: {proposal.proposer} • {getTimeRemaining(proposal.endTime)} remaining
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Participation</span>
                      <span>
                        {formatNumber(proposal.votes.yes + proposal.votes.no + proposal.votes.abstain)} / {formatNumber(proposal.quorum)}
                      </span>
                    </div>
                    <Progress 
                      value={((proposal.votes.yes + proposal.votes.no + proposal.votes.abstain) / proposal.quorum) * 100} 
                      className="h-2"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{formatNumber(proposal.votes.yes)}</p>
                      <p className="text-sm text-gray-600">Yes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-600">{formatNumber(proposal.votes.no)}</p>
                      <p className="text-sm text-gray-600">No</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-600">{formatNumber(proposal.votes.abstain)}</p>
                      <p className="text-sm text-gray-600">Abstain</p>
                    </div>
                  </div>

                  {proposal.status === 'active' && (
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <span className="text-green-600">Vote Yes</span>
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <span className="text-red-600">Vote No</span>
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <span className="text-gray-600">Abstain</span>
                      </Button>
                    </div>
                  )}

                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-purple-500 mt-0.5" />
                      <div className="text-sm text-purple-700">
                        <p className="font-medium">BRC-101 Weighted Voting</p>
                        <p>Your voting power is proportional to your token holdings</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="w-5 h-5" />
                  Token Holdings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {domainTokens.slice(0, 2).map((token) => (
                    <div key={token.ticker} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-bold">
                          {token.domain.split('.')[0].charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold">{token.ticker}</p>
                          <p className="text-sm text-gray-600">500 tokens</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{formatPrice(token.price * 500)}</p>
                        <p className="text-sm text-gray-600">@ {formatPrice(token.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link className="w-5 h-5" />
                  LP Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {liquidityPools.slice(0, 2).map((pool) => (
                    <div key={pool.ticker} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                          LP
                        </div>
                        <div>
                          <p className="font-semibold">{pool.ticker}</p>
                          <p className="text-sm text-gray-600">2.5% share</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{formatPrice(pool.totalLiquidity * 0.025)}</p>
                        <p className="text-sm text-green-600">{pool.apy}% APY</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">₿0.0245</p>
                  <p className="text-sm text-orange-600">Total Portfolio Value</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">+12.5%</p>
                  <p className="text-sm text-green-600">24h Change</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">₿0.0018</p>
                  <p className="text-sm text-blue-600">LP Rewards (30d)</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">87%</p>
                  <p className="text-sm text-purple-600">Governance Participation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExchangePage;