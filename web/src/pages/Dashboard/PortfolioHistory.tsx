import React from 'react';
import { Flex, Heading, Select } from '@chakra-ui/core';

import PortfolioGraphCard from '../../components/Card/PortfolioGraphCard';
import CardStat from '../../components/Card/CardStat';

import { StatCardContainer } from './styles';

const PortfolioHistory: React.FC = () => {
  return (
    <>
      <Flex w="100%" justifyContent="space-between" alignItems="center" mt={8}>
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

      <Flex
        minH="288px"
        maxH="288px"
        mb={8}
        flex="1"
        justifyContent="space-between"
      >
        <StatCardContainer
          flex="2"
          as="section"
          overflowX="scroll"
          mr={8}
          pt={6}
          boxShadow="inset -14px 0px 20px rgba(0,0,0,0.02), inset 0px 33px 0px rgb(255 255 255 / 44%)"
        >
          {/* <CardStat
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
          <CardStat
            value={945.45}
            currency="$"
            result="234.23 (30.34%)"
            month="Aug"
            year={20}
          /> */}
        </StatCardContainer>

        <PortfolioGraphCard />
      </Flex>
    </>
  );
};

export default PortfolioHistory;
