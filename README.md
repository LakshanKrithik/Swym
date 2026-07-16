# Merchant Churn Dashboard

A predictive dashboard designed to flag merchants at risk of churning and prescribe actionable interventions.

## Architecture & Data Persistence
This dashboard was developed from a comprehensive product discovery specification mapping churn signals (HVA Abandonment, Volume Decline, Stalled Support, Failed Payments) into a transparent scoring model.

**Note on Persistence:** 
For this prototype, data is persisted via a static mock data layer (`src/data/mockMerchants.js`) to allow for immediate UI testing and edge-case validation. In a production environment, this data maps to a PostgreSQL database powered by a nightly batch job (e.g. Airflow) that recalculates risk scores based on aggregated backend logs, billing events, and support ticketing APIs.

## Running Locally

1. `npm install`
2. `npm run dev`

## Deployment
This project uses Vite and is configured for deployment to GitHub Pages.
1. Run `npm run build`
2. Deploy the `dist` folder to your hosting provider of choice (GitHub Pages, Vercel, Netlify).
