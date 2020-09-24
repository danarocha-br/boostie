import React from 'react';
import { Flex } from '@chakra-ui/core';

const MainContent: React.FC = ({ children }) => {
  return (
    <Flex
      as="main"
      mt={['-250px', '-250px', '-220px']}
      pr={[4, 4, 8, 12, 20]}
      pl={[4, 4, 8, 12, 20]}
      flexDirection="column"
      w="100%"
    >
      {children}
    </Flex>
  );
};

export default MainContent;
