import React from 'react';

import AuthWrapper from '../_layouts/authWrapper';
import DashboardOverview from './DashboardOverview';
import PortfolioHistory from './PortfolioHistory';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <AuthWrapper>
      <DashboardOverview />
      <PortfolioHistory />
    </AuthWrapper>
  );
};

export default Dashboard;
