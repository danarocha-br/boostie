import React from 'react';
import { Flex } from '@chakra-ui/core';

const MainContent: React.FC = ({ children }) => {
  return (
    <Flex
      as="main"
      mt="-220px"
      pr={[8, 8, 8, 12, 20]}
      pl={[8, 8, 8, 12, 20]}
      flexDirection="column"
      w="100%"
    >
      {children}
    </Flex>
  );
};

export default MainContent;
