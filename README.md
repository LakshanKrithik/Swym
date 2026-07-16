# Merchant Churn Dashboard

A predictive dashboard designed to identify merchants at risk of churn and recommend actionable interventions.

## Live Demo

https://swym-psi.vercel.app/

## Architecture & Data Persistence

This dashboard was developed from a comprehensive product discovery specification that maps key churn signals—including High-Value Action (HVA) abandonment, volume decline, stalled support interactions, and failed payments—into a transparent merchant risk scoring model.

### Data Persistence

For this prototype, data is persisted through a static mock data layer (`src/data/mockMerchants.js`) to enable rapid UI development, testing, and validation of different merchant scenarios.

In a production environment, this data would be stored in PostgreSQL and updated through a scheduled batch pipeline (e.g., Airflow) that recalculates risk scores using aggregated backend logs, billing events, and customer support data.

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Deployment

This project is built with Vite and can be deployed to platforms such as Vercel, GitHub Pages, or Netlify.

To generate a production build:

```bash
npm run build
```

Deploy the generated `dist` directory to your preferred hosting provider.
