import React from 'react';
import { X, ExternalLink, Activity, Info } from 'lucide-react';
import './MerchantDetailPanel.css';

export function MerchantDetailPanel({ merchant, onClose, showToast }) {
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
          </div>

          <div className="explanation-section mt-6">
            <h3 className="section-title">Factors Contributing to Score</h3>
            <div className="factors-list">
              {merchant.score_factors && merchant.score_factors.length > 0 ? (
                merchant.score_factors.map((factor, idx) => (
                  <div key={idx} className="factor-item">
                    <span className="factor-name">{factor.signal}</span>
                    <span className="factor-points">+{factor.points}</span>
                  </div>
                ))
              ) : (
                <div className="factor-item">
                  <span className="text-muted">No risk factors identified.</span>
                  <span className="factor-points text-low">0</span>
                </div>
              )}
              <div className="factor-total">
                <span>Total Score</span>
                <span className={`font-bold ${merchant.risk_score >= 50 ? 'text-critical' : 'text-primary'}`}>{merchant.risk_score}</span>
              </div>
            </div>
          </div>

          <div className="action-block mt-6">
            <h3 className="section-title">Recommended Action</h3>
            <div className="action-card">
              <p className="action-text">{merchant.recommended_action}</p>
              
              <div className="action-rationale mt-4">
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-sm d-block mb-1">Why this action?</span>
                    <p className="text-muted text-sm">{merchant.recommended_action_rationale}</p>
                  </div>
                </div>
              </div>

              <div className="action-buttons mt-4">
                <button 
                  className="btn-primary flex items-center justify-center gap-2 w-full"
                  onClick={() => {
                    showToast(`Successfully initiated action flow for ${merchant.name}.`);
                    onClose();
                  }}
                >
                  <Activity size={18} />
                  Execute Action Flow
                </button>
                <button 
                  className="btn-secondary flex items-center justify-center gap-2 w-full mt-2"
                  onClick={() => showToast(`Opening ${merchant.name} record in external CRM...`)}
                >
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
