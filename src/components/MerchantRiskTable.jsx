import React, { useState } from 'react';
import { Sparkline } from './Sparkline';
import './MerchantRiskTable.css';

export function MerchantRiskTable({ merchants, onSelectMerchant, onBulkAction }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (e, id) => {
    e.stopPropagation();
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleAll = (e) => {
    if (selectedIds.length === merchants.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(merchants.map(m => m.merchant_id));
    }
  };

  const getBadgeClass = (score) => {
    if (score >= 81) return 'badge critical';
    if (score >= 51) return 'badge high';
    if (score >= 21) return 'badge medium';
    return 'badge low';
  };

  return (
    <div className="table-wrapper relative">
      {selectedIds.length > 0 && (
        <div className="bulk-actions-bar">
          <span className="text-sm font-semibold">{selectedIds.length} selected</span>
          <button className="btn-secondary text-sm py-1 px-3" onClick={() => {
             onBulkAction(selectedIds);
             setSelectedIds([]);
          }}>
            Enroll in Campaign
          </button>
        </div>
      )}
      <table className="risk-table">
        <thead>
          <tr>
            <th style={{ width: '40px' }}>
              <input type="checkbox" checked={merchants.length > 0 && selectedIds.length === merchants.length} onChange={toggleAll} />
            </th>
            <th>Merchant</th>
            <th>Risk Score</th>
            <th>6-Mo Trend</th>
            <th>Primary Signal</th>
            <th>30d Vol Change</th>
          </tr>
        </thead>
        <tbody>
          {merchants.map(merchant => (
            <tr key={merchant.merchant_id} className="merchant-row" onClick={() => onSelectMerchant(merchant)}>
              <td onClick={(e) => e.stopPropagation()}>
                <input type="checkbox" checked={selectedIds.includes(merchant.merchant_id)} onChange={(e) => toggleSelect(e, merchant.merchant_id)} />
              </td>
              <td>
                <span className="merchant-name">{merchant.name}</span>
                <span className="merchant-id">{merchant.merchant_id}</span>
              </td>
              <td>
                <span className={getBadgeClass(merchant.risk_score)}>
                  {merchant.risk_score} - {merchant.risk_category}
                </span>
              </td>
              <td>
                <Sparkline data={merchant.metrics.volume_history} color={merchant.risk_score >= 50 ? 'var(--risk-critical)' : 'var(--text-muted)'} />
              </td>
              <td>{merchant.primary_churn_signal}</td>
              <td>
                <span className={merchant.metrics.transaction_volume_change_30d <= -20 ? 'text-critical font-semibold' : ''}>
                  {merchant.metrics.transaction_volume_change_30d > 0 ? '+' : ''}{merchant.metrics.transaction_volume_change_30d}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
