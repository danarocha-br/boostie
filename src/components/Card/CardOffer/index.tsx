import React, { memo } from 'react';
import { Flex, Heading, Text, Image } from '@chakra-ui/core';

import Button from '../../Button';
import Card from '../index';

import ImageAdvertisement from '../../../assets/icons/user-phone.png';

const CardOffer: React.FC = () => {
  return (
    <Card>
      <Heading as="h1" fontSize="xl" fontWeight="light">
        Upgrade your Account
      </Heading>

      <Flex
        w="100%"
        h="100%"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="space-between"
        pb={8}
      >
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
        <Button variants="icon" icon="arrow-forward" size="lg" />
      </Flex>
    </Card>
  );
};

export default memo(CardOffer);
