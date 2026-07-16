import React, { useState } from 'react';
import { mockMerchants } from '../data/mockMerchants';
import { MerchantRiskTable } from './MerchantRiskTable';
import { MerchantDetailPanel } from './MerchantDetailPanel';
import { AlertCircle, DollarSign, Users, Download } from 'lucide-react';
import './DashboardView.css';

export function DashboardView({ showToast, searchQuery }) {
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  let filteredMerchants = mockMerchants.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.merchant_id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeTab === 'Risk') {
    filteredMerchants = filteredMerchants.filter(m => m.risk_score >= 50);
  } else if (activeTab === 'Healthy') {
    filteredMerchants = filteredMerchants.filter(m => m.risk_score < 50);
  }

  const atRiskMerchants = mockMerchants.filter(m => m.risk_score >= 50);
  const totalAtRisk = atRiskMerchants.length;
  const mrrAtRisk = atRiskMerchants.reduce((sum, m) => sum + m.mrr, 0);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <main className="dashboard-view">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Merchant Risk</h1>
          <p className="text-muted">Monitor and intervene with at-risk accounts.</p>
        </div>
        <button 
          className="btn-secondary flex items-center gap-2"
          onClick={() => showToast('Generating comprehensive risk report... This will download shortly.', 'info')}
        >
          <Download size={16} />
          Export CSV
        </button>
      </div>

      <div className="summary-cards">
        <div className="card summary-card">
          <div className="card-content">
            <div className="flex justify-between items-center mb-2">
              <p className="card-label">MRR at Risk (High/Critical)</p>
              <DollarSign size={16} className="text-muted" />
            </div>
            <h2 className="card-value text-critical">{formatCurrency(mrrAtRisk)}</h2>
          </div>
        </div>

        <div className="card summary-card">
          <div className="card-content">
            <div className="flex justify-between items-center mb-2">
              <p className="card-label">Merchants at Risk</p>
              <AlertCircle size={16} className="text-muted" />
            </div>
            <h2 className="card-value">{totalAtRisk}</h2>
          </div>
        </div>

        <div className="card summary-card">
          <div className="card-content">
            <div className="flex justify-between items-center mb-2">
              <p className="card-label">Total Monitored</p>
              <Users size={16} className="text-muted" />
            </div>
            <h2 className="card-value">{mockMerchants.length}</h2>
          </div>
        </div>
      </div>

      <div className="table-controls mb-4">
        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>All Merchants</button>
          <button className={`tab-btn ${activeTab === 'Risk' ? 'active' : ''}`} onClick={() => setActiveTab('Risk')}>Action Required</button>
          <button className={`tab-btn ${activeTab === 'Healthy' ? 'active' : ''}`} onClick={() => setActiveTab('Healthy')}>Healthy</button>
        </div>
      </div>

      <div className="table-container">
        {filteredMerchants.length > 0 ? (
          <MerchantRiskTable 
            merchants={filteredMerchants} 
            onSelectMerchant={setSelectedMerchant} 
            onBulkAction={(ids) => showToast(`Successfully initiated bulk campaign for ${ids.length} merchants.`)}
          />
        ) : (
          <div className="empty-state">
            <p className="text-muted">No merchants found matching your criteria.</p>
          </div>
        )}
      </div>

      {selectedMerchant && (
        <MerchantDetailPanel 
          merchant={selectedMerchant} 
          onClose={() => setSelectedMerchant(null)} 
          showToast={showToast}
        />
      )}
    </main>
  );
}
