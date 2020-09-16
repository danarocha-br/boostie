import React from 'react';
import { Grid, Flex } from '@chakra-ui/core';

import Menu from '../../../components/Menu';
import Navbar from '../../../components/Navbar/index';

export interface Props {}

const AuthWrapper: React.FC<Props> = () => {
  return (
    <Grid
      as="main"
      height="100vh"
      width="100%"
      templateColumns="310px 1fr"
      templateRows="110px 1fr 110px"
      templateAreas="
        'menu header'
        'menu main'
        'menu footer'
      "
      bgImage="linear-gradient(180deg, #bcbcc112 0%, #fafafa 103.67%);"
    >
      <Menu />
      <Navbar />
    </Grid>
  );
};

export default AuthWrapper;
