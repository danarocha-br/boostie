import React from 'react';
import { Grid } from '@chakra-ui/core';
import { useMediaQuery } from 'react-responsive';

import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import Main from './Main';
import { IDashboardProps } from '~/pages/Dashboard/IDashboardProps';
import { TabletOrMobile } from '~/utils/breakpoints';

const AuthWrapper: React.FC<IDashboardProps> = ({ children, isLoading }) => {
  const isTabletOrMobile = useMediaQuery({ query: TabletOrMobile });

  const responsiveGrid = isTabletOrMobile
    ? `'header'
      'main'
      'footer'`
    : `
    'menu header'
    'menu main'
    'menu footer'`;

  return (
    <Grid
      as="div"
      height="100vh"
      width="100%"
      templateColumns={['100%', '100%', '100%', '360px 1fr']}
      templateRows={[
        '324px 1fr 40px',
        '324px 1fr 40px',
        '324px 1fr 50px',
        '324px 1fr 50px',
      ]}
      templateAreas={responsiveGrid}
      bgImage="linear-gradient(180deg, #bcbcc112 0%, #fafafa 103.67%);"
      overflow="scroll"
    >
      <Sidebar isLoading={isLoading} />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Grid>
  );
};

export default AuthWrapper;
