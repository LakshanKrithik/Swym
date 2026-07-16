import React, { useState } from 'react';
import { mockMerchants } from '../data/mockMerchants';
import { MerchantRiskTable } from './MerchantRiskTable';
import { MerchantDetailPanel } from './MerchantDetailPanel';

export function MerchantsView({ showToast, searchQuery }) {
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  
  const filteredMerchants = mockMerchants.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.merchant_id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="dashboard-view">
      <div className="dashboard-header mb-6">
        <div>
          <h1 className="dashboard-title">Merchant Directory</h1>
          <p className="text-muted">Browse and manage your entire merchant portfolio.</p>
        </div>
      </div>

      <div className="table-container mt-6">
        {filteredMerchants.length > 0 ? (
          <MerchantRiskTable 
            merchants={filteredMerchants} 
            onSelectMerchant={setSelectedMerchant} 
            onBulkAction={(ids) => showToast(`Successfully initiated bulk campaign for ${ids.length} merchants.`)}
          />
        ) : (
          <div className="empty-state">
            <p className="text-muted">No merchants found matching "{searchQuery}"</p>
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
