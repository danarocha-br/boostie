import React from 'react';
import { Flex, PseudoBox, Text } from '@chakra-ui/core';

interface ILegendProps {
  color: string;
  title: string;
}

const Legend: React.FC<ILegendProps> = ({ color, title }) => {
  return (
    <Flex as="li" pb={1} alignItems="center">
      <PseudoBox bg={color} mr={8} w="10px" h="10px" rounded="sm" />
      <Text color="gray.500" fontSize="xs" fontWeight="normal">
        {title}
      </Text>
    </Flex>
  );
};

export default Legend;
