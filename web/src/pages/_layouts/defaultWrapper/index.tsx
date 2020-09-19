import React from 'react';
import { Flex, PseudoBox } from '@chakra-ui/core';

const defaultWrapper: React.FC = ({ children }) => {
  return (
    <Flex
      as="main"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      w="100%"
      // bgImg=" linear-gradient( 95.2deg,  rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );"
      bgImg=" radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% );"
    >
      {children}

      <PseudoBox position="absolute" bottom="40px">
        Developed and designed with ♥ by Dana Rocha
      </PseudoBox>
    </Flex>
  );
};

export default defaultWrapper;
