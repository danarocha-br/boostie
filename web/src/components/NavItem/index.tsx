import React, { MouseEventHandler } from 'react';
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
  onClick?: MouseEventHandler<HTMLElement>;
}

const NavItem: React.FC<INavItemProps> = ({
  icon,
  link,
  title,
  disabled,
  loading,
  active,
  onClick,
  ...rest
}) => {
  return (
    <ListItem disabled={disabled} {...rest} onClick={onClick}>
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
