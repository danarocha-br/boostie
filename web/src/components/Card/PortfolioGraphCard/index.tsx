import React from 'react';
import { Flex, PseudoBox, Icon, Text } from '@chakra-ui/core';

import Card from '../index';
import PieChart from './PieChart';
import { PORTFOLIO_PIE_CHART_DATA } from '../../../constants';

const PortfolioGraphCard: React.FC = () => {
  const data = PORTFOLIO_PIE_CHART_DATA;

  return (
    <Flex flex="1" pt={6} flexDirection="column">
      <Card variants="colored">
        <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
          <PieChart data={data} />
          <PseudoBox
            position="absolute"
            flexDirection="column"
            color="white"
            textTransform="uppercase"
            textAlign="center"
          >
            <Text fontSize="xl" fontWeight="semibold">
              07
            </Text>
            <Text letterSpacing={1.03}>INDUSTRIES</Text>
          </PseudoBox>
        </Flex>
      </Card>
    </Flex>
  );
};

export default PortfolioGraphCard;
