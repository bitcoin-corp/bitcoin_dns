'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Github, 
  Twitter, 
  Globe, 
  Mail, 
  Bitcoin, 
  ExternalLink,
  Coins,
  Building2,
  Shield,
  BookOpen,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-yellow-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-yellow-400/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Bitcoin DNS Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 flex items-center justify-center">
                  <Bitcoin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-purple-300 bg-clip-text text-transparent">
                    Bitcoin DNS
                  </h3>
                  <p className="text-purple-200 text-sm">Decentralized domains</p>
                </div>
              </div>
              
              <p className="text-purple-100 text-sm leading-relaxed">
                The world&apos;s first decentralized domain name system built on Bitcoin SV blockchain, 
                powered by BRC-100 protocol stack for enterprise governance and automated revenue distribution.
              </p>
              
              <div className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">$bDNS Token</span>
                <span className="text-purple-200">•</span>
                <span className="text-purple-200 text-sm">BRC-100 Protocol</span>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-yellow-400">Platform</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group">
                    <Globe className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Domain Search
                  </Link>
                </li>
                <li>
                  <Link href="/exchange" className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group">
                    <Coins className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Token Exchange
                  </Link>
                </li>
                <li>
                  <Link href="/portal" className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group">
                    <Building2 className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Enterprise Portal
                  </Link>
                </li>
                <li>
                  <Link href="/token" className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group">
                    <Bitcoin className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    $bDNS Token
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group">
                    <BookOpen className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Bitcoin Apps Ecosystem */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-yellow-400">Bitcoin Apps</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.bitcoinapps.store/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Bitcoin Apps Store
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bitcoin-wallet-sable.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Bitcoin Wallet
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bitcoin-drive.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Bitcoin Drive
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bitcoin-corp.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <Building2 className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Bitcoin Corporation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bitcoin-corp.vercel.app/trust" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <Shield className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Bitcoin Trust
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect & Support */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-yellow-400">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://github.com/bitcoin-corp/bitcoin_dns" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/b0ase" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <Twitter className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:support@bitcoin-dns.com" 
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Support
                  </a>
                </li>
                <li>
                  <a 
                    href="https://bitcoin-chat.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:text-yellow-400" />
                    Community Chat
                  </a>
                </li>
              </ul>

              {/* Protocol Info */}
              <div className="bg-black/20 rounded-lg p-4 border border-purple-400/20">
                <h5 className="text-sm font-semibold text-yellow-400 mb-2">Protocol Stack</h5>
                <div className="space-y-1 text-xs text-purple-200">
                  <div>• BRC-100 Base Layer</div>
                  <div>• BRC-101 Governance</div>
                  <div>• BRC-102 AMM</div>
                  <div>• BRC-103 Bridge</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-400/20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-purple-200 text-sm">
                  © {currentYear} The Bitcoin Corporation LTD. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 text-xs text-purple-300">
                  <span>Company No. 16735102</span>
                  <span>•</span>
                  <span>England & Wales</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <Link href="/terms" className="text-purple-200 hover:text-yellow-400 text-sm transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="text-purple-200 hover:text-yellow-400 text-sm transition-colors">
                  Privacy
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                  <span className="text-yellow-400 text-sm font-medium">$bDNS Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;