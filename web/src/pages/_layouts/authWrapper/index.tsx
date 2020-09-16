import React from 'react';
import { Grid } from '@chakra-ui/core';

import Menu from '../../../components/Menu';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Main from './Main';

const AuthWrapper: React.FC = ({ children }) => {
  return (
    <Grid
      as="div"
      height="100vh"
      width="100%"
      templateColumns="310px 1fr"
      templateRows="324px 1fr 50px"
      templateAreas="
        'menu header'
        'menu main'
        'menu footer'
      "
      bgImage="linear-gradient(180deg, #bcbcc112 0%, #fafafa 103.67%);"
      overflow="scroll"
    >
      <Menu />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Grid>
  );
};

export default AuthWrapper;
