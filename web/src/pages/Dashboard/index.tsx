import React from 'react';

import AuthWrapper from '../_layouts/authWrapper';
import DashboardOverview from './DashboardOverview';
import PortfolioHistory from './PortfolioHistory';
import InvestmentTable from './InvestmenTable';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <AuthWrapper>
      <DashboardOverview />
      <PortfolioHistory />

      <InvestmentTable />
    </AuthWrapper>
  );
};

export default Dashboard;
