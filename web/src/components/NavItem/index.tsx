import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Text, Skeleton } from '@chakra-ui/core';

import { ListItem } from './styles';

interface INavItemProps {
  title: string;
  link: string;
  icon: string;
  disabled?: boolean;
  active?: boolean;
  loading?: boolean;
}

const NavItem: React.FC<INavItemProps> = ({
  icon,
  link,
  title,
  disabled,
  loading,
  active,
  ...rest
}) => {
  function renderIconColor() {
    if (disabled) {
      return '#9899AE';
    }
    // if (isTabletOrMobile && disabled) {
    //   return '#fff';
    // }
    // if (isTabletOrMobile) {
    //   return '#fff';
    // }
    // if (isTabletOrMobile) {
    //   return '#212237';
    // }
  }

  return (
    <ListItem disabled={disabled} loading={loading} {...rest}>
      <NavLink to={link}>
        <Skeleton isLoaded={!loading} borderRadius="xlarge">
          <Icon name={icon} size="24px" color="gray.900" />
        </Skeleton>

        <Skeleton isLoaded={!loading} borderRadius="small" ml="3" w={100}>
          <Text color="gray.900">{title}</Text>
        </Skeleton>
      </NavLink>
    </ListItem>
  );
};

NavItem.defaultProps = {
  disabled: false,
  loading: false,
};

export default NavItem;
