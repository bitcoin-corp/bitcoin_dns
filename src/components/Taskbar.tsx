'use client'

import { useState, useRef, useEffect } from 'react'
// import { useSession, signOut } from 'next-auth/react'
import { Menu, X } from 'lucide-react'

interface DropdownItem {
  label?: string
  action?: () => void
  href?: string
  divider?: boolean
  shortcut?: string
  target?: string
}

interface DropdownMenu {
  label: string
  items: DropdownItem[]
}

export default function Taskbar() {
  // const { data: session } = useSession()
  const session = null // Temporary until next-auth is properly configured
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showBitcoinSuite, setShowBitcoinSuite] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleOpenExchange = () => {
    window.location.href = '/exchange'
  }

  const handleIssueShares = () => {
    alert('NFT containers (.nft) will store domains, FT tokens will represent dividend-bearing shares of domains within the containers')
  }

  const menus: DropdownMenu[] = [
    {
      label: 'Bitcoin DNS',
      items: [
        { label: 'Home', shortcut: '⌘H', action: () => window.location.href = '/' },
        { divider: true },
        { label: 'About Bitcoin DNS', action: () => alert(
          'Bitcoin DNS v1.0.0\n\n' +
          'Decentralized Domain Name System\n\n' +
          '© 2025 The Bitcoin Corporation LTD.\n' +
          'Registered in England and Wales\n' +
          'Company No. 16735102\n\n' +
          'Built with:\n' +
          '• Next.js 15.5\n' +
          '• Bitcoin SV (BSV) Blockchain\n' +
          '• DNS Protocol Integration\n' +
          '• NFT & FT Token Support\n\n' +
          'Features:\n' +
          '• Register domains on-chain\n' +
          '• Decentralized DNS resolution\n' +
          '• Domain tokenization with dividend shares\n' +
          '• End-to-end encryption\n' +
          '• Multi-signature support\n\n' +
          'License: Open BSV License Version 5\n\n' +
          'Website: https://bitcoin-dns.vercel.app\n' +
          'GitHub: github.com/bitcoin-corp/bitcoin_dns'
        ) },
        { divider: true },
        { label: 'Preferences...', shortcut: '⌘,', action: () => console.log('Preferences') },
        { label: 'DNS Settings...', action: () => console.log('DNS settings') },
        { divider: true },
        { label: session ? 'Sign Out' : 'Sign In', shortcut: '⌘Q', action: session ? () => console.log('Sign out') : () => document.querySelector<HTMLButtonElement>('[data-signin]')?.click() }
      ]
    },
    {
      label: 'Domain',
      items: [
        { label: 'New Domain Registration', shortcut: '⌘N', action: () => alert('Register new domain on BSV blockchain') },
        { label: 'Search Domain', shortcut: '⌘O', action: () => document.getElementById('search-btn')?.click() },
        { label: 'Bulk Registration', shortcut: '⇧⌘O', action: () => console.log('Bulk register domains') },
        { divider: true },
        { label: 'Save to Blockchain', shortcut: '⌘S', action: () => console.log('Save to blockchain') },
        { label: 'Update DNS Records', shortcut: '⇧⌘S', action: () => console.log('Update DNS records') },
        { label: 'Transfer Domain', action: () => console.log('Transfer domain') },
        { divider: true },
        { label: 'Export Records', shortcut: '⌘D', action: () => console.log('Export') },
        { label: 'Delete Domain', shortcut: '⌘⌫', action: () => console.log('Delete') },
        { divider: true },
        { label: 'Share Domain...', shortcut: '⌘L', action: () => {
          navigator.clipboard.writeText(window.location.href)
          alert('Link copied to clipboard!')
        }}
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', shortcut: '⌘Z', action: () => document.execCommand('undo') },
        { label: 'Redo', shortcut: '⇧⌘Z', action: () => document.execCommand('redo') },
        { divider: true },
        { label: 'Cut', shortcut: '⌘X', action: () => document.execCommand('cut') },
        { label: 'Copy', shortcut: '⌘C', action: () => document.execCommand('copy') },
        { label: 'Paste', shortcut: '⌘V', action: () => document.execCommand('paste') },
        { divider: true },
        { label: 'Select All', shortcut: '⌘A', action: () => document.execCommand('selectAll') },
        { label: 'Find Domain...', shortcut: '⌘F', action: () => console.log('Find') }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Grid View', shortcut: '⌘1', action: () => console.log('Grid view') },
        { label: 'List View', shortcut: '⌘2', action: () => console.log('List view') },
        { label: 'Tree View', shortcut: '⌘3', action: () => console.log('Tree view') },
        { divider: true },
        { label: 'Show Sidebar', shortcut: '⌥⌘S', action: () => console.log('Toggle sidebar') },
        { label: 'Show Toolbar', shortcut: '⌥⌘T', action: () => console.log('Toggle toolbar') },
        { divider: true },
        { label: 'Enter Full Screen', shortcut: '⌃⌘F', action: () => document.documentElement.requestFullscreen() },
        { divider: true },
        { label: 'Zoom In', shortcut: '⌘+', action: () => (document.body.style as { zoom: string }).zoom = '110%' },
        { label: 'Zoom Out', shortcut: '⌘-', action: () => (document.body.style as { zoom: string }).zoom = '90%' },
        { label: 'Actual Size', shortcut: '⌘0', action: () => (document.body.style as { zoom: string }).zoom = '100%' }
      ]
    },
    {
      label: 'NFT',
      items: [
        { label: 'Issue FT Shares', shortcut: '⌥⌘N', action: handleIssueShares },
        { label: 'Mint Collection', action: () => console.log('Mint collection') },
        { divider: true },
        { label: 'Set Royalties', action: () => console.log('Set royalties') },
        { label: 'Configure Dividends', action: () => console.log('Configure dividend distribution for FT token holders') },
        { divider: true },
        { label: 'View My NFTs', action: () => window.location.href = '/my-nfts' },
        { label: 'NFT Marketplace', action: () => window.location.href = '/marketplace' }
      ]
    },
    {
      label: 'DNS',
      items: [
        { label: 'BSV Direct', action: () => console.log('BSV DNS') },
        { label: 'IPFS + BSV Hash', action: () => console.log('IPFS DNS') },
        { label: 'Hybrid Resolution', action: () => console.log('Hybrid DNS') },
        { divider: true },
        { label: 'Cloudflare DNS', action: () => console.log('Cloudflare DNS') },
        { label: 'Google DNS', action: () => console.log('Google DNS') },
        { label: 'Custom Resolver', action: () => console.log('Custom resolver') },
        { label: 'Root Servers', action: () => console.log('Root servers') },
        { divider: true },
        { label: 'DNS Calculator', action: () => console.log('Calculator') },
        { label: 'Resolution Analytics', action: () => console.log('Analytics') }
      ]
    },
    {
      label: 'Blockchain',
      items: [
        { label: 'Encrypt Domain', shortcut: '⌘E', action: () => console.log('Encrypt') },
        { label: 'Decrypt Domain', action: () => console.log('Decrypt') },
        { divider: true },
        { label: 'Set Paywall', action: () => console.log('Set paywall') },
        { label: 'Set Timelock', action: () => console.log('Set timelock') },
        { label: 'Multi-signature', action: () => console.log('Set multisig') },
        { divider: true },
        { label: 'Exchange', action: handleOpenExchange },
        { label: 'Trading Hub', action: () => window.location.href = '/trading' },
        { label: '$BDNS Token', action: () => window.location.href = '/token' },
        { divider: true },
        { label: 'Verify on Chain', action: () => console.log('Verify') },
        { label: 'View on Explorer', href: 'https://whatsonchain.com', target: '_blank' }
      ]
    },
    {
      label: 'Share',
      items: [
        { label: 'Copy Link', shortcut: '⌥⌘L', action: () => {
          navigator.clipboard.writeText(window.location.href)
          alert('Link copied!')
        }},
        { label: 'Generate QR Code', action: () => console.log('Generate QR') },
        { divider: true },
        { label: 'Share on X', action: () => window.open(`https://twitter.com/intent/tweet?text=Check out this domain on Bitcoin DNS&url=${window.location.href}`) },
        { label: 'Share on LinkedIn', action: () => console.log('LinkedIn share') },
        { label: 'Send to WhatsApp', action: () => window.open(`https://wa.me/?text=Check out this domain on Bitcoin DNS: ${window.location.href}`) },
        { label: 'Send via Email', action: () => window.location.href = `mailto:?subject=Bitcoin DNS Domain&body=Check out this domain: ${window.location.href}` },
        { divider: true },
        { label: 'Embed Code', action: () => console.log('Generate embed code') }
      ]
    },
    {
      label: 'Window',
      items: [
        { label: 'Minimize', shortcut: '⌘M', action: () => console.log('Minimize') },
        { label: 'Zoom', action: () => console.log('Zoom') },
        { divider: true },
        { label: 'Exchange', action: handleOpenExchange },
        { label: 'Trading Hub', action: () => window.location.href = '/trading' },
        { divider: true },
        { label: 'Bring All to Front', action: () => console.log('Bring to front') }
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Bitcoin DNS Help', shortcut: '⌘?', action: () => alert(
          'Bitcoin DNS Help\n\n' +
          'Quick Start:\n' +
          '1. Search for available domains\n' +
          '2. Register domains on BSV blockchain\n' +
          '3. Configure DNS records and resolution\n' +
          '4. Set encryption and access controls\n' +
          '5. Pay with BSV for permanent registration\n\n' +
          'DNS Methods:\n' +
          '• On-chain: Direct BSV blockchain resolution\n' +
          '• Hybrid: Blockchain + traditional DNS\n' +
          '• IPFS: Decentralized content addressing\n\n' +
          'Tokenization:\n' +
          '• Create NFT containers for domain collections\n' +
          '• Issue FT shares for dividend distribution\n' +
          '• Set royalties and trading parameters\n\n' +
          'Support:\n' +
          '• Documentation: /docs\n' +
          '• GitHub Issues: github.com/bitcoin-corp/bitcoin_dns/issues\n' +
          '• Twitter: @b0ase'
        ) },
        { label: 'Keyboard Shortcuts', action: () => console.log('Show shortcuts') },
        { divider: true },
        { label: 'API Documentation', href: '/api/docs', target: '_blank' },
        { label: '$BDNS Token', action: () => window.location.href = '/token' },
        { label: 'BSV SDK Docs', href: 'https://docs.bsvblockchain.org', target: '_blank' },
        { label: 'HandCash SDK', href: 'https://docs.handcash.io', target: '_blank' },
        { divider: true },
        { label: 'What\'s New', action: () => alert('New Features:\n\n• Domain NFT Containers (.nft)\n• FT Token Shares\n• Dividend Distribution\n• Multi-resolver DNS\n• Enhanced Encryption') },
        { divider: true },
        { label: 'Report Issue', href: 'https://github.com/bitcoin-corp/bitcoin_dns/issues', target: '_blank' },
        { label: 'GitHub Repository', href: 'https://github.com/bitcoin-corp/bitcoin_dns', target: '_blank' },
        { label: 'Contact Support', href: 'https://twitter.com/b0ase', target: '_blank' }
      ]
    }
  ]

  const bitcoinApps = [
    { name: 'Bitcoin Auth', color: '#ef4444', url: '#' },
    { name: 'Bitcoin Chat', color: '#ff6500', url: '#' },
    { name: 'Bitcoin Domains', color: '#eab308', url: '#' },
    { name: 'Bitcoin Draw', color: '#10b981', url: '#' },
    { name: 'Bitcoin Drive', color: '#22c55e', url: 'https://bitcoin-drive.vercel.app' },
    { name: 'Bitcoin DNS', color: '#06b6d4', url: 'https://bitcoin-dns.vercel.app', current: true },
    { name: 'Bitcoin Email', color: '#3b82f6', url: '#' },
    { name: 'Bitcoin Exchange', color: '#8b5cf6', url: '/exchange' },
    { name: 'Bitcoin Music', color: '#a855f7', url: '#' },
    { name: 'Bitcoin Paint', color: '#ec4899', url: '#' },
    { name: 'Bitcoin Pics', color: '#f43f5e', url: '#' },
    { name: 'Bitcoin Registry', color: '#f59e0b', url: '#' },
    { name: 'Bitcoin Shares', color: '#ff9500', url: '#' },
    { name: 'Bitcoin Spreadsheets', color: '#65a30d', url: 'https://bitcoin-spreadsheet.vercel.app' },
    { name: 'Bitcoin Video', color: '#f43f5e', url: '#' },
    { name: 'Bitcoin Wallet', color: '#3b82f6', url: '#' },
    { name: 'Bitcoin Writer', color: '#10b981', url: 'https://bitcoin-writer.vercel.app' }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
        setShowBitcoinSuite(false)
        setShowMobileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div 
      ref={menuRef}
      className="taskbar"
      style={{
        position: 'fixed',
        top: '40px', // Below PocBar
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '28px',
        background: 'linear-gradient(180deg, rgba(0, 40, 15, 0.95) 0%, rgba(0, 30, 10, 0.95) 100%)',
        borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
        fontSize: '13px',
        fontWeight: '500',
        color: '#ffffff',
        userSelect: 'none',
        zIndex: 10000
      }}
    >
      {/* Left side - Bitcoin Logo and menus */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Mobile Bitcoin Logo (no dropdown) */}
        <div className="sm:hidden" style={{ 
          padding: '0 12px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#00ff88'
        }}>
          ₿
        </div>

        {/* Bitcoin Logo container - Desktop only with dropdown */}
        <div className="hidden sm:block" style={{ position: 'relative' }}>
          <button
            onClick={() => {
              setShowBitcoinSuite(!showBitcoinSuite)
              setActiveMenu(null)
            }}
            onDoubleClick={() => {
              window.location.href = '/'
            }}
            style={{
              padding: '0 12px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#00ff88',
              display: 'flex',
              alignItems: 'center',
              height: '28px',
              background: showBitcoinSuite ? 'rgba(0, 255, 136, 0.1)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.15s ease'
            }}
            title="Bitcoin Suite Apps (double-click for home)"
          >
            ₿
          </button>

          {/* Bitcoin Suite Dropdown */}
          {showBitcoinSuite && (
            <div style={{
              position: 'absolute',
              top: '28px',
              left: 0,
              minWidth: '220px',
              background: '#1a1a1a',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
              padding: '8px 0',
              zIndex: 1000
            }}>
            <div style={{
              padding: '8px 16px',
              fontSize: '12px',
              color: '#00ff88',
              fontWeight: '600',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '4px'
            }}>
              Bitcoin Apps
            </div>
            
            {bitcoinApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target={app.url.startsWith('http') ? '_blank' : undefined}
                rel={app.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 16px',
                  color: app.current ? '#ffffff' : '#ffffff',
                  background: 'transparent',
                  textDecoration: 'none',
                  fontSize: '13px',
                  transition: 'background 0.15s ease',
                  cursor: 'pointer',
                  fontWeight: app.current ? '600' : '400'
                }}
                onClick={() => setShowBitcoinSuite(false)}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span 
                  style={{ 
                    color: app.color,
                    marginRight: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  ₿
                </span>
                <span>
                  {app.name}
                  {app.current && <span style={{ marginLeft: '8px', fontSize: '11px', opacity: 0.6 }}>(current)</span>}
                </span>
              </a>
            ))}
          </div>
        )}
        </div>

        {/* Menu Items - Hidden on mobile */}
        <div className="hidden sm:flex" style={{ alignItems: 'center', height: '100%' }}>
        {menus.map((menu) => (
          <div key={menu.label} style={{ position: 'relative' }}>
            <button
              onClick={() => {
                setActiveMenu(activeMenu === menu.label ? null : menu.label)
                setShowBitcoinSuite(false)
              }}
              onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
              style={{
                padding: '0 12px',
                height: '24px',
                background: activeMenu === menu.label ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '13px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.15s ease'
              }}
            >
              {menu.label}
            </button>

            {/* Dropdown Menu */}
            {activeMenu === menu.label && (
              <div style={{
                position: 'absolute',
                top: '28px',
                left: 0,
                minWidth: '200px',
                background: '#1a1a1a',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
                padding: '4px 0',
                zIndex: 9999,
                overflow: 'hidden'
              }}>
                {menu.items.map((item, index) => (
                  item.divider ? (
                    <div 
                      key={index}
                      style={{
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        margin: '4px 0'
                      }}
                    />
                  ) : item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target={item.target || '_blank'}
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '4px 12px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span style={{ opacity: 0.6, fontSize: '12px' }}>{item.shortcut}</span>
                      )}
                    </a>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        item.action?.()
                        setActiveMenu(null)
                      }}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        padding: '4px 12px',
                        background: 'transparent',
                        border: 'none',
                        color: '#ffffff',
                        fontSize: '13px',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        textAlign: 'left',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span style={{ opacity: 0.6, fontSize: '12px' }}>{item.shortcut}</span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>

      {/* Mobile: Center title */}
      <button 
        className="sm:hidden flex-1 text-center" 
        onClick={() => {
          window.location.href = '/'
        }}
        style={{ 
          fontSize: '14px',
          fontWeight: '600',
          color: '#00ff88',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          height: '28px'
        }}
        title="Return to home"
      >
        Bitcoin DNS
      </button>

      {/* Mobile Menu Button */}
      <button
        className="block sm:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        style={{
          padding: '0 12px',
          height: '28px',
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        {showMobileMenu ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Right side - Status items */}
      <div className="hidden sm:flex" style={{
        marginLeft: 'auto',
        alignItems: 'center',
        gap: '16px',
        paddingRight: '16px',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.8)'
      }}>
        <button
          onClick={() => window.location.href = '/token'}
          style={{
            background: 'linear-gradient(90deg, #00ff88, #00cc66)',
            color: '#000',
            border: 'none',
            padding: '4px 12px',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 255, 136, 0.3)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          title="View $BDNS Token Information"
        >
          $BDNS
        </button>
        {session ? (
          <>
            <span>{'Connected'}</span>
            <span style={{ color: '#00ff88' }}>●</span>
          </>
        ) : (
          <>
            <span>Not Connected</span>
            <span style={{ color: '#ff4444', opacity: 0.6 }}>●</span>
          </>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div 
          className="sm:hidden"
          style={{
            position: 'fixed',
            top: '28px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(16px)',
            zIndex: 9999,
            overflowY: 'auto'
          }}
        >
          <div style={{ padding: '16px' }}>
            {/* User Status */}
            <div style={{
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              {session ? (
                <>
                  <span style={{ color: '#ffffff', fontSize: '14px' }}>{'Connected'}</span>
                  <span style={{ color: '#00ff88' }}>●</span>
                </>
              ) : (
                <>
                  <span style={{ color: '#ffffff', fontSize: '14px' }}>Not Connected</span>
                  <span style={{ color: '#ff4444', opacity: 0.6 }}>●</span>
                </>
              )}
            </div>


            {/* Menu Sections */}
            {menus.map((menu) => (
              <div key={menu.label} style={{
                marginBottom: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#ffffff',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {menu.label}
                </div>
                <div style={{ padding: '8px' }}>
                  {menu.items.map((item, index) => (
                    item.divider ? (
                      <div 
                        key={index}
                        style={{
                          height: '1px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          margin: '8px 0'
                        }}
                      />
                    ) : item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        target={item.target || '_blank'}
                        rel="noopener noreferrer"
                        onClick={() => setShowMobileMenu(false)}
                        style={{
                          display: 'block',
                          padding: '10px 12px',
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '13px',
                          borderRadius: '4px',
                          transition: 'background 0.15s ease'
                        }}
                        onTouchStart={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        key={index}
                        onClick={() => {
                          item.action?.()
                          setShowMobileMenu(false)
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 12px',
                          background: 'transparent',
                          border: 'none',
                          color: '#ffffff',
                          fontSize: '13px',
                          cursor: 'pointer',
                          borderRadius: '4px',
                          transition: 'background 0.15s ease'
                        }}
                        onTouchStart={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        {item.label}
                      </button>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}