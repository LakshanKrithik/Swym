import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { DashboardView } from './components/DashboardView'
import { MerchantsView } from './components/MerchantsView'
import './index.css' 
import { Info } from 'lucide-react'

function App() {
  const [toast, setToast] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState('dashboard');

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar showToast={showToast} activeView={activeView} setActiveView={setActiveView} />
      <div className="main-content">
        <Header showToast={showToast} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {activeView === 'dashboard' && <DashboardView showToast={showToast} searchQuery={searchQuery} />}
        {activeView === 'merchants' && <MerchantsView showToast={showToast} searchQuery={searchQuery} />}
      </div>

      {toast && (
        <div className="toast-notification">
          <Info size={16} />
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  )
}

export default App
