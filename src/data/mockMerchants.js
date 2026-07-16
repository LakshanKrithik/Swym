export const mockMerchants = [
  {
    merchant_id: "m_1001",
    name: "TechGear Pro",
    plan_tier: "Enterprise",
    mrr: 1200.00,
    signup_date: "2023-01-15T00:00:00Z",
    last_hva_date: "2026-07-15T00:00:00Z",
    is_seasonal: false,
    metrics: {
      transactions_last_30d: 4500,
      transaction_volume_change_30d: 5.2,
      stalled_support_days: 0,
      nps_score: 9
    },
    risk_score: 5, // Base 5
    risk_category: "Low Risk",
    primary_churn_signal: "None",
    recommended_action: "No action required. Healthy account."
  },
  {
    merchant_id: "m_1002",
    name: "Lumina Home Goods",
    plan_tier: "Pro",
    mrr: 299.00,
    signup_date: "2025-11-20T00:00:00Z",
    last_hva_date: "2026-06-20T00:00:00Z",
    is_seasonal: false,
    metrics: {
      transactions_last_30d: 850,
      transaction_volume_change_30d: -2.1,
      stalled_support_days: 1,
      nps_score: 6
    },
    risk_score: 15, // HVA Abandonment (+15)
    risk_category: "Low Risk",
    primary_churn_signal: "HVA Abandonment",
    recommended_action: "CS to send targeted outreach offering a 'workflow optimization session'."
  },
  {
    merchant_id: "m_1003",
    name: "Apex Fitness Equipment",
    plan_tier: "Enterprise",
    mrr: 1500.00,
    signup_date: "2022-03-10T00:00:00Z",
    last_hva_date: "2026-07-01T00:00:00Z",
    is_seasonal: false,
    metrics: {
      transactions_last_30d: 1200,
      transaction_volume_change_30d: -25.4,
      stalled_support_days: 0,
      nps_score: 5
    },
    risk_score: 30, // Volume Decline > 20% (+25) + Base 5
    risk_category: "Medium Risk",
    primary_churn_signal: "Transaction Volume Decline",
    recommended_action: "AM to schedule a Business Review. Investigate traffic routing."
  },
  {
    merchant_id: "m_1004",
    name: "QuickBite Deliveries",
    plan_tier: "Starter",
    mrr: 49.00,
    signup_date: "2026-01-05T00:00:00Z",
    last_hva_date: "2026-06-15T00:00:00Z",
    is_seasonal: false,
    metrics: {
      transactions_last_30d: 120,
      transaction_volume_change_30d: -15.0,
      stalled_support_days: 8,
      nps_score: 3
    },
    risk_score: 70, // Stalled Support (+55) + HVA (+15)
    risk_category: "High Risk",
    primary_churn_signal: "Stalled Support Issue",
    recommended_action: "High Risk. Escalate immediately to Tier 2/Tier 3 Engineering."
  },
  {
    merchant_id: "m_1005",
    name: "Zenith Apparel (Seasonal)",
    plan_tier: "Pro",
    mrr: 299.00,
    signup_date: "2024-08-12T00:00:00Z",
    last_hva_date: "2026-06-10T00:00:00Z",
    is_seasonal: true,
    metrics: {
      transactions_last_30d: 300,
      transaction_volume_change_30d: -82.5,
      stalled_support_days: 0,
      nps_score: null
    },
    risk_score: 40, // Seasonal cap on Vol Decline (+25) + HVA (+15). Keeps them at Medium Risk.
    risk_category: "Medium Risk",
    primary_churn_signal: "Transaction Volume Decline",
    recommended_action: "Volume drop aligns with seasonal pattern. Send automated check-in."
  },
  {
    merchant_id: "m_1006",
    name: "Global Trade Co.",
    plan_tier: "Enterprise",
    mrr: 2500.00,
    signup_date: "2021-05-30T00:00:00Z",
    last_hva_date: "2026-06-01T00:00:00Z",
    is_seasonal: false,
    metrics: {
      transactions_last_30d: 15000,
      transaction_volume_change_30d: -65.0,
      stalled_support_days: 0,
      nps_score: 2
    },
    risk_score: 75, // Severe Volume Decline > 50% (+60) + HVA (+15)
    risk_category: "High Risk",
    primary_churn_signal: "Severe Volume Decline",
    recommended_action: "Massive volume drop detected. Highly likely competitor migration. Executive escalation required."
  },
  {
    merchant_id: "m_1007",
    name: "Artisan Crafts",
    plan_tier: "Starter",
    mrr: 49.00,
    signup_date: "2026-03-01T00:00:00Z",
    last_hva_date: "2026-07-16T00:00:00Z",
    is_seasonal: false,
    metrics: {
      transactions_last_30d: 0,
      transaction_volume_change_30d: -100.0,
      stalled_support_days: 0,
      nps_score: null
    },
    risk_score: 95, // Failed Payment/Downgrade (+60) + Severe Vol Decline (+35 capped)
    risk_category: "Critical",
    primary_churn_signal: "Failed Payment / Abandonment",
    recommended_action: "Trigger automated Dunning sequence immediately. Account suspended."
  }
];
