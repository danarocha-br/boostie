import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Text } from '@chakra-ui/core';

import { ListItem } from './styles';

interface INavItemProps {
  title: string;
  link: string;
  icon: string;
  disabled?: boolean;
  active?: boolean;
}

const NavItem: React.FC<INavItemProps> = ({
  icon,
  link,
  title,
  disabled,
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
    <ListItem disabled={disabled} {...rest}>
      <Link to={link}>
        <Icon name={icon} size="24px" mr="2" color="gray.900" />
        <Text color="gray.900">{title}</Text>
      </Link>
    </ListItem>
  );
};

NavItem.defaultProps = {
  disabled: false,
};

export default NavItem;
