import React, { useState, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, List, PseudoBox } from '@chakra-ui/core';
import { useMediaQuery } from 'react-responsive';
import faker from 'faker';

import ProfileLink from '../ProfileLink';
import NavItem from '../NavItem';

import { IUser } from '../ProfileLink/User';
import { SIDE_BAR_NAVIGATION } from '../../constants';
import useAuth from '~/contexts/auth';

const Sidebar: React.FC = () => {
  const { signOut, investments, isLoading } = useAuth();
  const history = useHistory();

  const user: IUser = {
    name: investments.user.name,
    email: faker.internet.email(),
  };

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });

  const handleSignOut = (): void => {
    signOut();
    history.push('/dashboard');
  };

  function renderContent(isTabletOrMobile: boolean) {
    if (isTabletOrMobile) {
      return (
        <Flex
          as="nav"
          alignItems="center"
          justifyContent="space-between"
          position="fixed"
          bottom={0}
          h={95}
          w="100%"
          px={8}
          bg="purple.900"
          borderTopLeftRadius="xlarge"
          borderTopRightRadius="xlarge"
          color="white"
        >
          <h1>menu items</h1>
        </Flex>
      );
    }

    return (
      <Flex
        as="nav"
        gridArea="menu"
        flexDirection="column"
        justifyContent="space-between"
        w="100%"
        h="100vh"
        py="8"
        px={[8, 8, 8, 12, 20]}
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
          <NavItem
            icon="logout"
            link="/"
            title="Logout"
            loading={isLoading}
            onClick={handleSignOut}
          />
        </List>
      </Flex>
    );
  }

  return renderContent(isTabletOrMobile);
};

export default memo(Sidebar);
