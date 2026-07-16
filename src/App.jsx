import React from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { DashboardView } from './components/DashboardView'
import './index.css' 

function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardView />
      </div>
    </div>
  )
}

export default App
