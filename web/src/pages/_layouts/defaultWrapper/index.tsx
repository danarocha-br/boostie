import React from 'react';

import { Flex, PseudoBox } from '@chakra-ui/core';

const defaultWrapper: React.FC = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      px={6}
      as="main"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgImg=" radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.8) 0.1%, rgba(239,249,251,0.7) 90.1% );"
    >
      {children}

      <PseudoBox position="absolute" bottom={['15px', '40px']}>
        Developed and designed with ♥ by{' '}
        <a href="http://www.linkedin.com/en/danarocha">Dana Rocha</a>
      </PseudoBox>
    </Flex>
  );
};

export default defaultWrapper;
