import React, { useState } from 'react';
import { mockMerchants } from '../data/mockMerchants';
import { MerchantRiskTable } from './MerchantRiskTable';
import { MerchantDetailPanel } from './MerchantDetailPanel';
import { AlertTriangle, TrendingDown, Users, Download } from 'lucide-react';
import './DashboardView.css';

export function DashboardView() {
  const [selectedMerchant, setSelectedMerchant] = useState(null);

  const totalAtRisk = mockMerchants.filter(m => m.risk_score >= 50).length;
  const avgScore = Math.round(mockMerchants.reduce((acc, m) => acc + m.risk_score, 0) / mockMerchants.length);

  return (
    <main className="dashboard-view">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Merchant Risk Overview</h1>
          <p className="text-muted">Proactively identify and intervene with at-risk accounts.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Download size={18} />
          Export Report
        </button>
      </div>

      <div className="summary-cards">
        <div className="card summary-card">
          <div className="card-icon critical">
            <AlertTriangle size={24} />
          </div>
          <div className="card-content">
            <p className="card-label">High / Critical Risk</p>
            <h2 className="card-value">{totalAtRisk} <span className="text-sm text-muted font-normal">merchants</span></h2>
          </div>
        </div>
        
        <div className="card summary-card">
          <div className="card-icon warning">
            <TrendingDown size={24} />
          </div>
          <div className="card-content">
            <p className="card-label">Avg Portfolio Risk</p>
            <h2 className="card-value">{avgScore} <span className="text-sm text-muted font-normal">/ 100</span></h2>
          </div>
        </div>

        <div className="card summary-card">
          <div className="card-icon info">
            <Users size={24} />
          </div>
          <div className="card-content">
            <p className="card-label">Total Monitored</p>
            <h2 className="card-value">{mockMerchants.length}</h2>
          </div>
        </div>
      </div>

      <div className="table-container">
        <MerchantRiskTable merchants={mockMerchants} onSelectMerchant={setSelectedMerchant} />
      </div>

      {selectedMerchant && (
        <MerchantDetailPanel 
          merchant={selectedMerchant} 
          onClose={() => setSelectedMerchant(null)} 
        />
      )}
    </main>
  );
}
