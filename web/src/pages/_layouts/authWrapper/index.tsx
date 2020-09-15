import React from 'react';
import { Grid, Flex } from '@chakra-ui/core';

import Menu from '../../../components/Menu';

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
        'menu main'
        'menu main'
        'menu footer'
      "
      bgImage="linear-gradient(180deg, #bcbcc112 0%, #fafafa 103.67%);"
    >
      <Menu />
    </Grid>
  );
};

export default AuthWrapper;
