import React from 'react';

import { Flex, PseudoBox, Heading } from '@chakra-ui/core';

const defaultWrapper: React.FC = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      as="main"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={6}
        flex="1"
        marginTop={['-30vh', '-50vh', '-50vh', '0']}
      >
        {children}

        <PseudoBox
          justifyContent="center"
          position="absolute"
          bottom={['15px', '40px']}
          textAlign="center"
        >
          Developed and designed with ♥ by{' '}
          <a href="http://www.linkedin.com/en/danarocha">Dana Rocha</a>
        </PseudoBox>
      </Flex>

      <Flex
        h={['170px', '190px', '50vh', '100vh']}
        w={['100%', '100%', '100%', '700px']}
        alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
        py={[8]}
        justifyContent={['center']}
        backgroundImage="url(https://res.cloudinary.com/danarocha/image/upload/v1601052327/github/bck-boostie_bfwwn6.jpg)"
        backgroundSize="cover"
        backgroundColor="#3a2a6b"
        order={[-1, -1, -1, 0]}
        style={{ backgroundBlendMode: 'hard-light' }}
      >
        <Heading
          color="white"
          fontWeight="regular"
          fontSize="xl"
          display={['none', 'block', 'block']}
        >
          Finance, open for everyone.
        </Heading>
      </Flex>
    </Flex>
  );
};

export default defaultWrapper;
