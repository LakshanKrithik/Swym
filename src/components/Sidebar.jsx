import React from 'react';
import { LayoutDashboard, Users, Settings, LogOut, ShieldAlert } from 'lucide-react';
import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <ShieldAlert size={28} color="var(--accent-primary)" />
        <span className="logo-text">ChurnGuard</span>
      </div>
      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-item">
          <Users size={20} />
          <span>Merchants</span>
        </a>
        <a href="#" className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
      <div className="sidebar-footer">
        <a href="#" className="nav-item">
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}
