# Investment Deals Dashboard 💼

A modern, interactive React application for browsing and analyzing investment opportunities. Built with React, Tailwind CSS, and custom UI components.

![Investment Deals Dashboard](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8) ![Status](https://img.shields.io/badge/Status-Complete-success)

## ✨ Features

### 🎯 Core Functionality
- **Data Fetching**: Async loading with proper loading and error states
- **Interactive UI**: Click to select deals and view detailed information
- **Real-time Filtering**: Search by name and filter by minimum score
- **Responsive Design**: Beautiful layout that works on all screen sizes
- **Statistics Dashboard**: Real-time metrics showing total deals, capital, avg score, and sectors

### 🎨 UI/UX Enhancements
- **Modern Design**: Clean, professional interface using Tailwind CSS
- **Smooth Animations**: Fade-in transitions for better user experience
- **Keyboard Shortcuts**: Press `ESC` to close detail view
- **Hover Effects**: Interactive cards with scale and shadow effects
- **Color-Coded Badges**: Visual indicators for deal stages and scores
- **Empty States**: Helpful messages when no deals match filters

### 🏗️ Technical Features
- **Modular Architecture**: Clean separation of concerns with reusable components
- **Mock API**: Simulated backend with realistic data and network delays
- **State Management**: Efficient React hooks-based state management
- **Error Handling**: Graceful error handling with retry functionality
- **Custom UI Components**: Card, Badge, and other reusable components

## 📁 Project Structure

```
src/
├── api/
│   └── deals.js                 # Mock API with fetchDeals function
├── components/
│   ├── ui/
│   │   ├── Card.jsx            # Reusable card component
│   │   └── Badge.jsx           # Badge component for tags/status
│   ├── DealList.jsx            # Grid of deal cards
│   ├── DealDetail.jsx          # Detailed view of selected deal
│   ├── FilterBar.jsx           # Search and filter controls
│   └── StatsBar.jsx            # Statistics dashboard
├── App.js                       # Main app component with state management
├── App.css                      # Custom styles and animations
└── index.css                    # Tailwind directives and design tokens
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd v0-model-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🎮 Usage

### Browsing Deals
- The main page displays all available investment deals in a grid layout
- View key metrics at the top: total deals, capital, average score, and sectors

### Filtering
- **Search by Name**: Type in the search box to filter deals by name (case-insensitive)
- **Minimum Score**: Enter a number to show only deals with scores above that threshold
- **Clear Filters**: Click "Clear Filters" to reset all filters

### Viewing Details
- Click on any deal card to view comprehensive information
- See detailed metrics, investment details, and lead investors
- Click "Back to List" or press `ESC` to return to the list view

## 🎨 Design System

### Colors
The app uses a modern color palette with CSS custom properties:
- **Primary**: Blue tones for main actions and highlights
- **Secondary**: Gray tones for secondary elements
- **Success**: Green for positive indicators (high scores)
- **Warning**: Yellow for moderate indicators
- **Destructive**: Red for errors and critical actions

### Components
- **Card**: Flexible container with header, content, and footer sections
- **Badge**: Versatile tag component with multiple variants (default, secondary, outline, success, warning)

## 📊 Mock Data

The app includes 6 realistic investment deals across different sectors:
- **SaaS**: TechFlow Ventures Series A
- **CleanTech**: GreenEnergy Solutions Seed
- **HealthTech**: MedInsight Analytics Series B
- **FinTech**: PayFlow Technologies Seed
- **EdTech**: LearnSmart Platform Series A
- **Cybersecurity**: SecureNet Systems Series C

Each deal includes:
- Company information
- Funding stage and amount
- Deal score (0-10)
- Key metrics (revenue, growth, customers, team size)
- Lead investors
- Location and founding year

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS 3**: Utility-first CSS framework for rapid UI development
- **Create React App**: Zero-config build setup
- **Custom Components**: Hand-crafted UI components following best practices

## 📝 Implementation Details

### State Management
The app uses React's built-in `useState` and `useEffect` hooks for state management:
- `deals`: Array of all deals from the API
- `selectedDeal`: Currently selected deal for detail view
- `loading`: Loading state during data fetch
- `error`: Error message if fetch fails
- `nameFilter`: Current search query
- `scoreFilter`: Minimum score threshold

### Filtering Logic
```javascript
const filteredDeals = deals.filter(deal => {
  const matchesName = deal.name.toLowerCase().includes(nameFilter.toLowerCase());
  const minScore = scoreFilter ? parseFloat(scoreFilter) : 0;
  const matchesScore = deal.score >= minScore;
  return matchesName && matchesScore;
});
```

### Mock API
The API simulates real network behavior:
- Random delay between 800-1200ms
- 5% chance of failure for testing error handling
- Returns deep copies to prevent mutation

## 🎯 Future Enhancements

Potential features to add:
- [ ] Sorting options (by score, amount, date)
- [ ] Pagination for large datasets
- [ ] Deal comparison view
- [ ] Export to CSV/PDF
- [ ] User authentication
- [ ] Real API integration
- [ ] Advanced filters (sector, stage, location)
- [ ] Dark mode toggle
- [ ] Deal bookmarking/favorites

## 📄 License

This project was created for educational/interview purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own use.

---

Built with ❤️ using React and Tailwind CSS
