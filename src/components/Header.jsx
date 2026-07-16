import React from 'react';
import { Bell, Search } from 'lucide-react';
import './Header.css';

export function Header({ showToast, searchQuery, setSearchQuery }) {
  return (
    <header className="header">
      <div className="search-bar">
        <Search size={16} className="search-icon" />
        <input 
          type="text" 
          placeholder="Search by merchant name or ID..." 
          className="search-input" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="header-actions">
        <button className="icon-btn" onClick={() => showToast('No new notifications.', 'info')}>
          <Bell size={18} />
          <span className="notification-dot"></span>
        </button>
        <div className="user-profile" onClick={() => showToast('Opening user settings...', 'info')}>
          <div className="avatar">A</div>
        </div>
      </div>
    </header>
  );
}
