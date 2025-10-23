import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';

const DealDetail = ({ deal, onBack }) => {
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

  if (!deal) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No deal selected</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className={getStageColor(deal.stage)}>
                {deal.stage}
              </Badge>
              <Badge variant={getScoreBadgeVariant(deal.score)} className="text-lg px-3 py-1">
                {deal.score}/10
              </Badge>
            </div>
            <Badge variant="secondary" className="text-sm">
              {deal.sector}
            </Badge>
          </div>
          
          <CardTitle className="text-3xl mb-2">
            {deal.name}
          </CardTitle>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-lg text-foreground">{deal.company}</span>
            <span>•</span>
            <span>{deal.location}</span>
            <span>•</span>
            <span>Founded {deal.founded}</span>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <p className="text-3xl font-bold text-primary mb-1">
                {formatCurrency(deal.amount)}
              </p>
              <p className="text-sm text-muted-foreground">Investment Amount</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600 mb-1">
                {deal.metrics.revenue}
              </p>
              <p className="text-sm text-muted-foreground">Annual Revenue</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600 mb-1">
                {deal.metrics.growth}
              </p>
              <p className="text-sm text-muted-foreground">Growth Rate</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-foreground leading-relaxed">
              {deal.description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Key Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-foreground">{deal.metrics.revenue}</p>
                <p className="text-sm text-muted-foreground">Annual Recurring Revenue</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-foreground">{deal.metrics.growth}</p>
                <p className="text-sm text-muted-foreground">Year-over-Year Growth</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-foreground">{deal.metrics.customers}</p>
                <p className="text-sm text-muted-foreground">Active Customers</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-foreground">{deal.metrics.teamSize}</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Investment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Funding Stage</span>
                <Badge variant="outline" className={getStageColor(deal.stage)}>
                  {deal.stage}
                </Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Investment Amount</span>
                <span className="font-semibold">{formatCurrency(deal.amount)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Sector</span>
                <Badge variant="secondary">{deal.sector}</Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Deal Score</span>
                <Badge variant={getScoreBadgeVariant(deal.score)}>
                  {deal.score}/10
                </Badge>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Founded</span>
                <span className="font-semibold">{deal.founded}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Investors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Lead Investors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {deal.investors.map((investor, index) => (
              <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                {investor}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-6">
        <button
          onClick={onBack}
          className="px-6 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          ← Back to List
        </button>
        <button className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors">
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default DealDetail;
