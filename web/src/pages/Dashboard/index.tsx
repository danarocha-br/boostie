import React, { useState, useEffect } from 'react';

import AuthWrapper from '../_layouts/authWrapper';
import DashboardOverview from './DashboardOverview';
import PortfolioHistory from './PortfolioHistory';
import InvestmentTable from './InvestmenTable';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  }, [isLoading]);

  return (
    <AuthWrapper isLoading={isLoading}>
      <DashboardOverview isLoading={isLoading} />
      <PortfolioHistory isLoading={isLoading} />

      {!isLoading && <InvestmentTable isLoading={isLoading} />}
    </AuthWrapper>
  );
};

export default Dashboard;
