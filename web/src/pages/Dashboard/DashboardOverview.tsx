import React from 'react';
import { Flex } from '@chakra-ui/core';

import CardOffer from '../../components/Card/CardOffer';
import CardAccountOverview from '../../components/Card/CardAccountOverview';

const DashboardOverview: React.FC = () => {
  return (
    <Flex
      h={'290px'}
      w="100%"
      flexDirection={['column', 'column', 'row', 'row']}
    >
      <Flex
        w={{ base: '100%', sm: 4, md: 1.5 / 4 }}
        pr={6}
        display={['none', 'none', 'flex']}
      >
        <CardOffer />
      </Flex>
      <Flex w={{ base: '100%', sm: 4, md: 2.5 / 4 }}>
        <CardAccountOverview />
      </Flex>
    </Flex>
  );
};

export default DashboardOverview;
