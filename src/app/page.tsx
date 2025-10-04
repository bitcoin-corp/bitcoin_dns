'use client';

import React, { useState } from 'react';
import { Search, Globe, Shield, Coins, ArrowRight, Bitcoin } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Here you would implement the actual search functionality
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-yellow-400/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-yellow-100 px-4 py-2 rounded-full border border-purple-200">
              <Bitcoin className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Powered by BRC-100 Protocol</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
              Bitcoin DNS
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The world&apos;s first decentralized domain name system built on Bitcoin SV blockchain. 
              Register, trade, and govern domains with enterprise-grade security.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex items-center bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
                <Search className="w-6 h-6 text-purple-400 ml-6" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for your perfect domain..."
                  className="flex-1 px-4 py-6 text-lg outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-8 py-6 font-semibold hover:from-purple-700 hover:to-yellow-600 transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Search</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Try searching: &quot;coca-cola&quot;, &quot;google&quot;, &quot;microsoft&quot; or any brand name
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Decentralized</h3>
                <p className="text-gray-600 text-sm">
                  No central authority. Domains secured by Bitcoin SV blockchain technology.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tokenized</h3>
                <p className="text-gray-600 text-sm">
                  Trade domain shares as $bDNS tokens with automated revenue distribution.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Governed</h3>
                <p className="text-gray-600 text-sm">
                  Democratic governance with BRC-101 token-weighted voting system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">1,247</div>
              <div className="text-purple-100">Active Domains</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₿2.45</div>
              <div className="text-purple-100">Total Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">156</div>
              <div className="text-purple-100">Token Holders</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to register and manage your decentralized domain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Search & Register</h3>
              <p className="text-gray-600">
                Search for available domains and register them on the Bitcoin SV blockchain with instant confirmation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Tokenize & Trade</h3>
              <p className="text-gray-600">
                Convert your domain into $bDNS tokens and trade shares on our decentralized exchange platform.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Govern & Earn</h3>
              <p className="text-gray-600">
                Participate in governance decisions and earn revenue through automated distribution to token holders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent mb-4">
              BRC-100 Protocol Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade infrastructure powered by proven Bitcoin protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">100</span>
                </div>
                <h3 className="text-lg font-semibold">BRC-100 Base</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Dual model approach combining UTXO and state machine for optimal performance and scalability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-yellow-100 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">101</span>
                </div>
                <h3 className="text-lg font-semibold">BRC-101 Governance</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Token-weighted voting system with proof-based execution for democratic domain management.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">102</span>
                </div>
                <h3 className="text-lg font-semibold">BRC-102 AMM</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Automated market maker with constant product formula for efficient token trading and liquidity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-yellow-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Own the Future of Domains?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the decentralized revolution. Register your domain on Bitcoin DNS today and become part of the new internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/portal'}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => window.location.href = '/exchange'}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              Explore Exchange
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}