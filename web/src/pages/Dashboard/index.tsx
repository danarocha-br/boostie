import React from 'react';

import AuthWrapper from '../_layouts/authWrapper';
import DashboardOverview from './DashboardOverview';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <AuthWrapper>
      <DashboardOverview></DashboardOverview>
    </AuthWrapper>
  );
};

export default Dashboard;
