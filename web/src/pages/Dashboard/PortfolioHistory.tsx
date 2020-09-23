import React from 'react';
import { Flex, Heading, Select, Grid } from '@chakra-ui/core';
import { motion } from 'framer-motion';

import PortfolioGraphCard from '~/components/Card/PortfolioPieChartCard';
import CardStat from '~/components/Card/CardStat';

import { StatCardContainer } from './styles';
import useAuth from '~/contexts/auth';

import {
  generatePortfolioHistory,
  generatePortfolioLineChartData,
} from '~/utils';
import useDisplayInvestments from '~/contexts/displayInvestments';

const animateCards = {
  unmounted: {
    y: -50,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
  },
};

const AnimatedScrollableCards = motion.custom(CardStat);

const PortfolioHistory: React.FC = () => {
  const isLoading = useAuth().isLoading;
  const displayInvestments = useDisplayInvestments().displayInvestment;

  const historyData = generatePortfolioHistory();
  const hiddenChart = generatePortfolioLineChartData(false).timeline;

  return (
    <>
      <Flex w="100%" justifyContent="space-between" alignItems="center" mt={10}>
        <Heading as="h2" fontSize="lg" fontWeight="regular">
          Portfolio History
        </Heading>
        <Select
          placeholder="Per Industries"
          variant="outline"
          icon="triangle-down"
          iconSize="11px"
          iconColor="gray.500"
          focusBorderColor="gray.500"
          backgroundColor="transparent"
          borderColor="transparent"
          w="180px"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>

      <Grid
        minH="288px"
        maxH="288px"
        mb={8}
        width="100%"
        justifyContent="space-between"
        templateColumns="1fr 345px"
      >
        <StatCardContainer
          as="section"
          overflowX="scroll"
          display="flex"
          mr={8}
          pt={6}
          boxShadow="inset -14px 0px 20px rgba(0,0,0,0.02), inset 0px 33px 0px rgb(255 255 255 / 44%)"
          initial="unmounted"
          animate="mounted"
          variants={animateCards}
          layout
          transition={{
            type: 'spring',
          }}
        >
          {Object.entries(historyData).map(([key, value]) => {
            return (
              <AnimatedScrollableCards
                variants={animateCards}
                key={key}
                value={value.value}
                result={value.result}
                month={value.month}
                year={value.year}
                data={
                  displayInvestments
                    ? generatePortfolioLineChartData().timeline
                    : hiddenChart
                }
                isVisible={displayInvestments}
                loading={isLoading}
              />
            );
          })}
        </StatCardContainer>
        <PortfolioGraphCard />
      </Grid>
    </>
  );
};

export default PortfolioHistory;
