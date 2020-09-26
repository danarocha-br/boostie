import React, { useMemo } from 'react';
import { Flex, PseudoBox, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';

import Card from '../index';
import PieChart from './PieChart';

import useAuth from '~/contexts/auth';
import { generatePieChartData } from '~/utils';
import useDisplayInvestments from '~/contexts/displayInvestments';
import { IDashboardProps } from '~/pages/Dashboard/IDashboardProps';
import { animation } from './animations';

const AnimatedCard = motion.custom(Flex);

const PortfolioGraphCard: React.FC<IDashboardProps> = ({ isLoading }) => {
  const { pieChart } = useAuth().investments;

  const displayInvestments = useDisplayInvestments().displayInvestment;

  const pieChartData = useMemo(() => {
    return pieChart;
  }, [pieChart]);

  const hiddenData = generatePieChartData(false);

  return (
    <AnimatedCard
      flex="1"
      pt={6}
      flexDirection="column"
      initial="unmounted"
      animate="mounted"
      variants={animation}
      layout
    >
      <Card variants="colored">
        <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
          <PieChart
            data={!isLoading && displayInvestments ? pieChartData : hiddenData}
          />
          <PseudoBox
            position="absolute"
            flexDirection="column"
            color="white"
            textTransform="uppercase"
            textAlign="center"
          >
            <Text fontSize="xl" fontWeight="semibold">
              {!isLoading && displayInvestments ? '07' : '...'}
            </Text>
            <Text letterSpacing={1.03}>INDUSTRIES</Text>
          </PseudoBox>
        </Flex>
      </Card>
    </AnimatedCard>
  );
};

export default PortfolioGraphCard;
