'use client';

import React from 'react';
import Link from 'next/link';

interface PocBarProps {
  color?: string;
}

export default function PocBar({ color = 'linear-gradient(90deg, #A855F7 0%, #3B82F6 100%)' }: PocBarProps) {
  return (
    <div 
      className="poc-banner"
      style={{
        position: 'fixed',
        top: 0, // Above taskbar
        left: 0,
        right: 0,
        height: '40px',
        background: color,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // Left aligned
        zIndex: 9999,
        fontSize: '13px',
        fontWeight: '500',
        color: 'white',
        letterSpacing: '0.5px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        padding: '0 12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '12px' }}>⚠️</span>
        <span style={{ fontWeight: '600' }}>PROOF OF CONCEPT:</span>
        <span style={{ opacity: 0.9 }}>This is a demonstration version.</span>
        <div style={{ display: 'flex', gap: '12px', marginLeft: '16px', fontSize: '12px' }}>
          <Link 
            href="/token" 
            style={{ 
              color: 'white', 
              textDecoration: 'underline',
              opacity: 0.9,
              fontWeight: '400'
            }}
          >
            Token
          </Link>
          <Link 
            href="/admin" 
            style={{ 
              color: 'white', 
              textDecoration: 'underline',
              opacity: 0.9,
              fontWeight: '400'
            }}
          >
            Admin
          </Link>
          <a 
            href="https://github.com/bitcoin-corp/bitcoin_dns"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'white', 
              textDecoration: 'underline',
              opacity: 0.9,
              fontWeight: '400'
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}