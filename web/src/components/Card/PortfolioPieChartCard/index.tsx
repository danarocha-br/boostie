import React, { useMemo } from 'react';
import { Flex, PseudoBox, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';

import Card from '../index';
import PieChart from './PieChart';

import useAuth from '~/contexts/auth';
import { generatePieChartData } from '~/utils';
import useDisplayInvestments from '~/contexts/displayInvestments';

const AnimatedCard = motion.custom(Flex);

const animatePieChartCard = {
  unmounted: {
    y: -50,
    display: 'none',
  },
  mounted: {
    y: 0,
    display: 'flex',
    transition: {
      delay: 0.4,
    },
  },
};

const PortfolioGraphCard: React.FC = () => {
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
      variants={animatePieChartCard}
      layout
    >
      <Card variants="colored">
        <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
          <PieChart data={displayInvestments ? pieChartData : hiddenData} />
          <PseudoBox
            position="absolute"
            flexDirection="column"
            color="white"
            textTransform="uppercase"
            textAlign="center"
          >
            <Text fontSize="xl" fontWeight="semibold">
              {displayInvestments ? '07' : '...'}
            </Text>
            <Text letterSpacing={1.03}>INDUSTRIES</Text>
          </PseudoBox>
        </Flex>
      </Card>
    </AnimatedCard>
  );
};

export default PortfolioGraphCard;
