import React, { useState, memo } from 'react';
import { Flex, List, PseudoBox } from '@chakra-ui/core';

import ProfileLink from '../ProfileLink';
import NavItem from '../NavItem';

import { IUser } from '../ProfileLink/User';
import { SIDE_BAR_NAVIGATION } from '../../constants';

const Sidebar: React.FC = () => {
  const [isLoading, setLoading] = useState(false);

  const user: IUser = { name: 'Dana Rocha', email: 'email@domain.com' };

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
          {Object.entries(SIDE_BAR_NAVIGATION).map(([key, value]) => (
            <NavItem
              key={key}
              title={key}
              icon={value.icon}
              link={value.to}
              loading={isLoading}
            />
          ))}
        </List>
      </PseudoBox>

      <List>
        <NavItem icon="logout" link="/" title="Logout" loading={isLoading} />
      </List>
    </Flex>
  );
};

export default memo(Sidebar);
