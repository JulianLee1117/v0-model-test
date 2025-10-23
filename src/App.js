import React, { useState, useEffect } from 'react';
import { fetchDeals } from './api/deals';
import DealList from './components/DealList';
import DealDetail from './components/DealDetail';
import FilterBar from './components/FilterBar';
import StatsBar from './components/StatsBar';
import './App.css';

function App() {
  const [deals, setDeals] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter states
  const [nameFilter, setNameFilter] = useState('');
  const [scoreFilter, setScoreFilter] = useState('');

  // Fetch deals on component mount
  useEffect(() => {
    const loadDeals = async () => {
      try {
        setLoading(true);
        setError(null);
        const dealsData = await fetchDeals();
        setDeals(dealsData);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch deals:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDeals();
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Escape key to close detail view
      if (event.key === 'Escape' && selectedDeal) {
        handleClearSelection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDeal]);

  // Handle deal selection
  const handleSelectDeal = (deal) => {
    setSelectedDeal(deal);
  };

  // Handle clearing selection
  const handleClearSelection = () => {
    setSelectedDeal(null);
  };

  // Handle retry on error
  const handleRetry = async () => {
    try {
      setLoading(true);
      setError(null);
      const dealsData = await fetchDeals();
      setDeals(dealsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Compute filtered deals
  const filteredDeals = deals.filter(deal => {
    const matchesName = deal.name.toLowerCase().includes(nameFilter.toLowerCase());
    const minScore = scoreFilter ? parseFloat(scoreFilter) : 0;
    const matchesScore = deal.score >= minScore;
    return matchesName && matchesScore;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Investment Deals</h1>
              <p className="text-muted-foreground mt-1">
                Discover and analyze investment opportunities
              </p>
            </div>
            {selectedDeal && (
              <button
                onClick={handleClearSelection}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to List
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {error ? (
          // Error State
          <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Something went wrong</h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : loading ? (
          // Loading State
          <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <p className="text-muted-foreground">Loading investment deals...</p>
          </div>
        ) : selectedDeal ? (
          // Deal Detail View
          <div className="animate-fade-in">
            <DealDetail deal={selectedDeal} onBack={handleClearSelection} />
          </div>
        ) : (
          // Deal List View with Filters
          <div className="animate-fade-in">
            {/* Stats Bar */}
            <StatsBar deals={filteredDeals} />
            
            {/* Filter Bar */}
            <FilterBar
              nameFilter={nameFilter}
              scoreFilter={scoreFilter}
              onNameChange={setNameFilter}
              onScoreChange={setScoreFilter}
            />
            
            {/* Results Summary */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Available Deals 
                <span className="text-muted-foreground font-normal ml-2">
                  ({filteredDeals.length} {filteredDeals.length !== deals.length ? `of ${deals.length}` : ''})
                </span>
              </h2>
              <p className="text-muted-foreground">
                {filteredDeals.length > 0 
                  ? 'Click on any deal to view detailed information'
                  : 'No deals match your filter criteria. Try adjusting your filters.'}
              </p>
            </div>
            
            {/* Deal List */}
            <DealList deals={filteredDeals} onSelectDeal={handleSelectDeal} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
