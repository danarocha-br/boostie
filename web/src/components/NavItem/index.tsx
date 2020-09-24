import React, { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Text, Skeleton } from '@chakra-ui/core';
import { useMediaQuery } from 'react-responsive';

import { ListItem } from './styles';
import { TabletOrMobile } from '~/utils/breakpoints';
interface INavItemProps {
  title?: string;
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
  const isTabletOrMobile = useMediaQuery({ query: TabletOrMobile });

  return (
    <ListItem
      disabled={disabled}
      {...rest}
      onClick={onClick}
      mt={['10px', '10px', '10px', '42px']}
    >
      <NavLink to={link}>
        <Skeleton isLoaded={!loading} borderRadius="xlarge">
          <Icon
            name={icon}
            size="24px"
            color={isTabletOrMobile ? 'white' : 'gray.900'}
          />
        </Skeleton>

        <Skeleton
          display={['none', 'none', 'none', 'block']}
          isLoaded={!loading}
          borderRadius="small"
          ml="3"
          w={100}
        >
          <Text display={['none', 'none', 'none', 'block']} color="gray.900">
            {title}
          </Text>
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
