import React from 'react';
import { LayoutDashboard, Users, Settings, LogOut, ShieldAlert } from 'lucide-react';
import './Sidebar.css';

export function Sidebar({ showToast, activeView, setActiveView }) {
  const handleNav = (e, tab, name) => {
    e.preventDefault();
    if (tab === 'dashboard' || tab === 'merchants') {
      setActiveView(tab);
    } else {
      showToast(`${name} module is not available in this demo.`, 'info');
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <ShieldAlert size={28} color="var(--accent-primary)" />
        <span className="logo-text">ChurnGuard</span>
      </div>
      <nav className="sidebar-nav">
        <a href="#" className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`} onClick={(e) => handleNav(e, 'dashboard', 'Dashboard')}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>
        <a href="#" className={`nav-item ${activeView === 'merchants' ? 'active' : ''}`} onClick={(e) => handleNav(e, 'merchants', 'Merchants')}>
          <Users size={20} />
          <span>Merchants</span>
        </a>
        <a href="#" className={`nav-item ${activeView === 'settings' ? 'active' : ''}`} onClick={(e) => handleNav(e, 'settings', 'Settings')}>
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
      <div className="sidebar-footer">
        <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); showToast('Logging out...', 'info'); }}>
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}
