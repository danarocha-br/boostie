import React from 'react';
import { Flex } from '@chakra-ui/core';

// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Flex as="header" gridArea="header" bg="gray.100" height="100%"></Flex>
  );
};

export default Navbar;
