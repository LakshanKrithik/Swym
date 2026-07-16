import React from 'react';
import { Bell, Search } from 'lucide-react';
import './Header.css';

export function Header({ showToast }) {
  return (
    <header className="header">
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          placeholder="Search merchants, metrics..." 
          className="search-input" 
          onKeyDown={(e) => {
            if (e.key === 'Enter') showToast(`Searching for "${e.target.value}"...`, 'info');
          }}
        />
      </div>
      <div className="header-actions">
        <button className="icon-btn" onClick={() => showToast('No new notifications.', 'info')}>
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        <div className="user-profile" onClick={() => showToast('Opening user profile...', 'info')}>
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=38bdf8&color=fff" alt="Admin" className="avatar" />
        </div>
      </div>
    </header>
  );
}
