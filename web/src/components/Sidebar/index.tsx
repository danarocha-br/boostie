import React, { memo } from 'react';
import { Flex, List, PseudoBox } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import faker from 'faker';

import ProfileLink from '../ProfileLink';
import NavItem from '../NavItem';

import { IUser } from '../ProfileLink/User';
import { SIDE_BAR_NAVIGATION } from '~/constants';
import useAuth from '~/contexts/auth';
import { IDashboardProps } from '~/pages/Dashboard/IDashboardProps';
import { isTablet, TabletOrMobile } from '~/utils/breakpoints';

const Sidebar: React.FC<IDashboardProps> = ({ isLoading }) => {
  const isTabletOrMobile = useMediaQuery({ query: TabletOrMobile });

  const { signOut, investments } = useAuth();
  let history = useHistory();

  const user: IUser = {
    name: investments.user.name,
    email: faker.internet.email(),
  };

  const handleSignOut = (): void => {
    signOut();
    history.push('/login');
  };

  function renderContent(isTabletOrMobile: boolean) {
    if (isTabletOrMobile && isTablet) {
      return (
        <Flex
          as="nav"
          alignItems="center"
          position="fixed"
          bottom={0}
          h={65}
          w="100%"
          px={8}
          bg="blue.50"
          borderTopLeftRadius="xlarge"
          borderTopRightRadius="xlarge"
          color="white"
          zIndex={10}
        >
          <List
            display="flex"
            justifyContent="space-between"
            color="white"
            w="100%"
          >
            {Object.entries(SIDE_BAR_NAVIGATION).map(([key, value]) => (
              <NavItem
                key={key}
                icon={value.icon}
                link={value.to}
                loading={isLoading}
              />
            ))}
          </List>
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
        position="sticky"
        top={0}
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
