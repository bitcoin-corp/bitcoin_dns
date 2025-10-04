'use client';

import React, { useState, useEffect } from 'react';
import { Wallet, Mail, Music, FileText, HardDrive, Calendar, Search, Table, Share2, Briefcase, Store, Wifi, Volume2, Battery, Clock, TrendingUp, Building2, Shield, Video, Code2, Camera, MapPin, MessageCircle, Users, Gamepad2, BookOpen, Globe } from 'lucide-react';
import './Dock.css';

interface DockApp {
  id?: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  url?: string;
  disabled?: boolean;
  current?: boolean;
  isImage?: boolean;
}

const Dock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getRainbowColor = (index: number): string => {
    const purpleYellowColors = [
      '#A855F7', // Purple
      '#9333EA', // Deep Purple
      '#8B5CF6', // Violet
      '#7C3AED', // Purple
      '#6D28D9', // Dark Purple
      '#F59E0B', // Amber
      '#FBBF24', // Yellow
      '#FDE047', // Bright Yellow
      '#FACC15', // Yellow
      '#EAB308', // Gold
      '#D97706', // Orange
      '#F97316'  // Orange-Red
    ];
    return purpleYellowColors[index % purpleYellowColors.length];
  };

  const getIconColor = (colorClass: string, index: number = 0): string => {
    if (colorClass === 'rainbow') {
      return getRainbowColor(index);
    }
    
    const colorMap: { [key: string]: string } = {
      'text-orange-500': '#f97316',
      'text-bitcoin-orange': '#f7931a',
      'text-yellow-500': '#eab308',
      'text-red-500': '#ef4444',
      'text-purple-500': '#a855f7',
      'text-fuchsia-500': '#d946ef',
      'text-green-500': '#22c55e',
      'text-blue-500': '#3b82f6',
      'text-gray-500': '#6b7280',
      'text-sky-400': '#38bdf8',
      'text-cyan-500': '#06b6d4',
      'text-cyan-400': '#22d3ee',
      'text-emerald-500': '#10b981',
      'text-blue-600': '#2563eb'
    };
    return colorMap[colorClass] || '#ffffff';
  };

  const dockApps: DockApp[] = [
    { id: 'bapps-store', name: 'Bitcoin Apps Store', icon: Store, color: 'rainbow', url: 'https://www.bitcoinapps.store/', isImage: true },
    { name: 'Bitcoin Wallet', icon: Wallet, color: 'rainbow', url: 'https://bitcoin-wallet-sable.vercel.app' },
    { name: 'Bitcoin Email', icon: Mail, color: 'rainbow', url: 'https://bitcoin-email.vercel.app' },
    { name: 'Bitcoin Music', icon: Music, color: 'rainbow', url: 'https://bitcoin-music.vercel.app' },
    { name: 'Bitcoin Writer', icon: FileText, color: 'rainbow', url: 'https://bitcoin-writer.vercel.app' },
    { name: 'Bitcoin Code', icon: Code2, color: 'rainbow', url: 'https://bitcoin-code.vercel.app' },
    { name: 'Bitcoin Drive', icon: HardDrive, color: 'rainbow', url: 'https://bitcoin-drive.vercel.app' },
    { name: 'Bitcoin Calendar', icon: Calendar, color: 'rainbow', url: 'https://bitcoin-calendar.vercel.app' },
    { name: 'Bitcoin DNS', icon: Globe, color: 'rainbow', url: '/', current: true }, // Current app
    { name: 'Bitcoin Exchange', icon: TrendingUp, color: 'rainbow', url: '/exchange' },
    { name: 'Bitcoin Search', icon: Search, color: 'rainbow', url: 'https://bitcoin-search.vercel.app' },
    { name: 'Bitcoin Spreadsheet', icon: Table, color: 'rainbow', url: 'https://bitcoin-spreadsheet.vercel.app' },
    { name: 'Bitcoin Video', icon: Video, color: 'rainbow', url: 'https://bitcoin-video-nine.vercel.app' },
    { name: 'Bitcoin Photos', icon: Camera, color: 'rainbow', url: 'https://bitcoin-photos.vercel.app' },
    { name: 'Bitcoin Maps', icon: MapPin, color: 'rainbow', url: 'https://bitcoin-maps.vercel.app' },
    { name: 'Bitcoin Chat', icon: MessageCircle, color: 'rainbow', url: 'https://bitcoin-chat.vercel.app' },
    { name: 'Bitcoin Social', icon: Users, color: 'rainbow', url: 'https://bitcoin-social.vercel.app' },
    { name: 'Bitcoin Games', icon: Gamepad2, color: 'rainbow', url: 'https://bitcoin-gaming.vercel.app' },
    { name: 'Bitcoin Books', icon: BookOpen, color: 'rainbow', url: 'https://bitcoin-books-bay.vercel.app' },
    { name: 'Bitcoin Jobs', icon: Briefcase, color: 'rainbow', url: 'https://bitcoin-jobs.vercel.app/' },
    { name: 'Bitcoin Shares', icon: Share2, color: 'rainbow', url: 'https://bitcoin-shares.vercel.app', disabled: true },
  ];

  const handleAppClick = (app: DockApp) => {
    if (!app.disabled && app.url && !app.current) {
      if (app.url.startsWith('/')) {
        // Internal navigation
        window.location.href = app.url;
      } else {
        // External navigation
        window.location.href = app.url;
      }
    }
  };

  return (
    <div className="bitcoin-dock">
      <div className="dock-container">
        {/* App icons on the left */}
        <div className="dock-apps">
          {dockApps.map((app, index) => {
          const Icon = app.icon;
          return (
            <button
              key={app.name}
              className={`dock-app ${app.current ? 'active' : ''} ${app.disabled ? 'disabled' : ''}`}
              onClick={() => handleAppClick(app)}
              title={app.name}
              disabled={app.disabled}
            >
              {app.id === 'bapps-store' ? (
                <div className="dock-app-icon">
                  <img src="/bapps-icon.jpg" alt="BAPPS" className="dock-app-image" />
                </div>
              ) : (
                <Icon className="dock-app-icon" style={{ color: getIconColor(app.color, index) }} />
              )}
              {app.current && <span className="dock-indicator" />}
            </button>
          );
        })}
        </div>
        
        {/* Status icons on the right */}
        <div className="dock-status">
          <div className="dock-divider" />
          <button 
            className="status-button" 
            title="Bitcoin Corporation"
            onClick={() => window.location.href = 'https://bitcoin-corp.vercel.app/'}
          >
            <Building2 className="status-icon" style={{ color: '#f7931a' }} />
          </button>
          <button 
            className="status-button" 
            title="Trust"
            onClick={() => window.location.href = 'https://bitcoin-corp.vercel.app/trust'}
          >
            <Shield className="status-icon" style={{ color: '#3b82f6' }} />
          </button>
          <button className="status-button" title="Connected">
            <Wifi className="status-icon connected" />
          </button>
          <button className="status-button" title="Volume">
            <Volume2 className="status-icon" />
          </button>
          <button className="status-button" title="Battery: 100%">
            <Battery className="status-icon connected" />
          </button>
          <div className="status-time" title={mounted ? currentTime.toLocaleDateString() : ''}>
            <Clock className="status-icon" />
            <span>{mounted ? currentTime.toLocaleTimeString() : '12:00:00 AM'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dock;