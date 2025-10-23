import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';

const DealList = ({ deals, onSelectDeal }) => {
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get badge variant based on score
  const getScoreBadgeVariant = (score) => {
    if (score >= 9) return 'success';
    if (score >= 8) return 'default';
    if (score >= 7) return 'warning';
    return 'secondary';
  };

  // Get stage color
  const getStageColor = (stage) => {
    const colors = {
      'Seed': 'bg-blue-100 text-blue-800',
      'Series A': 'bg-green-100 text-green-800',
      'Series B': 'bg-purple-100 text-purple-800',
      'Series C': 'bg-orange-100 text-orange-800',
    };
    return colors[stage] || 'bg-gray-100 text-gray-800';
  };

  if (!deals || deals.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No deals available</h3>
        <p className="text-muted-foreground">Check back later for new investment opportunities.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deals.map((deal) => (
        <Card
          key={deal.id}
          className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50"
          onClick={() => onSelectDeal(deal)}
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between mb-2">
              <Badge variant="outline" className={getStageColor(deal.stage)}>
                {deal.stage}
              </Badge>
              <Badge variant={getScoreBadgeVariant(deal.score)}>
                {deal.score}/10
              </Badge>
            </div>
            <CardTitle className="text-lg leading-tight">
              {deal.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground font-medium">
              {deal.company}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Amount and Sector */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(deal.amount)}
                </p>
                <p className="text-xs text-muted-foreground">Investment Amount</p>
              </div>
              <Badge variant="secondary">
                {deal.sector}
              </Badge>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-semibold text-foreground">{deal.metrics.revenue}</p>
                <p className="text-muted-foreground">Revenue</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">{deal.metrics.growth}</p>
                <p className="text-muted-foreground">Growth</p>
              </div>
            </div>

            {/* Description Preview */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {deal.description}
            </p>

            {/* Location and Founded */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
              <span>{deal.location}</span>
              <span>Founded {deal.founded}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DealList;
