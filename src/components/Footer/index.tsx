import React, { memo } from 'react';
import { Flex, Text, Link } from '@chakra-ui/core';

const Footer: React.FC = () => {
  return (
    <Flex
      gridArea="footer"
      w="100%"
      justifyContent="flex-end"
      pb="8"
      px={[8, 8, 8, 12, 20]}
    >
      <Text fontSize="sm" color="gray.600">
        Developed and designed with ♥ by{' '}
        <Link isExternal href="https://www.linkedin.com/in/danarocha/">
          Dana Rocha
        </Link>
      </Text>
    </Flex>
  );
};

export default memo(Footer);
