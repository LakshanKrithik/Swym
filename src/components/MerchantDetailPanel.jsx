import React from 'react';
import { X, ExternalLink, Activity, AlertCircle } from 'lucide-react';
import './MerchantDetailPanel.css';

export function MerchantDetailPanel({ merchant, onClose }) {
  if (!merchant) return null;

  return (
    <>
      <div className="panel-overlay" onClick={onClose}></div>
      <div className="detail-panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">{merchant.name}</h2>
            <p className="text-muted">{merchant.plan_tier} Plan • {merchant.merchant_id}</p>
          </div>
          <button className="icon-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="panel-body">
          <div className="metric-grid">
            <div className="metric-box">
              <span className="metric-label">Risk Score</span>
              <span className={`metric-value font-semibold ${merchant.risk_score >= 50 ? 'text-critical' : ''}`}>
                {merchant.risk_score} / 100
              </span>
            </div>
            <div className="metric-box">
              <span className="metric-label">Monthly Rev</span>
              <span className="metric-value">${merchant.mrr.toLocaleString()}</span>
            </div>
            <div className="metric-box">
              <span className="metric-label">30d Vol Change</span>
              <span className={`metric-value ${merchant.metrics.transaction_volume_change_30d < 0 ? 'text-critical' : 'text-low'}`}>
                {merchant.metrics.transaction_volume_change_30d}%
              </span>
            </div>
            <div className="metric-box">
              <span className="metric-label">Stalled Tickets</span>
              <span className="metric-value">{merchant.metrics.stalled_support_days} days</span>
            </div>
          </div>

          <div className="analysis-section mt-6">
            <h3 className="section-title">Risk Analysis</h3>
            <div className="analysis-card">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={18} className="text-high" />
                <span className="font-semibold">Primary Signal: {merchant.primary_churn_signal}</span>
              </div>
              <p className="text-muted text-sm">
                This merchant's behavior aligns strongly with historical churn patterns. Immediate intervention is highly recommended.
              </p>
            </div>
          </div>

          <div className="action-block mt-6">
            <h3 className="section-title">Recommended Action</h3>
            <div className="action-card">
              <p className="action-text">{merchant.recommended_action}</p>
              <div className="action-buttons mt-4">
                <button className="btn-primary flex items-center justify-center gap-2 w-full">
                  <Activity size={18} />
                  Execute Action Flow
                </button>
                <button className="btn-secondary flex items-center justify-center gap-2 w-full mt-2">
                  <ExternalLink size={18} />
                  View in CRM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
