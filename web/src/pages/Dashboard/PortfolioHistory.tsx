import React from 'react';
import { Flex, Heading, Select, Stack } from '@chakra-ui/core';

import CardStat from '../../components/CardStat';

const PortfolioHistory: React.FC = () => {
  return (
    <>
      <Flex w="100%" justifyContent="space-between" my={8}>
        <Heading as="h2" fontSize="md" fontWeight="regular">
          Portfolio History
        </Heading>
        <Select
          placeholder="Per Industry"
          variant="flushed"
          w="200px"
          borderColor="gray-900"
          borderStyle="dashed"
          borderBottomWidth="1px"
          focusBorderColor="purple.900"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>

      <Flex w="100%" justifyContent="space-between">
        <Flex w={{ base: '100%', sm: 4, md: 2.5 / 4 }} h="288px">
          <Stack isInline spacing={8}>
            <CardStat
              value={945.45}
              currency="$"
              result="234.23 (30.3%)"
              month="Aug"
              year={20}
            />
            <CardStat
              value={945.45}
              currency="$"
              result="234.23 (30.34%)"
              month="Aug"
              year={20}
            />
            <CardStat
              value={945.45}
              currency="$"
              result="234.23 (30.34%)"
              month="Aug"
              year={20}
            />
          </Stack>
        </Flex>
        <Flex w={{ base: '100%', sm: 4, md: 1.5 / 4 }}></Flex>
      </Flex>
    </>
  );
};

export default PortfolioHistory;
