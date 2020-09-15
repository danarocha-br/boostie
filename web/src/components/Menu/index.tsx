import React from 'react';
import { Flex, List } from '@chakra-ui/core';

import ProfileLink from '../ProfileLink';
import NavItem from '../NavItem';

export interface Props {}

const Menu: React.FC<Props> = () => {
  return (
    <Flex
      gridArea="menu"
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      h="100vh"
      p="8"
    >
      <ProfileLink name="Dana Rocha" email="email@domain.com" />

      <List>
        <NavItem icon="dashboard" link="/" title="Dashboard" disabled />
      </List>
    </Flex>
  );
};

export default Menu;
