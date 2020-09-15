import React from 'react';

import AuthWrapper from '../_layouts/authWrapper';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return <AuthWrapper></AuthWrapper>;
};

export default Dashboard;
