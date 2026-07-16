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
      nps_score: 9,
      volume_history: [4000, 4100, 4200, 4300, 4400, 4500]
    },
    risk_score: 5, 
    risk_category: "Low Risk",
    primary_churn_signal: "None",
    score_factors: [
      { signal: "Base Score", points: 5 }
    ],
    recommended_action: "No action required. Healthy account.",
    recommended_action_rationale: "Merchant is highly active and transaction volume is stable. No intervention is necessary."
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
      nps_score: 6,
      volume_history: [900, 890, 880, 870, 860, 850]
    },
    risk_score: 15, 
    risk_category: "Low Risk",
    primary_churn_signal: "HVA Abandonment",
    score_factors: [
      { signal: "HVA Abandonment (>21 days)", points: 15 }
    ],
    recommended_action: "CS to send targeted outreach offering a 'workflow optimization session'.",
    recommended_action_rationale: "Since they haven't used advanced features recently but are still processing transactions, a low-touch educational check-in helps re-engage them without being intrusive."
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
      nps_score: 5,
      volume_history: [1600, 1650, 1600, 1500, 1300, 1200]
    },
    risk_score: 30, 
    risk_category: "Medium Risk",
    primary_churn_signal: "Transaction Volume Decline",
    score_factors: [
      { signal: "Transaction Volume Decline (>20%)", points: 25 },
      { signal: "Base Score", points: 5 }
    ],
    recommended_action: "AM to schedule a Business Review. Investigate traffic routing.",
    recommended_action_rationale: "A >20% drop could indicate macro-economic factors or routing volume to a competitor. A Business Review uncovers the root cause before they completely migrate."
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
      nps_score: 3,
      volume_history: [200, 180, 170, 150, 130, 120]
    },
    risk_score: 70, 
    risk_category: "High Risk",
    primary_churn_signal: "Stalled Support Issue",
    score_factors: [
      { signal: "Stalled Critical Support Issue", points: 55 },
      { signal: "HVA Abandonment (>21 days)", points: 15 }
    ],
    recommended_action: "High Risk. Escalate immediately to Tier 2/Tier 3 Engineering.",
    recommended_action_rationale: "An unresolved critical issue destroys trust quickly. Escalating to Engineering directly circumvents normal queues and prevents immediate rage-quitting."
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
      nps_score: null,
      volume_history: [2000, 2500, 1800, 800, 400, 300]
    },
    risk_score: 40,
    risk_category: "Medium Risk",
    primary_churn_signal: "Transaction Volume Decline",
    score_factors: [
      { signal: "Volume Decline (Capped due to Seasonality)", points: 25 },
      { signal: "HVA Abandonment (>21 days)", points: 15 }
    ],
    recommended_action: "Volume drop aligns with seasonal pattern. Send automated check-in.",
    recommended_action_rationale: "Because this merchant is seasonal, manual AM intervention is an inefficient use of resources. An automated email maintains the relationship gracefully during their off-season."
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
      nps_score: 2,
      volume_history: [45000, 46000, 45000, 40000, 25000, 15000]
    },
    risk_score: 75,
    risk_category: "High Risk",
    primary_churn_signal: "Severe Volume Decline",
    score_factors: [
      { signal: "Severe Volume Decline (>50%)", points: 60 },
      { signal: "HVA Abandonment (>21 days)", points: 15 }
    ],
    recommended_action: "Massive volume drop detected. Executive escalation required.",
    recommended_action_rationale: "A massive, non-seasonal volume drop almost always indicates an active migration to a competitor. Executive intervention is required to save the account and offer counter-terms."
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
      nps_score: null,
      volume_history: [100, 110, 120, 80, 0, 0]
    },
    risk_score: 95, 
    risk_category: "Critical",
    primary_churn_signal: "Failed Payment / Abandonment",
    score_factors: [
      { signal: "Failed Payment / Downgrade", points: 60 },
      { signal: "Severe Volume Decline (Capped at Max)", points: 35 }
    ],
    recommended_action: "Trigger automated Dunning sequence immediately.",
    recommended_action_rationale: "A failed payment means we are actively losing MRR. Automated dunning captures accidental failures (expired cards) while minimizing manual AM overhead on Starter tier accounts."
  }
];
