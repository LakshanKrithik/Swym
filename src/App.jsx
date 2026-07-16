import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { DashboardView } from './components/DashboardView'
import './index.css' 
import { Info } from 'lucide-react'

function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar showToast={showToast} />
      <div className="main-content">
        <Header showToast={showToast} />
        <DashboardView showToast={showToast} />
      </div>

      {toast && (
        <div className="toast-notification">
          <Info size={18} style={{ color: 'var(--accent-primary)' }} />
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  )
}

export default App
