'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  DollarSign, 
  Users, 
  ArrowUpDown, 
  Globe,
  BarChart3,
  Wallet,
  Info,
  Search,
  Star,
  Volume2,
  ExternalLink,
  Menu
} from 'lucide-react';

interface DomainToken {
  ticker: string;
  domain: string;
  fullName: string;
  totalSupply: number;
  marketCap: number;
  price: number;
  priceChange24h: number;
  volume24h: number;
  holders: number;
  governanceWeight: number;
  lastUpdate: number;
  rank: number;
  urlVolume: number;
  featured?: boolean;
}

interface URLShare {
  id: string;
  domain: string;
  ticker: string;
  fullName: string;
  sharesOwned: number;
  totalShares: number;
  purchasePrice: number;
  currentPrice: number;
  lastUpdate: string;
  urlVolume: number;
  featured?: boolean;
}

const ExchangePage: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<DomainToken | null>(null);
  const [tradeAmount, setTradeAmount] = useState('');
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [mounted, setMounted] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'rank' | 'volume' | 'price' | 'change'>('rank');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock URL shares data
  const userShares: URLShare[] = [
    {
      id: '1',
      domain: 'coca-cola.bdns',
      ticker: '$bKO',
      fullName: 'Coca-Cola Company',
      sharesOwned: 150,
      totalShares: 1000000,
      purchasePrice: 245,
      currentPrice: 250,
      lastUpdate: '2h ago',
      urlVolume: 125000,
      featured: true
    },
    {
      id: '2',
      domain: 'google.bdns',
      ticker: '$bGOOGL',
      fullName: 'Google LLC',
      sharesOwned: 75,
      totalShares: 2000000,
      purchasePrice: 410,
      currentPrice: 400,
      lastUpdate: '1h ago',
      urlVolume: 287000,
      featured: true
    },
    {
      id: '3',
      domain: 'microsoft.bdns',
      ticker: '$bMSFT',
      fullName: 'Microsoft Corporation',
      sharesOwned: 200,
      totalShares: 1500000,
      purchasePrice: 385,
      currentPrice: 400,
      lastUpdate: '3h ago',
      urlVolume: 156000
    },
    {
      id: '4',
      domain: 'tesla.bdns',
      ticker: '$bTSLA',
      fullName: 'Tesla Inc',
      sharesOwned: 50,
      totalShares: 800000,
      purchasePrice: 320,
      currentPrice: 315,
      lastUpdate: '5h ago',
      urlVolume: 89000
    }
  ];

  // Mock trading data for table
  const domainTokens: DomainToken[] = [
    {
      rank: 1,
      ticker: '$bKO',
      domain: 'coca-cola.bdns',
      fullName: 'Coca-Cola Company',
      totalSupply: 1000000,
      marketCap: 250000000,
      price: 250,
      priceChange24h: 5.2,
      volume24h: 125000,
      urlVolume: 125000,
      holders: 1247,
      governanceWeight: 0.15,
      lastUpdate: Date.now(),
      featured: true
    },
    {
      rank: 2,
      ticker: '$bGOOGL',
      domain: 'google.bdns',
      fullName: 'Google LLC',
      totalSupply: 2000000,
      marketCap: 800000000,
      price: 400,
      priceChange24h: -2.1,
      volume24h: 287000,
      urlVolume: 287000,
      holders: 3421,
      governanceWeight: 0.28,
      lastUpdate: Date.now(),
      featured: true
    },
    {
      rank: 3,
      ticker: '$bMSFT',
      domain: 'microsoft.bdns',
      fullName: 'Microsoft Corporation',
      totalSupply: 1500000,
      marketCap: 600000000,
      price: 400,
      priceChange24h: 3.7,
      volume24h: 156000,
      urlVolume: 156000,
      holders: 2187,
      governanceWeight: 0.22,
      lastUpdate: Date.now()
    },
    {
      rank: 4,
      ticker: '$bTSLA',
      domain: 'tesla.bdns',
      fullName: 'Tesla Inc',
      totalSupply: 800000,
      marketCap: 252000000,
      price: 315,
      priceChange24h: -1.5,
      volume24h: 89000,
      urlVolume: 89000,
      holders: 892,
      governanceWeight: 0.18,
      lastUpdate: Date.now()
    },
    {
      rank: 5,
      ticker: '$bAMZN',
      domain: 'amazon.bdns',
      fullName: 'Amazon Inc',
      totalSupply: 1200000,
      marketCap: 480000000,
      price: 400,
      priceChange24h: 2.8,
      volume24h: 198000,
      urlVolume: 198000,
      holders: 1856,
      governanceWeight: 0.25,
      lastUpdate: Date.now()
    },
    {
      rank: 6,
      ticker: '$bNFLX',
      domain: 'netflix.bdns',
      fullName: 'Netflix Inc',
      totalSupply: 600000,
      marketCap: 180000000,
      price: 300,
      priceChange24h: -0.8,
      volume24h: 67000,
      urlVolume: 67000,
      holders: 634,
      governanceWeight: 0.12,
      lastUpdate: Date.now()
    },
    {
      rank: 7,
      ticker: '$bKO2',
      domain: 'coke.bdns',
      fullName: 'The Coca-Cola Company',
      totalSupply: 900000,
      marketCap: 225000000,
      price: 250,
      priceChange24h: 1.2,
      volume24h: 45000,
      urlVolume: 45000,
      holders: 567,
      governanceWeight: 0.10,
      lastUpdate: Date.now()
    }
  ];

  // Filter and sort tokens
  const filteredTokens = domainTokens
    .filter(token => 
      token.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.domain.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rank': return a.rank - b.rank;
        case 'volume': return b.urlVolume - a.urlVolume;
        case 'price': return b.price - a.price;
        case 'change': return b.priceChange24h - a.priceChange24h;
        default: return a.rank - b.rank;
      }
    });

  const formatPrice = (price: number): string => {
    return '$' + price.toFixed(2);
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

  const getGainLoss = (current: number, purchase: number) => {
    const change = current - purchase;
    const changePercent = ((change / purchase) * 100);
    return { change, changePercent };
  };

  if (!mounted) {
    return (
      <div className="h-screen bg-gray-950 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded w-64 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-950 flex overflow-hidden">
      {/* URL Shares Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-80'} bg-gray-900 border-r border-gray-800 flex flex-col transition-all duration-300`}>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          {!sidebarCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">My URL Shares</h2>
                <p className="text-xs text-gray-400">{userShares.length} positions</p>
              </div>
            </div>
          )}
        </div>
        
        {!sidebarCollapsed && (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {userShares.map((share) => {
                const { change, changePercent } = getGainLoss(share.currentPrice, share.purchasePrice);
                return (
                  <div
                    key={share.id}
                    className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                      selectedToken?.ticker === share.ticker 
                        ? 'border-orange-500 bg-orange-50/5' 
                        : 'border-gray-700 hover:border-gray-600 bg-gray-800/30'
                    }`}
                    onClick={() => {
                      const token = domainTokens.find(t => t.ticker === share.ticker);
                      if (token) setSelectedToken(token);
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-yellow-400 flex items-center justify-center text-white text-sm font-bold">
                        {share.fullName.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-white text-sm truncate">{share.ticker}</p>
                          {share.featured && (
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          )}
                        </div>
                        <p className="text-xs text-gray-400 truncate">{share.fullName}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Shares:</span>
                        <span className="text-white">{formatNumber(share.sharesOwned)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Current:</span>
                        <span className="text-white">{formatPrice(share.currentPrice)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">P&L:</span>
                        <span className={`${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {change >= 0 ? '+' : ''}{formatPrice(change * share.sharesOwned)} ({changePercent >= 0 ? '+' : ''}{changePercent.toFixed(1)}%)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Volume:</span>
                        <span className="text-blue-400">{formatNumber(share.urlVolume)}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-xs text-gray-500">
                      Updated {share.lastUpdate}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Portfolio Summary */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-sm font-medium text-white mb-3">Portfolio Summary</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Value:</span>
                  <span className="text-white">$2,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Change:</span>
                  <span className="text-green-400">+12.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Positions:</span>
                  <span className="text-white">{userShares.length}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Main Trading Interface */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Bitcoin DNS Exchange
              </h1>
              <p className="text-gray-400 mt-1">
                Trade domain tokens, provide liquidity, and participate in governance using the BRC-100 protocol stack
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Activity className="w-4 h-4" />
              <span>BRC-100 Protocol Active</span>
            </div>
          </div>
        </div>

        {/* Protocol Overview Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Market Cap</p>
                  <p className="text-xl font-bold text-white">${(domainTokens.reduce((sum, token) => sum + token.marketCap, 0) / 1000000).toFixed(0)}M</p>
                </div>
                <DollarSign className="w-6 h-6 text-orange-500" />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">24h Volume</p>
                  <p className="text-xl font-bold text-white">${(domainTokens.reduce((sum, token) => sum + token.volume24h, 0) / 1000).toFixed(0)}K</p>
                </div>
                <BarChart3 className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Active Domains</p>
                  <p className="text-xl font-bold text-white">{domainTokens.length}</p>
                </div>
                <Globe className="w-6 h-6 text-yellow-500" />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Holders</p>
                  <p className="text-xl font-bold text-white">{formatNumber(domainTokens.reduce((sum, token) => sum + token.holders, 0))}</p>
                </div>
                <Users className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Trading Table Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-white">Token Rankings</h2>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tokens..."
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rank' | 'volume' | 'price' | 'change')}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500"
              >
                <option value="rank">Rank</option>
                <option value="volume">Volume</option>
                <option value="price">Price</option>
                <option value="change">24h Change</option>
              </select>
            </div>
          </div>

          {/* Trading Table */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Rank</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Token</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-400">Price</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-400">24h Change</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-400">URL Volume</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-400">Holders</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-400">Market Cap</th>
                    <th className="text-center p-4 text-sm font-medium text-gray-400">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTokens.map((token) => (
                    <tr
                      key={token.ticker}
                      className={`border-b border-gray-800 hover:bg-gray-700/30 transition-colors cursor-pointer ${
                        selectedToken?.ticker === token.ticker ? 'bg-orange-500/10' : ''
                      }`}
                      onClick={() => setSelectedToken(token)}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300 font-medium">#{token.rank}</span>
                          {token.featured && (
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-yellow-400 flex items-center justify-center text-white text-sm font-bold">
                            {token.fullName.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-white">{token.ticker}</p>
                              <ExternalLink className="w-3 h-3 text-gray-400" />
                            </div>
                            <p className="text-xs text-gray-400">{token.fullName}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <p className="font-medium text-white">{formatPrice(token.price)}</p>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          {token.priceChange24h > 0 ? (
                            <TrendingUp className="w-3 h-3 text-green-400" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-400" />
                          )}
                          <span className={`text-sm font-medium ${
                            token.priceChange24h > 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {token.priceChange24h > 0 ? '+' : ''}{token.priceChange24h.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Volume2 className="w-3 h-3 text-blue-400" />
                          <span className="text-white font-medium">{formatNumber(token.urlVolume)}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-gray-300">{formatNumber(token.holders)}</span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-white font-medium">${(token.marketCap / 1000000).toFixed(0)}M</span>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedToken(token);
                          }}
                          className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg transition-colors"
                        >
                          Trade
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Trading Panel - Fixed Right Side */}
        {selectedToken && (
          <div className="fixed right-6 top-32 w-80 bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl z-50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold text-white">Trade {selectedToken.ticker}</h3>
              </div>
              <button
                onClick={() => setSelectedToken(null)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setTradeType('buy')}
                  className={`flex-1 py-2 text-sm rounded-md transition-colors ${
                    tradeType === 'buy' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setTradeType('sell')}
                  className={`flex-1 py-2 text-sm rounded-md transition-colors ${
                    tradeType === 'sell' 
                      ? 'bg-red-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Sell
                </button>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300">Amount</label>
                <input
                  type="number"
                  value={tradeAmount}
                  onChange={(e) => setTradeAmount(e.target.value)}
                  placeholder="0"
                  className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300">Price</label>
                <div className="mt-1 p-3 bg-gray-700 rounded-lg">
                  <p className="font-semibold text-white">{formatPrice(selectedToken.price)}</p>
                  <p className="text-xs text-gray-400">Current market price</p>
                </div>
              </div>

              {tradeAmount && (
                <div>
                  <label className="text-sm font-medium text-gray-300">Total</label>
                  <div className="mt-1 p-3 bg-gray-700 rounded-lg">
                    <p className="font-semibold text-white">
                      {formatPrice(selectedToken.price * parseFloat(tradeAmount))}
                    </p>
                  </div>
                </div>
              )}

              <button
                disabled={!tradeAmount || parseFloat(tradeAmount) <= 0}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  tradeType === 'buy'
                    ? 'bg-green-600 hover:bg-green-700 disabled:bg-gray-600'
                    : 'bg-red-600 hover:bg-red-700 disabled:bg-gray-600'
                } text-white disabled:cursor-not-allowed`}
              >
                {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedToken.ticker}
              </button>

              <div className="p-3 bg-blue-900/30 border border-blue-700/30 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-blue-300">
                    <p className="font-medium">BRC-102 AMM Pricing</p>
                    <p>Trades execute via automated market maker using constant product formula (x*y=k)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ExchangePage;