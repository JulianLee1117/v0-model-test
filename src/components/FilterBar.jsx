import React from 'react';
import { Card, CardContent } from './ui/Card';

const FilterBar = ({ nameFilter, scoreFilter, onNameChange, onScoreChange }) => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <label htmlFor="name-search" className="block text-sm font-medium text-foreground mb-2">
              Search by Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="name-search"
                type="text"
                placeholder="Search deals by name..."
                value={nameFilter}
                onChange={(e) => onNameChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
              />
            </div>
          </div>

          {/* Score Filter Input */}
          <div className="w-full md:w-64">
            <label htmlFor="score-filter" className="block text-sm font-medium text-foreground mb-2">
              Minimum Score
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <input
                id="score-filter"
                type="number"
                placeholder="0.0"
                min="0"
                max="10"
                step="0.1"
                value={scoreFilter}
                onChange={(e) => onScoreChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Filter deals with score ≥ {scoreFilter || 0}
            </p>
          </div>

          {/* Clear Filters Button */}
          {(nameFilter || scoreFilter) && (
            <div className="flex items-end">
              <button
                onClick={() => {
                  onNameChange('');
                  onScoreChange('');
                }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-input rounded-md hover:bg-accent transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterBar;

