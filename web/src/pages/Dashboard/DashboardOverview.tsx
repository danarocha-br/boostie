import React from 'react';
import { Flex, Heading, Text, Image } from '@chakra-ui/core';

import Card from '../../components/Card/index';
import ImageAdvertisement from '../../assets/icons/user-phone.png';

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
        <Card>
          <Heading as="h1" fontSize="xl" fontWeight="light">
            Upgrade your Account
          </Heading>

          <Flex w="100%" justifyContent="flex-end">
            <Image
              size="230px"
              objectFit="contain"
              src={ImageAdvertisement}
              alt="upgrade"
              position="absolute"
              left="-80px"
              bottom="-19px"
              width="290px"
            />
            <Text color="gray.500" width="55%" mt={6}>
              Access many other features and helpful insights.
            </Text>
          </Flex>
        </Card>
      </Flex>
      <Flex w={{ base: '100%', sm: 4, md: 2.5 / 4 }}>
        <Card></Card>
      </Flex>
    </Flex>
  );
};

export default DashboardOverview;
