import React, { useState, memo } from 'react';
import { Flex, List, PseudoBox } from '@chakra-ui/core';

import ProfileLink from '../ProfileLink';
import NavItem from '../NavItem';

import { User } from '../ProfileLink/User';

const Menu: React.FC = () => {
  const [isLoading, setLoading] = useState(false);

  const user: User = { name: 'Dana Rocha', email: 'email@domain.com' };

  return (
    <Flex
      as="nav"
      gridArea="menu"
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      h="100vh"
      p="8"
    >
      <PseudoBox>
        <ProfileLink user={user} loading={isLoading} />

        <List mt="20">
          <NavItem
            icon="dashboard"
            link="/"
            title="Dashboard"
            loading={isLoading}
          />
          <NavItem
            icon="wallet"
            link="/"
            title="Holdings"
            loading={isLoading}
          />
          <NavItem
            icon="barChart"
            link="/"
            title="Performance"
            loading={isLoading}
          />
        </List>
      </PseudoBox>

      <List>
        <NavItem icon="logout" link="/" title="Logout" loading={isLoading} />
      </List>
    </Flex>
  );
};

export default memo(Menu);
