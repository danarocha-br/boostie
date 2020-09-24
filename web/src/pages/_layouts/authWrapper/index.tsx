import React from 'react';
import { Grid } from '@chakra-ui/core';

import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import Main from './Main';
import { IDashboardProps } from "~/pages/Dashboard/IDashboardProps";


const AuthWrapper: React.FC<IDashboardProps> = ({ children, isLoading }) => {
  return (
    <Grid
      as="div"
      height="100vh"
      width="100%"
      templateColumns={['1fr', '1fr', '1fr', '360px 1fr']}
      templateRows={['1fr', '1fr', '324px 1fr 50px', '324px 1fr 50px']}
      templateAreas="
        'menu header'
        'menu main'
        'menu footer'
      "
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
