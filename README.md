# Investment Deals Dashboard 💼

Interactive React app for browsing investment opportunities. Built to test the v0 API (v0-1.5-md) for scaffolding production-ready applications.

![React](https://img.shields.io/badge/React-18.x-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38bdf8) ![v0](https://img.shields.io/badge/Scaffolded-v0--1.5--md-9333ff)

## Features

- **Search & Filter**: Real-time filtering by name and score threshold
- **Interactive Cards**: Click to view detailed deal information
- **Live Stats**: Aggregate metrics dashboard
- **Async Data**: Mock API with loading/error states
- **Responsive**: Works on all screen sizes
- **Keyboard Shortcuts**: ESC to close details

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── api/deals.js              # Mock API
├── components/
│   ├── ui/
│   │   ├── Card.jsx         # Reusable card
│   │   └── Badge.jsx        # Badge component
│   ├── DealList.jsx         # Deal grid
│   ├── DealDetail.jsx       # Detail view
│   ├── FilterBar.jsx        # Search/filter
│   └── StatsBar.jsx         # Metrics
├── App.js                    # Main component
└── index.css                 # Tailwind + design tokens
```

## Tech Stack

- React 18 (hooks, functional components)
- Tailwind CSS 3
- Create React App

## Mock Data

6 investment deals across SaaS, CleanTech, HealthTech, FinTech, EdTech, and Cybersecurity sectors. Each includes metrics, investors, and scoring.

## Development Notes

- Scaffolded with v0-1.5-md model
- Clean component architecture
- Proper error handling
- Modular, reusable components
- No external dependencies beyond React/Tailwind

---

Built with React, Tailwind CSS, and v0-1.5-md
