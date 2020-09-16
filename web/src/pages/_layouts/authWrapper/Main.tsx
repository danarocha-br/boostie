import React from 'react';
import { Flex } from '@chakra-ui/core';

const MainContent: React.FC = ({ children }) => {
  return (
    <Flex as="main" mt="-220px" pr={8} pl={20} flexDirection="column">
      {children}
    </Flex>
  );
};

export default MainContent;
