import React from 'react';
import './MerchantRiskTable.css';
import { ChevronRight } from 'lucide-react';

export function MerchantRiskTable({ merchants, onSelectMerchant }) {
  
  const getBadgeClass = (category) => {
    switch(category) {
      case 'Critical': return 'badge critical';
      case 'High Risk': return 'badge high';
      case 'Medium Risk': return 'badge medium';
      case 'Low Risk': return 'badge low';
      default: return 'badge';
    }
  };

  const formatDate = (dateStr) => {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(dateStr));
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <table className="risk-table">
      <thead>
        <tr>
          <th>Merchant Name</th>
          <th>MRR</th>
          <th>Risk Score</th>
          <th>Status</th>
          <th>Primary Signal</th>
          <th>Last Action</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {merchants.sort((a,b) => b.risk_score - a.risk_score).map((m) => (
          <tr key={m.merchant_id} className="table-row" onClick={() => onSelectMerchant(m)}>
            <td>
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-muted">{m.plan_tier}</div>
            </td>
            <td className="font-semibold">{formatCurrency(m.mrr)}</td>
            <td>
              <div className="score-cell">
                <span className="font-semibold">{m.risk_score}</span>
                <div className="score-bar-bg">
                  <div 
                    className={`score-bar-fill ${m.risk_score >= 80 ? 'critical' : m.risk_score >= 50 ? 'high' : m.risk_score >= 21 ? 'medium' : 'low'}`} 
                    style={{ width: `${m.risk_score}%` }}
                  ></div>
                </div>
              </div>
            </td>
            <td>
              <span className={getBadgeClass(m.risk_category)}>{m.risk_category}</span>
            </td>
            <td className="text-sm">{m.primary_churn_signal}</td>
            <td className="text-sm">{formatDate(m.last_hva_date)}</td>
            <td className="action-cell">
              <ChevronRight size={18} className="text-muted" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
